# ---- Build Stage ----
FROM node:18-alpine AS builder

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Run both: build frontend + bundle backend
RUN npm run build

# ---- Production Runner ----
FROM node:18-alpine

WORKDIR /app

# Copy only production deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy built output from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/client/dist ./client/dist

# Copy static assets (if any)
COPY --from=builder /app/public ./public

# Include any other config files you need
COPY --from=builder /app/.replit ./  # optional

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
