function generateTeams() {
    const namesInput = document.getElementById("names").value;
    const teamCount = parseInt(document.getElementById("teamCount").value);
    const names = namesInput
        .split("\n")
        .map(name => name.trim())
        .filter(name => name !== "");

    if (names.length < teamCount) {
        alert("Não há pessoas suficientes para formar todas as equipes!");
        return;
    }

    names.sort(() => Math.random() - 0.5);

    const teams = [];
    for (let i = 0; i < teamCount; i++) {
        teams.push([]);
    }
    names.forEach((name, index) => {
        teams[index % teamCount].push(name);
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    teams.forEach((team, index) => {
        const teamDiv = document.createElement("div");
        teamDiv.innerHTML = `<strong>Equipe ${index + 1}:</strong> ${team.join(", ")}`;
        resultDiv.appendChild(teamDiv);
    });
}
