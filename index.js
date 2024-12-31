function generateTeams() {
    const namesInput = document.getElementById("names").value; // Obtém o valor da textarea
    const teamCount = parseInt(document.getElementById("teamCount").value); // Obtém o número de equipes

    // Divide os nomes, removendo espaços extras e ignorando entradas vazias
    const names = namesInput
        .split("\n") // Divide os nomes por linha
        .map(name => name.trim())
        .filter(name => name !== "");

    if (names.length < teamCount) {
        alert("Não há pessoas suficientes para formar todas as equipes!");
        return;
    }

    // Embaralha os nomes
    names.sort(() => Math.random() - 0.5);

    // Divide os nomes em equipes
    const teams = [];
    for (let i = 0; i < teamCount; i++) {
        teams.push([]);
    }
    names.forEach((name, index) => {
        teams[index % teamCount].push(name);
    });

    // Exibe as equipes no resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Limpa resultados anteriores
    teams.forEach((team, index) => {
        const teamDiv = document.createElement("div");
        teamDiv.innerHTML = `<strong>Equipe ${index + 1}:</strong> ${team.join(", ")}`;
        resultDiv.appendChild(teamDiv);
    });
}
