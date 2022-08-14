import GameDetails from "./CardGame";
import MyButton from "./UI/myButton/MyButton";
import { useEffect, useRef, useState } from "react";
import MyInput from "./UI/myInput/MuInput";
import MySelect from "./UI/select/MySelect";
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
            <MyButton
                style={{
                    margin: "1em 3em 0 0",
                }}
                onClick={props.onClick}
            >
                Go back
            </MyButton>
            <MyInput
                placeholder="search game"
                value={props.searchGamesPS}
                clearSearch={props.clearSearch}
                onChange={(e) => {
                    props.setSearchGamesPS(e.target.value);
                }}
            />
            {/* <MySelect
                value={props.sortSelected}
                options={[
                    { value: "title", name: "By title" },
                    { value: "body", name: "By content" },
                ]}
                defaultValue="Sort By"
            /> */}

            <GameHeader platform={props.platform} />
            <div className="block-games">
                {(props.searchGamesPS ? props.games : itemsShow).map((game, index) => {
                    return (
                        <div key={index}>
                            <GameDetails
                                name={game.name}
                                platform={game.platform}
                                releaseDatesEurope={game.releaseDates.Europe}
                                genre={game.genre}
                                developer={game.developers}
                                publisher={game.publishers}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListOfCards;
