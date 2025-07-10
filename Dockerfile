# ---- Build Stage ----
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Optional: build frontend manually (if needed)
# RUN cd client && npm install && npm run build

# Build frontend and backend (output into root dist/)
RUN npm run build

# ---- Run Stage ----
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copy built output
COPY --from=builder /app/dist ./dist

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
