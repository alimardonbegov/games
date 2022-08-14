import React, { useState, useEffect, useMemo } from "react";
import BottomButtons from "../components/BottomButtons";
import Navbar from "../components/UI/navbar/Navbar";
import Background from "../components/UI/background/Background";
import GameService from "../API/GameService";
import FilteredList from "../components/FilteredList";
import Loader from "../components/UI/loader/Loader";
import { createPlatform } from "../utils/platforms";

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

    const [isLoading, setIsloading] = useState(false);
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

    function showGames(platform) {
        setIsloading(true);
        setTimeout(() => {
            setDoesShowGames((prevValue) => {
                return { ...prevValue, [platform]: true };
            });
            console.log(doesShowGames.ps);
            setSwitchPage(!switchPage);
            setIsloading(false);
        }, 500);
    }

    function goBack() {
        setSwitchPage(false);
        setSearchGames("");
        setDoesShowGames({
            ps: false,
            xb: false,
            sw: false,
        });
    }

    const searchedGames = useMemo(() => {
        const ps = listOfGames.ps.filter((game) => game.name.toLowerCase().includes(searchGames));
        const xb = listOfGames.xb.filter((game) => game.name.toLowerCase().includes(searchGames));
        const sw = listOfGames.sw.filter((game) => game.name.toLowerCase().includes(searchGames));
        return { ps, xb, sw };
    }, [listOfGames, searchGames]);

    return (
        <div className="App">
            <Navbar />
            {isLoading === true ? (
                <Loader />
            ) : !switchPage ? (
                <div>
                    <div className="textBlock">
                        Here you can find the list of games depends on your platform
                    </div>
                    <BottomButtons
                        action1btn={() => showGames("ps")}
                        action2btn={() => showGames("xb")}
                        action3btn={() => showGames("sw")}
                        textAction1={"PS"}
                        textAction2={"Xbox"}
                        textAction3={"Switch"}
                    />
                    <Background />
                </div>
            ) : (
                <FilteredList
                    onClick={goBack}
                    doesShowGamesPS={doesShowGames.ps}
                    doesShowGamesXbox={doesShowGames.xb}
                    doesShowGamesSwitch={doesShowGames.sw}
                    listOfGamesPS={searchedGames.ps}
                    listOfGamesXbox={searchedGames.xb}
                    listOfGamesSwitch={searchedGames.sw}
                    searchGames={searchGames}
                    setSearchGames={setSearchGames}
                    clearSearch={() => setSearchGames("")}
                />
            )}
        </div>
    );
}

export default Home;
