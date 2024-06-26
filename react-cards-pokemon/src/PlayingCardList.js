import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  // const [cards, setCards] = useState([]);
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };

  const [cards, addCard, isLoading, error] = useAxios("https://deckofcardsapi.com/api/deck/new/");

  const handleAddCard = () => {
    // only endpoint here
    addCard("draw/");
  };

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Sorry, something went wrong! :(</div>
  }

  // return (
  //   <div className="PlayingCardList">
  //     <h3>Pick a card, any card!</h3>
  //     <div>
  //       <button onClick={addCard}>Add a playing card!</button>
  //     </div>
  //     <div className="PlayingCardList-card-area">
  //       {cards.map(cardData => (
  //         <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
