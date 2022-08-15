import GameDetails from "./GameDetails";
import { useEffect, useState } from "react";
import MyInput from "./UI/myInput/MuInput";
import GameHeader from "./UI/gameHeader/GameHeader";

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
        <div>
            <MyInput
                placeholder="search game"
                value={props.searchGames}
                clearsearch={props.clearSearch}
                onChange={(e) => {
                    props.setSearchGames(e.target.value);
                }}
            />

            <GameHeader platform={props.platform} />
            <div className="block-games">
                {(props.searchGames ? props.games : itemsShow).map((game, index) => {
                    return (
                        <div key={index}>
                            <GameDetails
                                name={game.name}
                                platform={game.platform}
                                releaseDatesEurope={game.releaseDates.Europe}
                                genre={game.genre}
                                developer={game.developers}
                                publisher={game.publishers}
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
