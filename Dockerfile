FROM node:13-alpine as builder

WORKDIR /app

COPY . /app

RUN apk add --no-cache --virtual add \
    autoconf \
    automake \
    g++ \
    python \
    libtool \
    make \
    nasm \
    pkgconf \
    util-linux \
    && npm install -g gridsome --unsafe-perm \
    && npm install \
    && npm build

FROM nginx:alpine as stage

ARG PREFIX=

COPY --from=builder /app/dist /usr/share/nginx/html${PREFIX}

CMD ["nginx", "-g", "daemon off;"]