import GameCard from "./UI/gameCard/GameCard";
import { useEffect, useState } from "react";
import MyInput from "./UI/myInput/MuInput";
import GameHeader from "./UI/gameHeader/GameHeader";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
                clearSearch={props.clearSearch}
                onChange={(e) => {
                    props.setSearchGames(e.target.value);
                }}
            />

            <GameHeader namePlatform={props.namePlatform} />
            <TransitionGroup>
                <div className="block-games">
                    {(props.searchGames ? props.games : itemsShow).map((game, index) => {
                        return (
                            <div key={index}>
                                <CSSTransition key={game.id} timeout={500} classNames="">
                                    <GameCard
                                        name={game.name}
                                        platform={game.platform}
                                        releaseDatesEurope={game.releaseDates.Europe}
                                        genre={game.genre}
                                        developer={game.developers}
                                        onClick={() => props.onClick(game)}
                                    />
                                </CSSTransition>
                            </div>
                        );
                    })}
                </div>
            </TransitionGroup>
        </div>
    );
}

export default ListOfCards;
