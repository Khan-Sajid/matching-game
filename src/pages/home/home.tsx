import { createContext, useState } from "react";
import ActivityScreen from "../../components/activityScreen/activityScreen";
import InstructionScreen from "../../components/instructionScreen/instructionScreen";
import IntroScreen from "../../components/introScreen/introScreen";
import RewardScreen from "../../components/rewardScreen/rewardScreen";
import "./home.css";
import { CurrentScreen } from "../../utils/introScreen.contant";

export const ScreenContext = createContext<{
  currentScreen: CurrentScreen;
  setCurrentScreen: (value: CurrentScreen) => void;
}>({} as any);
export const totalContext = createContext<{
  totalCorrect: number;
  setTotalCorrect: (value: number) => void;
}>({} as any);

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState<CurrentScreen>(
    CurrentScreen.Intro
  );
  const [totalCorrect, setTotalCorrect] = useState(0);

  const GetScreen = () => {
    switch (currentScreen) {
      case CurrentScreen.Intro:
        return <IntroScreen />;
      case CurrentScreen.Instruction:
        return <InstructionScreen />;
      case CurrentScreen.activity:
        return <ActivityScreen />;
      case CurrentScreen.reward:
        return <RewardScreen />;
      default:
        return <IntroScreen />;
    }
  };

  return (
    <div className="container">
      <ScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>
        <totalContext.Provider value={{ totalCorrect, setTotalCorrect }}>
          <GetScreen />
        </totalContext.Provider>
      </ScreenContext.Provider>
    </div>
  );
};

export default Home;
