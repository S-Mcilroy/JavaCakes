package com.example.codeclan.itemservice.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CategoryTest {

    Category category;
    FoodItem foodItem;

    @Before
    public void before(){
        category = new Category("fridge");
        foodItem = new FoodItem("milk",1, category);

    }

    @Test
    public void canGetName(){
        assertEquals("fridge", category.getName());
    }

    @Test
    public void itemsStartEmpty() {
        assertEquals(0, category.getFoodItems().size());
    }

    @Test
    public void canAddFood() {
        category.addItem(foodItem);
        assertEquals(1, category.getFoodItems().size());
    }

    @Test
    public void canRemoveFood() {
        category.addItem(foodItem);
        category.removeItem(foodItem);
        assertEquals(0,category.getFoodItems().size());
    }
}
