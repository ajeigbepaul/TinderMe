import React, { useEffect, useState } from "react";

import TinderCard from "react-tinder-card";
import "./Tindercard.css";
import axios from "../axios";
// { name: "Ajeigbe Paul", url: "paul.jpg" },
// { name: "Richy", url: "richard.jpg" },
// { name: "Harjoke", url: "harjoke.jpg" },
// { name: "Arike", url: "ope.jpg" },
// { name: "Kemi", url: "kemi.jpg" },
// { name: "Iyanu", url: "iyanu.jpg" },
//https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/195279240_10224353052675367_5472351374414869739_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeE_M-HMbu5tP0ffSZhKeTsDhtR3fRqaGCmG1Hd9GpoYKWdE8757d-gcw1ttCyFQezU&_nc_ohc=LMZxynyIZ5gAX8cvMR0&_nc_ht=scontent.flos1-2.fna&oh=00_AT9ZjSxLT1mzgPy9EYOFKoRJvmiOXoFQnrw-1Ed7RM6Djw&oe=61E07F65
function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/card");
      setPeople(req.data);
    }
    fetchData();
  }, [people]);
  const swiped = (nameToDelete) => {
    console.log("removing" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  return (
    <div className="tindercard">
      <div className="tindercard__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
