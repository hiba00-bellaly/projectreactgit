# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npm test

# Expose the server port (change this to your server port if it's different)
EXPOSE 8000

# Start the server
CMD ["npm", "start"]
