# ---- Staging ----

FROM node:10-alpine as builder
WORKDIR /app

RUN apk update && apk add --no-cache bash git openssh python2
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -s


# ---- Prod ----
FROM nginx

EXPOSE 5001
ENV APPSETTING_ENV=local

RUN echo 'server { listen 5001; listen 80; root /usr/share/nginx/html; index index.html; server_name _; location / { try_files $uri /index.html; } }' > /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

CMD nginx -g 'daemon off;'