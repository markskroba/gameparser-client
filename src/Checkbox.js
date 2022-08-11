import { useState } from "react";

const Checkbox = ({ name, handleCheckboxChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        if (checked) {
            setChecked(false);
        } else {
            setChecked(true);
        }

        handleCheckboxChange(name);
    };

    return (
        <>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={handleCheck}
            />
            <label>{name}</label>
            <br />
        </>
    );
};

export default Checkbox;
