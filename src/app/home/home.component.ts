import { Component, OnInit } from '@angular/core';
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

  responsiveOptions: any[] =[];

  value!: number;

  SelectedCategories:string='';

  constructor(private getCategoriesService: GetCategoriesService,private GetProductsService:GetProductsService) {}

  ngOnInit(): void {
    this.getCategoriesService.getCategories().subscribe((res) => {this.categories=res;console.log(res)});
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
  }

  displayProduct(category:string){
    this.SelectedCategories=category;
    this.GetProductsService.getProductBycat(category).subscribe((res)=>{
    this.products=res;
      
    })

  }
}
