import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  filteredProducts: any[] = [];

  searchTerm!:string;



  SelectedCategories:any=localStorage.getItem('selectedCategory');

  constructor(private getCategoriesService: GetCategoriesService,private GetProductsService:GetProductsService,
    private router: Router, private route: ActivatedRoute) {}

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

  this.route.queryParams.subscribe(params => {
    const searchTerm = params['search'];
    this.searchTerm=searchTerm;
    if (searchTerm) {
      this.fetchData(searchTerm);
    }else{
      this.displayProduct(this.SelectedCategories);
    }
  });
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
  fetchData(searchTerm: string) {
    this.GetProductsService.getAllProducts().subscribe((res) => {
      this.filteredProducts = res.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.products =this.filteredProducts;
    });
  }
  
}
