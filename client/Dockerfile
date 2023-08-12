FROM node:14 as frontend-build

# Set the working directory in the container for building the frontend
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend application code to the working directory
COPY . .

RUN npm test


EXPOSE 3000

# Build the React.js app for production
RUN npm run build


CMD ["npm", "start"]
