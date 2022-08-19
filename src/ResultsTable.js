const ResultsTable = ({ data }) => {
    console.log(typeof data);

    return (
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

            {data.map((row, id) => {
                return (
                    <tr class="data_row">
                        <td>{id + 1}</td>
                        <td>{row.name}</td>
                        <td>{row.rating}</td>
                        <td>{row.is_on_sale ? "True" : "False"}</td>
                        <td>{row.game_sale ? "True" : "False"}</td>
                        <td>{row.sale_end_date}</td>
                        <td>{row.first_price}</td>
                        <td>{row.first_region}</td>
                        <td>{row.second_price}</td>
                        <td>{row.second_region}</td>
                        <td>{row.difference}</td>
                        <td>{row.buy ? "True" : "False"}</td>
                    </tr>
                );
            })}
        </table>
    );
};

export default ResultsTable;
