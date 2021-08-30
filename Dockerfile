FROM node:slim

RUN npm install -g http-proxy-to-socks

ENV SOCKS_HOST=127.0.0.1:1080

EXPOSE 8080

CMD hpts -l 0.0.0.0 -p 8080 -s $SOCKS_HOST
