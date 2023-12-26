# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18-alpine3.18 as build-stage

# Set the working directory
WORKDIR /pn/src/app

# Add the source code to app
COPY ./ /pn/src/app

COPY ./package*.json /pn/src/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build --configuration=development

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.23.0-alpine AS ngi

# Copy the build output to replace the default nginx contents.
COPY --from=build-stage /pn/src/app/dist/fifa-search /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]