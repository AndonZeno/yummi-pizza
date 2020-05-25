export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Vegetarian Pizza",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 3
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 3 },

  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 1
  }
]

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = []
  }
  res[food.section].push(food)
  return res
}, {})

export function formatPrice(price) {
  return price.toLocaleString("en-us", {
    style: "currency",
    currency: "USD"
  })
}
