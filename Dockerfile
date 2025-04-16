# CHANGED: Build phase for Vue (TypeScript) app
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# CHANGED: Serve using Node.js (like your current setup)
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --omit=dev  # Install only prod deps

EXPOSE 5001
CMD ["npx", "serve", "dist", "-l", "5001"]
