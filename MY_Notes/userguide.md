
# Facebook Pixel Gateway - User Guide

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Initial Setup](#initial-setup)
4. [Configuration](#configuration)
5. [Testing Your Setup](#testing-your-setup)
6. [Admin Dashboard](#admin-dashboard)
7. [Troubleshooting](#troubleshooting)
8. [Event Tracking](#event-tracking)
9. [FAQ](#faq)

## Overview

The Facebook Pixel Gateway is a Shopify app that seamlessly integrates your Shopify store with Facebook's Conversions API. It automatically tracks customer events and sends them to Facebook for advertising optimization and attribution.

### Key Benefits
- **Automatic Event Tracking**: Tracks all major e-commerce events without manual setup
- **Server-Side Tracking**: Uses Facebook's Conversions API for reliable data transmission
- **Easy Configuration**: Simple setup process with automatic pixel detection
- **Real-Time Monitoring**: Live event logs and status monitoring
- **GDPR Compliant**: Handles customer data responsibly

## Installation

### Step 1: Install the App
1. Visit your Shopify App Store or use the direct installation link
2. Click "Install" to add the app to your store
3. Grant the necessary permissions when prompted
4. You'll be redirected to the app dashboard

### Step 2: Automatic Setup
The app will automatically:
- Detect existing Facebook pixels in your store
- Install Web Pixel Extensions for event tracking
- Set up necessary webhooks

## Initial Setup

### Option 1: Automatic Pixel Detection
If you already have a Facebook Pixel installed:
1. The app will automatically detect your existing pixel
2. Click "Use Detected Pixel" in the setup wizard
3. Enter your Facebook Access Token when prompted
4. Configuration will be completed automatically

### Option 2: Manual Setup
If you need to manually configure your pixel:
1. Go to the "Customer Setup" page
2. Enter your Facebook Pixel ID
3. Enter your Facebook Access Token
4. Click "Configure Pixel"

### Getting Your Facebook Credentials

#### Facebook Pixel ID
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Select your pixel
3. Copy the Pixel ID (15-16 digit number)

#### Facebook Access Token
1. Go to [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app or create a new one
3. Generate an access token with `ads_management` and `business_management` permissions
4. Copy the access token

## Configuration

### Web Pixel Extension Settings
The Web Pixel Extension is automatically configured with:
- **Gateway URL**: Points to your pixel gateway endpoint
- **Account ID**: Your Facebook Pixel ID
- **Debug Mode**: Disabled by default (can be enabled for testing)

### Tracked Events
The following Shopify events are automatically tracked:

| Shopify Event | Facebook Event | Description |
|---------------|----------------|-------------|
| Page View | PageView | User visits any page |
| Product View | ViewContent | User views a product page |
| Collection View | ViewContent | User views a collection page |
| Search | Search | User performs a search |
| Add to Cart | AddToCart | User adds item to cart |
| View Cart | ViewCart | User views their cart |
| Checkout Start | InitiateCheckout | User begins checkout process |
| Checkout Address Info | AddPaymentInfo | User enters shipping info |
| Checkout Payment Info | AddPaymentInfo | User enters payment info |
| Purchase | Purchase | Order is completed |

## Testing Your Setup

### 1. Event Testing Tool
Use the built-in testing tools:
1. Go to "Test Facebook Pixel" page
2. Select an event type (Purchase, ViewContent, etc.)
3. Enter test data
4. Click "Send Test Event"
5. Check the response for success/failure

### 2. Facebook Events Manager
Verify events in Facebook:
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Select your pixel
3. Go to "Test Events" tab
4. Perform actions on your store
5. Verify events appear in real-time

### 3. Browser Developer Tools
Check client-side tracking:
1. Open your store in a browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Look for Web Pixel logs starting with `🔔 [Web Pixel]`

## Admin Dashboard

### Overview Page
- **Connection Status**: Shows if the app is properly connected
- **Event Statistics**: Number of events tracked today/this week
- **Recent Events**: Latest events sent to Facebook
- **Configuration Status**: Pixel and access token status

### Pixel Management
- **View Pixel Configuration**: See current pixel settings
- **Update Access Token**: Refresh your Facebook access token
- **Enable/Disable Tracking**: Turn tracking on/off temporarily

### Event Logs
- **Real-Time Events**: Live feed of events being tracked
- **Event Details**: Full event data and Facebook response
- **Error Logs**: Failed events and error messages
- **Export Data**: Download event logs for analysis

### Diagnostics
- **Connection Test**: Verify Shopify to Facebook connection
- **Web Pixel Status**: Check if Web Pixel Extension is active
- **Database Status**: Verify app database connectivity

## Troubleshooting

### Common Issues

#### Events Not Appearing in Facebook
**Symptoms**: No events showing in Facebook Events Manager

**Solutions**:
1. Check your Facebook Access Token is valid
2. Verify Pixel ID is correct
3. Test connection using the diagnostics tool
4. Check event logs for error messages

#### Web Pixel Not Loading
**Symptoms**: No console logs from Web Pixel Extension

**Solutions**:
1. Go to "Fix Web Pixel" page
2. Click "Recreate Web Pixel"
3. Verify the Web Pixel appears in Shopify Admin → Settings → Customer Events

#### Invalid Access Token
**Symptoms**: "Invalid access token" error in logs

**Solutions**:
1. Generate a new access token from Facebook Graph API Explorer
2. Ensure token has `ads_management` permissions
3. Update token in the app settings

#### Configuration Not Found
**Symptoms**: Web Pixel shows "No configuration.settings found!"

**Solutions**:
1. Go to "Shopify Pixel Debug" page
2. Re-create the Web Pixel with proper settings
3. Verify accountID matches your Facebook Pixel ID

### Debug Pages
The app includes several debug pages for troubleshooting:

- `/debug` - General debugging information
- `/shopify-debug` - Shopify integration testing
- `/fix-web-pixel` - Web Pixel configuration fixes
- `/event-logs` - Detailed event tracking logs
- `/system-test` - End-to-end system testing

## Event Tracking

### Data Collected
For each event, the following data is collected:
- **Event Name**: Type of action (Purchase, ViewContent, etc.)
- **Timestamp**: When the event occurred
- **User Data**: Hashed email, phone (if available)
- **Custom Data**: Product details, value, currency
- **Browser Info**: User agent, IP address
- **Event Source**: "shopify_web" or "shopify_server"

### Privacy Compliance
- Customer emails are automatically hashed using SHA-256
- Phone numbers are normalized and hashed
- IP addresses are collected for attribution but can be disabled
- All data handling complies with GDPR and CCPA requirements

### Data Retention
- Event logs are stored for 30 days in the app database
- Facebook retains data according to their privacy policy
- You can request data deletion through the app settings

## FAQ

### Q: Will this conflict with my existing Facebook Pixel?
A: No, the app works alongside existing Facebook Pixels. You don't need to remove any existing tracking code.

### Q: How often are events sent to Facebook?
A: Events are sent in real-time as they occur on your store. Server-side events typically arrive within seconds.

### Q: Can I customize which events are tracked?
A: Currently, all standard e-commerce events are tracked automatically. Custom event filtering will be available in future updates.

### Q: Is there a cost for using this app?
A: The app may have subscription fees. Check the Shopify App Store listing for current pricing.

### Q: What happens if my Facebook Access Token expires?
A: You'll receive notifications when the token is about to expire. Simply generate a new token and update it in the app settings.

### Q: Can I track events from multiple stores?
A: Each store installation is independent. You'll need to install and configure the app separately for each store.

### Q: How do I uninstall the app?
A: Uninstall through your Shopify Admin → Apps page. The app will automatically clean up Web Pixel Extensions and webhooks.

### Q: Where can I get support?
A: Contact support through:
- Email: [Your Support Email]
- Help Center: [Your Help Center URL]
- Shopify App Store Reviews

---

## Need Help?

If you're experiencing issues not covered in this guide:

1. Check the event logs in the app dashboard
2. Use the diagnostic tools to test your connection
3. Review the troubleshooting section above
4. Contact our support team with specific error messages

For technical users, additional debugging information is available in the browser console and through the various debug pages in the app.
