import { assert, expect, should } from "chai";
import { config } from "dotenv";
import {
  predict_from_team_preformance,
  predict_from_team_comp,
} from "../api/api.js";

config();

const TEST_DATA_TEAM_PERFORMANCE = {
  total_gold_earned_0: [10000],
  total_gold_spent_0: [10000],
  total_baron_kills_0: [2],
  total_dragon_kills_0: [2],
  total_inhibitor_kils_0: [2],
  total_kills_0: [20],
  total_deaths_0: [15],
  total_damage_dealt_to_champions_0: [10000],
  total_damage_dealt_to_objectives_0: [10000],
  total_damage_taken_0: [10000],
  average_vision_score_0: [35],
  total_wards_placed_0: [30],
  average_creep_score_0: [100],
  average_champion_experience_0: [10000],
  total_gold_earned_1: [7500],
  total_gold_spent_1: [7500],
  total_baron_kills_1: [0],
  total_dragon_kills_1: [0],
  total_inhibitor_kils_1: [0],
  total_kills_1: [15],
  total_deaths_1: [20],
  total_damage_dealt_to_champions_1: [7500],
  total_damage_dealt_to_objectives_1: [7500],
  total_damage_taken_1: [7500],
  average_vision_score_1: [25],
  total_wards_placed_1: [25],
  average_creep_score_1: [90],
  average_champion_experience_1: [7500],
  gameLengthMin: [25],
  dmg_to_champs_winner: [0],
  dmg_to_obj_winner: [0],
  vision_winner: [0],
  cs_winner: [0],
  champ_experience_winner: [0],
  wards_placed_winner: [0],
  gold_spender_winner: [0],
};

const TEST_DATA_TEAM_COMP = {
  dmg_carry_0: ["Aatrox"],
  obj_carry_0: ["Aatrox"],
  team_comp_0_champ_1: ["Aatrox"],
  team_comp_0_champ_2: ["Aatrox"],
  team_comp_0_champ_3: ["Aatrox"],
  team_comp_0_champ_4: ["Aatrox"],
  team_comp_0_champ_5: ["Aatrox"],
  dmg_carry_1: ["Aatrox"],
  obj_carry_1: ["Aatrox"],
  team_comp_1_champ_1: ["Aatrox"],
  team_comp_1_champ_2: ["Aatrox"],
  team_comp_1_champ_3: ["Aatrox"],
  team_comp_1_champ_4: ["Aatrox"],
  team_comp_1_champ_5: ["Aatrox"],
};

describe("TEST API", function () {
  it("BASE URL TEST", () => {
    const base_url = process.env.REACT_APP_ML_BASE_URL;
    console.log(base_url);
    expect(base_url).to.not.be.null;
  });

  it("PREDICT FROM TEAM PERFOMANCE", async () => {
    const response = await predict_from_team_preformance(
      TEST_DATA_TEAM_PERFORMANCE
    );
    const prediction = response.data.prediction;
    console.log(prediction);
    expect(prediction).to.not.be.null;
  });

  it("PREDICT FROM TEAM COMP DATA", async () => {
    const response = await predict_from_team_comp(TEST_DATA_TEAM_COMP);
    const prediction = response.data.prediction;
    console.log(prediction);
    expect(prediction).to.not.be.null;
  });
});
