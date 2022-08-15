import React from "react";

function GamePage(props) {
    let inf = props.game;
    console.log(inf);
    return (
        <div>
            <div>Game name: {props.gameName}</div>
            <br></br>
            <div>Game id: {props.gameId}</div>
            <div>Game genre: {props.gameGenre}</div>
            <div>Game developers: {props.gameDevelopers}</div>
            <div>Game publishers: {props.gamePublishers}</div>
            <div>Game releaseDates: {props.gameReleaseDates}</div>
            <div>Game platforms: {props.gameReleaseDates}</div>
        </div>
    );
}

export default GamePage;
