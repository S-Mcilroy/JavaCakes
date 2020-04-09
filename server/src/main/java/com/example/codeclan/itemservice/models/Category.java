package com.example.codeclan.itemservice.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "categories")
public class Category {

    private Long id;

    private String name;

    private List<FoodItem> fooditems;

    public Category(String name) {
        this.name = name;
        this.fooditems = new ArrayList<>();
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

    public List<FoodItem> getFooditems() {
        return fooditems;
    }

    public void setFooditems(List<FoodItem> fooditems) {
        this.fooditems = fooditems;
    }

    public void addItem(FoodItem fooditem){
        this.fooditems.add(fooditem);
    }
    public void removeItem(FoodItem fooditem){
        this.fooditems.remove(fooditem);
    }
}
