import { useState, useEffect } from "react";

export default function GetJokes() {
    let [joke, setNewJoke] = useState(0);
    let url = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async () => {
        let response = await fetch(url);
        let jsonRes = await response.json();
        setNewJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    }

    useEffect(() => {
        async function getFirstJoke(params) {
            let response = await fetch(url);
            let jsonRes = await response.json();
            setNewJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
        }
        getFirstJoke();
    },[]);

    return (
        <div>
            {/* <h2>Count : {count}</h2> */}
            {/* <h4>Joke:</h4> */}
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>Get Jokes</button>
        </div>
    );
}
