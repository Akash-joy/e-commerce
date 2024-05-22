import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { GetCategoriesService } from 'src/services/get-categories.service';
import { GetProductsService } from 'src/services/get-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  categories:any[]=[];

  products:any[]=[];

  productAll:any[]=[];

  responsiveOptions: any[] =[];

  value!: number;

  SelectedCategories:any=localStorage.getItem('selectedCategory');

  constructor(private getCategoriesService: GetCategoriesService,private GetProductsService:GetProductsService,private router: Router) {}

  ngOnInit(): void {
    this.getCategoriesService.getCategories().subscribe((res) => {this.categories=res;});
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  if(this.SelectedCategories){
    this.displayProduct(this.SelectedCategories);
  }
  }

  displayProduct(category:string){
    this.SelectedCategories=category;
    localStorage.setItem('selectedCategory',this.SelectedCategories)
    this.GetProductsService.getProductBycat(category).subscribe((res)=>{
    this.products=res;
    })
  }
  getProductDetails(productId:string){
    this.router.navigate(['/productDetails', productId]);
  }

}
