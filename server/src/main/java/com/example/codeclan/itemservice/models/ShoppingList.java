//package com.example.codeclan.itemservice.models;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//@Entity
//@Table(name = "shopping_list")
//public class ShoppingList {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    @Column(name = "name")
//    private String name;
//
//    private List<FoodItem> foodItems;
//
//    public ShoppingList(String name) {
//        this.name = "Shopping List";
//        this.foodItems = new ArrayList<>();
//    }
//    public ShoppingList(){}
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public List<FoodItem> getFoodItems() {
//        return foodItems;
//    }
//
//    public void setFoodItems(List<FoodItem> foodItems) {
//        this.foodItems = foodItems;
//    }
//
//    public void addFoodItem(FoodItem foodItem){
//        this.foodItems.add(foodItem);
//    }
//
//
//    public void removeFoodItem(FoodItem foodItem){
//        this.foodItems.remove(foodItem);
//    }
//}
