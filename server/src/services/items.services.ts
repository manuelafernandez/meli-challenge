import fetch from 'node-fetch';
import { RawData, RawDescription, ItemCategory, SearchResponse } from '../interfaces/rawData';
import { Item, SearchItems } from '../interfaces/item';

export const NAME = "Manuela"; 
export const LASTNAME = "Fernandez";

export const ItemServices = {
    search: async (query: string): Promise<SearchItems> => {
        const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`;
        const response = await fetch(URL);
        const { results, filters }: SearchResponse = await response.json();

        const categories = filters[0]?.values[0]?.path_from_root?.map(element => ({
            name: element.name
        }));

        const rawItems = results.map(element => ({
            id: element.id,
            title: element.title,
            price: {
                amount: element.price,
                currency: element.currency_id,
                decimals: parseFloat((element.price % 1).toFixed(2)),
            },
            thumbnail: element.thumbnail,
            condition: element.condition,
            shipping: {
                free_shipping: element.shipping.free_shipping
            },
            address: {
                state_name: element.address.state_name
            }
        }))

        const onlyFour = rawItems.slice(0, 4);

        const result = {
            author: {
                name: NAME,
                lastname: LASTNAME
            },
            categories: categories,
            items: onlyFour
        }
        return result;
    },

    get: async (id: string): Promise<Item> => {
        const URL = `https://api.mercadolibre.com/items/${id}`;
        const itemResponse = await fetch(URL);
        const element: RawData = await itemResponse.json();

        const descriptionResponse = await fetch(`${URL}/description`);
        const desc: RawDescription = await descriptionResponse.json();

        const currentCategory_id = element.category_id;
        const itemCategories = await fetch(`https://api.mercadolibre.com/categories/${currentCategory_id}`);
        const categories: ItemCategory = await itemCategories.json();

        const item = {
            author: {
                name: NAME,
                lastname: LASTNAME
            },
            id: element.id,
            title: element.title,
            price: {
                amount: element.price,
                currency: element.currency_id,
                decimals: parseFloat((element.price % 1).toFixed(2))
            },
            thumbnail: element.thumbnail,
            picture: element.pictures?.[0].url,
            condition: element.condition,
            shipping: {
                free_shipping: element.shipping.free_shipping
            },
            item_categories: categories.path_from_root.map(element => ({
                name: element.name
            })),
            sold_quantity: element.sold_quantity,
            description: desc.plain_text
        }
        return item;
    }
}
