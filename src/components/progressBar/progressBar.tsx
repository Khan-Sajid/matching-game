import "./progressBar.css";
import banana from "../../assets/banana.png";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="loader">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
      <img className="progress-banana" src={banana} />
    </div>
  );
};

export default ProgressBar;
