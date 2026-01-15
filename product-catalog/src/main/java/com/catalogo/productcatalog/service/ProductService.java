package com.catalogo.productcatalog.service;

import com.catalogo.productcatalog.entity.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    Product saveProduct(Product product);
    void deleteProduct(Long id);
    List<Product> getProductsByCategory(Long categoryId);
    List<Product> searchProducts(String keyword);
    Product updateProduct(Long id, Product product);
    
    // AGREGAR ESTE MÉTODO:
    List<Product> getProductsWithLowStock(int threshold);
}