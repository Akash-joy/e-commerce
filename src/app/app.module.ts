import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ListboxModule } from 'primeng/listbox';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component'; 
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
     BadgeModule, 
     AvatarModule, 
     InputTextModule, 
     RippleModule, 
     CommonModule,
     TabViewModule,
     ImageModule,
     CarouselModule,
      ButtonModule,
      TagModule,
      ListboxModule,
      ReactiveFormsModule,
      FormsModule,
      CardModule,
      RatingModule,
      ToastModule,
      BrowserAnimationsModule,
      PasswordModule
        
       
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
