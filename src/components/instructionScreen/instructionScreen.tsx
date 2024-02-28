import "./instructionScreen.css";
import backButton from "../../assets/back-button.png";
import playBtn from "../../assets/play-button.png";
import blueCard from "../../assets/blue-card.png";
import pinkCard from "../../assets/pink-card.png";
import fruitCard from "../../assets/fruit-card.png";
import appleAlpha from "../../assets/apple-alpha.png";
import greenPlace from "../../assets/green-number-place.png";
import yellowPlace from "../../assets/yellow-number-place.png";
import orangePlace from "../../assets/orange-number-place.png";
import { useContext } from "react";
import { ScreenContext } from "../../pages/home/home";
import { CurrentScreen } from "../../utils/introScreen.contant";

const instructionConst = [
  {
    heading: "Select a pink card.",
    para: "It has images.",
    numberPlace: yellowPlace,
  },
  {
    heading: "Select a blue card.",
    para: "It has alphabets.",
    numberPlace: greenPlace,
  },
  {
    preHeading: "If they’re same",
    heading: "Its a match !",
    para: "otherwise retry :(",
    numberPlace: orangePlace,
  },
];

const InstructionScreen = () => {
  const { currentScreen, setCurrentScreen } = useContext(ScreenContext);

  return (
    <div className="screen istruction">
      <div className="back-button">
        <img
          onClick={() => {
            setCurrentScreen(CurrentScreen.Intro);
          }}
          className="pointer hover"
          src={backButton}
        />
      </div>
      <div className="cards-container">
        {instructionConst.map((instruction, index) => {
          return (
            <div className="cards" key={index}>
              <div key={instruction.heading}>
                {index === 0 && <img src={pinkCard} />}
                {index === 1 && <img src={blueCard} />}
                {index === 2 && <img src={fruitCard} />}
                <img />
              </div>
              {instruction?.preHeading && <p>{instruction.preHeading}</p>}
              <h4>{instruction.heading}</h4>
              <p>{instruction.para}</p>
              <span className="placeHolder">
                <img src={instruction.numberPlace} />
                <p>{(index + 1).toString().padStart(2, "0")}</p>
              </span>
            </div>
          );
        })}
      </div>
      <div className="intro-button">
        <img
          onClick={() => {
            setCurrentScreen(CurrentScreen.activity);
          }}
          className="pointer hover"
          src={playBtn}
        />
      </div>
    </div>
  );
};

export default InstructionScreen;
