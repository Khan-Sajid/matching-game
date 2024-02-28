import "./introScreen.css";
import monkey from "../../assets/monkey-smiling.png";
import textBox from "../../assets/bottom-right-arrow-chat.png";
import backButton from "../../assets/back-button.png";
import startBtn from "../../assets/start-button.png";
import yesBtn from "../../assets/yes-button.png";
import nextBtn from "../../assets/next-button.png";
import gear from "../../assets/gear.png";
import start from "../../assets/Star.png";
import { CurrentScreen, intro } from "../../utils/introScreen.contant";
import { useContext, useState } from "react";
import { ScreenContext } from "../../pages/home/home";

const buttonImg = [startBtn, nextBtn, yesBtn];

const IntroScreen = ({ initialIndex }: { initialIndex?: number }) => {
  const [currentStep, setCurrentStep] = useState(initialIndex || 0);
  const { currentScreen, setCurrentScreen } = useContext(ScreenContext);

  function incrementStep() {
    if (intro.length - 1 > currentStep) setCurrentStep(currentStep + 1);
    else setCurrentScreen(CurrentScreen.Instruction);
  }
  function decrementStep() {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  return (
    <div className="screen intro">
      {currentStep > 0 && (
        <div className="back-button">
          <img
            className="pointer hover"
            onClick={decrementStep}
            src={backButton}
          />
        </div>
      )}
      <div className="intro-monkey">
        <img src={monkey} />
      </div>
      <div className="intro-text">
        <div className="text-box">
          <img src={textBox} />
          <span className="text-container">
            <p className="text">{intro[currentStep]?.text} </p>
          </span>
        </div>
      </div>
      <div className="intro-setting">
        <img src={gear} />
        <img src={start} />
      </div>
      <div className="intro-button">
        <img
          className="pointer hover"
          onClick={incrementStep}
          src={buttonImg[currentStep]}
        />
      </div>
    </div>
  );
};

export default IntroScreen;
