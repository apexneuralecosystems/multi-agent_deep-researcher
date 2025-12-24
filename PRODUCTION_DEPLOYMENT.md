# 🚀 Production Deployment Guide

## ✅ CORS Configuration - Production Ready

All necessary changes have been implemented to ensure perfect CORS configuration for production deployment.

## 📋 Changes Made

### 1. **Enhanced CORS Configuration** (`backend/app/main.py`)
   - ✅ Restricted `allow_methods` to only needed methods: `["GET", "POST", "OPTIONS"]`
   - ✅ Restricted `allow_headers` to only needed headers: `["Content-Type", "Authorization", "Accept"]`
   - ✅ Added `max_age=3600` to cache preflight requests
   - ✅ Added `expose_headers` for custom headers
   - ✅ Added CORS test endpoint at `/api/v1/cors-test`

### 2. **Origin Validation** (`backend/app/core/config.py`)
   - ✅ Added comprehensive origin validation
   - ✅ Rejects wildcard origins (`*`) for security
   - ✅ Validates URL format (must start with `http://` or `https://`)
   - ✅ Removes trailing slashes automatically
   - ✅ Removes duplicate origins
   - ✅ Provides default value for `ALLOWED_ORIGINS`
   - ✅ Enhanced logging for debugging

### 3. **Trusted Hosts Configuration**
   - ✅ Enhanced `ALLOWED_HOSTS` parsing
   - ✅ Automatically includes localhost for development
   - ✅ Supports production domain configuration

### 4. **Environment Files**
   - ✅ Created `backend/.env.example` with production-ready template
   - ✅ Created `frontend/.env.local.example` with production-ready template

### 5. **Startup Logging**
   - ✅ Added CORS configuration logging on startup
   - ✅ Better error messages for misconfiguration

### 6. **Documentation**
   - ✅ Updated README.md with production deployment instructions
   - ✅ Added CORS checklist for production

## 🔧 Production Configuration

### Backend `.env` File
```env
LINKUP_API_KEY=your_production_key
OPENROUTER_API_KEY=your_production_key
ALLOWED_ORIGINS=http://localhost:3000,https://researcherai.apexneural.cloud
ALLOWED_HOSTS=localhost,127.0.0.1,researcherai-api.apexneural.cloud
```

### Frontend Environment Variables
```env
NEXT_PUBLIC_API_URL=https://researcherai-api.apexneural.cloud/api/v1
```

## 🧪 Testing CORS

### 1. Test CORS Endpoint
```bash
curl https://researcherai-api.apexneural.cloud/api/v1/cors-test \
  -H "Origin: https://researcherai.apexneural.cloud" \
  -v
```

### 2. Test from Browser
1. Open production frontend: `https://researcherai.apexneural.cloud`
2. Open DevTools → Network tab
3. Make an API request
4. Check response headers for:
   - `Access-Control-Allow-Origin: https://researcherai.apexneural.cloud`
   - `Access-Control-Allow-Methods: GET, POST, OPTIONS`
   - `Access-Control-Allow-Headers: Content-Type, Authorization, Accept`

### 3. Check Preflight (OPTIONS) Request
- Should return `200 OK`
- Should include all CORS headers
- Should be cached for 1 hour (`max_age=3600`)

## ✅ Production Checklist

- [x] CORS origins validated and secured
- [x] Wildcard origins rejected
- [x] Methods restricted to only needed ones
- [x] Headers restricted to only needed ones
- [x] Preflight caching enabled
- [x] Origin validation with error handling
- [x] Startup logging for debugging
- [x] Environment file templates created
- [x] Documentation updated
- [x] CORS test endpoint added

## 🔒 Security Features

1. **No Wildcard Origins**: Wildcard `*` is explicitly rejected
2. **URL Validation**: Origins must be valid URLs
3. **Method Restriction**: Only GET, POST, OPTIONS allowed
4. **Header Restriction**: Only necessary headers allowed
5. **Trailing Slash Handling**: Automatically removed for consistency
6. **Duplicate Prevention**: Duplicate origins are removed

## 🐛 Troubleshooting

### CORS Error: "No 'Access-Control-Allow-Origin' header"
- Check that frontend URL exactly matches one in `ALLOWED_ORIGINS`
- Verify no trailing slashes
- Check protocol (http vs https)

### CORS Error: "Method not allowed"
- Verify backend allows the method (currently: GET, POST, OPTIONS)
- Check preflight OPTIONS request succeeds

### CORS Error: "Header not allowed"
- Verify header is in `allow_headers` list
- Check preflight request includes the header

### Backend Not Starting
- Check `.env` file exists and has all required variables
- Check logs for validation errors
- Verify `ALLOWED_ORIGINS` format is correct

## 📝 Notes

- CORS configuration is logged on startup for easy debugging
- Test endpoint available at `/api/v1/cors-test` for verification
- All origins are validated on startup
- Default values provided for development ease

