import React from "react";

function GamePage(props) {
    return (
        <div>
            <div>Game name: {props.gameName}</div>
            <div>Game id: {props.gameId}</div>
            <div>Game genre: {props.gameGenre}</div>
            <div>Game developers: {props.gameDevelopers}</div>
            <div>Game publishers: {props.gamePublishers}</div>
            <div>Game releaseDates: {props.gameReleaseDates}</div>
        </div>
    );
}

export default GamePage;
