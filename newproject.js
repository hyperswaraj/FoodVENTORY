
// document.getElementById('btn').addEventListener('click',myfun(){
//     let ing1=document.getElementById('ingredient1').value;
//     let ing2=document.getElementById('ingredient2').value;
//     let ing3=document.getElementById('ingredient3').value;

// console.log(ing1);

// })
// document.addEventListener('DOMContentLoaded',()=>{
// document.getElementById('btn').addEventListener('mouseover',console.log("click hua"))});
add = document.getElementById('btn');
add.addEventListener("click", () => {
    console.log("submit pe click hua");
    let ing1 = document.getElementById("ingredient1").value;
    let ing2 = document.getElementById("ingredient2").value;
    let ing3 = document.getElementById("ingredient3").value;
    console.log(ing1);
    console.log(ing2);
    console.log(ing3);
    if ((ing1 == "rice" || ing1 == "dal") && (ing2 == "rice" || ing2 == "dal")) {
        document.getElementById('rec').innerHTML = "KHICHDI RECIEPE:Wash the rice and both the dals lentils welL and soak them in enough water to cover them for at least 30 minutes or up to two hours This helps them cook faster"
       +" Heat ghee in the pressure cooker and add cumin seeds peppercorns, bayleaves, cloves, cardamoms, ginger and green chilli.Saute for two minutes on medium flame"
       +" Drain all the water from the rice and lentils and add them to the cooker.Dry roast them for 4  5 minutes, till you can smell a nutty aroma.Dont worry if some of the rice and lentils stick to the bottom of the pan, but be careful not to burn them."
        +"Add all the veggies, turmeric, chilli powder, salt and water to the cooker and pressure cook for 6  7 whistles.Let the pressure release naturally.Once all the pressure has released, open the pressure cooker and mix well.After mixing, the rice and dal should have broken down and should look slightly creamy.Check for salt, and serve hot  ghee, fried potatoes, tomato chutney or just yogurt";
    }
    else if ((ing1 == "rice" || ing2 == "rice") && (ing2 != "dal" && ing2 != "dal")) {
        document.getElementById('rec').innerHTML = " FRIED RICE:Mix sliced onions and fry continue till onion turns golden in color."
       +" Mix cooked rice, salt, spices and food color."
      +"  Pour 1 tbsp of ghee all over and mix very well. Keep the flame medium high and half cover the wok. Cook for 2-3 minutes and stir in between very carefully."
      +"  Make sure, you need to keep each and every grain of rice separate. Garnish with freshly chopped coriander and some brown onions."
       +" Serve hot with roasted papad, pickle and raita of your choice.";
    }
    else {
        document.getElementById('rec').innerHTML ="CURRY RECIEPE:Soak Lentils: Rinse lentils and leave to soak in plenty of water for 1 hour. Drain in colander."
        +"Heat ghee/oil in a heavy based saucepan over high heat. Add green chillies and fry for a minute until starting to blister."
        +"Add onions and fry until softened."
        +"Lower heat to medium, add garlic, ginger and curry leaves. Cook for 1 minute until garlic starts to turn golden and smells amazing."
        +"Add tomatoes and cumin, cook until tomatoes start to break down and thicken to a paste - about 2 minutes."
        +"Add lentils, water, tumeric and salt. Stir, bring to simmer, cover and simmer gently for 1 hour. Stir two or three times during the hour."
        +"Remove lid and simmer gently for 30 minutes to thicken, stirring every now and then. The dal is ready when it has a consistency like porridge - some lentils should be intact but some have broken down to thicken the sauce.";
    }

})
