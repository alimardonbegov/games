// create arrays with only Name of games

export function createPlatform(allPlatform) {
    const namePSGames = allPlatform.ps.map((game) => game.name);
    const nameXboxGames = allPlatform.xb.map((game) => game.name);
    const nameSwitchGames = allPlatform.sw.map((game) => game.name);

    allPlatform.ps.map((game) => {
        game.platform = ["PS"];
        nameXboxGames.indexOf(game.name) !== -1 && game.platform.push("Xbox");
        nameSwitchGames.indexOf(game.name) !== -1 && game.platform.push("Switch");
    });

    allPlatform.xb.map((game) => {
        game.platform = ["Xbox"];
        namePSGames.indexOf(game.name) !== -1 && game.platform.push("PS");
        nameSwitchGames.indexOf(game.name) !== -1 && game.platform.push("Switch");
    });

    allPlatform.sw.map((game) => {
        game.platform = ["Switch"];
        namePSGames.indexOf(game.name) !== -1 && game.platform.push("PS");
        nameXboxGames.indexOf(game.name) !== -1 && game.platform.push("Xbox");
    });
}
