import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '/api/products';  // Usar proxy, no localhost:8080

  constructor(private http: HttpClient) { }

  getProducts(categoryId?: number): Observable<Product[]> {
    if (categoryId && categoryId > 0) {
      return this.http.get<Product[]>(`${this.apiUrl}?categoryId=${categoryId}`);
    }
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${categoryId}`);
  }
}