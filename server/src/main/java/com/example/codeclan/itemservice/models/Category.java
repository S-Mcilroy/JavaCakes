package com.example.codeclan.itemservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @JsonBackReference
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "category")
    private List<FoodItem> foodItems;

    public Category(String name) {
        this.name = name;
        this.foodItems = new ArrayList<>();
    }
    public Category(){
    };

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

    public void setFoodItems(List<FoodItem> fooditems) {
        this.foodItems = fooditems;
    }

    public void addItem(FoodItem fooditem){
        this.foodItems.add(fooditem);
    }
    public void removeItem(FoodItem fooditem){
        this.foodItems.remove(fooditem);
    }
}
