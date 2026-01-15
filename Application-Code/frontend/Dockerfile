# --- Stage 1: Build ---
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: Serve ---
FROM nginx:alpine

# Copy the build files
COPY --from=build /app/build /usr/share/nginx/html


COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

# Start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
