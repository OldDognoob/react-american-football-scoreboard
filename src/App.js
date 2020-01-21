//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, homeSetScore] =useState(0);
  const [awayScore, awaySetScore] = useState(0);


 //adding handler function
  function handler(team , score) {
    if (team ==='home') {
      homeSetScore(homeScore + score);
    }else {
      awaySetScore(awayScore + score);
    }
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

          <button onClick={() =>handler('home', 7)}
           className="homeButtons__touchdown">Home Touchdown</button>

          <button onClick={() => handler('home', 3)}
          className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={()=>homeSetScore(0)} className="reset_button">Reset HomeScore</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => handler('away', 7)}
          className="awayButtons__touchdown">Away Touchdown</button>

          <button onClick={() => handler('away', 3)}
          className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick={()=>awaySetScore(0)} className="reset_button">Reset AwayScore</button>
        </div>
      </section>
    </div>
  );
}

export default App;
