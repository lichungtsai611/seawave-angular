# Universal Dockerfile for Angular
FROM node:22-alpine as builder

WORKDIR /app

# Install dependencies
COPY seawave-angular/package*.json ./
RUN npm install

# For development environment only - install Angular CLI globally
ARG ENVIRONMENT
RUN if [ "$ENVIRONMENT" = "development" ] ; then npm install -g @angular/cli ; fi

# Copy the Angular project
COPY seawave-angular/ .

# Build for production if not in development mode
RUN if [ "$ENVIRONMENT" != "development" ] ; then npm run build -- --configuration=${ENVIRONMENT:-production} ; fi

# Use nginx for serving in non-development mode
FROM nginx:alpine as production
# Copy the built application from builder stage
COPY --from=builder /app/dist/eric-webiste/browser /usr/share/nginx/html
# Copy the appropriate nginx configuration based on environment
ARG ENVIRONMENT
COPY nginx.${ENVIRONMENT:-prod}.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Final stage - conditionally choose development or production
FROM builder as development
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]

# Default to production if no environment specified
FROM ${ENVIRONMENT:-production}