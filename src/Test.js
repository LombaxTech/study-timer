import React, { useState, useEffect } from "react";

export default function Test() {
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };
    }, []);

    const alertUser = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };

    return <div>Test</div>;
}
