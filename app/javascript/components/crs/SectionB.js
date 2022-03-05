import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Accordion, Form} from "react-bootstrap";
import Education from "./General/Education";
import SubsidiaryLanguage from "./General/SubsidiaryLanguage";
import CanadianWorkExperience from "./General/CanadianWorkExperience";
import {setValue} from "../../redux/partneredUpdate";



function SectionB(props) {

    const [hasPartner, setHasPartner] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setValue(hasPartner))
    }, [dispatch, hasPartner])

    return (
        <div>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4>B. Spouse or common-law partner factors (if applicable)</h4>
                </Accordion.Header>
                <Accordion.Body>
                    <div style={{width: '100%'}}>
                        <Form.Check
                            type='checkbox'
                            name="applicable"
                            color="primary"
                            label="Is Applicable?"
                            style={{marginBottom: '20px'}}
                                onChange={() => setHasPartner(!hasPartner)}
                                />
                        <div style={{ display: hasPartner ? 'inline' : 'none' }}>
                            <Education
                                target='spouse' />
                            <SubsidiaryLanguage
                                target='spouse'
                                title="First Official Language" />
                            <CanadianWorkExperience
                                target='spouse' />
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    )
}

export default SectionB
