import { useState } from "react"

const ResultsButtons = ({ updateActive, active }) => {
    const sources = ["Xbox Game Console", "Xbox Game PC", "Xbox DLC", "Xbox Pre-Order"]

    const activate = (event) => {
        active = event.target.id
        console.log(active)
        updateActive(active)
    }

    return (
        <div id="bottom-categories">

            {sources.map((value) => {
                return <button class={
                    `bottom-category ${active === value ? 'active' : ''}`
                } id={value} onClick={activate}>{value}</button>
            })}
        </div>
    )
}

export default ResultsButtons