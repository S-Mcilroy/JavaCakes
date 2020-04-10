package com.example.codeclan.itemservice.repository;

import com.example.codeclan.itemservice.models.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {

    // if shopping list wasnt a class would it be possible to have food items show on a list by true or false?
    //if we use the booleon this might be what we use.
     List<FoodItem> findByShoppingListTrue();
     List<FoodItem> findByCategoryNameIgnoreCase(String name);
}
