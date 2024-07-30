import {Command} from "commander";
import {createServer} from "./server";
import {Options} from "./types";

import packageJson from "../package.json";

function main(): void {
    const cli: Command = new Command();

    cli.version(packageJson.version)
        .option("-s, --socks [socks]", "Specify your socks proxy host.")
        .option("-l, --host [host]", "Specify the listening host of http proxy server. Default: 0.0.0.0")
        .option("-p, --port [port]", "Specify the listening port of http proxy server. Default: 8080")
        .option("--level [level]", "Log level. Values: info, error")
        .parse(process.argv);

    cli.parse();

    const options: Options = cli.opts();

    createServer(options);
}

export default main;
