# Stage 1: Build the Angular application
FROM node:22-alpine as builder

WORKDIR /app
COPY seawave-angular/package*.json ./
RUN npm install
COPY seawave-angular/ .
RUN npm run build -- --configuration=development

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built application from stage 1
COPY --from=builder /app/dist/eric-webiste/browser /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]