import { TITLES, MESSAGES } from "../../constants/greetings";

const GreetingsTitle = () => {
    const currentHour = new Date().getHours();

    let greetingsToDisplay;
    if (currentHour >= 5 && currentHour < 12) {
        greetingsToDisplay = TITLES.MORNING;
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingsToDisplay = TITLES.AFTERNOON;
    } else {
        greetingsToDisplay = TITLES.EVENING;
    }

    return (
        <h1 className="mb-5 text-5xl font-bold">
            {greetingsToDisplay.at(Math.floor(Math.random() * greetingsToDisplay.length))}
        </h1>
    );
}

const GreetingsMessage = () => {
    return (
        <p className="mb-5">
            {MESSAGES.at(Math.floor(Math.random() * MESSAGES.length))}
        </p>
    )
}

const Greetings = () => {


    return (
        <div className="max-w-md">
            <GreetingsTitle />
            <GreetingsMessage />
            <button className="btn btn-primary">Get Started</button>
        </div>
    );
};

export default Greetings;