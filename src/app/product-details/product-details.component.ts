import { SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CartCountService } from 'src/services/cart-count.service';
import { GetProductsService } from 'src/services/get-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;

  product: any;

  cartCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private getProductsService: GetProductsService,
    private cartService: CartCountService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductsService
      .getProductDetails(this.productId)
      .subscribe((res) => {
        this.product = res;
      });

      this.cartService.cartCount$.subscribe(count => {
        this.cartCount = count;
      });
  }
  AddCart(productId:string) {
    let cartItems = [];
    const stringCartitem =localStorage.getItem('cartItems')
    cartItems = JSON.parse(stringCartitem ?? '[]') ;
    const isProductInCart = cartItems.some((item: { productId: string; }) => item.productId === productId);
    if (!isProductInCart) {
      cartItems.push({ productId});
      const newCount = this.cartCount + 1;
      this.cartService.updateCartCount(newCount);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }else{
      this.messageService.add({key: 'tl', severity:'info', summary: 'Product Already Added', detail: 'This product has been already added to your cart.'});
    }
   
  }
}

