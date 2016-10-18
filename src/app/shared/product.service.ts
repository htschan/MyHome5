import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    products: FirebaseListObservable<any[]>;
    favorites: FirebaseListObservable<any[]>;
    shoppingitems: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.products = af.database.list('/products/Coop');
        this.favorites = af.database.list('/favorites');
        this.shoppingitems = af.database.list('/shoppinglist');
    }

    getProducts(): FirebaseListObservable<any[]> {
        return this.products;
    }



    // ======== Favorites ===========
    getFavorites(): FirebaseListObservable<any[]> {
        return this.favorites;
    }
    deleteFavorite(item: any) {
        this.favorites.remove(item);
    }
    addFavorite(item: any) {
        this.favorites.push({ Name: item.Name, Price: item.Price, Quantity: item.Quantity, Url: item.Url });
    }
    updateFavorite(key: string, item: any) {
        this.favorites.update(key, item);
    }

    // ======== Shoppinglist ===========
    getShoppinglist(): FirebaseListObservable<any[]> {
        return this.shoppingitems;
    }
    deleteShoppinglistItem(item: any) {
        this.shoppingitems.remove(item);
    }
    addShoppinglistItem(item: any) {
        this.shoppingitems.push({ Name: item.Name, Price: item.Price, Quantity: item.Quantity, Url: item.Url });
    }
    updateShoppinglistItem(key: string, item: any) {
        this.shoppingitems.update(key, item);
    }

}
