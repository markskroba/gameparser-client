
const ParsingResultsPanel = () => {
    return (
        <section>
            <div id="bottom-categories">
                <button class="bottom-category">Xbox Game Console</button>
                <button class="bottom-category">Xbox Game PC</button>
                <button class="bottom-category">Xbox DLC</button>
                <button class="bottom-category">Xbox Pre-Order</button>
            </div>

            <div id="filter"></div>

            <table>
                <tr id="first-row">
                    <td>#</td>
                    <td>Name</td>
                    <td>Total Rating</td>
                    <td>Now on Sale</td>
                    <td>Game Sale</td>
                    <td>Date End Sake</td>
                    <td>First Price</td>
                    <td>First Region</td>
                    <td>Second Price</td>
                    <td>Second Region</td>
                    <td>Difference</td>
                    <td>BUY?</td>
                </tr>
            </table>
        </section>
    )
}

export default ParsingResultsPanel 
