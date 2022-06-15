import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { myReducer } from './Slice'

export const CakeView = () => {
    const numOfCakes = useSelector(state => state.myReducer.cakes)

    const dispatch = useDispatch()

    const inc = () => {
        dispatch({
            type: "increment"
        }
        )
    }
    const dec = () => {
        dispatch({
            type: "decrement"
        })
    }


    return (
        <div>
            <h2>{numOfCakes}</h2>
            <button onClick={inc}>Increment Counter</button>
            <button onClick={dec}>Decrement Counter</button>

        </div>
    )
}
