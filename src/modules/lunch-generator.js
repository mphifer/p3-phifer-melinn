class LunchGenerator {

  constructor(appetizer, meal, dessert){
    this.appetizer =  appetizer;
    this.meal = meal;
    this.dessert = dessert;
  }
}

//appetizers
let randomApp = () => {
let appArray = ['truffle fries','sweet potato fries','zucchini fries', 'goat cheese bites', 'calamari', 'potato chips','fried green tomatoes', 'hummus & pita', 'onion rings', 'parmesan fries'];
let i, j, k;
for (i = appArray.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = appArray[i]
  appArray[i] = appArray[j]
  appArray[j] = k
}
return appArray[0]
}

//main course
let randomMeal = () => {
let mealArray = ['turkey sandwich','blt sandwich','ham and cheese sandwich', 'brie grilled cheese', 'falafel sandwich', 'crab cake sandwich', 'grouper sandwich', 'fish tacos', 'tuna salad sandwich', 'italian sandwich'];
let i, j, k;
for (i = mealArray.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = mealArray[i]
  mealArray[i] = mealArray[j]
  mealArray[j] = k
}
return mealArray[0]
}

//dessert
let randomDessert = () => {
let dessertArray = ['chocolate cake','dark chocolate','vanilla cupcake', 'red velvet cupcake', 'strawberry cupcake', 'cheesecake', 'pumpkin cupcake', 'buttercream cupcake', 'raspberry cupcake', 'chocolate chip cookies'];
let i, j, k;
for (i = dessertArray.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = dessertArray[i]
  dessertArray[i] = dessertArray[j]
  dessertArray[j] = k
}
return dessertArray[0]
}

export const lunchGen = new LunchGenerator(randomApp(), randomMeal(), randomDessert());
