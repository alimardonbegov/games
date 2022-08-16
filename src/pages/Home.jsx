import React, { useState, useEffect, useMemo } from "react";
import BottomButtons from "../components/BottomButtons";
import Navbar from "../components/UI/navbar/Navbar";
import Background from "../components/UI/background/Background";
import GameService from "../API/GameService";
import FilteredList from "../components/FilteredList";
import { createPlatform } from "../utils/platforms";
import Loading from "../components/Loading";
import GamePage from "../components/GamePage";
import Footer from "../components/UI/footer/Footer";

function Home() {
    const [listOfGames, setListOfGames] = useState({
        ps: [],
        xb: [],
        sw: [],
    });
    const [doesShowGames, setDoesShowGames] = useState({
        ps: false,
        xb: false,
        sw: false,
    });
    const [isLoading, setIsloading] = useState({
        ps: false,
        xb: false,
        sw: false,
    });
    const [switchPage, setSwitchPage] = useState(false);
    const [searchGames, setSearchGames] = useState("");

    async function getFetch() {
        const psGames = await GameService.getPSGames();
        const xboxGames = await GameService.getXboxGames();
        const switchGame = await GameService.getSwitchGames();
        setListOfGames((prevValue) => {
            return { ...prevValue, ps: psGames, xb: xboxGames, sw: switchGame };
        });
    }

    useEffect(() => {
        getFetch();
    }, []);

    createPlatform(listOfGames);

    const searchedGames = useMemo(() => {
        const ps = listOfGames.ps.filter((game) => game.name.toLowerCase().includes(searchGames));
        const xb = listOfGames.xb.filter((game) => game.name.toLowerCase().includes(searchGames));
        const sw = listOfGames.sw.filter((game) => game.name.toLowerCase().includes(searchGames));
        return { ps, xb, sw };
    }, [listOfGames, searchGames]);

    function showGames(platform) {
        setIsloading((prev) => {
            return { ...prev, [platform]: true };
        });

        setTimeout(() => {
            setDoesShowGames((prevValue) => {
                return { ...prevValue, [platform]: true };
            });
            setSwitchPage(!switchPage);
            setIsloading((prev) => {
                return { ...prev, [platform]: false };
            });
        }, 2000);
    }

    // opening game cards (check why we can't use object)
    const [isOpenedCard, setIsOpenedCard] = useState(false);
    const [gameId, setGameId] = useState("");
    const [gameName, setGameName] = useState("");
    const [gameGenre, setGameGenre] = useState("");
    const [gameDevelopers, setGameDevelopers] = useState("");
    const [gamePublishers, setGamePublishers] = useState("");
    const [gameReleaseDates, setGameReleaseDates] = useState("");

    function openGameCard(game) {
        setIsOpenedCard(true);
        setGameId(game.id);
        setGameName(game.name);
        setGameGenre(game.genre[0]);
        setGameDevelopers(game.developers[0]);
        setGamePublishers(game.publishers[0]);
        setGameReleaseDates(game.releaseDates.Europe);
    }

    return (
        <div className="App">
            <Navbar
                onClickHomePage={() => {
                    setIsOpenedCard(false);
                    setSwitchPage(false);
                    setSearchGames("");
                    setDoesShowGames({
                        ps: false,
                        xb: false,
                        sw: false,
                    });
                }}
            />

            <Loading loadingPage={isLoading} />
            <div>
                {!isLoading.ps && !isLoading.xb && !isLoading.sw && !switchPage ? (
                    <div>
                        <div className="textBlock">Find the game for your platform</div>
                        <BottomButtons
                            action1btn={() => showGames("ps")}
                            action2btn={() => showGames("xb")}
                            action3btn={() => showGames("sw")}
                            textValue1={"PS"}
                            textValue2={"Xbox"}
                            textValue3={"Switch"}
                        />
                        <Background />
                        <Footer />
                    </div>
                ) : !isOpenedCard ? (
                    <FilteredList
                        doesShowGamesPS={doesShowGames.ps}
                        doesShowGamesXbox={doesShowGames.xb}
                        doesShowGamesSwitch={doesShowGames.sw}
                        listOfGamesPS={searchedGames.ps}
                        listOfGamesXbox={searchedGames.xb}
                        listOfGamesSwitch={searchedGames.sw}
                        searchGames={searchGames}
                        setSearchGames={setSearchGames}
                        clearSearch={() => setSearchGames("")}
                        onClick={openGameCard}
                    />
                ) : (
                    <GamePage
                        onClick={() => setIsOpenedCard(!isOpenedCard)}
                        gameId={gameId}
                        gameName={gameName}
                        gameGenre={gameGenre}
                        gameDevelopers={gameDevelopers}
                        gamePublishers={gamePublishers}
                        gameReleaseDates={gameReleaseDates}
                    />
                )}
            </div>
        </div>
    );
}

export default Home;
