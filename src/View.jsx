import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { myReducer } from './Slice'

export const CakeView = () => {
    const numOfCakes = useSelector(state => state.myReducer.cakes)
    const text = useSelector(state => state.myReducer.text)

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
    const changeColor = () => {
        dispatch({
            type: "changeBackgroundColor",
            payload: "pink"
        })
    }
const changeText=()=> {
    dispatch({ 
            type: "changeText",
            payload: "Oops"
    })
}

    return (
        <div>
            <h2>{numOfCakes}</h2>
            <button onClick={inc}>Increment Counter</button>
            <button onClick={dec}>Decrement Counter</button>
            <button onClick={changeColor}>ChangeColor</button>
            <button onClick={changeText}>{text}</button>

        </div>
    )
}
