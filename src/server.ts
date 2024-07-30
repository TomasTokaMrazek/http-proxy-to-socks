import {changeLevel, logger} from "./logger";
import {createServer as createProxyServer} from "./proxy_server";
import {Options} from "./types";

function createServer(options: Options) {
    if (typeof options.level === "string") {
        changeLevel(logger, options.level);
    }

    const socks: string = options.socks;
    const host: string = options.host ?? "0.0.0.0";
    const port: number = options.port ?? 8080;

    console.log(`Socks: ${socks}\nProxy: ${host}:${port}`);

    return createProxyServer(options).listen(port, host);
}

export default createServer;
