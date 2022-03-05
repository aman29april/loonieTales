import React from "react"
import {Form} from "react-bootstrap";

function FormCheckbox(props) {
    return (
        <Form.Check
            color="primary"
            label={props.title}
            style={{width: '100%', marginBottom: '20px'}}
            onChange={props.onChange}
        />
    )
}

export default FormCheckbox
