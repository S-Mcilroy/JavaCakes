package com.example.codeclan.itemservice.controller;

import com.example.codeclan.itemservice.models.Category;
import com.example.codeclan.itemservice.models.FoodItem;
import com.example.codeclan.itemservice.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories(){
        return new ResponseEntity<>(categoryRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity getCategory(@PathVariable Long id){
        return new ResponseEntity<>(categoryRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Category> postCategory(@RequestBody Category category){
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }
    @PatchMapping(value = "/{id}")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Category> deleteCategory(@PathVariable Long id) {
        Category found = categoryRepository.getOne(id);
        categoryRepository.delete(found);
        return new ResponseEntity<>(found, HttpStatus.OK);
    }
}
