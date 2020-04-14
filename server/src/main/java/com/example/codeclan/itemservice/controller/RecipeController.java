package com.example.codeclan.itemservice.controller;

import com.example.codeclan.itemservice.models.Recipe;
import com.example.codeclan.itemservice.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/recipes")
public class RecipeController {
    @Autowired
    RecipeRepository recipeRepository;

    @GetMapping(value = "/{id}")
    public ResponseEntity getRecipe(@PathVariable Long id){
        return new ResponseEntity<>(recipeRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Recipe> postRecipe(@RequestBody Recipe recipe){
        recipeRepository.save(recipe);
        return new ResponseEntity<>(recipe, HttpStatus.OK);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Recipe> deleteRecipe(@PathVariable Long id) {
        Recipe found = recipeRepository.getOne(id);
        recipeRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<Recipe>> getAllRecipe(){
        return new ResponseEntity<>(recipeRepository.findAll(), HttpStatus.OK);
    }
}
