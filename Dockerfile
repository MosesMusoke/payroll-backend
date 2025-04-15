FROM node:18

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install deps
RUN npm install

# Copy rest of the source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Start the server
CMD ["node", "index.js"]
