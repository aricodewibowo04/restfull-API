import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import userjson from "../../resources/users.json";
import { error } from "console";

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Not implemented");
    }
    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json(userjson);
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Not implemented");
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Not implemented");
    }
}