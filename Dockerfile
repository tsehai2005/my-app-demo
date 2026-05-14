# Use Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
# commit this one 