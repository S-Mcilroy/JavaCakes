package com.example.codeclan.itemservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "food_items")
public class FoodItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "stock")
    private int stock;
    @JsonIgnoreProperties("foodItems")
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
    @Column(name = "shopping_list")
    private boolean shoppingList;


    public FoodItem(String name, int stock, Category category) {
        this.name = name;
        this.stock = stock;
        this.category = category;
        this.shoppingList = false;

    }
    public FoodItem(){}


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

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public boolean isShoppingList() {
        return shoppingList;
    }

    public void setShoppingList(boolean shoppingList) {
        this.shoppingList = shoppingList;
    }

    public void putOnShoppingList(){
        this.shoppingList = true;
    }
    public void takeOffShoppingList(){
        this.shoppingList = false;
    }
}
