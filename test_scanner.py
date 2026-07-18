import os
import sys

# Verify Scrapling is installed
try:
    from scrapling import Fetcher
    print("[TEST] Scrapling library imported successfully.")
except ImportError as e:
    print(f"[TEST FAIL] Scrapling import failed: {e}")
    sys.exit(1)

# Verify we can import server functions
try:
    from server import run_scrapling_scan
    print("[TEST] Server scanner module imported successfully.")
except ImportError as e:
    print(f"[TEST FAIL] Server import failed: {e}")
    sys.exit(1)

# Execute test scan
print("[TEST] Launching test scan...")
try:
    results = run_scrapling_scan(set())
    print(f"[TEST] Scan returned {len(results)} results.")
    
    if len(results) == 0:
        print("[TEST FAIL] No complaints returned.")
        sys.exit(1)
        
    # Verify complaint schema
    for idx, item in enumerate(results):
        print(f"[TEST] Checking item {idx + 1}: {item['source']} - {item['theme']}")
        assert "date" in item, "Item missing 'date' key"
        assert "platform" in item, "Item missing 'platform' key"
        assert "source" in item, "Item missing 'source' key"
        assert "text" in item, "Item missing 'text' key"
        assert "theme" in item, "Item missing 'theme' key"
        assert "sentiment" in item, "Item missing 'sentiment' key"
        assert "severity" in item, "Item missing 'severity' key"
        
    print("[TEST SUCCESS] All schema assertions passed successfully.")
    sys.exit(0)
except Exception as e:
    print(f"[TEST FAIL] Exception occurred during scan: {e}")
    sys.exit(1)
