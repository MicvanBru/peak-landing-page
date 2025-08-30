#!/bin/bash

# Auto-recovery development script for WSL2+Windows
# This script automatically handles Next.js cache corruption issues

echo "🔧 Peak Systems - Auto-Recovery Dev Script"
echo "This script will automatically clean cache and restart on crashes"
echo ""

# Function to clean up and restart
cleanup_and_restart() {
    echo "🧹 Cleaning Next.js cache..."
    rm -rf .next
    sleep 1
    echo "✅ Cache cleaned successfully"
}

# Function to check if port is in use
check_port() {
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "⚠️  Port 3000 is in use. Killing existing process..."
        pkill -f "next dev" 2>/dev/null || true
        sleep 2
    fi
}

# Initial cleanup
cleanup_and_restart
check_port

# Start dev server with auto-recovery
echo "🚀 Starting development server with auto-recovery..."
echo "📝 Available commands:"
echo "   - Ctrl+C to stop"
echo "   - Server will auto-restart on crashes"
echo ""

attempt=1
while true; do
    echo "🔄 Starting attempt #$attempt"
    
    # Start Next.js dev server
    npm run dev:quick
    
    exit_code=$?
    
    if [ $exit_code -eq 0 ]; then
        echo "✅ Dev server exited cleanly"
        break
    else
        echo "❌ Dev server crashed with exit code: $exit_code"
        echo "🔧 Auto-recovering in 3 seconds..."
        sleep 3
        
        cleanup_and_restart
        check_port
        
        attempt=$((attempt + 1))
        
        if [ $attempt -gt 10 ]; then
            echo "🚫 Too many restart attempts. Please check your configuration."
            echo "💡 Try running: npm run clean:all"
            exit 1
        fi
    fi
done

echo "👋 Development server stopped"