import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { CartService } from 'src/app/shared/landing/landingpage/services/cart.service';
import { ProductsService } from 'src/app/shared/landing/landingpage/services/products.service';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  public productList : any;
  public totalItem : number = 0;
  public grandTotal!: number;
  constructor(private products: ProductsService, private cartService: CartService, private msg: NzMessageService) {}


  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
}

 ngOnInit(): void {
   
  this.cartService.getProducts()
  .subscribe(res=>{
    this.totalItem = res.length;
  });

  this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res;
       this.grandTotal = this.cartService.getTotalPrice();   
    })
 }

 loading = false;
  avatarUrl?: string;


  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG, PNG, or GIF file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 5MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
 
}
