package com.example.codeclan.itemservice.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FoodItemTest {

    Category category;
    FoodItem foodItem;
    ShoppingList shoppingList;

    @Before
    public void before(){
        category = new Category("fridge");
        foodItem = new FoodItem("milk",1, category);
        shoppingList = new ShoppingList("asda");
    }

    @Test
    public void canGetName(){
        assertEquals("milk", foodItem.getName());
    }
    @Test
    public void canCheckStock(){
        assertEquals(1,foodItem.getStock());
    }
    @Test
    public void canCheckCategory(){
        assertEquals("fridge", foodItem.getCategory().getName());
    }
    @Test
    public void itemShouldStartWithNoList(){
        assertEquals(null, foodItem.getShoppingList());
    }
    @Test
    public void canAddToList(){
        foodItem.setShoppingList(shoppingList);
        assertEquals("asda",foodItem.getShoppingList().getName());
    }
}

