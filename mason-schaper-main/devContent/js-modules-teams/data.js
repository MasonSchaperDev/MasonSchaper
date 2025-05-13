// initial teams and empty rosters Sharks, Eagles, Tigers
// create your export function as well addPlayerToTeam
// remember you are adding a name of a player to the team, so you will use the push() method on the playerName
// teamName, playerName

export const teams = {
    "Sharks": [],
    "Eagles": [],
    "Tigers": []
};

export function addPlayerToTeam(teamName, playerName) {
    if (!teams[teamName]) {
        throw new Error(`Team "${teamName}" does not exist.`);
    } 
    teams[teamName].push(playerName);
}