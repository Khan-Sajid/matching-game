import "./matchScreen.css";
import appleCard from "../../assets/fruit-card.png";
import appleName from "../../assets/apple-alpha.png";
import orangeCard from "../../assets/orangeFruit.png";
import orangeName from "../../assets/orangeName.png";
import { CardsName } from "../../utils/introScreen.contant";
import { SelectedCardsData } from "../../utils/types";

const MatchScreen = ({
  selectedCards,
}: {
  selectedCards: SelectedCardsData;
}) => {
  const cards = {
    [CardsName.A]: appleName,
    [CardsName.Apple]: appleCard,
    [CardsName.O]: orangeName,
    [CardsName.Orange]: orangeCard,
  };
  if (!selectedCards.selectedFruit || !selectedCards.selectedName) return <></>;
  return (
    <div className="screen match-screen">
      <img
        className="fruit-card fruit"
        src={cards[selectedCards.selectedFruit.fruitCard]}
      />
      <img
        className="fruit-card name"
        src={cards[selectedCards.selectedName.fruitNameCard]}
      />
      <h2 className="match-text">It’s a match !</h2>
    </div>
  );
};

export default MatchScreen;
