//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, homeSetScore] =useState(0);
  const [awayScore, awaySetScore] = useState(0);

  //adding resetScore 
  const[resetScore, setResetScore] =React.useState(0);

  // Using setTimeout function for the reset time
  setTimeout(()=>{
    setResetScore('Reset Score!');
  }, 2000);

 



  const HomeTouchdownScore = (values)=>{
    homeSetScore(homeScore + 7);
  }
  const AwayTouchdownScore = (values) =>{
    awaySetScore(awayScore + 7);
  }

  const AwayFieldScore = (values) => {
    awaySetScore(awayScore + 3);
  }
  const HomeFieldScore = (values) => {
    homeSetScore(homeScore +3);
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hard coded values in these div to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button onClick={() =>HomeTouchdownScore(homeScore +7)}
           className="homeButtons__touchdown">Home Touchdown</button>

          <button onClick={() => HomeFieldScore(homeScore + 3)}
          className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => AwayTouchdownScore(awayScore +7)}
          className="awayButtons__touchdown">Away Touchdown</button>

          <button onClick={() => AwayFieldScore(awayScore +3)}
          className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        {/* adding a reset score button */}
        <div className="resetButton">
          <button resetButton={resetScore} onClick={()=>setResetScore(0)}>Reset Score</button>
        </div>
      </section>
    </div>
  );
}

export default App;
