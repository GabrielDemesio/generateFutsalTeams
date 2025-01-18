function generateTeams() {
    const namesInput = document.getElementById("names").value;
    const teamCount = parseInt(document.getElementById("teamCount").value);
    const names = namesInput
        .split("\n")
        .map(name => name.trim())
        .filter(name => name !== "");

    if (names.length < 5 || teamCount < 2) {
        alert("É necessário ter ao menos 5 jogadores e 2 equipes.");
        return;
    }

    const maxTeams = Math.ceil(names.length / 5);
    if (teamCount > maxTeams) {
        alert("O número de equipes é muito alto para a quantidade de jogadores.");
        return;
    }

    names.sort(() => Math.random() - 0.5);

    const teams = [];
    let currentIndex = 0;

    for (let i = 0; i < teamCount; i++) {
        const team = names.slice(currentIndex, currentIndex + 5);
        teams.push(team);
        currentIndex += 5;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    teams.forEach((team, index) => {
        const teamDiv = document.createElement("div");
        teamDiv.innerHTML = `<strong>Equipe ${index + 1}:</strong> ${team.join(", ")}`;
        resultDiv.appendChild(teamDiv);
    });
}
