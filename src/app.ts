import express from "express";
import bodyParser from "body-parser";
import {db} from "./infrastructure/models";
import {ErrorHandler} from "./infrastructure/api/utils/error.handler";
import {PropertyRouter} from "./infrastructure/api/property/property.router";

export default class App {
    private static app: express.Application;

    public static async getApplication(): Promise<express.Application> {
        if (!App.app) {
            App.app = await App.init();
        }
        return Promise.resolve(App.app);
    }

    private static async init(): Promise<express.Application> {
        // Create Express server
        const app = express();

        //sync database
        await db.sequelize.sync();


        // Express configuration
        app.set("port", process.env.PORT || 3000);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        const propertyRouter = new PropertyRouter();
        app.use("/api", propertyRouter.getRouter());

        app.use(ErrorHandler.catchNotFound);
        app.use(ErrorHandler.catchError);
        return app;
    }

    public async start(): Promise<void> {
        const app = await App.getApplication();

        app.listen(app.get("port"), () => {
            console.log(
                "  App is running at http://localhost:%d in %s mode",
                app.get("port"),
                app.get("env")
            );
            console.log("  Press CTRL-C to stop\n");
        });
    }
}

