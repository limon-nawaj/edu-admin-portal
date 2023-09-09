# Use the official Node.js 18 image with Alpine Linux as the base image
FROM node:18-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port (if your app runs on a specific port)
# EXPOSE 3000

# Start your application
CMD [ "npm", "start" ]
