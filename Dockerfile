# Build phase for Vue (TypeScript) app
FROM node:18-alpine AS builder
WORKDIR /app

# Install only dev dependencies needed for build
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /app

# Only bring in the dist folder and package info
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Expose the port
EXPOSE 5161

# Serve the app
CMD ["npx", "serve", "dist", "-l", "5161"]
