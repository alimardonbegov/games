import { useMemo } from "react";

const [searchGames, setSearchGames] = useState("");

const searchedGames = useMemo(
    (platform) => {
        return platform.filter((game) => {
            return game.name.toLowerCase().includes(searchGames);
        });
    },
    [platform, searchGames]
);
