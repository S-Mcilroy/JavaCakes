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

        Category cupboard = new Category("Cupboard");
        categoryRepository.save(cupboard);

        FoodItem milk = new FoodItem("Milk",3, fridge);
        foodItemRepository.save(milk);

        FoodItem lemonade = new FoodItem("Lemonade", 1, fridge);
        foodItemRepository.save(lemonade);

        FoodItem beans = new FoodItem("Beans", 2, cupboard);
        foodItemRepository.save(beans);

        FoodItem soup = new FoodItem("Soup",2, cupboard);
        foodItemRepository.save(soup);

        FoodItem bread = new FoodItem("Bread", 1, cupboard);
        foodItemRepository.save(bread);

        FoodItem yoghurt = new FoodItem("Yoghurt", 1, fridge);
        foodItemRepository.save(yoghurt);

        FoodItem cheese = new FoodItem("Cheese", 1, fridge);
        foodItemRepository.save(cheese);

        FoodItem icecream = new FoodItem("Ice Cream", 1, freezer);
        foodItemRepository.save(icecream);

        FoodItem peas = new FoodItem("Peas", 2, freezer);
        foodItemRepository.save(peas);

        FoodItem chips = new FoodItem("Chips", 4, freezer);
        chips.putOnShoppingList();
        foodItemRepository.save(chips);



    }
}
