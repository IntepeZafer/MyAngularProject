import { Category } from "./category";

export class CategoryRepository{
    private categories : Category[] = [
        {id : 1 , name : "Mobile Phone"},
        {id : 2 , name : "Television"},
        {id : 3 , name : "Computer"},
        {id : 4 , name : "Tablet"},
        {id : 5 , name : "Oyun Konsolu"},
        {id : 6 , name : "Laptop"} 
    ];
    getCategories() : Category[]{
        return this.categories;
    }
    getCategoryById(int : number){
        return this.categories.find(c => c.id == int);
    }
}