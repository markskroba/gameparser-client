import { useState } from "react"
import ResultsButtons from "./ResultsButtons"
import ResultsTable from "./ResultsTable"

const ParsingResultsPanel = () => {
    const [active, setActive] = useState(null)

    const updateActive = (newActive) => {
        setActive(newActive)
    }

    return (
        <section>
            <ResultsButtons updateActive={updateActive} active={active} />
            <div id="filter">
            </div>
            <ResultsTable data={[]} />
        </section>
    )
}

export default ParsingResultsPanel 
