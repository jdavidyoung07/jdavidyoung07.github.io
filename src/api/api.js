import axios from "axios";

export async function predict_from_team_preformance(teamPerformanceData) {
  const prediction = await axios.post(
    process.env.REACT_APP_ML_BASE_URL + "/predict/no_comp",
    teamPerformanceData
  );
  return prediction;
}

export async function predict_from_team_comp(teamCompData) {
    const prediction = await axios.post(
        process.env.REACT_APP_ML_BASE_URL + "/predict/team_comp",
        teamCompData
      );
      return prediction;
}
