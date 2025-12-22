# Set environment variables to avoid Windows path issues
$env:STREAMLIT_BROWSER_GATHER_USAGE_STATS = "false"
$env:STREAMLIT_SERVER_HEADLESS = "true"

# Use a shorter cache path to avoid Windows path length issues
$cacheDir = Join-Path $env:TEMP "streamlit_cache"
if (-not (Test-Path $cacheDir)) {
    New-Item -ItemType Directory -Path $cacheDir | Out-Null
}
$env:STREAMLIT_CACHE_DIR = $cacheDir

# Run Streamlit
python -m uv run streamlit run app.py --server.port=8501 --server.address=localhost

