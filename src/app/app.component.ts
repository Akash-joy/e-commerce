import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { CartCountService } from 'src/services/cart-count.service';
import { GetUserService } from 'src/services/get-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerce';

  cartCount!: number;

  searchValue!: string;

  constructor(
    private getUserService: GetUserService,
    private cartService: CartCountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });

    const initialCount = +(localStorage.getItem('cartCount') ?? 0);
    this.cartService.updateCartCount(initialCount);
  }
  navigateTocard() {
    this.router.navigate(['/card']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  onSearchChange(){
    this.router.navigate(['/home'], { queryParams: { search: this.searchValue } });
  }
}
