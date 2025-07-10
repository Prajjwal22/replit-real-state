FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install

# Build the frontend
RUN npm run build

# Expose port (Vite default or custom server)
EXPOSE 3000

# Start the server (you might need to adjust this)
CMD ["npm", "run", "start"]
