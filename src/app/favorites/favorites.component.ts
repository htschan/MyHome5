import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  items: any[];

  constructor(private productService: ProductService) {
    productService.getFavorites().subscribe(data => this.items = data);
  }

  ngOnInit() {
  }

  delete(item: any){
    this.productService.deleteFavorite(item);
  }
}
