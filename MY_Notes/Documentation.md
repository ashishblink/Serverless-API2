
# Facebook Pixel Gateway - Project Documentation

## Overview

The Facebook Pixel Gateway is a Shopify app that provides seamless integration between Shopify stores and Facebook's Conversions API. It serves as a bridge to capture customer events from Shopify stores and forward them to Facebook for advertising optimization and tracking.

## Project Architecture

### Core Components

#### 1. Next.js Application
- **Framework**: Next.js 14 with TypeScript
- **UI Library**: Tailwind CSS with shadcn/ui components
- **Database**: Prisma ORM with PostgreSQL
- **Deployment**: Configured for Replit deployment

#### 2. Shopify Integration
- **App Type**: Embedded Shopify App
- **Extensions**: Web Pixel Extensions for event tracking
- **API Integration**: Shopify Admin API and GraphQL
- **Webhooks**: Order creation, app uninstallation, customer data handling

#### 3. Facebook Integration
- **Conversions API**: Direct server-to-server event tracking
- **Pixel Integration**: Browser-based event collection
- **Authentication**: Facebook access tokens and pixel IDs

## Key Features

### 1. Automatic Pixel Detection
- Scans Shopify stores for existing Facebook pixels
- Uses Puppeteer for automated pixel discovery
- Stores configuration in database for future use

### 2. Web Pixel Extensions
Multiple versions of web pixel extensions for different use cases:
- `web-pixel-fixed`: Stable production version
- `web-pixel-v191`: Enhanced version with better error handling
- `web-pixel-minimal`: Lightweight implementation
- `hustle-gateway-pixel`: Custom branded version

### 3. Event Tracking
Comprehensive event tracking including:
- Page views
- Product views
- Add to cart
- Checkout events
- Purchase completions
- Custom events

### 4. Admin Dashboard
- Pixel configuration management
- Event logs and debugging
- Store connection status
- Performance monitoring

## File Structure

### Core Application Files
```
app/
├── api/                    # API routes
│   ├── auth/              # Shopify OAuth
│   ├── customer/          # Customer setup endpoints
│   ├── shopify/           # Shopify integration APIs
│   ├── track/             # Event tracking endpoints
│   └── webhooks/          # Webhook handlers
├── admin/                 # Admin dashboard pages
├── customer/              # Customer-facing pages
└── components/            # Reusable UI components
```

### Database Schema
```
prisma/
└── schema.prisma          # Database models and relationships
```

### Shopify Extensions
```
extensions/
├── web-pixel-fixed/       # Production web pixel
├── web-pixel-v191/        # Enhanced version
├── hustle-gateway-pixel/  # Custom branded version
└── [other variants]/      # Development and testing versions
```

## Configuration

### Environment Variables
```env
# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Shopify
SHOPIFY_CLIENT_ID=your_client_id
SHOPIFY_CLIENT_SECRET=your_client_secret
SHOPIFY_WEBHOOK_SECRET=your_webhook_secret

# Facebook
FACEBOOK_APP_SECRET=your_facebook_app_secret

# Application
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://your-app-url.com
```

### Shopify App Configuration
File: `shopify.app.toml`
- App permissions: `write_pixels`, `read_customer_events`
- Webhook subscriptions for app lifecycle events
- OAuth redirect URLs

## API Endpoints

### Customer Setup
- `POST /api/customer/setup-pixel` - Configure pixel for a store
- `GET /api/customer/check-pixel` - Verify pixel existence

### Event Tracking
- `POST /api/track` - Main event tracking endpoint
- `POST /api/track/beacon` - Lightweight beacon tracking
- `GET /api/track/config` - Pixel configuration retrieval

### Shopify Integration
- `POST /api/shopify/register-pixel` - Register web pixel
- `GET /api/shopify/list-web-pixels` - List active pixels
- `POST /api/shopify/activate-web-pixel` - Activate pixel extensions

### Debug & Monitoring
- `GET /api/debug` - System health check
- `GET /api/event-logs` - Event tracking logs
- `GET /api/db-status` - Database connection status

## Database Models

### ShopConfig
Stores Shopify store configurations and pixel associations.

### PixelConfig
Manages Facebook pixel IDs and access tokens.

### EventLog
Tracks all events sent through the gateway for debugging and analytics.

### DebugLog
System-level debugging information and error tracking.

## Development Workflow

### Local Development
1. Install dependencies: `npm install`
2. Set up environment variables in `.env`
3. Run database migrations: `npx prisma migrate dev`
4. Start development server: `npm run dev`

### Testing
- Web pixel testing at `/test-facebook-pixel`
- Event tracking validation at `/track-debug`
- Shopify integration testing at `/shopify-debug`

### Deployment
- Configured for Replit deployment
- Uses port 5000 for web server
- Static files served from public directory

## Monitoring & Debugging

### Debug Pages
- `/debug` - System overview and health checks
- `/event-logs` - Real-time event tracking logs
- `/fix-web-pixel` - Pixel configuration troubleshooting
- `/shopify-pixel-debug` - Shopify-specific debugging

### Logging
- Event tracking logs with timestamps
- Error logging with stack traces
- Database operation logging
- Shopify API call logging

## Security Considerations

### Data Protection
- GDPR compliance for customer data
- Secure token storage
- Encrypted database connections
- Webhook signature verification

### Authentication
- Shopify OAuth 2.0 flow
- Session management with NextAuth
- API key validation
- Access token refresh handling

## Common Issues & Solutions

### Web Pixel Not Loading
1. Check pixel registration in Shopify admin
2. Verify extension configuration
3. Review browser console for errors
4. Use `/fix-web-pixel` page for automated fixes

### Events Not Tracking
1. Validate Facebook pixel ID and access token
2. Check event log entries at `/event-logs`
3. Verify Conversions API permissions
4. Test with `/test-facebook-pixel` page

### Database Connection Issues
1. Check environment variables
2. Verify database URL format
3. Test connection at `/db-status`
4. Review Prisma configuration

## Migration Notes

### From V0.dev to Replit
- Updated deployment configuration
- Modified port bindings for Replit environment
- Adjusted build scripts and workflows
- Updated environment variable handling

### Key Changes
- Port binding changed to `0.0.0.0:5000`
- Static file serving configuration
- Environment variable validation
- Production optimization settings

## Future Enhancements

### Planned Features
1. Multi-channel integration (Google Ads, TikTok)
2. Advanced customer segmentation
3. Predictive analytics dashboard
4. Real-time personalization engine
5. Enhanced attribution modeling

### Technical Improvements
1. Performance optimization
2. Enhanced error handling
3. Automated testing suite
4. CI/CD pipeline setup
5. Monitoring and alerting system

## Support & Maintenance

### Regular Tasks
- Database backup and maintenance
- Security updates and patches
- Performance monitoring
- Error log review
- Customer support tickets

### Documentation Updates
- API endpoint documentation
- Integration guides
- Troubleshooting procedures
- Release notes and changelogs

---

**Last Updated**: Migration from V0.dev to Replit  
**Version**: 1.0.0  
**Maintainer**: Project Team  
**Contact**: [Support Information]
