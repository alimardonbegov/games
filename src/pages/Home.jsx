import React, { useState, useEffect, useMemo } from "react";
import BottomButtons from "../components/BottomButtons";
import Navbar from "../components/UI/navbar/Navbar";
import Background from "../components/UI/background/Background";
import GameService from "../API/GameService";
import ResultList from "../components/FilteredList";
import Loader from "../components/UI/loader/Loader";
import { createPlatform } from "../utils/platforms";

function Home() {
    const [listOfGamesPS, setListOfGamesPS] = useState([]);
    const [listOfGamesXbox, setListOfGamesXbox] = useState([]);
    const [listOfGamesSwitch, setListOfGamesSwitch] = useState([]);

    // create states for show/hide each platform

    const [doesShowGamesPS, setDoesShowGamesPS] = useState(false);
    const [doesShowGamesXbox, setDoesShowGamesXbox] = useState(false);
    const [doesShowGamesSwitch, setDoesShowGamesSwitch] = useState(false);

    const [isLoading, setIsloading] = useState(false);
    const [switchPage, setSwitchPage] = useState(false);

    const [searchGamesPS, setSearchGamesPS] = useState("");

    // create functions for show games each platform

    function showGamesPS() {
        setIsloading(true);
        setTimeout(() => {
            setDoesShowGamesPS(!doesShowGamesPS);
            setSwitchPage(!switchPage);
            setIsloading(false);
        }, 500);
    }
    function showGamesXbox() {
        setIsloading(true);
        setTimeout(() => {
            setDoesShowGamesXbox(!doesShowGamesXbox);
            setSwitchPage(!switchPage);
            setIsloading(false);
        }, 500);
    }
    function showGamesSwitch() {
        setIsloading(true);
        setTimeout(() => {
            setDoesShowGamesSwitch(!doesShowGamesSwitch);
            setSwitchPage(!switchPage);
            setIsloading(false);
        }, 500);
    }

    function goBack() {
        setSwitchPage(false);
        setDoesShowGamesSwitch(false);
        setDoesShowGamesXbox(false);
        setDoesShowGamesPS(false);
    }

    async function getFetch() {
        setListOfGamesPS(await GameService.getPSGames());
        setListOfGamesXbox(await GameService.getXboxGames());
        setListOfGamesSwitch(await GameService.getSwitchGames());
    }

    useEffect(() => {
        getFetch();
    }, []);

    // searching games

    createPlatform(listOfGamesPS, listOfGamesXbox, listOfGamesSwitch);

    const searchedGamesPS = useMemo(() => {
        return listOfGamesPS.filter((game) => {
            return game.name.toLowerCase().includes(searchGamesPS);
        });
    }, [listOfGamesPS, searchGamesPS]);

    console.log(searchedGamesPS);

    return (
        <div className="App">
            <Navbar />
            {isLoading === true ? (
                <Loader />
            ) : !switchPage ? (
                <div>
                    <div className="textBlock">
                        Here you can find the list of games depends on your platform{" "}
                    </div>
                    <BottomButtons
                        textAction1={"PS"}
                        textAction2={"Xbox"}
                        textAction3={"Switch"}
                        action1btn={showGamesPS}
                        action2btn={showGamesXbox}
                        action3btn={showGamesSwitch}
                    />
                    <Background />
                </div>
            ) : (
                <ResultList
                    onClick={goBack}
                    doesShowGamesPS={doesShowGamesPS}
                    doesShowGamesXbox={doesShowGamesXbox}
                    doesShowGamesSwitch={doesShowGamesSwitch}
                    listOfGamesPS={searchedGamesPS}
                    listOfGamesXbox={listOfGamesXbox}
                    listOfGamesSwitch={listOfGamesSwitch}
                    searchGamesPS={searchGamesPS}
                    setSearchGamesPS={setSearchGamesPS}
                    clearSearch={() => setSearchGamesPS("")}
                />
            )}
        </div>
    );
}

export default Home;
