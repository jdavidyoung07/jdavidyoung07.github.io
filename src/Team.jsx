import React from 'react';
import './Team.css';

const Team = ({team}) => {
    return (
      <div className="Team">
        <div className='Team-title'>
            {team}
        </div>

        <div className="Teams-info">

          <div className="Team-left-side">
            <div className="Team-characteristics">Total Gold Earned</div>
            <div className="Team-characteristics">Total Gold Spent</div>
            <div className="Team-characteristics">Total Baron Kills</div>
            <div className="Team-characteristics">Total Dragon Kills</div>
            <div className="Team-characteristics">Total Inhibitor Kills</div>
            <div className="Team-characteristics">Total Player Kills</div>
            <div className="Team-characteristics">Total Deaths</div>
            <div className="Team-characteristics">Total Damage Dealt to Champions</div>
            <div className="Team-characteristics">Total Damage Dealt to Objectives</div>
            <div className="Team-characteristics">Total Damage Taken</div>
            <div className="Team-characteristics">Average Vision Score</div>
            <div className="Team-characteristics">Total Wards Placed</div>
            <div className="Team-characteristics">Average Creep Score</div>
            <div className="Team-characteristics">Average Champion Experience</div>
          </div>

          <div className="Team-right-side">
            <div><input type="number" className="Team-char-input" id="team-total-gold" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-gold-spent" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-baron-kills" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-dragon-kills" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-inhib-kills" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-player-kills" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-deaths" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-damage-dealt-champions" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-damage-dealt-objectives" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-damage-taken" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-average-vision-score" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-total-wards-placed" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-average-creep-score" placeholder='0'></input></div>
            <div><input type="number" className="Team-char-input" id="team-average-champion-exp" placeholder='0'></input></div>
          </div>

        </div>

      </div>
    );
  }
  
  export default Team;