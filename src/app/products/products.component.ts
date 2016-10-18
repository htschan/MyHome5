import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: any[];

  constructor(private productService: ProductService) {
    productService.getProducts().subscribe(data => this.items = data);
  }

  ngOnInit() {
    console.log("OnInit: " + this.items);
  }

  select(item: any) {
    console.log("selected " + item.Name);
  }

  addToFavorite(item: any){
    this.productService.addFavorite(item);
  }
}
