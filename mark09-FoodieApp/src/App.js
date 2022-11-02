import React from "react";
import "./styles.css";
import { useState } from "react";

const heroImg = <img src="food.svg" alt="hero-img" />;

const database = {
  Indian: [
    {
      title: "Biryani",
      description:
        "This flavorful rice dish packs quite a punch, although the exact spice mix can vary from one region or state to another.",
      rating: "5/5"
    },
    {
      title: "Matar Paneer",
      description:
        "Paneer is a soft cheese that originated in India.Nevertheless, there is no denying that matar paneer is one of the most requested options.",
      rating: "4.9/5"
    },
    {
      title: "Masala Dosa",
      description:
        "This dish hails from Southern India but is a fan favorite throughout the country. ",
      rating: "4.8/5"
    }
  ],
  Italian: [
    {
      title: "Pizza",
      description:
        "This traditional Italian food is made of flattened round dough topped with cheese, and tomatoes, and additionally garnished with basil, olives, and oregano.",
      rating: "5/5"
    },
    {
      title: "Spaghetti",
      description:
        "The most famous Italian pasta – Long and thin traditional Italian pasta",
      rating: "4.8/5"
    },
    {
      title: "Ragu Alla Bolognese",
      description:
        "Ragu Alla Bolognese, or Bolognese sauce, is considered to be the national dish of Italy since it is used widely in Italian cuisine with many traditional Italian dishes.",
      rating: "4.5/5"
    }
  ],
  Chinese: [
    {
      title: "Fried Rice",
      description:
        "Chinese fried rice is a complete meal that feeds the entire family.",
      rating: "5/5"
    },
    {
      title: "Chow Mein",
      description:
        "One of the staples in every home, noodles are not just a kid's favourite snack to binge on but are also equally loved by adults.",
      rating: "4.8/5"
    },
    {
      title: "Honey Chilli Potato",
      description:
        "The quintessential Indo-Chinese snack! Honey chilli potato is what you'll find at every Chinese van in and around north India.",
      rating: "4.5/5"
    }
  ]
};

// var foodDB = Object.keys(database);

export default function App() {
  const [cuisineList, setcuisine] = useState(database.Indian);

  function clickEventHandler(event) {
    var details = database[event.target.innerHTML];
    setcuisine(details);
  }

  function showDetails(food) {
    var title = food.title;
    var description = food.description;
    var rating = food.rating;

    var listItem = (
      <li>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="rating">Rating: {rating}</p>
        </div>
      </li>
    );
    return listItem;
  }

  return (
    <div className="App">
      <header>{heroImg}</header>
      <h1>🍴 Food Recommendation App </h1>
      <h3>Select any type to get started </h3>
      <button onClick={clickEventHandler}>Indian</button>
      <button onClick={clickEventHandler}>Italian</button>
      <button onClick={clickEventHandler}>Chinese</button>
      <hr></hr>
      <ul>
        {cuisineList.map((foodtype) => {
          return showDetails(foodtype);
        })}
      </ul>

      <footer style={{ textAlign: "center" }}>
        Made with&nbsp;
        <span role="img" aria-label="heart">
          ❤️
        </span>
        &nbsp;by &nbsp;
        <a
          rel="noreferrer"
          href="https://brupadhyay-neogcamp-levelzero.netlify.app/"
          target="_blank"
        >
          Bhavesh Upadhyay
        </a>
      </footer>
    </div>
  );
}
