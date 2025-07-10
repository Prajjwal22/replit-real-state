# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy full project
COPY . .

# Build frontend + backend
RUN npm run build

# Stage 2: Run
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy what's needed to run
COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/public ./public

# If needed, also copy shared assets or config
COPY --from=builder /app/.replit ./  # optional

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
