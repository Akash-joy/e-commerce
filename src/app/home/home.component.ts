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

  products: any[]=[];

  responsiveOptions: any[] =[];

  value!: number;
    
  categories: any[] = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 }
  ];

  constructor(private getCategoriesService: GetCategoriesService,private GetProductsService:GetProductsService) {}

  ngOnInit(): void {
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
  this.getCategoriesService.getCategories().subscribe((res) => {
    this.categories = res.map(category => ({ name: category, value: category })); 
  });
    this.GetProductsService.getAllProducts().subscribe((res) => {this.products=res;console.log(res)});

  }

  
}
