
# Migration from V0.dev to Replit

## Project Overview
**Source Platform:** V0.dev  
**Target Platform:** Replit  
**Project Type:** Shopify App with Facebook Pixel Integration  
**Framework:** Next.js with TypeScript  

## Migration Date
Started: [Current Date]

## Key Components Migrated
- ✅ Next.js application structure
- ✅ Shopify API integrations
- ✅ Facebook Pixel tracking system
- ✅ Database schema (Prisma)
- ✅ Web Pixel extensions
- ✅ Authentication system
- ✅ Admin dashboard
- ✅ API routes and webhooks

## Environment Configuration Changes

### Required Environment Variables
```bash
# Shopify App Configuration
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SHOPIFY_SCOPES=
SHOPIFY_APP_URL=

# Facebook Pixel Configuration
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_ACCESS_TOKEN=

# Database
DATABASE_URL=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Replit Specific
REPLIT_DB_URL=
```

### Port Configuration
- **V0.dev:** Used default Next.js port (3000)
- **Replit:** Changed to bind 0.0.0.0:5000 for proper external access

## File Structure Changes

### New Files Added for Replit
- `.replit` - Replit configuration
- `replit.nix` - Nix package configuration (if needed)

### Modified Files
- `next.config.mjs` - Updated for Replit hosting
- `package.json` - Adjusted scripts for Replit environment
- Middleware configurations for proper request handling

## Database Migration Notes

### Prisma Configuration
- Ensure DATABASE_URL points to Replit-compatible database
- Run `npx prisma generate` after migration
- Run `npx prisma db push` to sync schema

### Data Migration
- [ ] Export data from V0.dev database
- [ ] Import data to Replit database
- [ ] Verify data integrity

## Shopify Extension Updates

### Web Pixel Extensions
Located in `/extensions/` directory:
- `web-pixel-final` - Main production extension
- `web-pixel-minimal` - Simplified version
- Multiple test variations

### Required Updates
- Update extension URLs to point to Replit deployment
- Modify `shopify.extension.toml` configurations
- Update hardcoded URLs in extension source files

## API Endpoint Updates

### Webhook URLs
Update in Shopify Partner Dashboard:
- `/api/webhooks/app/uninstalled`
- `/api/webhooks/orders/create`
- `/api/webhooks/checkouts/create`
- `/api/webhooks/customers/data-request`
- `/api/webhooks/customers/data-erasure`

### Tracking Endpoints
- `/api/track` - Main pixel tracking endpoint
- `/api/track/beacon` - Beacon tracking fallback
- `/api/track/ultra` - Enhanced tracking

## Security Considerations

### Authentication
- Verify OAuth flows work on Replit
- Update callback URLs in Shopify Partner Dashboard
- Test session management

### CORS Configuration
- Update CORS settings for Replit domain
- Ensure proper headers for cross-origin requests

## Testing Checklist

### Functionality Tests
- [ ] Shopify app installation flow
- [ ] Facebook Pixel event tracking
- [ ] Admin dashboard access
- [ ] Database operations
- [ ] Webhook processing
- [ ] Authentication flow

### Performance Tests
- [ ] API response times
- [ ] Database query performance
- [ ] Static asset loading
- [ ] Extension loading times

## Known Issues & Resolutions

### Issue 1: Port Binding
**Problem:** Application not accessible externally
**Solution:** Changed from localhost to 0.0.0.0 binding

### Issue 2: Environment Variables
**Problem:** V0.dev env vars not transferring
**Solution:** Manually configure in Replit Secrets

### Issue 3: Database Connection
**Problem:** Prisma connection issues
**Solution:** Update connection string format for Replit

### Issue 4: 404 Not Found on Initial Setup
**Problem:** Application showing 404 errors
**Solution:** 
- Updated workflow to run Next.js dev server with proper hostname binding (0.0.0.0:5000)
- Configured next.config.mjs for Replit environment
- Set up proper run command with npm run dev

## Deployment Configuration

### Replit Deployment
- Ensure proper build commands
- Configure environment variables
- Set up custom domain (if needed)
- Enable always-on (for production)

### Shopify Partner Dashboard Updates
- App URL: Update to Replit domain
- Allowed redirection URLs
- Webhook endpoints
- Extension configurations

## Post-Migration Tasks

### Immediate
- [ ] Test all critical functionality
- [ ] Update documentation
- [ ] Notify team of new URLs
- [ ] Update monitoring/logging

### Long-term
- [ ] Performance optimization
- [ ] Security audit
- [ ] Backup strategy
- [ ] Monitoring setup

## Rollback Plan

### Emergency Rollback
1. Revert DNS to V0.dev
2. Update Shopify Partner Dashboard
3. Restore database backup
4. Notify users of temporary issues

## Notes & Observations

### Advantages of Replit
- Better development environment
- Integrated terminal and file management
- Real-time collaboration features
- Simplified deployment process

### Challenges Encountered
- [Document specific issues as they arise]
- [Include solutions and workarounds]

## References & Resources
- [Replit Documentation](https://docs.replit.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Shopify App Development](https://shopify.dev/docs/apps)
- [Facebook Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api)

---

**Migration Status:** In Progress  
**Last Updated:** [Update as needed]  
**Next Steps:** [List immediate next actions]
