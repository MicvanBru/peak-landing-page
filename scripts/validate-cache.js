#!/usr/bin/env node

/**
 * Cache Validation Utility for WSL2+Next.js
 * 
 * This utility validates the integrity of Next.js webpack cache files
 * and provides detailed reporting on cache health.
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const CACHE_DIR = '.next/cache/webpack';
const CACHE_TYPES = ['client-development', 'server-development', 'client-production', 'server-production'];

/**
 * Check if a file is a zero-byte file (corrupt)
 */
function isCorruptFile(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size === 0;
  } catch {
    return true; // If we can't stat it, consider it corrupt
  }
}

/**
 * Validate pack files in a cache directory
 */
function validateCacheType(cacheType) {
  const cacheTypePath = path.join(CACHE_DIR, cacheType);
  
  if (!fs.existsSync(cacheTypePath)) {
    return { valid: true, reason: 'Cache directory does not exist (not necessarily bad)' };
  }

  try {
    const files = fs.readdirSync(cacheTypePath);
    
    // Check for pack files
    const packFiles = files.filter(file => file.endsWith('.pack.gz'));
    const corruptPackFiles = packFiles.filter(file => 
      isCorruptFile(path.join(cacheTypePath, file))
    );
    
    if (corruptPackFiles.length > 0) {
      return {
        valid: false,
        reason: `Found ${corruptPackFiles.length} corrupt pack files: ${corruptPackFiles.join(', ')}`
      };
    }
    
    // Check for index.json (manifest)
    const indexPath = path.join(cacheTypePath, 'index.json');
    if (fs.existsSync(indexPath) && isCorruptFile(indexPath)) {
      return {
        valid: false,
        reason: 'Cache index.json file is corrupt (0 bytes)'
      };
    }
    
    return {
      valid: true,
      reason: `${packFiles.length} pack files validated successfully`
    };
    
  } catch (error) {
    return {
      valid: false,
      reason: `Error reading cache directory: ${error.message}`
    };
  }
}

/**
 * Main cache validation function
 */
function validateCache() {
  console.log('🔍 Next.js Cache Validation Utility');
  console.log('=====================================');
  
  if (!fs.existsSync(CACHE_DIR)) {
    console.log('✅ No cache directory found - this is fine for a fresh install');
    return true;
  }
  
  let allValid = true;
  const results = {};
  
  for (const cacheType of CACHE_TYPES) {
    const result = validateCacheType(cacheType);
    results[cacheType] = result;
    
    const status = result.valid ? '✅' : '❌';
    console.log(`${status} ${cacheType}: ${result.reason}`);
    
    if (!result.valid) {
      allValid = false;
    }
  }
  
  console.log('=====================================');
  
  if (allValid) {
    console.log('✅ Cache validation passed - all cache files appear healthy');
    return true;
  } else {
    console.log('❌ Cache validation failed - corruption detected');
    console.log('💡 Recommendation: Run `npm run clean` to clear corrupted cache');
    return false;
  }
}

/**
 * Clean corrupt cache files (selective cleanup)
 */
function cleanCorruptCache() {
  console.log('🧹 Cleaning corrupt cache files...');
  
  for (const cacheType of CACHE_TYPES) {
    const result = validateCacheType(cacheType);
    if (!result.valid) {
      const cacheTypePath = path.join(CACHE_DIR, cacheType);
      try {
        fs.rmSync(cacheTypePath, { recursive: true, force: true });
        console.log(`🗑️  Removed corrupt cache: ${cacheType}`);
      } catch (error) {
        console.log(`⚠️  Failed to remove ${cacheType}: ${error.message}`);
      }
    }
  }
  
  console.log('✅ Corrupt cache cleanup completed');
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--clean')) {
    cleanCorruptCache();
  } else if (args.includes('--help')) {
    console.log('Usage:');
    console.log('  node validate-cache.js         # Validate cache integrity');
    console.log('  node validate-cache.js --clean # Remove only corrupt cache files');
    console.log('  node validate-cache.js --help  # Show this help');
  } else {
    const isValid = validateCache();
    process.exit(isValid ? 0 : 1);
  }
}

module.exports = { validateCache, cleanCorruptCache };