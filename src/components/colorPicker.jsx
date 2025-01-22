import { useState } from "react"
import "./colorPicker.css"

export function ColorPicker (props) {

    const [value, setValue] = useState()

    const [color, setColor] = useState()

    const handleChange = (e) => {
        const inputValue = e.target.value
        setValue(inputValue)
        setColor(inputValue)
    }

    return (
        <>
        <div className='square' style={{backgroundColor: color}}>
          <p className='square_text'>Selected color: 
            {value}</p>
        </div>
        <p>Select a color:</p>
        <input type="color" id="color" onChange={(e) => handleChange(e)}/>
        </>
    )
}

        