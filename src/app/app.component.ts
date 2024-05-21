import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { GetUserService } from 'src/services/get-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  items: MenuItem[] =[];


  constructor(private getUserService:GetUserService){}

  ngOnInit() {
     
  }
}
