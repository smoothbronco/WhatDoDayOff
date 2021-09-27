import { Client, ClientConfig } from "@line/bot-sdk";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const clientConfig: ClientConfig = {
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
	channelSecret: process.env.CHANNEL_SECRET,
};

const app: express.Express = express();
const client: Client = new Client(clientConfig);

app.get("/", (req: express.Request, res: express.Response): void => {
	res.send("Hello World");
});

app.listen(PORT, (): void => {
	console.log(`http://localhost:${PORT}`);
});
