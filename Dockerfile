# ---- Build Stage ----
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# ---- Production Stage ----
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copy backend build
COPY --from=builder /app/dist ./dist

# Copy built frontend (Vite output)
COPY --from=builder /app/client/dist ./client/dist

# ✅ REMOVE this line — you don’t have a /public folder
# COPY --from=builder /app/public ./public

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
