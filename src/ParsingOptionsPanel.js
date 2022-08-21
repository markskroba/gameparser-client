import axios from "axios";
import { useState } from "react";
import GameCountSection from "./GameCountSection";
import RegionSelectionSide from "./RegionSelectionSide";
import SourceSelectionSide from "./SourceSelectionSide";

const ParsingOptionsPanel = () => {
    let source = null;
    let region = null;
    let count = 0;

    const updateSelectedSources = (newSources) => {
        source = newSources;
    };

    const updateSelectedRegions = (newRegions) => {
        region = newRegions;
    };

    const updateGameCount = (newCount) => {
        count = newCount;
    };

    const submit = () => {
        console.log("Submit");
        axios
            .post(`https://gameparser-server.herokuapp.com/parse`, {
                // .post(`http://localhost:5000/parse`, {
                source,
                region,
                count: parseInt(count),
            })
            .then((res) => {
                console.log(res);
            });
    };

    const cancel = () => {
        console.log("Submit");
        axios
            .post(`https://gameparser-server.herokuapp.com/stop`)
            // .post(`http://localhost:5000/stop`)
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <section>
            <h1>Настройка парсинга</h1>
            <div class="sides">
                <SourceSelectionSide getSources={updateSelectedSources} />
                <RegionSelectionSide getRegions={updateSelectedRegions} />
            </div>

            <GameCountSection getCount={updateGameCount} />

            <div class="top-buttons">
                <button id="btn-submit" onClick={submit}>
                    Начать
                </button>
                <button id="btn-cancel" onClick={cancel}>
                    Отмена
                </button>
            </div>
        </section>
    );
};

export default ParsingOptionsPanel;
