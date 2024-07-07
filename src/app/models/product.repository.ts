import { Product } from "./product";

export class ProductRepository{
  private products : Product[] = [
    {
      id : 1,
      name : 'Samsung Galaxy S10',
      price : 1000,
      description : 'This is a Samsung Galaxy S10',
      imageUrl : '1.jpeg',
      isActive : true
    },
    {
      id : 2,
      name : 'Samsung Galaxy S20',
      price : 1200,
      description : 'This is a Samsung Galaxy S20',
      imageUrl : '2.jpeg',
      isActive : true
    },
    {
      id : 3,
      name : 'Samsung Galaxy S21',
      price : 1300,
      description : 'This is a Samsung Galaxy S21',
      imageUrl : '3.jpeg',
      isActive : false
    }
  ];
  getProducts() : Product[]{
    return this.products.filter(p => p.isActive);
  }
  getProductById(id: number){
    return this.products.find(p => p.id == id);
  }
}
