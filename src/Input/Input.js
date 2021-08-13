import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

const Input=(props)=>{

    const {onSubmit,}=props

    const [inputValue,setInputValue]=React.useState("")

    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(onSubmit){
            onSubmit(inputValue)
            setInputValue('')
        }
    }

    return <form className='App-form' onSubmit={handleSubmit}>
        <TextField
            fullWidth
            className='App-form-input'
            placeholder='Write your message'
            onChange={handleChange}
            value={inputValue}
            id="standard-required"
            label="Message"
            variant="outlined"
            autoFocus={true}/>

        <Button
            className='App-form-button'
            variant="contained"
            color="primary"
            type="submit">Send</Button>
    </form>
}

export default Input