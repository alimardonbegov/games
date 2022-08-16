import React from "react";
import TopBtn from "./TopBtn";
import Footer from "./UI/footer/Footer";
import gamer from "../images/gamer.png";

function GamePage(props) {
    return (
        <div>
            <TopBtn onClick={props.onClick} />
            <div className="game_page_block">
                <div className="game_page_colored">
                    <div> {props.gameName}</div>
                    <br />
                    <p>
                        The game was developed by {props.gameDevelopers} and released by{" "}
                        {props.gamePublishers} in Europe on {props.gameReleaseDates}.<br /> <br />{" "}
                        Game genre: {props.gameGenre}. Highly recommended to play and enjoy the
                        atmosphere of this game.
                    </p>
                    {/* <div>Game id: {props.gameId}</div> */}
                </div>
                <div className="game_page_img_block">
                    <img src={gamer} alt="" />
                    <h1 style={{ color: "#FD0054" }}>Gamer</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GamePage;
