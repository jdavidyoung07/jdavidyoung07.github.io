import React from 'react';
import {useState} from 'react';
import './Team.css';
import Team_Input from './Team_Input.jsx'

const Team = ({team, handleChange}) => {

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

    if (team == "Team 1") {
      return (
        <div className="Team">
          <div className='Team-title'>
              {team}
          </div>
  
          <div className="Teams-info">
  
            <Team_Input 
              input="Total Gold Earned"
              value={total_gold_earned_0}
              id="total_gold_earned_0"
              handleChange={handleChange}
              />
            
            <Team_Input 
              input="Total Gold Spent"
              value={total_gold_spent_0}
              id="total_gold_spent_0"
              handleChange={handleChange}
              />
            
            <Team_Input 
              input="Total Baron Kills"
              value={total_baron_kills_0}
              id="total_baron_kills_0"
              handleChange={handleChange}
              />

              <Team_Input 
              input="Total Dragon Kills"
              value={total_dragon_kills_0}
              id="total_dragon_kills_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Inhibitor Kills"
              value={total_inhibitor_kills_0}
              id="total_inhibitor_kills_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Champion Kills"
              value={total_kills_0}
              id="total_kills_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Deaths"
              value={total_deaths_0}
              id="total_deaths_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Damage Dealt to Champions"
              value={total_damage_dealt_to_champions_0}
              id="total_damage_dealt_to_champions_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Damage Dealt to Objectives"
              value={total_damage_dealt_to_objectives_0}
              id="total_damage_dealt_to_objectives_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Damage Taken"
              value={total_damage_taken_0}
              id="total_damage_taken_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Average Vision Score"
              value={average_vision_score_0}
              id="average_vision_score_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Wards Placed"
              value={total_wards_placed_0}
              id="total_wards_placed_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Average Creep Score"
              value={average_creep_score_0}
              id="average_creep_score_0"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Average Champion Experience"
              value={average_champion_experience_0}
              id="average_champion_experience_0"
              handleChange={handleChange}
              />

          </div>
  
        </div>
      );
    }

    if (team == "Team 2") {
      return (
        <div className="Team">
          <div className='Team-title'>
              {team}
          </div>
  
          <div className="Teams-info">
  
          <Team_Input 
              input="Total Gold Earned"
              value={total_gold_earned_1}
              id="total_gold_earned_1"
              handleChange={handleChange}
              />
            
            <Team_Input 
              input="Total Gold Spent"
              value={total_gold_spent_1}
              id="total_gold_spent_1"
              handleChange={handleChange}
              />
            
            <Team_Input 
              input="Total Baron Kills"
              value={total_baron_kills_1}
              id="total_baron_kills_1"
              handleChange={handleChange}
              />

              <Team_Input 
              input="Total Dragon Kills"
              value={total_dragon_kills_1}
              id="total_dragon_kills_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Inhibitor Kills"
              value={total_inhibitor_kills_1}
              id="total_inhibitor_kills_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Champion Kills"
              value={total_kills_1}
              id="total_kills_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Deaths"
              value={total_deaths_1}
              id="total_deaths_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Damage Dealt to Champions"
              value={total_damage_dealt_to_champions_1}
              id="total_damage_dealt_to_champions_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Damage Dealt to Objectives"
              value={total_damage_dealt_to_objectives_1}
              id="total_damage_dealt_to_objectives_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Damage Taken"
              value={total_damage_taken_1}
              id="total_damage_taken_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Average Vision Score"
              value={average_vision_score_1}
              id="average_vision_score_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Total Wards Placed"
              value={total_wards_placed_1}
              id="total_wards_placed_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Average Creep Score"
              value={average_creep_score_1}
              id="average_creep_score_1"
              handleChange={handleChange}
              />
              
              <Team_Input 
              input="Average Champion Experience"
              value={average_champion_experience_1}
              id="average_champion_experience_1"
              handleChange={handleChange}
              />

          </div>
  
        </div>
      );
    }
    
  }
  
  export default Team;