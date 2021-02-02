import React from "react";
import { Bar } from "react-chartjs-2";
import "./App.scss";

const data = {
    // labels: ["January", "February", "March", "April", "May", "June", "July"],

    labels: ["Physics"],
    datasets: [
        {
            label: "Monday 22nd",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            // data: [65, 59, 80, 81, 56, 55, 40],
            data: [65],
        },
    ],
};

export default function Charts() {
    return (
        <div className="charts">
            <Bar
                className="my-bar-chat"
                data={data}
                width={300}
                height={500}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}
