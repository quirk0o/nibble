import React from "react";
import "./styles.css";
import Recipe from "./Recipe";

const carbonara = {
  title: "Spaghetti Carbonara",
  image:
    "https://www.budgetbytes.com/wp-content/uploads/2016/05/Spaghetti-Carbonara-Vs.jpg",
  time: "25 minutes",
  nutrition: {
    kcal: 537.43,
    protein: 24.23,
    carb: 67.53,
    fat: 18.18
  },
  steps: [
    {
      description:
        "cook according to package instructions; save 1/4 cup of water after cooking",
      ingredients: [
        {
          name: "spaghetti",
          amount: "340g"
        }
      ],
      time: "~9 min"
    },
    {
      ingredients: [
        { name: "bacon", amount: "85g" },
        { name: "garlic olive oil", amount: "1 tsp" }
      ],
      description:
        "cook in a large skillet over medium heat until crispy and remove to a plate"
    },
    {
      ingredients: [
        { name: "egg", amount: 3 },
        { name: "parmesan", amount: "3/4 c" },
        { name: "salt" },
        { name: "pepper" }
      ],
      description: "whisk together in a bowl"
    },
    {
      ingredients: [],
      description:
        "pour egg mixture over hot pasta and mix until creamy; add splash of cooking water if needed; adjust parmesan, salt and pepper"
    }
  ]
};

const poppyOatmeal = {
  title: "Poppy Oatmeal",
  image:
    "https://www.fodmap.pl/wp-content/uploads/2017/12/IMG_20171203_113431_510-1024x1024.jpg",
  time: "10 minutes",
  nutrition: {},
  steps: [
    {
      description:
        "bring to a boil and cook over low heat until creamy; transfer to a bowl",
      ingredients: [
        {
          name: "oatmeal",
          amount: "30 g"
        },
        {
          name: "quinoa flakes",
          amount: "15 g"
        },
        {
          name: "poppy seeds",
          amount: "6 g"
        },
        {
          name: "milk",
          amount: "250 ml"
        }
      ]
    },
    {
      ingredients: [
        { name: "walnut", amount: "5 g" },
        { name: "almond slice", amount: "5 g" }
      ],
      description: "roast in a skillet over medium heat; sprinkle over oatmeal"
    },
    {
      ingredients: [
        { name: "dried cranberry", amount: "10 g" },
        { name: "maple syrup", amount: "1 tbsp" }
      ],
      description: "add cranberries to oatmeal and drizzle with syrup"
    }
  ]
};

const sweetPotatoFries = {
  title: "Crispy Sweet Potato Fries",
  image:
    "https://cookieandkate.com/images/2010/12/crispy-baked-sweet-potato-fries-with-ketchup-1.jpg",
  time: "45 minutes",
  nutrition: {},
  steps: [
    {
      description:
        "preheat oven to 220 degrees; line a baking sheet with parchment paper"
    },
    {
      ingredients: [{ name: "sweet potato", amount: "0.5 kg" }],
      description:
        "peal and cut into fries about 0.5cm thick and transper to baking sheet"
    },
    {
      ingredients: [
        { name: "cornstarch", amount: "0.5 tbsp" },
        { name: "sweet paprika", amount: "1 tsp" },
        { name: "salt", amount: "1/4 tsp" },
        { name: "olive oil", amount: "1 tbsp" }
      ],
      description:
        "sprinkle cornstarch, paprika and salt over fries, drizzle with olive oil; toss until evenly coated"
    },
    {
      description: "bake fries for 20 mins on bottom rack; flip fries",
      time: "20 mins"
    },
    { description: "bake for 15 more minutes on top rack", time: "15 mins" }
  ]
};

const bakedSalmon = {
  title: "Baked Salmon in Foil",
  image:
    "https://www.wellplated.com/wp-content/uploads/2018/06/How-to-Bake-Salmon-in-Foil.jpg",
  time: "30 minutes",
  nutrition: {},
  steps: [
    {
      ingredients: [{ name: "salmon", amount: "0.5 kg" }],
      description: "bring to room temperature",
      time: "10 min"
    },
    {
      description:
        "heat oven to 190 degrees; line a baking sheet with a large piece of aluminum foil"
    },
    {
      ingredients: [
        { name: "fresh rosemary", amount: "1 sprig" },
        { name: "lemon (sliced)", amount: "1/4" }
      ],
      description:
        "place rosemary down the middle of baking sheet together with lemon slices; place salmon on top"
    },
    {
      ingredients: [
        { name: "olive oil", amount: "1 tbsp" },
        { name: "salt", amount: "1/2 tsp" },
        { name: "pepper", amount: "1/8 tsp" }
      ],
      description:
        "drizzle salmon with olive oil and sprinkle with salt and pepper, rub to coat"
    },
    {
      ingredients: [
        { name: "fresh rosemary", amount: "2 sprigs" },
        { name: "lemon (sliced)", amount: "1/4" },
        { name: "lemon juice", amount: "1/2 lemon" }
      ],
      description:
        "place rosemary and lemon slices on the salmon and drizzle with lemon juice"
    },
    {
      description:
        "fold aluminum foil over salmon with room for air; bake until almost cooked through",
      time: "15-20 min"
    },
    {
      description: "open foil; broil until cooked through (62 C)",
      time: "3 min"
    }
  ]
};

const chickenPaprikash = {
  title: "Chicken Paprikash",
  image:
    "https://img.buzzfeed.com/video-api-prod/assets/acd7f176baf544a4ac4cc922c61046bd/BFV5347_Chicken-Paprika_ThumbA.jpg?output-format=auto&output-quality=auto",
  time: "1 hour",
  nutrition: {},
  steps: [
    {
      ingredients: [
        { name: "garlic olive oil", amount: "1 tbsp" },
        { name: "chicken thigh", amount: 1 },
        { name: "salt", amount: "1 tsp" },
        { name: "pepper", amount: "1/2 tsp" }
      ],
      description:
        "heat oil over medium heat in a large pan, cook chicken, season with salt and pepper"
    },
    {
      ingredients: [{ name: "bell pepper (chopped)", amount: 2 }],
      description: "add to chicken, cook until slightly softened"
    },
    {
      ingredients: [
        { name: "sweet paprika", amount: "4 tbsp" },
        { name: "chili flakes", amount: "1/4 tsp" },
        { name: "chicken broth", amount: "1 c" },
        { name: "diced tomatoes", amount: "2 cans" }
      ],
      description: "add to pan and simmer for 40 minutes",
      time: "40 min"
    },
    {
      ingredients: [
        { name: "flour", amount: "1 tbsp" },
        { name: "sour cream", amount: "1 c" }
      ],
      description:
        "mix flour with a small amount of water then combine with sour cream; add a ladle of sauce to the mixture and stir"
    },
    {
      description: "add cream mixture to sauce, stir and simmer for 5 minutes",
      time: "5 min"
    }
  ]
};

const pinaColada = {
  title: "Piña Colada",
  image:
    "https://www.dominicancooking.com/wp-content/uploads/pina-colada-recipe-DSC8568-1.jpg",
  steps: [
    {
      ingredients: [
        { name: "pineapple (diced)", amount: "1 c" },
        { name: "white rum", amount: "1/6 c" },
        { name: "coconut cream", amount: "1 c" },
        { name: "sugar", amount: "1 tbsp" }
      ],
      description: "blend in a blender; serve with ice"
    }
  ]
};

const bananaBread = {
  title: "Banana Bread",
  time: "10 minutes",
  image:
    "https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-c-1200.jpg",
  steps: [
    {
      description: "preheat oven to 175°C"
    },
    {
      ingredients: [{ name: "ripe banana", amount: 3 }],
      description: "in a bowl mash until smooth"
    },
    {
      ingredients: [{ name: "butter (melted)", amount: "1/3 c" }],
      description: "melt in a microwave and mix with bananas"
    },
    {
      ingredients: [
        { name: "baking soda", amount: "1 tsp" },
        { name: "salt", amount: "pinch" },
        { name: "sugar", amount: "3/4 c" },
        { name: "egg (beaten)", amount: 1 },
        { name: "vanilla extract", amount: "1 tsp" },
        { name: "flour", amount: "1 1/2 c" }
      ],
      description:
        "mix baking soda and salt with bananas; add sugar, egg and vanilla extract; mix in flour"
    },
    {
      description:
        "pour into loaf pan; bake for 1 hour, until a toothpick comes out clean; let cool completely before serving",
      time: "1 h"
    }
  ]
};

const hollandaiseSauce = {
  title: "Blender Hollandaise Sauce",
  image:
    "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/01/Hollandaise-Sauce-4.jpg",
  time: "5 minutes",
  steps: [
    {
      ingredients: [
        { name: "egg", amount: 3 },
        { name: "lemon juice", amount: "1 tbsp" },
        { name: "Dijon mustard", amount: "1 tsp" },
        { name: "salt", amount: "1/4 tsp" },
        { name: "cayenne pepper", amount: "pinch" }
      ],
      description: "blend in a high-powered blender",
      time: "5 sec"
    },
    {
      ingredients: [{ name: "butter (melted)", amount: "1/2 c" }],
      description:
        "while streaming butter into the blender, keep blending on medium-high until it's emulsified"
    }
  ]
};

const poachedEgg = {
  title: "Poached Egg",
  image:
    "https://www.simplyrecipes.com/wp-content/uploads/2014/09/poached-egg-horiz-b-1800-1024x683.jpg",
  time: "10 minutes",
  steps: [
    {
      description:
        "heat water in a saucepan on high until it reaches a boil and then lower heat until water is at a simmer; add a splash of vinegar"
    },
    {
      ingredients: [{ name: "egg", amount: 1 }],
      description:
        "crack egg into a fine mesh sieve and strain out the more liquid whites;"
    },
    {
      description:
        "stir water to create and drop egg in center; turn off heat, cover pan and simmer",
      time: "4 min"
    }
  ]
};

const ovenFajitas = {
  title: "Oven Fajitas",
  image:
    "https://www.budgetbytes.com/wp-content/uploads/2013/02/Easy-Oven-Fajitas-above.jpg",
  time: "55 minutes",
  steps: [
    {
      description: "preheat oven to 200 C"
    },
    {
      ingredients: [
        { name: "onion", amount: 1 },
        { name: "bell pepper", amount: 3 },
        { name: "chicken", amount: "0.5 kg" }
      ],
      description:
        "slice all ingredients into thin strips and place in a casserole dish"
    },
    {
      ingredients: [{ name: "vegetable oil", amount: "2 tbsp" }],
      description: "drizzle chicken and veggies with oil"
    },
    {
      ingredients: [
        { name: "chili powder", amount: "1 tbsp" },
        { name: "paprika", amount: "1/2 tbsp" },
        { name: "onion powder", amount: "1/2 tsp" },
        { name: "garlic powder", amount: "1/4 tsp" },
        { name: "cumin", amount: "1/4 tsp" },
        { name: "cayenne pepper", amount: "1/8 tsp" },
        { name: "sugar", amount: "1 tsp" },
        { name: "salt", amount: "1/2 tsp" }
      ],
      description:
        "mix all spices in a small bowl and sprinkle over chicken and veggies; toss all ingredients until evenly coated"
    },
    {
      description: "bake",
      time: "40 min"
    },
    {
      ingredients: [
        { name: "lime", amount: "1/2" },
        { name: "sour cream", amount: "1/2 c" }
      ],
      description:
        "squeeze lemon juice over the meet and veggies; top with sour cream"
    }
  ]
};

const chiliPowder = {
  title: "Chili Powder",
  image:
    "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/16/89/2/picnYA3av.jpg",
  time: "5 minutes",
  steps: [
    {
      ingredients: [
        { name: "paprika", amount: "2 tsbp" },
        { name: "oregano", amount: "2 tsp" },
        { name: "cumin", amount: "1 1/4 tsp" },
        { name: "garlic powder", amount: "1 1/4 tsp" },
        { name: "cayenne pepper", amount: "1 1/4 tsp" },
        { name: "onion powder", amount: "3/4 tsp" }
      ],
      description: "mix all ingredients"
    }
  ]
};

export default function App() {
  const recipe = chiliPowder;
  return (
    <div className="App">
      <Recipe {...recipe} />
    </div>
  );
}
