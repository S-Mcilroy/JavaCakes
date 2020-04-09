package com.example.codeclan.itemservice.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ShoppingListTest {

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
        assertEquals("asda", shoppingList.getName());
    }

    @Test
    public void itemsStartEmpty() {
        assertEquals(0, shoppingList.getFoodItems().size());
    }

    @Test
    public void canAddFood() {
        shoppingList.addFoodItem(foodItem);
        assertEquals(1, shoppingList.getFoodItems().size());
    }

    @Test
    public void canRemoveFood() {
        shoppingList.addFoodItem(foodItem);
        shoppingList.removeFoodItem(foodItem);
        assertEquals(0,shoppingList.getFoodItems().size());
    }
}
