# Use the official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app/

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the port to be used by the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

