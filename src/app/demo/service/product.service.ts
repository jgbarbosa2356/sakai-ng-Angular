import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {

     }
         baseURL = "https://ancient-troll-v9499vw6vvj2rxq-3000.app.github.dev/"


    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
    }

    getProducts() {
        return this.http.get<any>(this.baseURL + "products" )
            .toPromise()
            .then(res => {  
                return res as Product[]})
            
    }

   addProduct(product: Product) {
        return this.http.post<any>(this.baseURL + 'products', product)
            .toPromise()
            .then(res => {
                console.log('produto adicionado', res);
                return res as Product
            })
    }

    
    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }
}
