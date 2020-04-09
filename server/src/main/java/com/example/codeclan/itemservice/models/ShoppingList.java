package com.example.codeclan.itemservice.models;

import java.util.ArrayList;
import java.util.List;

public class ShoppingList {

    private Long id;

    private String name;

    private List<FoodItem> foodItems;

    public ShoppingList(String name) {
        this.name = name;
        this.foodItems = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<FoodItem> getFoodItems() {
        return foodItems;
    }

    public void setFoodItems(List<FoodItem> foodItems) {
        this.foodItems = foodItems;
    }

    public void addFoodItem(FoodItem foodItem){
        this.foodItems.add(foodItem);
    }
    public void removeFoodItem(FoodItem foodItem){
        this.foodItems.remove(foodItem);
    }
}
