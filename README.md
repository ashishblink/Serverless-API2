# Project Documentation: Facebook Pixel Gateway

## 1. Introduction: What is this tool?

The **Facebook Pixel Gateway** is a serverless API application built on **Next.js (App Router)** designed to facilitate robust and privacy-enhanced Facebook Pixel tracking for Shopify stores. It acts as an intermediary between Shopify's Web Pixel Extension (client-side) and Facebook's Conversions API (server-side).

### Core Problem Solved

Traditional client-side Facebook Pixels can be affected by browser privacy features (e.g., Intelligent Tracking Prevention), ad blockers, and network issues, leading to data loss. The Facebook Pixel Gateway addresses this by:

- **Enhancing Data Accuracy:** Sends events server-to-server via the Conversions API for a more reliable data stream.
- **Improving Privacy:** Hashes sensitive customer data (email, phone) *before* sending it to Facebook.
- **Centralized Management:** Admin dashboard for managing Facebook Pixel configurations and monitoring event logs.
- **Custom Domain Support:** Tracks events correctly even on Shopify stores with custom domains.

---

## 2. Architecture and Key Components

The project is built with **Next.js**, using **serverless functions** for API endpoints and a **PostgreSQL** database via **Prisma** for persistence.

### Client-Side: Shopify Web Pixel Extension

**Location:** `extensions/web-pixel-final/src/index.js`

- Subscribes to Shopify events: `page_viewed`, `product_added_to_cart`, `checkout_completed`, etc.
- Collects user data (user agent, cookies) and sends events to `/api/track`.
- Dynamically fetches the correct Facebook Pixel ID and Gateway URL from backend config.

### Server-Side: Next.js API Endpoint

**Location:** `app/api/track/route.ts`

- **IP Address Capture:** From request headers.
- **Server-Side Data Enrichment:** Fetches complete customer details from Shopify Admin API.
- **User Data Storage:** `lib/user-data-service.ts` updates user profiles in the `UserData` table.
- **Event Logging:** `lib/event-logger.ts` logs every event for auditing.
- **Data Hashing:** Hashes PII using SHA-256.
- **Facebook Conversions API Integration:** Sends enriched data to Facebook’s CAPI.

### Database: PostgreSQL via Prisma

- **Schema File:** `prisma/schema.prisma`
- **Key Tables:**
  - `PixelConfig`, `ShopConfig`, `EventLog`, `ShopAuth`, `UserData`, `users`
- **Utilities:**
  - `lib/db.ts` – Prisma client setup with retry
  - `lib/pixel-tokens.ts` – Pixel config management

### Admin Dashboard

**Files:**  
- `app/admin/dashboard/page.tsx`  
- `app/admin/pixels/page.tsx`  
- `app/admin/screenshots/page.tsx`

**Features:**

- Pixel ID and token management
- View full event logs
- Screenshot capture tool (basic UI present)

### Shopify Integration Utilities

**Files:**  
- `lib/shopify.ts`  
- `lib/db-auth.ts`

**Functions:**

- OAuth flow and HMAC validation
- Authenticated GraphQL client
- Shop installation and config tracking

---

## 3. Current Features

The Facebook Pixel Gateway currently supports:

### Core Functionalities

- **Dynamic Facebook Pixel ID resolution**
- **Event tracking** for:
  - `page_viewed`, `product_viewed`, `add_to_cart`, `checkout_started`, etc.
- **Server-side CAPI forwarding**
- **User Data Collection:**
  - Client-side: user agent, `_fbp`, `_fbc`
  - Server-side: IP address
  - Shopify Admin API: Full customer profile on purchase

### Privacy Compliance

- SHA-256 hashing for all PII
- No raw PII sent to Facebook

### Event Logging

- Every event (success/error) is logged with full payload details

### Admin Dashboard

- Secure access
- Pixel ID/token management
- View and filter event logs
- Screenshots tab (basic)

### Database Management

- Prisma ORM
- Config and auth tracking
- User profile persistence

### Shopify Installation Support

- App install routes and token storage

---

## 4. Pending / Future Work

The roadmap includes:

### Multi-Platform Tracking

- Add support for:
  - **TikTok Pixel**
  - **Google Ads (Tag)**
- Admin config options for each
- Platform-specific hashing/event mapping

### User Data Service UI

- Admin interface to search/view user profiles

### Advanced Event Mapping

- Configurable event mapping from dashboard
- Enhanced `custom_data` parameters

### Monitoring & Alerting

- Email/Slack alerts for CAPI errors
- Dashboard metrics and analytics

### Scalability Enhancements

- Implement queuing (Kafka/SQS)
- Optimize DB queries for scale

### Web Pixel Deployment

- Version control and remote updates via Shopify API

### Screenshot Tool

- Enable full screenshot capture + display in dashboard

### Shopify Webhooks

- Full webhook coverage:
  - `orders/create`
  - `customers/data_erasure`
  - `checkouts/create`, etc.

### User Dashboard

- Define scope and features for `app/user-dashboard/page.tsx`

### Testing Improvements

- Unit tests for utilities
- Integration tests for API routes
- E2E tests for full tracking flow

### Security Upgrades

- Enhanced rate limiting
- OAuth or SSO for admin dashboard

---

> **Note:**  
> This documentation forms a robust foundation for understanding the Facebook Pixel Gateway. The integration of server-side enrichment significantly improves Facebook tracking performance. The outlined roadmap aims to expand capabilities into multi-platform support, stronger analytics, and better developer/administrator tools.
