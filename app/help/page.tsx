
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen, 
  Settings, 
  Zap, 
  Shield, 
  BarChart3, 
  Wrench, 
  Database, 
  Globe, 
  Search,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink,
  Copy,
  Monitor,
  Code,
  Users,
  HelpCircle
} from "lucide-react"

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Facebook Pixel Gateway - Help Center</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Complete documentation for your Shopify to Facebook integration
        </p>
        
        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Quick Status */}
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" asChild>
            <a href="/db-status" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Database Status
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/debug" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              System Health
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/event-logs" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Event Logs
            </a>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="installation">Setup</TabsTrigger>
          <TabsTrigger value="configuration">Config</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="troubleshooting">Debug</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="migration">Migration</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                What is Facebook Pixel Gateway?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Facebook Pixel Gateway is a comprehensive Shopify app that seamlessly integrates your 
                Shopify store with Facebook's Conversions API. It automatically tracks customer events and 
                sends them to Facebook for advertising optimization and attribution.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Key Benefits
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Automatic event tracking without manual setup</li>
                    <li>Server-side tracking via Facebook Conversions API</li>
                    <li>Real-time event monitoring and debugging</li>
                    <li>GDPR compliant data handling</li>
                    <li>Multiple pixel support and management</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    Core Features
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Web Pixel Extensions for browser tracking</li>
                    <li>Automatic Facebook pixel detection</li>
                    <li>Advanced event logging and analytics</li>
                    <li>Comprehensive debugging tools</li>
                    <li>Admin dashboard for monitoring</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Current Status</AlertTitle>
                <AlertDescription>
                  Your app has been successfully migrated to Replit with enhanced database connectivity 
                  and improved error handling. All systems are operational with 26 pixel configurations 
                  and 84,757+ tracked events.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Architecture Overview */}
          <Card>
            <CardHeader>
              <CardTitle>System Architecture</CardTitle>
              <CardDescription>How the Facebook Pixel Gateway works</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold">Shopify Store</h4>
                    <p className="text-sm text-muted-foreground">Customer interactions trigger events</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Code className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <h4 className="font-semibold">Pixel Gateway</h4>
                    <p className="text-sm text-muted-foreground">Processes and forwards events</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h4 className="font-semibold">Facebook API</h4>
                    <p className="text-sm text-muted-foreground">Receives optimized conversion data</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Event Flow</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Customer performs action on Shopify store (view product, add to cart, purchase)</li>
                    <li>Web Pixel Extension captures event data</li>
                    <li>Event sent to Pixel Gateway for processing</li>
                    <li>Data enriched with customer information and hashed for privacy</li>
                    <li>Event forwarded to Facebook Conversions API</li>
                    <li>Facebook receives data for ad optimization and attribution</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Installation Tab */}
        <TabsContent value="installation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Installation & Setup Guide
              </CardTitle>
              <CardDescription>Complete step-by-step setup process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Step 1 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Step 1: Install the App</h3>
                <div className="space-y-2">
                  <p>Install the Facebook Pixel Gateway app from the Shopify App Store:</p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Visit your Shopify Admin panel</li>
                    <li>Navigate to Apps → App Store</li>
                    <li>Search for "Facebook Pixel Gateway" or use direct installation link</li>
                    <li>Click "Install" and grant necessary permissions</li>
                    <li>You'll be redirected to the app dashboard</li>
                  </ol>
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      The app automatically detects existing Facebook pixels and installs Web Pixel Extensions.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Step 2: Facebook Credentials</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Get Your Facebook Pixel ID</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Go to <a href="https://business.facebook.com/events_manager" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook Events Manager</a></li>
                      <li>Select your pixel from the list</li>
                      <li>Copy the Pixel ID (15-16 digit number)</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Generate Access Token</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Visit <a href="https://developers.facebook.com/tools/explorer/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook Graph API Explorer</a></li>
                      <li>Select your app or create a new one</li>
                      <li>Generate token with permissions: <Badge variant="outline">ads_management</Badge> <Badge variant="outline">business_management</Badge></li>
                      <li>Copy the generated access token</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Step 3: Configuration</h3>
                <div className="space-y-2">
                  <p>Configure your pixel using one of these methods:</p>
                  
                  <Tabs defaultValue="auto" className="mt-4">
                    <TabsList>
                      <TabsTrigger value="auto">Automatic Detection</TabsTrigger>
                      <TabsTrigger value="manual">Manual Setup</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="auto" className="mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h5 className="font-medium mb-2">If you already have a Facebook Pixel:</h5>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>App automatically detects existing pixel</li>
                          <li>Click "Use Detected Pixel" in setup wizard</li>
                          <li>Enter your Facebook Access Token</li>
                          <li>Configuration completed automatically</li>
                        </ol>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="manual" className="mt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Manual configuration:</h5>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>Go to <a href="/customer/setup" className="text-blue-600 hover:underline">Customer Setup</a> page</li>
                          <li>Enter your Facebook Pixel ID</li>
                          <li>Enter your Facebook Access Token</li>
                          <li>Click "Configure Pixel"</li>
                        </ol>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Step 4: Verification</h3>
                <div className="space-y-2">
                  <p>Verify your setup is working correctly:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Test Tools</h5>
                      <ul className="space-y-1 text-sm">
                        <li><a href="/test-facebook-pixel" className="text-blue-600 hover:underline">• Test Facebook Pixel</a></li>
                        <li><a href="/shopify-debug" className="text-blue-600 hover:underline">• Shopify Integration Test</a></li>
                        <li><a href="/db-status" className="text-blue-600 hover:underline">• Database Status Check</a></li>
                        <li><a href="/debug" className="text-blue-600 hover:underline">• System Health Check</a></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Facebook Verification</h5>
                      <ol className="list-decimal pl-5 space-y-1 text-sm">
                        <li>Open <a href="https://business.facebook.com/events_manager" className="text-blue-600 hover:underline" target="_blank">Facebook Events Manager</a></li>
                        <li>Go to "Test Events" tab</li>
                        <li>Perform test actions on your store</li>
                        <li>Verify events appear in real-time</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configuration Tab */}
        <TabsContent value="configuration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Configuration & Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Web Pixel Configuration */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Web Pixel Extension Settings</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="text-sm font-medium">Automatic Configuration:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Gateway URL:</strong> Points to your pixel gateway endpoint</li>
                    <li><strong>Account ID:</strong> Your Facebook Pixel ID</li>
                    <li><strong>Debug Mode:</strong> Disabled by default (enable for testing)</li>
                  </ul>
                </div>
              </div>

              {/* Tracked Events */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Tracked Events</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Standard Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Page View</span>
                          <Badge variant="outline">PageView</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Product View</span>
                          <Badge variant="outline">ViewContent</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Collection View</span>
                          <Badge variant="outline">ViewContent</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Search</span>
                          <Badge variant="outline">Search</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Add to Cart</span>
                          <Badge variant="outline">AddToCart</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Conversion Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>View Cart</span>
                          <Badge variant="outline">ViewCart</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Checkout Start</span>
                          <Badge variant="outline">InitiateCheckout</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Address Info</span>
                          <Badge variant="outline">AddPaymentInfo</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Payment Info</span>
                          <Badge variant="outline">AddPaymentInfo</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Purchase</span>
                          <Badge variant="outline">Purchase</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Environment Variables */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Environment Configuration</h3>
                <div className="space-y-4">
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertTitle>Security Note</AlertTitle>
                    <AlertDescription>
                      All sensitive configuration is stored securely in Replit Secrets. Never hardcode credentials in your code.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Required Variables</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between">
                          <span>DATABASE_URL</span>
                          <Badge variant="secondary">PostgreSQL Connection</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>SHOPIFY_API_KEY</span>
                          <Badge variant="secondary">App Authentication</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>SHOPIFY_API_SECRET</span>
                          <Badge variant="secondary">Secure</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>FACEBOOK_PIXEL_ID</span>
                          <Badge variant="secondary">Tracking</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>FACEBOOK_ACCESS_TOKEN</span>
                          <Badge variant="secondary">API Access</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Dashboard */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Admin Dashboard Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Monitoring</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Connection status indicators</li>
                      <li>Event statistics (daily/weekly)</li>
                      <li>Recent event feed</li>
                      <li>Configuration status overview</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Management</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Pixel configuration updates</li>
                      <li>Access token refresh</li>
                      <li>Enable/disable tracking</li>
                      <li>Event log exports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Features Tab */}
        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Features & Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Core Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Event Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Automatic event detection</li>
                      <li>• Real-time data processing</li>
                      <li>• Server-side tracking</li>
                      <li>• Browser-based collection</li>
                      <li>• Cross-device attribution</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Privacy & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• GDPR compliance</li>
                      <li>• Automatic data hashing</li>
                      <li>• Secure token storage</li>
                      <li>• Privacy-first approach</li>
                      <li>• Data retention controls</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Analytics & Debug
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Live event monitoring</li>
                      <li>• Comprehensive logging</li>
                      <li>• Error tracking</li>
                      <li>• Performance metrics</li>
                      <li>• Debug tools</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Advanced Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Advanced Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Multi-Pixel Management</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Manage multiple Facebook pixels for different campaigns or brands.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Support for multiple pixel configurations</li>
                      <li>Individual pixel performance tracking</li>
                      <li>Centralized management dashboard</li>
                      <li>Pixel-specific event routing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Web Pixel Extensions</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Multiple versions optimized for different scenarios.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li><Badge variant="outline">web-pixel-fixed</Badge> - Production stable</li>
                      <li><Badge variant="outline">web-pixel-v191</Badge> - Enhanced features</li>
                      <li><Badge variant="outline">web-pixel-minimal</Badge> - Lightweight</li>
                      <li><Badge variant="outline">hustle-gateway-pixel</Badge> - Custom branded</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Integration Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Shopify Integration</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Automatic Setup</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Pixel detection and installation</li>
                        <li>Web Pixel Extension deployment</li>
                        <li>Webhook configuration</li>
                        <li>OAuth authentication flow</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Data Collection</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Customer behavior tracking</li>
                        <li>Product interaction events</li>
                        <li>Checkout flow monitoring</li>
                        <li>Order completion data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* API Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4">API Capabilities</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium mb-2">Event APIs</h5>
                    <ul className="space-y-1 text-xs">
                      <li>POST /api/track</li>
                      <li>POST /api/track/beacon</li>
                      <li>POST /api/test-event</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium mb-2">Management APIs</h5>
                    <ul className="space-y-1 text-xs">
                      <li>GET /api/db-status</li>
                      <li>GET /api/event-logs</li>
                      <li>POST /api/customer/setup-pixel</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium mb-2">Debug APIs</h5>
                    <ul className="space-y-1 text-xs">
                      <li>GET /api/debug</li>
                      <li>GET /api/shopify/list-web-pixels</li>
                      <li>POST /api/shopify/activate-web-pixel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Troubleshooting Tab */}
        <TabsContent value="troubleshooting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Troubleshooting & Debug Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Common Issues */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Common Issues & Solutions</h3>
                
                <div className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Events Not Appearing in Facebook</AlertTitle>
                    <AlertDescription className="mt-2">
                      <div className="space-y-2">
                        <p><strong>Symptoms:</strong> No events showing in Facebook Events Manager</p>
                        <p><strong>Solutions:</strong></p>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>Check Facebook Access Token validity</li>
                          <li>Verify Pixel ID is correct</li>
                          <li>Test connection using <a href="/test-facebook-pixel" className="text-blue-600 hover:underline">diagnostic tools</a></li>
                          <li>Review <a href="/event-logs" className="text-blue-600 hover:underline">event logs</a> for error messages</li>
                        </ol>
                      </div>
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Web Pixel Not Loading</AlertTitle>
                    <AlertDescription className="mt-2">
                      <div className="space-y-2">
                        <p><strong>Symptoms:</strong> No console logs from Web Pixel Extension</p>
                        <p><strong>Solutions:</strong></p>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>Go to <a href="/fix-web-pixel" className="text-blue-600 hover:underline">Fix Web Pixel</a> page</li>
                          <li>Click "Recreate Web Pixel"</li>
                          <li>Verify Web Pixel in Shopify Admin → Settings → Customer Events</li>
                          <li>Check browser console for JavaScript errors</li>
                        </ol>
                      </div>
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Database Connection Issues</AlertTitle>
                    <AlertDescription className="mt-2">
                      <div className="space-y-2">
                        <p><strong>Symptoms:</strong> App shows database errors</p>
                        <p><strong>Solutions:</strong></p>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>Check <a href="/db-status" className="text-blue-600 hover:underline">database status</a></li>
                          <li>Verify DATABASE_URL in Replit Secrets</li>
                          <li>Test connection with retry logic</li>
                          <li>Review connection logs for specific errors</li>
                        </ol>
                      </div>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>

              {/* Debug Tools */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Debug Tools & Pages</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">System Health</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <a href="/debug" className="text-blue-600 hover:underline">General Debug</a>
                          <Badge variant="outline">System</Badge>
                        </li>
                        <li className="flex justify-between">
                          <a href="/db-status" className="text-blue-600 hover:underline">Database Status</a>
                          <Badge variant="outline">Database</Badge>
                        </li>
                        <li className="flex justify-between">
                          <a href="/system-test" className="text-blue-600 hover:underline">End-to-End Test</a>
                          <Badge variant="outline">Integration</Badge>
                        </li>
                        <li className="flex justify-between">
                          <a href="/event-logs" className="text-blue-600 hover:underline">Event Logs</a>
                          <Badge variant="outline">Monitoring</Badge>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Pixel & Tracking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <a href="/shopify-debug" className="text-blue-600 hover:underline">Shopify Integration</a>
                          <Badge variant="outline">Shopify</Badge>
                        </li>
                        <li className="flex justify-between">
                          <a href="/fix-web-pixel" className="text-blue-600 hover:underline">Fix Web Pixel</a>
                          <Badge variant="outline">Pixel</Badge>
                        </li>
                        <li className="flex justify-between">
                          <a href="/test-facebook-pixel" className="text-blue-600 hover:underline">Test Facebook Pixel</a>
                          <Badge variant="outline">Facebook</Badge>
                        </li>
                        <li className="flex justify-between">
                          <a href="/track-debug" className="text-blue-600 hover:underline">Track Debug</a>
                          <Badge variant="outline">Events</Badge>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Migration Issues */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Migration-Specific Issues</h3>
                <div className="bg-muted p-4 rounded-lg space-y-4">
                  <p className="text-sm">
                    Your app has been successfully migrated from V0.dev to Replit. Here are the key changes and potential issues:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">✅ Resolved Issues</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Database connectivity with retry logic</li>
                        <li>Environment variable handling</li>
                        <li>Port binding (now uses 0.0.0.0:5000)</li>
                        <li>Prisma client optimization</li>
                        <li>Error handling improvements</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">🔧 What Changed</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>New database connection retry mechanism</li>
                        <li>Enhanced error logging and debugging</li>
                        <li>Improved environment variable validation</li>
                        <li>New diagnostic and testing tools</li>
                        <li>Better user-facing error messages</li>
                      </ul>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      For complete migration details, see the <a href="/help?tab=migration" className="text-blue-600 hover:underline">Migration</a> tab.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Tab */}
        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                API Reference & Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Base URL */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Base URL</h3>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  https://your-repl-name.replit.app
                </div>
              </div>

              {/* Event Tracking APIs */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Event Tracking APIs</h3>
                
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base">POST /api/track</CardTitle>
                        <Badge>Primary Event Endpoint</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm">Main endpoint for tracking Facebook pixel events.</p>
                        <div>
                          <h5 className="font-medium mb-2">Request Body:</h5>
                          <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`{
  "event_name": "Purchase",
  "event_time": 1234567890,
  "user_data": {
    "em": "hashed_email",
    "ph": "hashed_phone"
  },
  "custom_data": {
    "value": 29.99,
    "currency": "USD",
    "contents": [
      {
        "id": "product_123",
        "quantity": 1,
        "item_price": 29.99
      }
    ]
  }
}`}
                          </pre>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Response:</h5>
                          <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`{
  "success": true,
  "message": "Event tracked successfully",
  "facebook_response": { ... }
}`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base">POST /api/track/beacon</CardTitle>
                        <Badge variant="outline">Lightweight</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Lightweight beacon endpoint for minimal payload tracking.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base">GET /api/track/config</CardTitle>
                        <Badge variant="outline">Configuration</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Returns pixel configuration for Web Pixel Extensions.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Management APIs */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Management APIs</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Pixel Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><code>POST /api/customer/setup-pixel</code> - Configure pixel</li>
                        <li><code>GET /api/customer/check-pixel</code> - Check pixel status</li>
                        <li><code>POST /api/detect-pixel</code> - Auto-detect existing pixel</li>
                        <li><code>POST /api/update-access-token</code> - Update Facebook token</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">System Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li><code>GET /api/debug</code> - System health check</li>
                        <li><code>GET /api/db-status</code> - Database status</li>
                        <li><code>GET /api/event-logs</code> - Event tracking logs</li>
                        <li><code>GET /api/connection-status</code> - Connection status</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Shopify Integration APIs */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Shopify Integration APIs</h3>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Web Pixels</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-xs">
                          <li><code>POST /api/shopify/activate-web-pixel</code></li>
                          <li><code>GET /api/shopify/list-web-pixels</code></li>
                          <li><code>POST /api/shopify/create-or-update-web-pixel</code></li>
                          <li><code>DELETE /api/shopify/delete-web-pixel</code></li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Testing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-xs">
                          <li><code>POST /api/test-event</code></li>
                          <li><code>POST /api/test-facebook-pixel</code></li>
                          <li><code>GET /api/shopify/test-api</code></li>
                          <li><code>POST /api/test-event-logging</code></li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Webhooks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-xs">
                          <li><code>POST /api/webhooks/orders/create</code></li>
                          <li><code>POST /api/webhooks/checkouts/create</code></li>
                          <li><code>POST /api/webhooks/app/uninstalled</code></li>
                          <li><code>POST /api/webhooks/customers/*</code></li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Authentication */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Authentication</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="space-y-2">
                    <h5 className="font-medium">Shopify App Authentication</h5>
                    <p className="text-sm">Uses Shopify OAuth 2.0 flow with session management.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li><code>GET /api/auth</code> - Initiate OAuth flow</li>
                      <li><code>GET /api/auth/callback</code> - Handle OAuth callback</li>
                      <li><code>GET /api/auth/error</code> - Authentication error handling</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Rate Limits & Best Practices */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Rate Limiting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Facebook API: 200 events per batch</li>
                        <li>Shopify API: Respect rate limits</li>
                        <li>Implement exponential backoff</li>
                        <li>Use batch requests when possible</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Error Handling</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Always check response status</li>
                        <li>Log errors for debugging</li>
                        <li>Implement retry logic</li>
                        <li>Handle network timeouts</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Migration Tab */}
        <TabsContent value="migration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Migration from V0.dev to Replit
              </CardTitle>
              <CardDescription>Complete migration details and resolved issues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Migration Overview */}
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Migration Status: ✅ COMPLETE</AlertTitle>
                <AlertDescription>
                  Your Facebook Pixel Gateway has been successfully migrated to Replit with enhanced 
                  stability, improved error handling, and better diagnostic tools.
                </AlertDescription>
              </Alert>

              {/* Issues Resolved */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Issues Identified & Resolved</h3>
                
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">1. Database Connectivity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm"><strong>Issue:</strong> Intermittent database connection failures</p>
                        <p className="text-sm"><strong>Resolution:</strong></p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Implemented exponential backoff retry mechanism</li>
                          <li>Added connection pooling and retry logic</li>
                          <li>Environment variable validation and error handling</li>
                          <li>Created comprehensive database testing tools</li>
                        </ul>
                        <div className="bg-muted p-3 rounded text-xs">
                          <strong>Files Modified:</strong> lib/db.ts, lib/db-test.ts, types/env.ts
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">2. Environment Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm"><strong>Issue:</strong> Environment variables not properly loaded from Replit Secrets</p>
                        <p className="text-sm"><strong>Resolution:</strong></p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Renamed .env to txt.env.txt to prevent conflicts</li>
                          <li>Configured all variables in Replit Secrets</li>
                          <li>Added validation for required environment variables</li>
                          <li>Enhanced error messages for missing variables</li>
                        </ul>
                        <Badge variant="outline" className="mt-2">All environment variables successfully configured</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">3. Diagnostic & Monitoring Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm"><strong>Issue:</strong> Limited debugging capabilities</p>
                        <p className="text-sm"><strong>Resolution:</strong></p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Created comprehensive database status dashboard</li>
                          <li>Added real-time event monitoring tools</li>
                          <li>Implemented system health check endpoints</li>
                          <li>Enhanced error logging and debugging information</li>
                        </ul>
                        <div className="bg-muted p-3 rounded text-xs">
                          <strong>New Pages:</strong> /db-status, /debug, /system-test, /event-logs
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Technical Changes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Technical Improvements</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Database Enhancements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Connection retry with exponential backoff</li>
                        <li>Comprehensive error logging</li>
                        <li>Health monitoring and statistics</li>
                        <li>Automatic connection recovery</li>
                        <li>Enhanced Prisma client configuration</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Error Handling</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>User-friendly error pages</li>
                        <li>Detailed error logging with stack traces</li>
                        <li>Automatic error recovery mechanisms</li>
                        <li>Graceful degradation for database issues</li>
                        <li>Enhanced debugging information</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Current Status */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Current System Status</h3>
                
                <div className="bg-muted p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">✅ Operational Systems</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Database: Connected (Neon PostgreSQL)</li>
                        <li>• Event Tracking: Active (84,757+ events)</li>
                        <li>• Pixel Configurations: 26 active</li>
                        <li>• Web Pixel Extensions: Deployed</li>
                        <li>• Facebook API: Connected</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">🔧 Enhanced Features</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Real-time health monitoring</li>
                        <li>• Advanced debugging tools</li>
                        <li>• Automated error recovery</li>
                        <li>• Comprehensive event logging</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post-Migration Verification */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Verification Steps</h3>
                
                <div className="space-y-2">
                  <p className="text-sm mb-3">Complete these steps to verify your migrated app is working correctly:</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Database Connection Test - <a href="/db-status" className="text-blue-600 hover:underline">Check Status</a></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Event Tracking Verification - <a href="/test-facebook-pixel" className="text-blue-600 hover:underline">Test Events</a></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">System Health Check - <a href="/debug" className="text-blue-600 hover:underline">View Diagnostics</a></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Web Pixel Status - <a href="/fix-web-pixel" className="text-blue-600 hover:underline">Verify Configuration</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Will this conflict with my existing Facebook Pixel?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      No, the app works alongside existing Facebook Pixels. You don't need to remove any existing 
                      tracking code. The app enhances your current setup with server-side tracking via the 
                      Conversions API.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">How often are events sent to Facebook?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Events are sent in real-time as they occur on your store. Server-side events typically 
                      arrive within seconds. The app uses both browser-based Web Pixel Extensions and 
                      server-side Conversions API for maximum reliability.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Can I customize which events are tracked?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Currently, all standard e-commerce events are tracked automatically (PageView, ViewContent, 
                      AddToCart, Purchase, etc.). Custom event filtering and additional event types will be 
                      available in future updates.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">What happens if my Facebook Access Token expires?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">
                        You'll receive notifications when the token is about to expire. To update your token:
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-sm">
                        <li>Generate a new token from Facebook Graph API Explorer</li>
                        <li>Go to the <a href="/update-access-token" className="text-blue-600 hover:underline">Update Access Token</a> page</li>
                        <li>Enter your new token and save</li>
                        <li>Verify connection with the <a href="/test-facebook-pixel" className="text-blue-600 hover:underline">test tool</a></li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">How do I track events from multiple stores?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Each store installation is independent. You'll need to install and configure the app 
                      separately for each store. The app supports multiple pixel configurations, so you can 
                      manage different pixels for different stores or campaigns from one installation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Is my customer data secure and GDPR compliant?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">Yes, the app handles customer data responsibly:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Customer emails are automatically hashed using SHA-256</li>
                        <li>Phone numbers are normalized and hashed</li>
                        <li>IP addresses can be disabled for attribution</li>
                        <li>Event logs are stored for 30 days maximum</li>
                        <li>All data handling complies with GDPR and CCPA requirements</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">How do I uninstall the app?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">To uninstall the Facebook Pixel Gateway:</p>
                      <ol className="list-decimal pl-5 space-y-1 text-sm">
                        <li>Go to your Shopify Admin → Apps page</li>
                        <li>Find "Facebook Pixel Gateway" in your installed apps</li>
                        <li>Click "Delete" or "Uninstall"</li>
                        <li>Confirm the uninstallation</li>
                      </ol>
                      <p className="text-sm">
                        The app will automatically clean up Web Pixel Extensions and webhooks. Your Facebook 
                        pixel will continue working normally without server-side tracking.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Where can I get support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">For support and assistance:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Use the built-in diagnostic tools: <a href="/debug" className="text-blue-600 hover:underline">System Debug</a></li>
                        <li>Check event logs: <a href="/event-logs" className="text-blue-600 hover:underline">Event Monitoring</a></li>
                        <li>Test your setup: <a href="/test-facebook-pixel" className="text-blue-600 hover:underline">Pixel Testing</a></li>
                        <li>Review this help documentation for troubleshooting steps</li>
                      </ul>
                      <p className="text-sm">
                        For technical issues not covered in the documentation, include specific error 
                        messages and event log details when contacting support.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t text-center">
        <div className="flex justify-center gap-4 mb-4">
          <Button variant="outline" size="sm" asChild>
            <a href="/">← Back to Home</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="/admin/dashboard">Admin Dashboard</a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Facebook Pixel Gateway - Complete integration documentation
          <br />
          Last updated: January 2025 | Migration Status: ✅ Complete
        </p>
      </div>
    </div>
  )
}
