import { Request, Response } from 'express';
import { GetItem, SearchItem } from '../services/items.services';

export const SearchController = async (req: Request, res: Response): Promise<any> => {
    try {
        const query = req.query.search;

        const data = await SearchItem(query as string);
        return res.status(200).send(data);
    } catch (e) {
        res.send(console.log("Error: " + e));
    }
};

export const GetController = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;

        const data = await GetItem(id as string);
        return res.status(200).send(data);

    } catch (e) {
        res.status(404).send(console.error("No hay resultados para la búsqueda"));
    }
};

