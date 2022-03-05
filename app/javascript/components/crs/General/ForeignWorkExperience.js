import React from 'react'
import {Form} from "react-bootstrap";

function ForeignWorkExperience(props) {
    return (
        <div>
            <div className="inputFieldDivs">
                <h5>{props.title}</h5>
                <Form.Group variant="outlined" className="inputFields">
                    <Form.Text>Select One</Form.Text>
                    <Form.Select
                        label="Education"
                        onChange={(e) => props.onChange(e.target.selectedOptions[0].id) }
                    >
                        <option id="none" value={0}>No foreign work experience</option>
                        <option id="one_or_two" value={1}>1 or 2 years of foreign work experience</option>
                        <option id="three_or_more" value={2}>3 years or more of foreign work experience</option>
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}

export default ForeignWorkExperience
