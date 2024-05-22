import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from 'src/services/get-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: any;

  product:any;

  constructor(private route: ActivatedRoute,private getProductsService:GetProductsService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductsService.getProductDetails(this.productId).subscribe(res=>{
    this.product=res;
    console.log(res)
    })
  }

}
