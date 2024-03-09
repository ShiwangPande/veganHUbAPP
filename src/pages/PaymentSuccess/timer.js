import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import React from 'react'

function Timer(props) {


    const { initMinute = 0, initSeconds = 10 } = props
    const [minutes, setMinutes] = useState(initMinute)
    const [seconds, setSeconds] = useState(initSeconds)

    const navigate = useNavigate();
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            } if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    // redirect to home page
                    setTimeout(() => {
                        // 👇 Redirects to about page, note the `replace: true`
                        navigate('/', { replace: true });
                    }, 3000)
                } else {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    })

    return (
        <>
            <div >
                {minutes === 0 && seconds === 0 ? (
                    <div>
                        <div className="w-50">
                            <img
                                className="cardImg"
                                src='https://media0.giphy.com/media/ZZZo9EVpp4KeIiMlT2/giphy.gif'
                                alt='gif'
                            />
                        </div>
                    </div>
                ) : (
                    <div className="text-center my-5">
                        <h1 className='text-5xl mt-10 text-center text-yellow-400'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                        <p className="text-xl mt-1">minutes left to deliever your order</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Timer