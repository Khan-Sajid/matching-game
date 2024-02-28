import "./rewardScreen.css";
import backButton from "../../assets/back-button.png";
import rewardContainer from "../../assets/rewardScreen.png";
import monkey from "../../assets/monkey-smiling.png";
import banana from "../../assets/banana.png";
import ProgressBar from "../progressBar/progressBar";
import { useContext } from "react";
import { ScreenContext, totalContext } from "../../pages/home/home";
import { CurrentScreen } from "../../utils/introScreen.contant";

const RewardScreen = () => {
  const { currentScreen, setCurrentScreen } = useContext(ScreenContext);
  const { totalCorrect, setTotalCorrect } = useContext(totalContext);

  return (
    <div className="screen reward-screen">
      <div className="progress-bar">
        <ProgressBar percentage={(totalCorrect * 100) / 6} />
      </div>
      <div className="back-button">
        <img
          onClick={() => {
            setCurrentScreen(CurrentScreen.activity);
          }}
          className="pointer hover"
          src={backButton}
        />
      </div>
      <div className="reward-container">
        <div className="relative-container">
          <div className="bananas">
            {Array(totalCorrect)
              .fill(1)
              .map((el, index) => {
                return (
                  <img
                    key={el}
                    className={`${"banana" + index} banana`}
                    src={banana}
                  />
                );
              })}
          </div>
          <div className="result-text">
            <p className="earn">Earned</p>
            <p className="number">{totalCorrect} Banana's</p>
          </div>
          <img src={rewardContainer} />
          <img className="monkey" src={monkey} />
          <p
            className="button-text pointer hover"
            onClick={() => {
              setCurrentScreen(CurrentScreen.Intro);
            }}
          >
            YAY, OK!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardScreen;
