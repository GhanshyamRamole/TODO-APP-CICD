#  Node.js 18 Alpine
FROM node:18-alpine

#  working dir
WORKDIR /app

# Copy package  for better caching 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest 
COPY . .

# Expose the port 
EXPOSE 3500

# Start the application
CMD ["node", "index.js"]
