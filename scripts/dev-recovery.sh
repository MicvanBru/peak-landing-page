#!/bin/bash

# Auto-recovery development script for WSL2+Windows
# This script automatically handles Next.js cache corruption issues

echo "🔧 Peak Systems - Enhanced Auto-Recovery Dev Script"
echo "This script prevents and recovers from Next.js cache corruption"
echo ""

# Function to validate cache integrity
validate_cache() {
    if [ -d ".next/cache/webpack" ]; then
        # Check for corrupt pack files
        corrupt_files=$(find .next/cache/webpack -name "*.pack.gz" -size 0 2>/dev/null | wc -l)
        if [ $corrupt_files -gt 0 ]; then
            echo "⚠️  Found $corrupt_files corrupt cache files"
            return 1
        fi
        
        # Check for missing manifest files
        if [ ! -f ".next/cache/webpack/client-development/index.json" ] && [ ! -f ".next/cache/webpack/server-development/index.json" ]; then
            echo "⚠️  Cache manifest files missing"
            return 1
        fi
    fi
    return 0
}

# Enhanced cleanup function
cleanup_and_restart() {
    echo "🧹 Enhanced cache cleanup..."
    
    # Kill any hanging processes first
    pkill -f "next dev" 2>/dev/null || true
    pkill -f "webpack" 2>/dev/null || true
    sleep 2
    
    # Remove cache directories in order
    rm -rf .next/cache/webpack
    rm -rf .next/cache
    rm -rf .next
    
    # Clear any temp files
    rm -rf /tmp/next-* 2>/dev/null || true
    
    sleep 1
    echo "✅ Enhanced cache cleanup completed"
}

# Function to check if port is in use
check_port() {
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "⚠️  Port 3000 is in use. Killing existing process..."
        pkill -f "next dev" 2>/dev/null || true
        sleep 2
    fi
}

# Initial setup with cache validation
echo "🔍 Validating existing cache..."
if ! validate_cache; then
    echo "🧹 Cache validation failed, cleaning up..."
    cleanup_and_restart
else
    echo "✅ Cache appears healthy"
fi

check_port

# Start dev server with enhanced auto-recovery
echo "🚀 Starting development server with enhanced auto-recovery..."
echo "📝 Available commands:"
echo "   - Ctrl+C to stop"
echo "   - Server will auto-restart on crashes with cache validation"
echo "   - Memory-based webpack caching enabled (faster, more stable)"
echo ""

attempt=1
consecutive_failures=0
while true; do
    echo "🔄 Starting attempt #$attempt"
    
    # Validate cache before starting if we've had recent failures
    if [ $consecutive_failures -gt 1 ]; then
        echo "🔍 Validating cache due to recent failures..."
        if ! validate_cache; then
            echo "🧹 Cache corruption detected, cleaning up..."
            cleanup_and_restart
        fi
    fi
    
    # Start Next.js dev server with timeout monitoring
    timeout 300s npm run dev:quick &
    dev_pid=$!
    
    # Wait for the process to complete or timeout
    wait $dev_pid 2>/dev/null
    exit_code=$?
    
    if [ $exit_code -eq 0 ]; then
        echo "✅ Dev server exited cleanly"
        consecutive_failures=0
        break
    elif [ $exit_code -eq 124 ]; then
        echo "⏱️  Dev server startup timed out (5 minutes)"
        kill $dev_pid 2>/dev/null || true
        consecutive_failures=$((consecutive_failures + 1))
    else
        echo "❌ Dev server crashed with exit code: $exit_code"
        consecutive_failures=$((consecutive_failures + 1))
    fi
    
    echo "🔧 Auto-recovering in 3 seconds... (failure #$consecutive_failures)"
    sleep 3
    
    cleanup_and_restart
    check_port
    
    attempt=$((attempt + 1))
    
    if [ $attempt -gt 15 ]; then
        echo "🚫 Too many restart attempts ($attempt). This may indicate a deeper issue."
        echo "💡 Troubleshooting suggestions:"
        echo "   1. Try: npm run clean:all"
        echo "   2. Check available disk space: df -h"
        echo "   3. Check memory usage: free -h"
        echo "   4. Consider moving project to native WSL2 filesystem if on /mnt/c/"
        exit 1
    fi
done

echo "👋 Development server stopped"