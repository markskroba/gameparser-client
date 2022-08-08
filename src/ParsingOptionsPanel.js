import RegionSelectionSide from "./RegionSelectionSide"
import SourceSelectionSide from "./SourceSelectionSide"

const ParsingOptionsPanel = () => {
    return (
        <section>
            <h1>Настройка парсинга</h1>
            <div class="sides">
                <SourceSelectionSide />
                <RegionSelectionSide />
            </div>

            <h3>Выберите кол-во игр для парсинга</h3>
            <input type="text" placeholder="1000" id="game-count" />

            <div class="top-buttons">
                <button id="btn-submit">Начать</button>
                <button id="btn-cancel">Отмена</button>
            </div>
        </section>
    )
}

export default ParsingOptionsPanel
