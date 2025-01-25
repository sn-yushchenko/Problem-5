import "reflect-metadata";
import express from "express";
import {Request, Response} from "express";
import {storeRouter} from "./routes/store.route";
import config from "./config/configurations";
import {postgresSource} from "./config/pg-orm-config";

const {application} = config;

const app = express()
app.use(express.json());
app.use("/stores", storeRouter);


app.get("*", (req: Request, res: Response) => {
    res.status(505).json({ message: "Bad Request" });
});

postgresSource.initialize()
    .then(async () => {
        console.log("Postgres Source has been initialized!")
         app.listen(application.port, (error) => {
            if(error) throw new Error(`Server initialization error; ${error.message}`)
            console.log(`App was executed on PORT ${application.port}`);
        })
    }).catch((error) => {
        console.log(`Initialization Error: ${error}`);
    })
