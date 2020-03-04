import App from "./app";
import path from "path";

console.log(path.dirname(require.main.filename));

/**
 * Error Handler. Provides full stack - remove for production
 */
//app.use(errorHandler());

/**
 * Start Express server.
 */


process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    // Application specific logging, throwing an error, or other logic here
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception Error:", err);
});



(async () => {
    try {
        const app = new App();
        await app.start();
    } catch (e) {
        console.error();
    }
})();
