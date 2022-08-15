import cl from "./Background.module.css";

function Background() {
    return (
        <div className={cl.area}>
            <ul className={cl.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default Background;
