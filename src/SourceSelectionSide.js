import Checkbox from "./Checkbox"

const SourceSelectionSide = ({ getSources }) => {
    const sources = ["Xbox Game Console", "Xbox Game PC", "Xbox DLC", "Xbox Pre-Order"]
    let checked = new Set()

    const onCheck = (name) => {
        if (checked.has(name)) {
            checked.delete(name)
        } else {
            checked.add(name)
        }

        getSources(Array.from(checked))
    }

    return (
        <div class="top-side">
            <h3>Выберите источник</h3>
            <select name="cars" id="cars">
                <option value="volvo">
                    Xbox Game Console + Xbox Game PC
                </option></select
            ><br />

            {
                sources.map((value) => {
                    return (
                        <Checkbox name={value} handleCheckboxChange={onCheck} />
                    )
                })
            }
        </div>
    )
}

export default SourceSelectionSide