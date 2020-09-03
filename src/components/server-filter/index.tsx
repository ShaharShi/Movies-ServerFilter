import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface IProps {
    setServerFilterValue: Function
}

export default function ServerFilter(props: IProps) {
    const [inputValue, setInputValue] = useState('')
    const { setServerFilterValue } = props

    function searchOnServer(value: string) {
        setServerFilterValue(value)
    }

    return (
        <div className={"ml-auto"}>
            <InputGroup className="mb-3">
            <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {setInputValue(e.target.value)}}
                value={inputValue}
                placeholder={"Search Movie on IMDb"}
            />
            <Button onClick={() => {searchOnServer(inputValue)}}> Filter </Button>
        </InputGroup>
        </div>
    )
}