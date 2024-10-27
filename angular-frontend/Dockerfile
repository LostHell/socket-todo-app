# Build stage (for both development and production)
FROM node:16.16.0 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@14.2.5

COPY . .

# Development stage
FROM builder AS development

EXPOSE 4200
CMD ["npm", "run", "start"]

# Production stage
FROM builder AS production

RUN npm run build --prod

FROM nginx:1.21.6-alpine

COPY --from=production /app/dist/angular-frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
