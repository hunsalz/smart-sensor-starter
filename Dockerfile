FROM node:13-alpine

EXPOSE 8080

RUN apk add --no-cache --virtual add \
    autoconf \
    automake \
    g++ \
    git \
    python \
    libtool \
    make \
    nasm \
    pkgconf \
    util-linux

RUN npm install -g gridsome --unsafe-perm

WORKDIR /site

COPY package*.json ./
RUN npm install

COPY . .
COPY ./entry.sh /
RUN chmod +x /entry.sh
ENTRYPOINT ["/entry.sh"]