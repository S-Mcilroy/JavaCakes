package com.example.codeclan.itemservice.components;

import com.example.codeclan.itemservice.models.Category;
import com.example.codeclan.itemservice.models.FoodItem;
import com.example.codeclan.itemservice.repository.CategoryRepository;
import com.example.codeclan.itemservice.repository.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CategoryRepository categoryRepository;

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

        Category spice = new Category("Spice Cupboard");
        categoryRepository.save(spice);

        Category tea = new Category("Tea Cupboard");
        categoryRepository.save(tea);

        Category fruit = new Category("Fruit Bowl");
        categoryRepository.save(fruit);

        FoodItem orangeJuice = new FoodItem("Orange Juice",1, fridge);
        foodItemRepository.save(orangeJuice);

        FoodItem tikka = new FoodItem("Tikka Mayo", 1, fridge);
        foodItemRepository.save(tikka);

        FoodItem mustard = new FoodItem("Mustard", 1, fridge);
        foodItemRepository.save(mustard);

        FoodItem buffalo = new FoodItem("Buffalo Wing Sauce", 1, fridge);
        foodItemRepository.save(buffalo);

        FoodItem bbq = new FoodItem("BBQ Sauce", 1, fridge);
        foodItemRepository.save(bbq);

        FoodItem mayo = new FoodItem("Mayonnaise", 1, fridge);
        foodItemRepository.save(mayo);

        FoodItem chilliSauce = new FoodItem("Chilli Sauce", 1, fridge);
        foodItemRepository.save(chilliSauce);

        FoodItem monster = new FoodItem("Monster Energy Drink", 3, fridge);
        foodItemRepository.save(monster);

        FoodItem irnBru = new FoodItem("Irn Bru", 1, fridge);
        foodItemRepository.save(irnBru);

        FoodItem dietirnBru = new FoodItem("Diet Irn Bru", 4, fridge);
        foodItemRepository.save(dietirnBru);

        FoodItem coffee = new FoodItem("Coffee", 1, fridge);
        foodItemRepository.save(coffee);

        FoodItem sDTomatoes = new FoodItem("Sun-dried Tomatoes", 1, fridge);
        foodItemRepository.save(sDTomatoes);

        FoodItem gherkins = new FoodItem("Gherkins", 1, fridge);
        foodItemRepository.save(gherkins);

        FoodItem beer = new FoodItem("The 1079 Project", 4, fridge);
        foodItemRepository.save(beer);

        FoodItem cider = new FoodItem("Cider", 2, fridge);
        foodItemRepository.save(cider);

        FoodItem pastaSauce = new FoodItem("Pasta Sauce", 1, fridge);
        foodItemRepository.save(pastaSauce);

        FoodItem onions = new FoodItem("Red Onions", 2, fridge);
        foodItemRepository.save(onions);

        FoodItem feta = new FoodItem("Feta", 1, fridge);
        foodItemRepository.save(feta);

        FoodItem cheese = new FoodItem("Cheese", 1, fridge);
        foodItemRepository.save(cheese);

        FoodItem spinach = new FoodItem("Spinach", 1, fridge);
        foodItemRepository.save(spinach);

        FoodItem icecream = new FoodItem("Ice Cream", 1, freezer);
        foodItemRepository.save(icecream);

        FoodItem peas = new FoodItem("Peas", 2, freezer);
        foodItemRepository.save(peas);

        FoodItem chips = new FoodItem("Chips", 4, freezer);
        foodItemRepository.save(chips);

        FoodItem bread = new FoodItem("Bread", 2, freezer);
        foodItemRepository.save(bread);

        FoodItem beans = new FoodItem("Baked Beans", 7, cupboard);
        foodItemRepository.save(beans);

        FoodItem soup = new FoodItem("Tomato Soup",1, cupboard);
        foodItemRepository.save(soup);

        FoodItem rice = new FoodItem("Rice",6, cupboard);
        foodItemRepository.save(rice);

        FoodItem tofu = new FoodItem("Tofu Soup",3, cupboard);
        foodItemRepository.save(tofu);

        FoodItem noodle = new FoodItem("Noodles",1, cupboard);
        foodItemRepository.save(noodle);

        FoodItem wraps = new FoodItem("Wraps",6, cupboard);
        foodItemRepository.save(wraps);

        FoodItem stir = new FoodItem("Stir Fry Mix",1, cupboard);
        foodItemRepository.save(stir);

        FoodItem gum = new FoodItem("Chewin Gum",6, cupboard);
        foodItemRepository.save(gum);

        FoodItem potatoes = new FoodItem("Sweet potatoes", 8, cupboard);
        foodItemRepository.save(potatoes);

        FoodItem spaghetti = new FoodItem("Spaghetti",1, cupboard);
        foodItemRepository.save(spaghetti);

        FoodItem pasta = new FoodItem("Pasta",3, cupboard);
        foodItemRepository.save(pasta);

        FoodItem grounds = new FoodItem("Coffee Grounds",1, cupboard);
        foodItemRepository.save(grounds);

        FoodItem chia = new FoodItem("Chia Seeds",1, cupboard);
        foodItemRepository.save(chia);

        FoodItem butterBeans = new FoodItem("Butter Beans",2, cupboard);
        foodItemRepository.save(butterBeans);

        FoodItem tinnedTomatoes = new FoodItem("Tinned Tomatoes",2, cupboard);
        foodItemRepository.save(tinnedTomatoes);

        FoodItem red = new FoodItem("Red Kidney Beans",2, cupboard);
        foodItemRepository.save(red);

        FoodItem mushroom = new FoodItem("Mushroom Soup",3, cupboard);
        foodItemRepository.save(mushroom);

        FoodItem banana = new FoodItem("Banana", 6, fruit);
        foodItemRepository.save(banana);

        FoodItem garlic = new FoodItem("Garlic",1, spice);
        foodItemRepository.save(garlic);

        FoodItem oregano = new FoodItem("Oregano",1, spice);
        foodItemRepository.save(oregano);

        FoodItem mixed = new FoodItem("Mixed Herbs",1, spice);
        foodItemRepository.save(mixed);

        FoodItem chillipepper = new FoodItem("Chilli Pepper",1, spice);
        foodItemRepository.save(chillipepper);

        FoodItem cumin = new FoodItem("Cumin",1, spice);
        foodItemRepository.save(cumin);

        FoodItem CrushedChillies = new FoodItem("Crushed Chillies",3, spice);
        foodItemRepository.save(CrushedChillies);

        FoodItem chilliPowder = new FoodItem("Chilli Powder",3, spice);
        foodItemRepository.save(chilliPowder);

        FoodItem blackPepper = new FoodItem("Black Pepper",3, spice);
        foodItemRepository.save(blackPepper);

        FoodItem paprika = new FoodItem("Paprika",2, spice);
        foodItemRepository.save(paprika);

        FoodItem tarragon = new FoodItem("Tarragon",1, spice);
        foodItemRepository.save(tarragon);

        FoodItem periperi = new FoodItem("Peri Peri Rub",1, spice);
        foodItemRepository.save(periperi);

        FoodItem cajun = new FoodItem("Cajun",1, spice);
        foodItemRepository.save(cajun);

        FoodItem fejitaSeasoning = new FoodItem("Fejita Seasoning",1, spice);
        foodItemRepository.save(fejitaSeasoning);

        FoodItem nutmeg = new FoodItem("Nutmeg",1, spice);
        foodItemRepository.save(nutmeg);

        FoodItem corianderGround = new FoodItem("Coriander Ground",1, spice);
        foodItemRepository.save(corianderGround);

        FoodItem corianderLeaf = new FoodItem("Coriander Leaf",1, spice);
        foodItemRepository.save(corianderLeaf);

        FoodItem seaSalt = new FoodItem("Sea Salt",1, spice);
        foodItemRepository.save(seaSalt);

        FoodItem tableSalt = new FoodItem("Table Salt",1, spice);
        foodItemRepository.save(tableSalt);

        FoodItem tahini = new FoodItem("Tahini",1, spice);
        foodItemRepository.save(tahini);

        FoodItem vinegar = new FoodItem("Vinegar",1, spice);
        foodItemRepository.save(vinegar);

        FoodItem ginger = new FoodItem("Ginger",2, spice);
        foodItemRepository.save(ginger);

        FoodItem choppedChilli = new FoodItem("Chopped Chilli",1, spice);
        foodItemRepository.save(choppedChilli);

        FoodItem choppedgarlic = new FoodItem("Chopped Garlic",1, spice);
        foodItemRepository.save(choppedgarlic);

        FoodItem flour = new FoodItem("FLour",1, spice);
        foodItemRepository.save(flour);

        FoodItem vegStock = new FoodItem("Vegetable Stock",11, spice);
        foodItemRepository.save(vegStock);

        FoodItem herbal = new FoodItem("Herbal Tea",20, tea);
        foodItemRepository.save(herbal);

        FoodItem yorkshire = new FoodItem("Yorkshire Tea",40, tea);
        foodItemRepository.save(yorkshire);

        FoodItem green = new FoodItem("Green Tea",30, tea);
        foodItemRepository.save(green);

        FoodItem lemongrass = new FoodItem("Lemongrass Tea",1, tea);
        foodItemRepository.save(lemongrass);

        FoodItem detox = new FoodItem("Detox Tea",5, tea);
        foodItemRepository.save(detox);

        FoodItem everyday = new FoodItem("Everyday Tea",205, tea);
        foodItemRepository.save(everyday);

        FoodItem earlgrey = new FoodItem("Earl Grey Tea",10, tea);
        foodItemRepository.save(earlgrey);

        FoodItem sugar = new FoodItem("Sugar",10, tea);
        foodItemRepository.save(sugar);

    }
}
