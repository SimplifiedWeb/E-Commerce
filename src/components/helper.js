import { flash_sales_data } from "../Data/Flash_Sales.js";
import { computer_tech_data } from "../Data/Computer_And_Tech.js";
import { electronics_data } from "../Data/Electronics-Json_Data.js";
import { animals_pets_data } from "../Data/Animals_And_Pets";
import { tools_equipment_data } from "../Data/Equipment_And_Tools";
import { home_interior_data } from "../Data/Home_Interior_Json_Data";
import { men_clothing_data } from "../Data/Men_Clothes_Json_Data";
import { women_clothing_data } from "../Data/Women_Clothes_Json_Data";
import { sports_outdoors_data } from "../Data/Sports_And_OutDoors";
import { smartPhones_data } from "../Data/SmartPhones-Json_Data";
import { other_products_data } from "../Data/Other_Products";

// Function to select a random object from an array
const getRandomObject = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate a random object for a given category
const getRandomCategoryObject = (categoryData) => getRandomObject(categoryData);

// Function to generate random objects for multiple categories
// const getRandomObjectsForCategories = (...categories) =>
//   categories.map((category) => getRandomCategoryObject(category));

// Categories mapped to their respective data arrays
const categoriesMap = {
  flash: flash_sales_data,
  computerTech: computer_tech_data,
  electronics: electronics_data,
  animalsPets: animals_pets_data,
  toolsEquipment: tools_equipment_data,
  homeInterior: home_interior_data,
  menClothing: men_clothing_data,
  womenClothing: women_clothing_data,
  sportsOutdoors: sports_outdoors_data,
  smartphones: smartPhones_data,
  otherProducts: other_products_data,
};

// Randomly select one object from each category
// const randomObjects = getRandomObjectsForCategories(
//   categoriesMap.flash,
//   categoriesMap.computerTech,
//   categoriesMap.electronics,
//   categoriesMap.animalsPets,
//   categoriesMap.toolsEquipment,
//   categoriesMap.homeInterior,
//   categoriesMap.menClothing,
//   categoriesMap.womenClothing,
//   categoriesMap.smartphones,
//   categoriesMap.sportsOutdoors,
//   categoriesMap.otherProducts
// );
// Array to store randomly selected objects
export const randomObjects = [];

// Randomly select one object from each category and store in the array
Object.values(categoriesMap).forEach((categoryData) => {
  randomObjects.push(getRandomCategoryObject(categoryData));
});
