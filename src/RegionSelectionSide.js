import Checkbox from "./Checkbox"

const RegionSelectionSide = ({ getRegions }) => {

    const regions = ["MS.GB", "MS.RU", "MS.TR", "MS.AR"]
    let checked = new Set()

    const onCheck = (name) => {
        if (checked.has(name)) {
            checked.delete(name)
        } else {
            checked.add(name)
        }

        getRegions(Array.from(checked))
    }

    return (
        <div class="top-side">
            <h3>Дополнительные настройки источника</h3>
            <select name="cars" id="cars">
                <option value="volvo">MS.RU</option></select
            ><br />

            {
                regions.map((value) => {
                    return (
                        <Checkbox name={value} handleCheckboxChange={onCheck} />
                    )
                })
            }
        </div >
    )
}

export default RegionSelectionSide