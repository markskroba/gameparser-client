import ResultsButtons from "./ResultsButtons"
import ResultsTable from "./ResultsTable"

const ParsingResultsPanel = () => {
    return (
        <section>
            <ResultsButtons />
            <div id="filter">
            </div>
            <ResultsTable data={[]} />
        </section>
    )
}

export default ParsingResultsPanel 
