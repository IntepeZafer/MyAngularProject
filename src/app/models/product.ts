export interface Product{
    id : number;
    name : string;
    isActive : boolean;
    image : string;
    description : string;
    price : number;
    categoryId ?: number;
}