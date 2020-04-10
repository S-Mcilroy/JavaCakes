package com.example.codeclan.itemservice.components;

import com.example.codeclan.itemservice.models.Category;
import com.example.codeclan.itemservice.models.FoodItem;
//import com.example.codeclan.itemservice.models.ShoppingList;
import com.example.codeclan.itemservice.repository.CategoryRepository;
import com.example.codeclan.itemservice.repository.FoodItemRepository;
//import com.example.codeclan.itemservice.repository.ShoppingListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CategoryRepository categoryRepository;
//    @Autowired
//    ShoppingListRepository shoppingListRepository;
    @Autowired
    FoodItemRepository foodItemRepository;

    public DataLoader(){

    }
    public void run(ApplicationArguments args){
        Category fridge = new Category("Fridge");
        categoryRepository.save(fridge);

        Category freezer = new Category("Freezer");
        categoryRepository.save(freezer);

        FoodItem milk = new FoodItem("Milk",3, fridge);
        foodItemRepository.save(milk);

        FoodItem lemonade = new FoodItem("Lemonade", 1, fridge);
        foodItemRepository.save(lemonade);

        FoodItem chips = new FoodItem("Chips", 4, freezer);
        chips.putOnShoppingList();
        foodItemRepository.save(chips);


    }
}
