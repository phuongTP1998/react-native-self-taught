const menu = [
  {
    id : 1,
    category : "Hamburger",
    subText: "Sandwich",
    data: [
      {
        title: "Crispy onion rings cheese",
        description: "Kinda messy but so worth",
        image: require('../assets/burger-1.png'),
        rate: 4
      },
      {
        title: "Beef with hummus and fried onion",
        description: "Crispy on the outside and packed with flavor",
        image: require('../assets/burger-2.png'),
        rate: 5          
      }
    ] 
  },
  {
    id: 2,
    category: "Spaghetti",
    subText: "Pasta",
    data: [
      {
        title: "Carbonara",
        description: "Made with egg, hard cheese, guanciale (or pancetta), and pepper",
        image: require('../assets/cabonara.png'),
        rate: 3
      },
      {
        title: "Gronsaker",
        description: "Another kind of pasta i think",
        image: require('../assets/gronsaker.jpg'),
        rate: 5
      }
    ] 
  }
]

export default menu;