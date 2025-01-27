import {Request, Response} from "express";
import {postgresSource} from "../config/pg-orm-config";
import {Store} from "../entities/store.entity";

export class StoreController {

    static async getStores(req: Request, res: Response): Promise<void> {
        try {
            const data = await postgresSource.getRepository(Store).find({where: {...req.query}});
            console.log(data);
            res.status(200).json({
                status: 'success',
                data
            });
        } catch (error) {
            console.error(`Get stores ERROR: ${error}`)
            res.status(500).json({status: 'error', message: "Internal Server Error"});
        }
    }

    static async getStore(req: Request, res: Response): Promise<void> {
        try {
            const {id} = req.params;
            const data = await postgresSource.getRepository(Store).findOneBy({id});
            res.status(200).json({
                status: 'success',
                data
            });
        } catch (error) {
            console.error(`Get store ERROR: ${error}`)
            res.status(500).json({status: 'error', message: "Internal Server Error"});
        }
    }

    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const {id} = req.params;
            const data = await postgresSource.getRepository(Store).delete(id);
            res.status(200).json({
                status: 'success',
                data
            });
        } catch (error) {
            console.error(`Delete store ERROR: ${error}`)
            res.status(500).json({status: 'error', message: "Internal Server Error"});
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        try {
            const {name, email, description} = req.body;
            const store = new Store();
            store.email = email;
            store.name = name;
            store.description = description;
            await postgresSource.getRepository(Store).save(store);
            res.status(201).json({
                status: 'success',
                data: store
            });
        } catch (error) {
            console.error(`Create store ERROR: ${error}`)
            res.status(500).json({status: 'error', message: "Internal Server Error"});
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const {id} = req.params;
            const store = await postgresSource.getRepository(Store).findOneBy({id}) as Store;
            postgresSource.getRepository(Store).merge(store, req.body)
            const data = await postgresSource.getRepository(Store).save(store)
            res.status(200).json({
                status: 'success',
                data
            });
        } catch (error) {
            console.error(`Update store ERROR: ${error}`)
            res.status(500).json({status: 'error', message: "Internal Server Error"});
        }

    }
}
