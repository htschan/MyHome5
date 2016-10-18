import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
  items: any[];

  constructor(private productService: ProductService) {
    productService.getShoppinglist().subscribe(data => this.items = data);
  }

  ngOnInit() {
  }

  delete(item: any) {
    this.productService.deleteShoppinglistItem(item);
  }
}
