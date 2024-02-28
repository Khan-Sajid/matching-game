import "./activityScreen.css";
import backButton from "../../assets/back-button.png";
import nextBtn from "../../assets/next-button.png";
import pinkCard from "../../assets/pink-card.png";
import blueCard from "../../assets/blue-card.png";
import appleCard from "../../assets/fruit-card.png";
import appleName from "../../assets/apple-alpha.png";
import orangeCard from "../../assets/orangeFruit.png";
import orangeName from "../../assets/orangeName.png";
import curlyArrow from "../../assets/curlyArrow.png";
import chatBox1 from "../../assets/bottom-left-arrow-chat.png";
import chatBox2 from "../../assets/bottom-right-arrow-chat.png";
import MatchScreen from "../matchScreen/matchScreen";
import ProgressBar from "../progressBar/progressBar";
import { useContext, useEffect, useState } from "react";
import { ScreenContext, totalContext } from "../../pages/home/home";
import {
  CardsName,
  CurrentScreen,
  Data,
} from "../../utils/introScreen.contant";
import { CardData, SelectedCardsData } from "../../utils/types";

const ActivityScreen = () => {
  const { currentScreen, setCurrentScreen } = useContext(ScreenContext);
  const { totalCorrect, setTotalCorrect } = useContext(totalContext);
  const [totalMatch, setTotalMatch] = useState(0);
  const [selectedCards, setSelectedCards] = useState<SelectedCardsData>();
  const [totalClicked, setTotalClicked] = useState(0);
  const [updatedFruitCardData, setUpdatedFruitCardData] = useState<CardData[]>(
    JSON.parse(JSON.stringify(Data)) as any
  );
  const [updatedFruitNameData, setUpdatedFruitNameData] = useState<CardData[]>(
    JSON.parse(JSON.stringify(Data.reverse())) as any
  );
  const [showReward, setShowReward] = useState(false);

  const cards = {
    [CardsName.A]: appleName,
    [CardsName.Apple]: appleCard,
    [CardsName.O]: orangeName,
    [CardsName.Orange]: orangeCard,
  };

  function selectFruitCard(cardData: CardData) {
    if (!selectedCards?.selectedFruit) {
      setSelectedCards({ selectedFruit: cardData });
    }
  }

  function selectFruitName(cardData: CardData) {
    if (!selectedCards?.selectedFruit) return;
    if (!selectedCards?.selectedName)
      setSelectedCards((prev) => {
        return { ...prev, selectedName: cardData };
      });
    if (selectedCards?.selectedFruit?.id === cardData?.id) {
      setTotalMatch((prev) => prev + 1);
    }
    setTimeout(() => {
      const updatedData = updatedFruitCardData.map((data) => {
        if (data.id === selectedCards?.selectedFruit?.id) {
          data.clicked = true;
        }
        return data;
      });
      setUpdatedFruitCardData([...updatedData]);
      let clickedCards = 0;
      const updatedNameData = updatedFruitNameData.map((data) => {
        if (data.id === cardData.id) {
          data.clicked = true;
          clickedCards = clickedCards + 1;
        } else if (data.clicked) {
          clickedCards = clickedCards + 1;
        }
        return data;
      });
      setUpdatedFruitNameData([...updatedNameData]);
      setTotalClicked(clickedCards);
      setSelectedCards(undefined);
      if (clickedCards === updatedNameData?.length) {
        setShowReward(true);
      }
    }, 1000);
  }

  useEffect(() => {
    if (showReward) {
      setTotalCorrect(totalMatch);
      setCurrentScreen(CurrentScreen.reward);
    }
  }, [showReward]);

  return (
    <div className="screen activity">
      <div className="back-button">
        <img
          onClick={() => {
            setCurrentScreen(CurrentScreen.Instruction);
          }}
          className="pointer hover"
          src={backButton}
        />
      </div>
      <div className="progress-bar">
        <ProgressBar percentage={(totalMatch * 100) / 6} />
      </div>
      {totalClicked === 0 && !selectedCards?.selectedFruit && (
        <div className="sug-one">
          <img src={curlyArrow} />
          <img src={chatBox2} />
          <p className="chat-one">Select a card.</p>
        </div>
      )}
      {totalClicked === 0 &&
        selectedCards?.selectedFruit &&
        !selectedCards?.selectedName && (
          <div className="sug-two">
            <img className="chat-img-2" src={chatBox1} />
            <img className="curly-2" src={curlyArrow} />
            <p className="chat-two">Now select second card.</p>
          </div>
        )}
      {selectedCards &&
        selectedCards?.selectedFruit?.id ===
          selectedCards?.selectedName?.id && (
          <MatchScreen selectedCards={selectedCards} />
        )}
      <div className="cards-containers">
        <div className="cards-grid">
          {updatedFruitCardData.map((cardData, index) => {
            return (
              <div
                key={"fruitCard" + index}
                className={cardData?.clicked ? "hidden" : ""}
              >
                <img
                  onClick={() => {
                    selectFruitCard(cardData);
                  }}
                  className="pointer hover"
                  src={
                    selectedCards?.selectedFruit?.id === cardData?.id
                      ? cards[cardData.fruitCard]
                      : pinkCard
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="cards-grid">
          {updatedFruitNameData.map((cardData, index) => {
            return (
              <div
                key={"fruitName" + index}
                className={cardData?.clicked ? "hidden" : ""}
              >
                <img
                  onClick={() => {
                    selectFruitName(cardData);
                  }}
                  className="pointer hover"
                  src={
                    selectedCards?.selectedName?.id === cardData?.id
                      ? cards[cardData.fruitNameCard]
                      : blueCard
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
      {totalClicked === 6 && (
        <div className="intro-button">
          <img
            className="pointer hover"
            onClick={() => {
              setTotalCorrect(totalMatch);
              setCurrentScreen(CurrentScreen.reward);
            }}
            src={nextBtn}
          />
        </div>
      )}
    </div>
  );
};

export default ActivityScreen;
