
import "./Greetings.css";

function Greetings({lang, children}) {
let greetingText = "";

    switch (lang) {
        case "en":
            greetingText =`hello ${children}`;
            break;
        case "es":
            greetingText = `hola ${children}`;
            break;
}

    return <div>{greetingText}</div>;

}

export default Greetings;