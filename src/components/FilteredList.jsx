import ListOfGames from "./ListOfGames";
import { useState } from "react";

function ResultList(props) {
    if (props.doesShowGamesPS) {
        return (
            <ListOfGames
                key={"PS"}
                onClick={props.onClick}
                platform="PS"
                games={props.listOfGamesPS}
                searchGamesPS={props.searchGamesPS}
                setSearchGamesPS={props.setSearchGamesPS}
                clearSearch={props.clearSearch}
            />
        );
    }
    if (props.doesShowGamesXbox) {
        return (
            <ListOfGames
                key={"Xbox"}
                onClick={props.onClick}
                platform="Xbox"
                games={props.listOfGamesXbox}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
            />
        );
    }
    if (props.doesShowGamesSwitch) {
        return (
            <ListOfGames
                key={"Switch"}
                onClick={props.onClick}
                platform="Switch"
                games={props.listOfGamesSwitch}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
            />
        );
    }
}

export default ResultList;
