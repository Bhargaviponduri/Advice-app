import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './MyAdvice.scss'

const MyAdvise = () => {
    const [advice, setAdvice] = useState(null)
    const [theme, setTheme] = useState('theme-white')
    useEffect(() => {
        fetchAdvices()
    }, [])

    const fetchAdvices = async () => {
        const resultdata = await axios.get('https://api.adviceslip.com/advice')
        setAdvice(resultdata.data.slip.advice)
    }
    const handleClick = (theme) => {
        setTheme(theme)
    }
    return (
        <div className={`container ${theme}`}>
            <div className='theme-options'>
                <div id='theme-white' className={theme === 'theme-white' && 'active'} onClick={() => handleClick('theme-white')}></div>
                <div id='theme-orange' className={theme === 'theme-orange' && 'active'} onClick={() => handleClick('theme-orange')}></div>
                <div id='theme-blue' className={theme === 'theme-blue' && 'active'} onClick={() => handleClick('theme-blue')}></div>
                <div id='theme-purple' className={theme === 'theme-purple' && 'active'} onClick={() => handleClick('theme-purple')}></div>
                <div id='theme-green' className={theme === 'theme-green' && 'active'} onClick={() => handleClick('theme-green')}></div>
                <div id='theme-black' className={theme === 'theme-black' && 'active'} onClick={() => handleClick('theme-black')}></div>

            </div>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='buttonStyles' onClick={fetchAdvices}>Show me Advice</button>
            </div>
        </div>
    )
}

export default MyAdvise;