import { Product } from "./product";

export class ProductRepository{
    private products : Product[] = [
        {
          id : 1,
          categoryId : 1,
          price : 20000,
          name : "Iphone 11",
          isActive : true,
          image : "1.jpeg",
          description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo distinctio adipisci voluptatem officiis! Obcaecati impedit iusto veritatis, ullam eligendi ex.",
        },
        {
          id : 2,
          categoryId : 2,
          price : 30000,
          name : "Iphone 12",
          isActive : true,
          image : "2.jpeg",
          description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo distinctio adipisci voluptatem officiis! Obcaecati impedit iusto veritatis, ullam eligendi ex."
        },
        {
          id : 3,
          categoryId : 1,
          price : 30000,
          name : "Iphone 13",
          isActive : true,
          image : "3.jpeg",
          description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo distinctio adipisci voluptatem officiis! Obcaecati impedit iusto veritatis, ullam eligendi ex."
        }
      ];

      getProducts() : Product[]{
        return this.products.filter(array => array.isActive);
      }
    
      getProductById(id : number){
        return this.products.find(array => array.id == id);
      }

      getProductsCategoryById(id : number) : Product[]{
        return this.products.filter(p => p.categoryId == id);
      }
}