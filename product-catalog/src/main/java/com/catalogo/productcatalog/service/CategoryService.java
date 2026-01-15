package com.catalogo.productcatalog.service;

import com.catalogo.productcatalog.entity.Category;
import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> getAllCategories();
    Optional<Category> getCategoryById(Long id);
    Category saveCategory(Category category);
    void deleteCategory(Long id);
    List<Category> searchCategories(String keyword); // <-- ESTE MÉTODO FALTA
    Category createCategory(Category category);
    Category updateCategory(Long id, Category category);
}