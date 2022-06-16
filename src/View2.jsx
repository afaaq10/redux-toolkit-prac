import React from 'react'
import { useSelector } from 'react-redux'
function View2() {
    const numOfCakes = useSelector(state => state.myReducer.cakes)

    return (
        <div>
            <h2>{numOfCakes}</h2>
            

        </div>
    )
}

export default View2
