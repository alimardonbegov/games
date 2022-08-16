import MyButton from "../myButton/MyButton";
import switchLogo from "../../../images/switch.png";
import cl from "./GameCard.module.scss";

function GameCard(props) {
    return (
        <div className={cl.block_one_game}>
            <div className={cl.game_name}>
                <h3>{props.name}</h3>
                {/* <p> {props.releaseDatesEurope}</p> */}
            </div>
            <div className={cl.game_detail}>
                <p>Developers: {props.developer}.</p>
                <p>Release: {props.releaseDatesEurope}.</p>
            </div>
            <div className={cl.game_detail_bottom}>
                {/* Check icons of PS  */}

                {props.platform.length === 1 && props.platform[0] === "PS" && (
                    <div className={cl.game_detail_plt}>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-playstation"></i>
                        </div>
                    </div>
                )}
                {props.platform.length === 2 &&
                    props.platform[0] === "PS" &&
                    props.platform[1] === "Xbox" && (
                        <div className={cl.game_detail_plt}>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-playstation"></i>
                            </div>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-xbox"></i>
                            </div>
                        </div>
                    )}
                {props.platform.length === 2 &&
                    props.platform[0] === "PS" &&
                    props.platform[1] === "Switch" && (
                        <div className={cl.game_detail_plt}>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-playstation"></i>
                            </div>
                            <div className={cl.logo_platform}>
                                <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                            </div>
                        </div>
                    )}
                {props.platform.length === 3 && props.platform[0] === "PS" && (
                    <div className={cl.game_detail_plt}>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-playstation"></i>
                        </div>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-xbox"></i>
                        </div>
                        <div className={cl.logo_platform}>
                            <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                        </div>
                    </div>
                )}

                {/* Check icons of Xbox  */}

                {props.platform.length === 1 && props.platform[0] === "Xbox" && (
                    <div className={cl.game_detail_plt}>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-xbox"></i>
                        </div>
                    </div>
                )}

                {props.platform.length === 2 &&
                    props.platform[0] === "Xbox" &&
                    props.platform[1] === "PS" && (
                        <div className={cl.game_detail_plt}>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-xbox"></i>
                            </div>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-playstation"></i>
                            </div>
                        </div>
                    )}
                {props.platform.length === 2 &&
                    props.platform[0] === "Xbox" &&
                    props.platform[1] === "Switch" && (
                        <div className={cl.game_detail_plt}>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-xbox"></i>
                            </div>
                            <div className={cl.logo_platform}>
                                <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                            </div>
                        </div>
                    )}
                {props.platform.length === 3 && props.platform[0] === "Xbox" && (
                    <div className={cl.game_detail_plt}>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-xbox"></i>
                        </div>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-playstation"></i>
                        </div>
                        <div className={cl.logo_platform}>
                            <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                        </div>
                    </div>
                )}

                {/* Check icons Switch games */}

                {props.platform.length === 1 && props.platform[0] === "Switch" && (
                    <div className={cl.game_detail_plt}>
                        <div className={cl.logo_platform}>
                            <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                        </div>
                    </div>
                )}
                {props.platform.length === 2 &&
                    props.platform[0] === "Switch" &&
                    props.platform[1] === "PS" && (
                        <div className={cl.game_detail_plt}>
                            <div className={cl.logo_platform}>
                                <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                            </div>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-playstation"></i>
                            </div>
                        </div>
                    )}
                {props.platform.length === 2 &&
                    props.platform[0] === "Switch" &&
                    props.platform[1] === "Xbox" && (
                        <div className={cl.game_detail_plt}>
                            <div className={cl.logo_platform}>
                                <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                            </div>
                            <div className={cl.logo_platform}>
                                <i class="fa-brands fa-xbox"></i>
                            </div>
                        </div>
                    )}
                {props.platform.length === 3 && props.platform[0] === "Switch" && (
                    <div className={cl.game_detail_plt}>
                        <div className={cl.logo_platform}>
                            <img style={{ width: "18px" }} src={switchLogo} alt="switch" />
                        </div>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-playstation"></i>
                        </div>
                        <div className={cl.logo_platform}>
                            <i class="fa-brands fa-xbox"></i>
                        </div>
                    </div>
                )}
                <div className="game-detail-genre">
                    <p>{props.genre}</p>
                </div>
                <div className="">
                    <MyButton onClick={props.onClick} style={{ width: "100%" }}>
                        Open
                    </MyButton>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
