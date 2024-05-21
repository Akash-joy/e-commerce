import { Component, OnInit } from '@angular/core';
import { GetCategoriesService } from 'src/services/get-categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private getCategoriesService:GetCategoriesService) { }

  ngOnInit(): void {
    this.getCategoriesService.getCategories().subscribe((res=>{console.log(res)}))
  }

}
