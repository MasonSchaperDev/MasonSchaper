// Import your teams, and your AddPlayerToTeam from the data.js
// // Render each team’s roster into the section
// Handle the Add button click
// initialize the app at the bottom of the page

import { teams, addPlayerToTeam } from './data.js';

const teamSelect = document.getElementById('teamSelect');
const playerInput = document.getElementById('playerInput');
const addBtn = document.getElementById('addBtn');
const rosterSection = document.getElementById('rosterSection');

function initTeamOptions() {
    Object.keys(teams).forEach(teamName => {
        const opt = document.createElement('option');
        opt.value = teamName;
        opt.textContent = teamName;
        teamSelect.append(opt);
    });
}

function renderRosters() {
    rosterSection.innerHTML = '';
    for (const [teamName, players] of Object.entries(teams)) {
        const container = document.createElement('div');
        container.innerHTML =  `
            <h2>${teamName} <small>(${players.length})</small></h2>
            <ul>
        ${players.map(p => `<li>${p}</li>`).join('') || '<li><em>No players yet</em></li>'}
      </ul>
        `;
        rosterSection.append(container);
    }
}
// teamSelect, playerInput, addBtn, rosterSection

addBtn.addEventListener('click', () => {
    const team = teamSelect.value;
    const player = playerInput.value.trim();

    if (!player) {
        alert('Please enter a player name.') 
        return;
    }

    try {
        addPlayerToTeam(team, player)
        playerInput.value = '';
        renderRosters();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});

initTeamOptions()
renderRosters()

// be sure to use try and catch on your ADD button click
