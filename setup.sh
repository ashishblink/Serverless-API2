
#!/bin/bash

# Ensure Node.js and npm are available
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Generate Prisma client if DATABASE_URL is available
if [ ! -z "$DATABASE_URL" ]; then
    echo "Generating Prisma client..."
    npx prisma generate
else
    echo "Warning: DATABASE_URL not set. Prisma features may not work."
fi

echo "Setup complete! You can now run: npm run dev"
