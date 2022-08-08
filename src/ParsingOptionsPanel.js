import { useState } from "react"
import RegionSelectionSide from "./RegionSelectionSide"
import SourceSelectionSide from "./SourceSelectionSide"

const ParsingOptionsPanel = () => {
    let sources = []
    let regions = []

    const updateSelectedSources = (newSources) => {
        sources = newSources
    }

    const updateSelectedRegions = (newRegions) => {
        regions = newRegions
    }

    const submit = () => {
        console.log({
            sources,
            regions
        })
    }

    return (
        <section>
            <h1>Настройка парсинга</h1>
            <div class="sides">
                <SourceSelectionSide getSources={updateSelectedSources} />
                <RegionSelectionSide getRegions={updateSelectedRegions} />
            </div>

            <h3>Выберите кол-во игр для парсинга</h3>
            <input type="text" placeholder="1000" id="game-count" />

            <div class="top-buttons">
                <button id="btn-submit" onClick={submit}>Начать</button>
                <button id="btn-cancel">Отмена</button>
            </div>
        </section >
    )
}

export default ParsingOptionsPanel
