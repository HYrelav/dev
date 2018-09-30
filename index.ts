import "reflect-metadata"
import {UserController} from "./UserController"
import {createExpressServer} from "routing-controllers"


const app = createExpressServer({
    controllers: [UserController]
});

app.listen(8102);
