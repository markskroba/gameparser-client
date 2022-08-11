import { useState } from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

const RegionSelectionSide = ({ getRegions }) => {
    const regions = ["MS.GB", "MS.RU", "MS.TR", "MS.AR"];
    const [selected, setSelected] = useState(null);
    let checked = new Set();

    return (
        <div class="top-side">
            <h3>Дополнительные настройки источника</h3>
            <select name="cars" id="cars">
                <option value="volvo">MS.RU</option>
            </select>
            <br />

            {regions.map((value) => {
                return (
                    <>
                        <input
                            type="radio"
                            name={value}
                            value={value}
                            checked={selected === value}
                            onChange={() => {
                                setSelected(value);
                                getRegions(value);
                            }}
                        />
                        <label for={value}>{value}</label>
                        <br />
                    </>
                );
            })}
        </div>
    );
};

export default RegionSelectionSide;
