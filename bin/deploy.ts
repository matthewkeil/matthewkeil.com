import { deployCore } from "./deployCore";
import { deployClient } from "./deployClient";

/**
 *
 * IIFE for async and we're off!!
 *
 */
(async () => {
    const findStack = process.argv.find(ARG => {
        const arg = ARG.toLowerCase();

        if (
            arg.includes("core") ||
            arg.includes("server") ||
            arg.includes("client")
        ) {
            return true;
        }
    });

    const stack = !!findStack ? findStack.toLowerCase() : process.argv[2];

    switch (stack) {
        case "core":
            await deployCore();
            break;
        case "client":
            await deployClient();
            break;
        case "server":
            break;
        default:
            const message = `${stack} is not a valid stack name`;
            throw new Error(message);
    }
})();
