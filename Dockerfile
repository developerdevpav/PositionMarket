#Git
FROM alpine/git as clone

ARG TOKEN
ARG USERNAME
ARG TAG
ARG REPOSITORY

WORKDIR /app

RUN git clone https://${TOKEN}@github.com/${USERNAME}/${REPOSITORY}.git --branch=${TAG}


# The builder from node image
FROM node:alpine as builder


# build-time variables
# prod|sandbox its value will be come from outside
ARG ENV

RUN apk update && apk add --no-cache make git

# Move our files into directory name "app"
WORKDIR /app

COPY package.json package-lock.json  /app/

RUN npm install @angular/cli -g

RUN cd /app && npm install

COPY --from=clone /app  /app

# Build with $env variable from outside
RUN cd /app && npm run build:${ENV}


# Build a small nginx image with static website
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
