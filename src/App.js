import React from "react";
import "./App.scss";
import { useTimer, useStopwatch } from "react-timer-hook";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function MyStopwatch() {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const save = () => {
        console.log({
            minutes,
            hours,
            seconds,
        });
    };

    return (
        <div className="my-stopwatch">
            <Typography variant="h1" className="stopwatch-time">
                {" "}
                <span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
            </Typography>

            <Button
                className="stopwatch-button"
                onClick={() => {
                    if (isRunning) {
                        return pause();
                    }
                    start();
                }}
                variant="outlined"
            >
                {isRunning ? "Pause" : "Start"}
            </Button>
            <Button
                className="stopwatch-button"
                variant="outlined"
                onClick={save}
            >
                Save
            </Button>
            <Button
                className="stopwatch-button"
                variant="outlined"
                onClick={reset}
            >
                Reset
            </Button>
        </div>
    );
}
export default function App() {
    return (
        <div>
            <MyStopwatch />
        </div>
    );
}
