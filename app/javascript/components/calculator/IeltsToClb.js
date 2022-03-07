import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Form, FormText, OverlayTrigger, Overlay, Tooltip, Button} from "react-bootstrap";
import Popover from 'react-bootstrap/Popover'
import NumberFormat from "react-number-format";
import {getClbFromIelts} from "../util/languageEquivalency";

const OPTIONS = {'9.0+': 9.0, '8.5': 8.5, '8.0': 8.0,
    '7.5': 7.5, '7.0': 7.0, '6.5': 6.5, '6.0': 6.0,
    '5.5': 5.5, '5.0': 5.0, '4.5': 4.5,
    '4.0': 4.0, '3.5': 3.5,'3.0 or Less': 3.0}


function IeltsToClb(props)  {
    const [listening, setListening] = useState(null)
    const [reading, setReading] = useState(null)
    const [writing, setWriting] = useState(null)
    const [speaking, setSpeaking] = useState(null)

    const [clb, setClb] = useState(null)


    useEffect(() => {
        if( !listening || !reading || !writing || !speaking) return
        const result = getClbFromIelts(listening,reading, speaking, writing )
        setClb(result)
    }, [listening, reading, writing, speaking])

    return (
        <div className=" row">
            <div className="col-md-6 ">
                <form className='form-calculator-tax'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Form.Group>
                                <Form.Label>Listening</Form.Label>

                                <Form.Select
                                    onChange={(e) => setListening(e.target.value)}
                                    label="Listening"
                                    placeholder="Listening"
                                >
                                    <option value="default" selected disabled>
                                        Listening
                                    </option>
                                    {
                                        Object.entries(OPTIONS).map(([key, value]) => {
                                            return(<option key={value} value={value}>{key}</option>)
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className='col-md-6'>
                            <Form.Group>
                                <Form.Label>Reading</Form.Label>

                                <Form.Select
                                    onChange={(e) => setReading(e.target.value)}
                                    label="Reading"
                                    placeholder="Reading"
                                >
                                    <option value="default" selected disabled>
                                        Listening
                                    </option>
                                    {
                                        Object.entries(OPTIONS).map(([key, value]) => {
                                            return(<option key={value} value={value}>{key}</option>)
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Form.Group>
                                <Form.Label>Speaking</Form.Label>

                                <Form.Select
                                    onChange={(e) => setSpeaking(e.target.value)}
                                    label="Speaking"
                                    placeholder="Speaking"
                                >
                                    <option value="default" selected disabled>
                                        Speaking
                                    </option>
                                    {
                                        Object.entries(OPTIONS).map(([key, value]) => {
                                            return(<option key={value} value={value}>{key}</option>)
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className='col-md-6'>
                            <Form.Group>
                                <Form.Label >Writing</Form.Label>

                                <Form.Select
                                    onChange={(e) => setWriting(e.target.value)}
                                    label="Writing"
                                    placeholder="Writing"
                                >
                                    <option value="default" selected disabled>
                                        Writing
                                    </option>
                                    {
                                        Object.entries(OPTIONS).map(([key, value]) => {
                                            return(<option key={value} value={value}>{key}</option>)
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>

                </form>


            </div>

            <div id="results" className="col col-xs-12 col-sm-6 col-md-4 col-md-offset-1">
                <div className="results">
                    <div className="text-center-xs">
                        <span className="results-title">Your CLB is</span>
                        <span className="results-return balance">
                            <NumberFormat
                                value={clb}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'CLB '}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IeltsToClb
