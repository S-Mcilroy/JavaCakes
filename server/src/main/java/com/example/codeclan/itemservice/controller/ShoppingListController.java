//package com.example.codeclan.itemservice.controller;
//
//import com.example.codeclan.itemservice.models.Category;
//import com.example.codeclan.itemservice.models.ShoppingList;
//import com.example.codeclan.itemservice.repository.ShoppingListRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping(value = "/shoppingLists")
//public class ShoppingListController {
//    @Autowired
//    ShoppingListRepository shoppingListRepository;
//
//    @GetMapping
//    public ResponseEntity<List<ShoppingList>> getAllShoppingLists(){
//        return new ResponseEntity<>(shoppingListRepository.findAll(), HttpStatus.OK);
//    }
//    @GetMapping(value = "/{id}")
//    public ResponseEntity getShoppingList(@PathVariable Long id){
//        return new ResponseEntity<>(shoppingListRepository.findById(id), HttpStatus.OK);
//    }
//    @PostMapping
//    public ResponseEntity<ShoppingList> postShoppingList(@RequestBody ShoppingList shoppingList){
//        shoppingListRepository.save(shoppingList);
//        return new ResponseEntity<>(shoppingList, HttpStatus.OK);
//    }
//    @PatchMapping(value = "/{id}")
//    public ResponseEntity<ShoppingList> updateShoppingList(@RequestBody ShoppingList shoppingList){
//        shoppingListRepository.save(shoppingList);
//        return new ResponseEntity<>(shoppingList, HttpStatus.OK);
//    }
//    @DeleteMapping(value = "/{id}")
//    public ResponseEntity<ShoppingList> deleteShoppingList(@PathVariable Long id) {
//        ShoppingList found = shoppingListRepository.getOne(id);
//        shoppingListRepository.delete(found);
//        return new ResponseEntity<>(found, HttpStatus.OK);
//    }
//}
