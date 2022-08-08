const GameCountSection = ({ getCount }) => {

    const onChange = (event) => {
        getCount(event.target.value)
    }

    return (
        <>
            <h3>Выберите кол-во игр для парсинга</h3>
            <input type="text" placeholder="1000" id="game-count" onChange={onChange} />
        </>
    )
}

export default GameCountSection