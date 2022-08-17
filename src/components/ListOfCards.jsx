import GameCard from "./UI/gameCard/GameCard";
import { useEffect, useState } from "react";
import MyInput from "./UI/myInput/MuInput";

function ListOfCards(props) {
    const [itemsOnPage, setItemsOnPage] = useState(18);

    let itemsShow = [];
    for (let i = 0; i < itemsOnPage; i++) {
        itemsShow.push(props.games[i]);
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollHeight -
                e.target.documentElement.scrollTop -
                window.innerHeight <
            100
        ) {
            setItemsOnPage((prevValue) => prevValue + 9);
        }
    };

    return (
        <div className="list_of_cards">
            <MyInput
                placeholder="search game"
                value={props.searchGames}
                clearSearch={props.clearSearch}
                onChange={(e) => {
                    props.setSearchGames(e.target.value);
                }}
            />

            {itemsShow.length === 0 || props.games.length !== 0 ? (
                <h1 style={{ textAlign: "center" }}>{props.namePlatform} games </h1>
            ) : (
                <h1 style={{ textAlign: "center" }}>There is no such games </h1>
            )}

            <div className="block-games">
                {(props.searchGames ? props.games : itemsShow).map((game, index) => {
                    return (
                        <div key={index}>
                            <GameCard
                                name={game.name}
                                platform={game.platform}
                                releaseDatesEurope={game.releaseDates.Europe}
                                genre={game.genre}
                                developer={game.developers}
                                onClick={() => props.onClick(game)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListOfCards;
