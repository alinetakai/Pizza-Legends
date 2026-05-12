window.PizzaTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
}

window.Pizzas = {
  "s001": {
    name: "Slice Samurai",
    description: "Pizza desc here",
    type: PizzaTypes.spicy,
    src: "images/characters/pizzas/s001.png",
    icon: "images/icons/spicy.png",
    actions: [ "saucyStatus", "clumsyStatus", "damage1" ],
  },
  "s002": {
    name: "Bacon Brigade",
    description: "A salty warrior who fears nothing",
    type: PizzaTypes.spicy,
    src: "images/characters/pizzas/s002.png",
    icon: "images/icons/spicy.png",
    actions: [ "damage1", "saucyStatus", "clumsyStatus" ],
  },
  "v001": {
    name: "Call Me Kale",
    description: "Green, vibrant, and impossible to ignore.",
    type: PizzaTypes.veggie,
    src: "images/characters/pizzas/v001.png",
    icon: "images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "v002": {
    name: "Archie Artichoke",
    description: "Strangely green, strangely delicious",
    type: PizzaTypes.veggie,
    src: "images/characters/pizzas/v002.png",
    icon: "images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "f001": {
    name: "Portobello Express",
    description: "It's not the last of us.",
    type: PizzaTypes.fungi,
    src: "images/characters/pizzas/f001.png",
    icon: "images/icons/fungi.png",
    actions: [ "damage1" ],
  },
  "f002": {
    name: "Say Shitake",
    description: "Just one piece and you'll say: shiitake!",
    type: PizzaTypes.fungi,
    src: "images/characters/pizzas/f002.png",
    icon: "images/icons/fungi.png",
    actions: [ "damage1" ],
  }
}