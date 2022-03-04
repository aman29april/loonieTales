import React from 'react'
import FirstLanguage from "./FirstLanguage"
import SubsidiaryLanguage from "../General/SubsidiaryLanguage"
import Age from "./Age";
import Education from "../General/Education";

function SectionA(props) {

    return (
        <div>
            <h4>A. Core / human capital factors</h4>
            <div style={{width: '100%'}}>

                <Age />

                {/*<Education target='principal' />*/}

                <FirstLanguage />
                <Education target='principal' />

                <SubsidiaryLanguage
                    title="Second Official Language"
                    target='principal' />

                {/*<CanadianWorkExperience*/}
                {/*    target='principal' />*/}
            </div>
        </div>

    )
}

export default SectionA
