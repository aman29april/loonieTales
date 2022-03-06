import React from 'react'
import FirstLanguage from "./FirstLanguage"
import SubsidiaryLanguage from "../General/SubsidiaryLanguage"
import Age from "./Age";
import Education from "../General/Education";
import CanadianWorkExperience from "../General/CanadianWorkExperience";
import {Accordion} from "react-bootstrap";

function SectionA(props) {

    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen >
                <Accordion.Item eventKey="0">
                    <Accordion.Header
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h4>A. Core / human capital factors</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/*<h4>A. Core / human capital factors</h4>*/}
                        <div style={{width: '100%'}}>

                            <Age />
                            <br/>
                            <Education target='principal' />
                            <br/>
                            <FirstLanguage />
                            <br/>
                            <SubsidiaryLanguage
                                title="Second Official Language"
                                target='principal' />
                            <br/>
                            <CanadianWorkExperience
                                target='principal' />
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
}

export default SectionA
