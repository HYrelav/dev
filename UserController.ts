import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class UserController {
    @Get("/users")
    getAll() {
        return "Returns all users"
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return "Returns user #: " + id;
    }

    @Post("/users")
    post(@Body() user: any) {
        return "Saving user...";
    }

    @Put("/users/:id")
    puts(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing a user...";

    }
}
