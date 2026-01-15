package com.catalogo.productcatalog.service;

import com.catalogo.productcatalog.entity.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    // M?todos del controlador
    List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    Product saveProduct(Product product);
    void deleteProduct(Long id);
    List<Product> getProductsByCategory(Long categoryId);
    List<Product> searchProducts(String keyword);
    
    // M?todo adicional para actualizar (si el controlador lo usa como update)
    Product updateProduct(Long id, Product product);
}
