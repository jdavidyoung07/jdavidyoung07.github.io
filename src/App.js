import React from 'react';
import {useState} from 'react';
import './App.css';
import Team from './Team.jsx';
import Team_Input from './Team_Input.jsx'
import {predict_from_team_preformance, predict_from_team_comp} from './api/api.js'

const App = () => {

  // Team 1 data
  const[total_gold_earned_0, setTeam0GoldEarned] = useState('');
  const[total_gold_spent_0, setTeam0GoldSpent] = useState('');
  const[total_baron_kills_0, setTeam0BaronKills] = useState('');
  const[total_dragon_kills_0, setTeam0DragonKills] = useState('');
  const[total_inhibitor_kills_0, setTeam0InhibitorKills] = useState('');
  const[total_kills_0, setTeam0Kills] = useState('');
  const[total_deaths_0, setTeam0Deaths] = useState('');
  const[total_damage_dealt_to_champions_0, setTeam0DmgToChampions] = useState('');
  const[total_damage_dealt_to_objectives_0, setTeam0DmgToObjectives] = useState('');
  const[total_damage_taken_0, setTeam0DmgTaken] = useState('');
  const[average_vision_score_0, setTeam0AvgVisionScore] = useState('');
  const[total_wards_placed_0, setTeam0WardsPlaced] = useState('');
  const[average_creep_score_0, setTeam0CreepScore] = useState('');
  const[average_champion_experience_0, setTeam0AvgExp] = useState('');
  
  // Team 2 data
  const[total_gold_earned_1, setTeam1GoldEarned] = useState('');
  const[total_gold_spent_1, setTeam1GoldSpent] = useState('');
  const[total_baron_kills_1, setTeam1BaronKills] = useState('');
  const[total_dragon_kills_1, setTeam1DragonKills] = useState('');
  const[total_inhibitor_kills_1, setTeam1InhibitorKills] = useState('');
  const[total_kills_1, setTeam1Kills] = useState('');
  const[total_deaths_1, setTeam1Deaths] = useState('');
  const[total_damage_dealt_to_champions_1, setTeam1DmgToChampions] = useState('');
  const[total_damage_dealt_to_objectives_1, setTeam1DmgToObjectives] = useState('');
  const[total_damage_taken_1, setTeam1DmgTaken] = useState('');
  const[average_vision_score_1, setTeam1AvgVisionScore] = useState('');
  const[total_wards_placed_1, setTeam1WardsPlaced] = useState('');
  const[average_creep_score_1, setTeam1CreepScore] = useState('');
  const[average_champion_experience_1, setTeam1AvgExp] = useState('');

  // General game info data
  const[game_length, setGameLength] = useState('');
  const[champion_dmg_winner, setChampionDmgWinner] = useState('');
  const[objective_damage_winner, setObjectiveDamageWinner] = useState('');
  const[vision_winner, setVisionWinner] = useState('');
  const[creep_score_winner, setCreepScoreWinner] = useState('');
  const[wards_placed_winner, setWardsPlacedWinner] = useState('');
  const[champ_exp_winner, setChampExpWinner] = useState('');
  const[gold_spent_winner, setGoldSpentWinner] = useState('');

  const getTeamData = (data) => {
    console.log(data.target.id);
    console.log(data.target.value);
    console.log(data);

    switch(data.target.id) {
      
      // Team 0
      case "total_gold_earned_0":
        setTeam0GoldEarned(data.target.value);
        break;
      case "total_gold_spent_0":
        setTeam0GoldSpent(data.target.value);
        break;
      case "total_baron_kills_0":
        setTeam0BaronKills(data.target.value);
        break;
      case "total_dragon_kills_0":
        setTeam0DragonKills(data.target.value);
        break;
      case "total_inhibitor_kills_0":
        setTeam0InhibitorKills(data.target.value);
        break;
      case "total_kills_0":
        setTeam0Kills(data.target.value);
        break;
      case "total_deaths_0":
        setTeam0Deaths(data.target.value);
        break;
      case "total_damage_dealt_to_champions_0":
        setTeam0DmgToChampions(data.target.value);
        break;
      case "total_damage_dealt_to_objectives_0":
        setTeam0DmgToObjectives(data.target.value);
        break;
      case "total_damage_taken_0":
        setTeam0DmgTaken(data.target.value);
        break;
      case "average_vision_score_0":
        setTeam0AvgVisionScore(data.target.value);
        break;
      case "total_wards_placed_0":
        setTeam0WardsPlaced(data.target.value);
        break;
      case "average_creep_score_0":
        setTeam0CreepScore(data.target.value);
        break;
      case "average_champion_experience_0":
        setTeam0AvgExp(data.target.value);
        break;

      // Team 1
      case "total_gold_earned_1":
        setTeam1GoldEarned(data.target.value);
        break;
      case "total_gold_spent_1":
        setTeam1GoldSpent(data.target.value);
        break;
      case "total_baron_kills_1":
        setTeam1BaronKills(data.target.value);
        break;
      case "total_dragon_kills_1":
        setTeam1DragonKills(data.target.value);
        break;
      case "total_inhibitor_kills_1":
        setTeam1InhibitorKills(data.target.value);
        break;
      case "total_kills_1":
        setTeam1Kills(data.target.value);
        break;
      case "total_deaths_1":
        setTeam1Deaths(data.target.value);
        break;
      case "total_damage_dealt_to_champions_1":
        setTeam1DmgToChampions(data.target.value);
        break;
      case "total_damage_dealt_to_objectives_1":
        setTeam1DmgToObjectives(data.target.value);
        break;
      case "total_damage_taken_1":
        setTeam1DmgTaken(data.target.value);
        break;
      case "average_vision_score_1":
        setTeam1AvgVisionScore(data.target.value);
        break;
      case "total_wards_placed_1":
        setTeam1WardsPlaced(data.target.value);
        break;
      case "average_creep_score_1":
        setTeam1CreepScore(data.target.value);
        break;
      case "average_champion_experience_1":
        setTeam1AvgExp(data.target.value);
        break;

    }
  }

  async function makeAPICall(prediction_data) {
    const response = await predict_from_team_preformance(prediction_data);
    const prediction = response.data;
    return prediction;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    const prediction_data = {
      total_gold_earned_0: [parseInt(total_gold_earned_0)],
      total_gold_spent_0: [parseInt(total_gold_spent_0)],
      total_baron_kills_0: [parseInt(total_baron_kills_0)],
      total_dragon_kills_0: [parseInt(total_dragon_kills_0)],
      total_inhibitor_kills_0: [parseInt(total_inhibitor_kills_0)],
      total_kills_0: [parseInt(total_kills_0)],
      total_deaths_0: [parseInt(total_deaths_0)],
      total_damage_dealt_to_champions_0: [parseInt(total_damage_dealt_to_champions_0)],
      total_damage_dealt_to_objectives_0: [parseInt(total_damage_dealt_to_objectives_0)],
      total_damage_taken_0: [parseInt(total_damage_taken_0)],
      average_vision_score_0: [parseInt(average_vision_score_0)],
      total_wards_placed_0: [parseInt(total_wards_placed_0)],
      average_creep_score_0: [parseInt(average_creep_score_0)],
      average_champion_experience_0: [parseInt(average_champion_experience_0)],
      total_gold_earned_1: [parseInt(total_gold_earned_1)],
      total_gold_spent_1: [parseInt(total_gold_spent_1)],
      total_baron_kills_1: [parseInt(total_baron_kills_1)],
      total_dragon_kills_1: [parseInt(total_dragon_kills_1)],
      total_inhibitor_kills_1: [parseInt(total_inhibitor_kills_1)],
      total_kills_1: [parseInt(total_kills_1)],
      total_deaths_1: [parseInt(total_deaths_1)],
      total_damage_dealt_to_champions_1: [parseInt(total_damage_dealt_to_champions_1)],
      total_damage_dealt_to_objectives_1: [parseInt(total_damage_dealt_to_objectives_1)],
      total_damage_taken_1: [parseInt(total_damage_taken_1)],
      average_vision_score_1: [parseInt(average_vision_score_1)],
      total_wards_placed_1: [parseInt(total_wards_placed_1)],
      average_creep_score_1: [parseInt(average_creep_score_1)],
      average_champion_experience_1: [parseInt(average_champion_experience_1)],
      gameLengthMin: [parseInt(game_length)],
      dmg_to_champs_winner: [parseInt(champion_dmg_winner)],
      dmg_to_obj_winner: [parseInt(objective_damage_winner)],
      vision_winner: [parseInt(vision_winner)],
      cs_winner: [parseInt(creep_score_winner)],
      champ_experience_winner: [parseInt(champ_exp_winner)],
      wards_placed_winner: [parseInt(wards_placed_winner)],
      gold_spender_winner: [parseInt(gold_spent_winner)],
    }

    const prediction = await makeAPICall(prediction_data);

    var winning_team = 'Team';

    console.log(prediction.prediction);
    if (prediction.prediction == 0) {
      winning_team = "Team 1";
    } else {
      winning_team = "Team 2";
    }
    
    console.log(winning_team);
    const result_text = "<div>" + winning_team  + " wins</div>";

    document.getElementById("prediction-result").innerHTML = result_text;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
      <div className='App-title'>
        Summoner's Tool:&nbsp;A League of Legends Predictive Machine Learning Model
      </div>
      
      <div className="App-text">
        <p className="App-welcome">
          Welcome back, Jedi07.
        </p>

        <p className="App-para">
          You already have a model trained and loaded. Please enter game characteristics below to predict the likely outcome:
          
          <p className="Teams">
            <Team team="Team 1" className="Teams" id="team_1" handleChange={getTeamData}></Team>
            <Team team="Team 2" className="Teams" id="team_2" handleChange={getTeamData}></Team>
          </p>

          <p className="General-game-info">
            <div className="General-game-info-title">
              General Game Information
            </div>

            <div className='Teams'>

              <div className='General-game-info-left'>
                <div className="General-game-info-chars">Game Length (minutes)</div>
                <div className="General-game-info-chars">Total Damage Dealt to Champions Winner</div>
                <div className="General-game-info-chars">Total Damage Dealt to Objectives Winner</div>
                <div className="General-game-info-chars">Total Vision Winner</div>
                <div className="General-game-info-chars">Total Creep Score Winner</div>
                <div className="General-game-info-chars">Total Wards Placed Winner</div>
                <div className="General-game-info-chars">Total Champion Experience Winner</div>
                <div className="General-game-info-chars">Total Gold Spent Winner</div>
              </div>

              <div className='General-game-info-left'>
                <div><input 
                        type="number" 
                        className="char-input" 
                        id="game_length" 
                        placeholder='0'
                        value={game_length}
                        onChange={(e) => setGameLength(e.target.value)}
                        >
                      </input>
                    </div>
                
                <div><select 
                        id="champion_dmg_winner"
                        name="champion-dmg-winner" 
                        className='char-input' 
                        value={champion_dmg_winner} 
                        onChange={(e) => setChampionDmgWinner(e.target.value)}
                        >
                    <option value="n/a">N/A</option>
                    <option value="0">Team 1</option>
                    <option value="1">Team 2</option>
                  </select>
                </div>

                <div><select 
                        id="objective_damage_winner" 
                        name="objective-dmg-winner" 
                        className='char-input'
                        value={objective_damage_winner}
                        onChange={(e) => setObjectiveDamageWinner(e.target.value)}
                        >
                    <option value="n/a">N/A</option>
                    <option value="0">Team 1</option>
                    <option value="1">Team 2</option>
                  </select>
                </div>

                <div><select 
                        id="vision_winner" 
                        name="vision-winner" 
                        className='char-input'
                        value={vision_winner}
                        onChange={(e) => setVisionWinner(e.target.value)}
                        >
                    <option value="n/a">N/A</option>
                    <option value="0">Team 1</option>
                    <option value="1">Team 2</option>
                  </select>
                </div>

                <div><select 
                        id="creep_score_winner" 
                        name="creep-score-winner" 
                        className='char-input'
                        value={creep_score_winner}
                        onChange={(e) => setCreepScoreWinner(e.target.value)}
                        >
                    <option value="n/a">N/A</option>
                    <option value="0">Team 1</option>
                    <option value="1">Team 2</option>
                  </select>
                </div>

                <div><select 
                        id="wards_placed_winner" 
                        name="wards-placed-winner" 
                        className='char-input'
                        value={wards_placed_winner}
                        onChange={(e) => setWardsPlacedWinner(e.target.value)}
                        >
                    <option value="n/a">N/A</option>
                    <option value="0">Team 1</option>
                    <option value="1">Team 2</option>
                  </select>
                </div>

                <div><select 
                        id="champ_exp_winner" 
                        name="champ-exp-winner" 
                        className='char-input'
                        value={champ_exp_winner}
                        onChange={(e) => setChampExpWinner(e.target.value)}
                        >
                    <option value="n/a">N/A</option>
                    <option value="0">Team 1</option>
                    <option value="1">Team 2</option>
                  </select>
                </div>

                <div><select 
                        id="gold_spent_winner" 
                        name="gold-spent-winner" 
                        className='char-input'
                        value={gold_spent_winner}
                        onChange={(e) => setGoldSpentWinner(e.target.value)}
                        >
                    <option value="n/a">N/A</option>
                    <option value="0">Team 1</option>
                    <option value="1">Team 2</option>
                  </select>
                </div>
              </div>
            </div>
          </p>
          <div id="prediction-result" className="Prediction-result"> {/* Prediction */} </div>
          <button className="Predict-button">Predict</button>
        </p>
      </div>

      </div>
    </form>
  );
}

export default App;
