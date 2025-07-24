
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      SHOPIFY_API_KEY: string
      SHOPIFY_API_SECRET: string
      SHOPIFY_SCOPES: string
      HOST: string
      FACEBOOK_PIXEL_ID: string
      FACEBOOK_ACCESS_TOKEN: string
      NEXT_PUBLIC_SHOPIFY_API_KEY: string
      ADMIN_USERNAME: string
      ADMIN_PASSWORD: string
      NEXTAUTH_SECRET?: string
      BLAND_AI_API_KEY?: string
    }
  }
}

// This export is required to make the file a module
export {}
