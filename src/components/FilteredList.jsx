import ListOfCards from "./ListOfCards";

function FilteredList(props) {
    if (props.doesShowGamesPS) {
        return (
            <ListOfCards
                key={"PS"}
                onClick={props.onClick}
                namePlatform="PS"
                games={props.listOfGamesPS}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
                clearsearch={props.clearSearch}
            />
        );
    }

    if (props.doesShowGamesXbox) {
        return (
            <ListOfCards
                key={"Xbox"}
                onClick={props.onClick}
                namePlatform="Xbox"
                games={props.listOfGamesXbox}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
                clearsearch={props.clearSearch}
            />
        );
    }

    if (props.doesShowGamesSwitch) {
        return (
            <ListOfCards
                key={"Switch"}
                onClick={props.onClick}
                namePlatform="Switch"
                games={props.listOfGamesSwitch}
                searchGames={props.searchGames}
                setSearchGames={props.setSearchGames}
                clearsearch={props.clearSearch}
            />
        );
    }
}

export default FilteredList;
