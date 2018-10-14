import "reflect-metadata"
import {expressRouter001} from "./UserController"
import {createExpressServer} from "routing-controllers"



const app = createExpressServer({
    controllers: [expressRouter001.UserController]
});

app.listen(8102);
