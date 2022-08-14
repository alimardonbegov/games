// create arrays with only Name of games

export function createPlatform(p, x, s) {
    const namePSGames = p.map((game) => game.name);
    const nameXboxGames = x.map((game) => game.name);
    const nameSwitchGames = s.map((game) => game.name);

    p.map((game) => {
        game.platform = ["PS"];
        nameXboxGames.indexOf(game.name) !== -1 && game.platform.push("Xbox");
        nameSwitchGames.indexOf(game.name) !== -1 && game.platform.push("Switch");
    });

    x.map((game) => {
        game.platform = ["Xbox"];
        namePSGames.indexOf(game.name) !== -1 && game.platform.push("PS");
        nameSwitchGames.indexOf(game.name) !== -1 && game.platform.push("Switch");
    });

    s.map((game) => {
        game.platform = ["Switch"];
        namePSGames.indexOf(game.name) !== -1 && game.platform.push("PS");
        nameXboxGames.indexOf(game.name) !== -1 && game.platform.push("Xbox");
    });
}
