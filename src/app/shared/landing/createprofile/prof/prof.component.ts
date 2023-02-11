import { Component, OnInit } from '@angular/core';
import { CartService } from '../../landingpage/services/cart.service';
import { ProductsService } from '../../landingpage/services/products.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit{

  public productList : any;
  public items : any =[];
  public totalItem : number = 0;
  public grandTotal !: number;
  constructor(private products: ProductsService, private cartService : CartService) {}


ngOnInit(): void {
    this.products.getProduct()
    .subscribe(res =>{
      this.productList = res;

      this.productList.forEach((a:any) =>{
        Object.assign(a, {quantity: 1, total: a.price});
     });
    })

    this.cartService.getProducts()
    .subscribe(res =>{
      this.items = res;
       this.grandTotal = this.cartService.getTotalPrice();        
    })

    this.cartService.getProducts()
       .subscribe(res=>{
         this.totalItem = res.length;
       })


  }
}