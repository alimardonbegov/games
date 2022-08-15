import ListOfCards from "./ListOfCards";

function FilteredList(props) {
    if (props.doesShowGamesPS) {
        return (
            <ListOfCards
                key={"PS"}
                onClick={props.onClick}
                platform="PS"
                games={props.listOfGamesPS}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
                clearSearch={props.clearSearch}
            />
        );
    }

    if (props.doesShowGamesXbox) {
        return (
            <ListOfCards
                key={"Xbox"}
                onClick={props.onClick}
                platform="Xbox"
                games={props.listOfGamesXbox}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
                clearSearch={props.clearSearch}
            />
        );
    }

    if (props.doesShowGamesSwitch) {
        return (
            <ListOfCards
                key={"Switch"}
                onClick={props.onClick}
                platform="Switch"
                games={props.listOfGamesSwitch}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
                clearSearch={props.clearSearch}
            />
        );
    }
}

export default FilteredList;
