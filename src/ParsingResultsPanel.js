import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ResultsButtons from "./ResultsButtons";
import ResultsTable from "./ResultsTable";

const ParsingResultsPanel = () => {
    const [active, setActive] = useState("Xbox Game Console");
    const [data, setData] = useState([]);

    const updateActive = (newActive) => {
        setActive(newActive);
    };

    useEffect(() => {
        console.log(active);

        axios
            .get(`http://localhost:5000/update/${active}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                setData([]);
            });
    }, [active]);

    return (
        <section>
            <ResultsButtons updateActive={updateActive} active={active} />
            <div id="filter"></div>
            <ResultsTable data={data} />
        </section>
    );
};

export default ParsingResultsPanel;
