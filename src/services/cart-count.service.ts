import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {
  
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();


  constructor() { 
    const initialCount = +(localStorage.getItem('cartCount') ?? 0);
    this.cartCountSubject.next(initialCount);
  }

  updateCartCount(count: number) {
    localStorage.setItem('cartCount', count.toString());
    this.cartCountSubject.next(count);
  }
}
