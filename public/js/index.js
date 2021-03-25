var weight;
var height;
var bmr;
var tdee;
var totalCalories;
var totalProtein;
var totalFats;
var totalCarbs;
var shoppingList[];

function calculateBMI(weight, weightUnits, height, heightUnits) {
	
	if(weightUnits == "lbs"){
		this.weight = weight * 0.4535923;
		// result in kg
	}
	
	if(heightUnits == "feet"){
		// feet and inches converted to feet as a decimal in html
		this.height = height * 0.3048;
		// result in metres
	}
		
	if(heightUnits == "cm"){
		this.height =  height/100;
		// result in metres
	}
	
	var bmi = weight/(height*height);
	return bmi;
}

// calculateBMI must be run before this function
function calculateBMR(gender,age){
    if(gender = "male"){
		bmr = 10*weight + 625*height -5*age +5;
	}
	if(gender = "female"){
		bmr = 10*weight + 625*height -5*age -161;
	}
}

function calculateTDEE(activityLevel){
	
	if(activityLevel == "sedentary"){  // little or no excercise
		tdee = bmr*1.2;
	}
	if(activityLevel == "light"){      // 1-3 days excercise per week 
		tdee = bmr*1.375;
	}
	if(activityLevel == "moderate"){   // 3-5 days excercise per week 
		tdee = bmr*1.55;
	}
	if(activityLevel == "active"){     // 6-7 days excercise per week 
		tdee = bmr*1.725;
	}
	if(activityLevel == "veryActive"){ // excercise twice a day
		tdee = bmr*1.9;
	}
	
}

function shoppingList(name, quanity){
	var item = {name: name, quantity: quantity};
	array.push(item);
}

function mealPlan(calories, protein, carbs, fats){
	totalCalories = totalCalories + calories;
	totalProtein = totalProtein + protein;
	totalCarbs = totalCarbs + carbs;
	totalFats = totalFats + fats;
}