import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ResultsButtons from "./ResultsButtons";
import ResultsTable from "./ResultsTable";

const ParsingResultsPanel = () => {
    const [active, setActive] = useState("Xbox Game Console");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const updateActive = (newActive) => {
        setActive(newActive);
    };

    useEffect(() => {
        setLoading(true)
        console.log(active);

        axios
            .get(`https://gameparser-server.herokuapp.com/update/${active}`)
            .then((res) => {
                setLoading(false)
                setData(res.data);
            })
            .catch((error) => {
                setLoading(false)
                setData([]);
            });
    }, [active]);

    let table;
    if (loading) {
        table = <h1>Loading</h1>
    } else {
        table = <ResultsTable data={data} />
    }


    return (
        <section>
            <ResultsButtons updateActive={updateActive} active={active} />
            <div id="filter"></div>
            {table}
        </section>
    );
};

export default ParsingResultsPanel;
