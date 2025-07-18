# http-proxy-to-socks

hpts(http-proxy-to-socks) is a nodejs tool to convert SOCKS proxy into http proxy.

Many clients support setting up http proxy to speed up network requests and for sometimes only SOCKS proxy is available to you. SOCKS proxy supports TCP so that it's possible to convert those requests from http proxy into SOCKS protocol. In this way, you can still keep the goodness provided by your SOCKS proxy(e.g. encryption).

## Setup

Make sure your Node.js version is greater than `4`.

### Node.js

```
npm install -g http-proxy-to-socks
```

```
hpts -s 127.0.0.1:1080 -p 8080
```

### Docker

Dockerfile
```
FROM node:slim 

RUN npm install -g http-proxy-to-socks

ENV SOCKS_HOST=127.0.0.1:1080

EXPOSE 8080

CMD hpts -l 0.0.0.0 -p 8080 -s $SOCKS_HOST
```

```
docker build -t hpts
docker run -p 8080 -e SOCKS_HOST=127.0.0.1:1080 hpts
```

## Usage

This will start a process listening on `8080` as a HTTP proxy. It will convert HTTP requests into SOCKS requests and send them to port `1080`. Please make sure your socks service is available at the corresponding port. If you run the process inside Docker, make sure, that parameter -l 0.0.0.0 is specified, otherwise port mapping won't work.

Other options:

```
Options:
  -V, --version          output the version number
  -s, --socks [socks]    specify your socks proxy host, default: 127.0.0.1:1080
  -p, --port [port]      specify the listening port of http proxy server, default: 8080
  -l, --host [host]      specify the listening host of http proxy server, default: 127.0.0.1
  -c, --config [config]  read configs from file in json format
  --level [level]        log level, vals: info, error
  -h, --help             output usage information
```

You can specify a `json` config file with `-c`:

```json
{
  "socks": "127.0.0.1:1080",
  "port": 8080
}
```

## License

MIT
