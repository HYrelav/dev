"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var UserController_1 = require("./UserController");
var routing_controllers_1 = require("routing-controllers");
var app = routing_controllers_1.createExpressServer({
    controllers: [UserController_1.UserController]
});
app.listen(8102);
