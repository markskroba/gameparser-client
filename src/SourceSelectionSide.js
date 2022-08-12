import { useState } from "react";
import Checkbox from "./Checkbox";

const SourceSelectionSide = ({ getSources }) => {
    const sources = [
        "Xbox Game Console",
        "Xbox Game PC",
        "Xbox DLC",
        "Xbox Pre-Order",
    ];
    const [selected, setSelected] = useState(null);

    return (
        <div class="top-side">
            <h3>Выберите источник</h3>
            <select name="cars" id="cars">
                <option value="volvo">Xbox Game Console + Xbox Game PC</option>
            </select>
            <br />

            {sources.map((value) => {
                return (
                    <>
                        <input
                            type="radio"
                            name={value}
                            value={value}
                            checked={selected === value}
                            onChange={() => {
                                setSelected(value);
                                getSources(value);
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

export default SourceSelectionSide;
