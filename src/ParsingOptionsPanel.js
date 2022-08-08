
const ParsingOptionsPanel = () => {
    return (
        <section>
            <h1>Настройка парсинга</h1>
            <div class="sides">
                <div class="top-side">
                    <h3>Выберите источник</h3>
                    <select name="cars" id="cars">
                        <option value="volvo">
                            Xbox Game Console + Xbox Game PC
                        </option></select
                    ><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> Xbox Game Console</label><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> Xbox Game PC</label><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> Xbox DLC</label><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> Xbox Pre-Order</label><br />
                </div>
                <div class="top-side">
                    <h3>Дополнительные настройки источника</h3>
                    <select name="cars" id="cars">
                        <option value="volvo">MS.RU</option></select
                    ><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> MS.GB</label><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> MS.RU</label><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> MS.TR</label><br />
                    <input type="checkbox" name="" id="" />
                    <label for="vehicle1"> MS.AR</label><br />
                </div>
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
