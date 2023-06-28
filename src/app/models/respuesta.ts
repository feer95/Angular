import { Book } from "./book";
import { User } from "./user";

export class Respuesta 
{
    constructor(public error: Boolean,
                public codigo: number,
                public mensaje: string,
                public data: Book[],
                public dataUser: User) {}
}