import React from 'react';
import './App.css';
import Team from './Team.jsx';

const App = () => {
  return (
    <div className="App">
      <div className='App-title'>
        Summoner's Tool:&nbsp;A League of Legends Predictive Machine Learning Model
      </div>
      <div className="App-text">
          <h3>Options:</h3>
          <p>a) User enters their name, and that decides the model to use. The model is trained based on the user, and is stored locally. This in turn means the API would have to be able to train the model, and save it on the user's PC when trained.</p>
          <p>b) Simply show "Welcome Jedi07" and offer a UI for predicting using our trained models.</p>
          <p></p>
        </div>

      <div className="App-text">
        <p className="App-welcome">
          Welcome back, Jedi07.
        </p>

        <p className="App-para">
          You already have a model trained and loaded. Please enter game characteristics below to predict the likely outcome:
          
          <p className="Teams">
            <Team team="Team 1" className="Teams"/>
            <Team team="Team 2" className="Teams"/>
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
                <div><input type="number" className="char-input" id="game-length" placeholder='0'></input></div>
                
                <div><select id="champ-damage-winner" name="champion-dmg-winner" className='char-input'>
                    <option value="n/a">N/A</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                </div>

                <div><select id="champ-damage-winner" name="objective-dmg-winner" className='char-input'>
                    <option value="n/a">N/A</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                </div>

                <div><select id="champ-damage-winner" name="vision-winner" className='char-input'>
                    <option value="n/a">N/A</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                </div>

                <div><select id="champ-damage-winner" name="creep-score-winner" className='char-input'>
                    <option value="n/a">N/A</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                </div>

                <div><select id="champ-damage-winner" name="wards-placed-winner" className='char-input'>
                    <option value="n/a">N/A</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                </div>

                <div><select id="champ-damage-winner" name="champ-exp-winner" className='char-input'>
                    <option value="n/a">N/A</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                </div>

                <div><select id="champ-damage-winner" name="gold-spent-winner" className='char-input'>
                    <option value="n/a">N/A</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                </div>
              </div>
            </div>
          </p>
        
        </p>
      </div>

    </div>
  );
}

export default App;
