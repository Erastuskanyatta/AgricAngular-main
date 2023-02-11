import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }
  
  
  getProduct(){
    return this.http.get<any>("https://agriappproducts.herokuapp.com/products")
    .pipe(map((res: any) =>{
    return res;
    }))
  }
   
  

  // getAll(): Product[]{
  //   return [
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 1.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 2.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 3.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 4.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 5.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 6.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 7.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 8.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 9.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 10.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 11.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 12.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 13.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 14.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 15.jpg' 
  //   },
  //   {
  //     category: 'PROD-CATEGORY-NAME', 
  //     name: 'product-name',
  //     price: 500,
  //     imageURL: '/assets/images/image 16.jpg' 
  //   }    
  //   ]
  // }

}


