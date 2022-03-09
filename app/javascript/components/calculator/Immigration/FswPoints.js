import React, {useEffect, useState} from "react"
import {OptionsFromObject} from "../../util/reactHtml";
import {Form} from "react-bootstrap";
import {getFederalTaxAmount, getProvincialTaxAmount, PROVINCIAL_CODES, roundToPrecision} from "@equisoft/tax-ca";
import {ResultTable} from "../../crs/common";

const SINP_AGE_OPTIONS =  {
    'Under 18': 0,
    '18 to 35': 8,
    '47 or over': 0
}

const SINP_EDUCATION_OPTIONS = {
    'PhD degree': 23,
    'Masters degree': 23,
    "Bachelor's degree OR 3 or more year degree program at a university": 20,
    "Trade certification equivalent to journey person status in Saskatchewan": 20,
    "Degree program that requires two years at a university": 15,
    "Degree program that requires one year at a university": 12
}

const SINP_LANGUAGE_OPTIONS = {
    'Less Fluent Basic (CLB 0-3)': 0,
    'Fluent Basic (CLB 4)': 4,
    'Initial Intermediate (CLB 5)': 5,
    'Developing Intermediate (CLB 6)': 6,
    'Adequate Intermediate (CLB 7)': 7,
    'Fluent Intermediate or Above (CLB 8 and up)': 8
}




function Sinp(props)  {

    const [agePoints, setAgePoints] = useState(0)
    const [eduPoints, setEduPoints] = useState(0)
    const [sskEduPoints, setSskEduPoints] = useState(0)
    const [languagePoints, setLanguagePoints] = useState(0)
    const [past5ExpPoints, setPast5ExpPoints] = useState(0)
    const [permitPoints, setPermitPoints] = useState(0)
    const [familyTiesPoints, setFamilyTiesPoints] = useState(0)
    const [totalPoints, setTotalPoints] = useState(0)
    useEffect(() => {
        const total = agePoints + eduPoints  + languagePoints + sskEduPoints + past5ExpPoints +
            familyTiesPoints + permitPoints
        setTotalPoints(total)
    }, [agePoints, eduPoints, sskEduPoints, languagePoints, past5ExpPoints, familyTiesPoints, permitPoints])

    function ResultRows(){
        let rows = []
        const data = {
            'Age': agePoints,
            'Education': eduPoints,
            'Language': languagePoints,
            'Education in SSK': sskEduPoints,
            'Skilled Work Experience': past5ExpPoints,
            'Worked in SSK': permitPoints,
            'Family Ties in SSK': familyTiesPoints
        }
        return Object.entries(data).map(([k,v]) => {
            return <tr>
                <td className={`text-lg-start`}> {k}</td>
                <td>{v}</td>
            </tr>
        } )
    }

    return (
        <div className='row'>
            <div className='col-md-8 shadow-box'>
                <form role="form" className="canada67form" >
                    <Form.Group>
                        <Form.Label className='fw-bold'>Select your age group</Form.Label>
                        <Form.Select
                            onChange={(e) => { setAgePoints(Number(e.target.value))}}
                        >
                            <OptionsFromObject options={SINP_AGE_OPTIONS} includeBlank={true} />
                        </Form.Select>

                        <div className="score-design text-danger" id="AgeScore">Score {agePoints}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='fw-bold'>Education and Training</Form.Label>
                        <p>
                            What is your highest level of completed education?
                        </p>
                        <Form.Select
                            onChange={(e) => { setEduPoints(Number(e.target.value))}}
                        >
                            <OptionsFromObject options={SINP_EDUCATION_OPTIONS} includeBlank={true} />
                        </Form.Select>
                        <div className="score-design text-danger" id="AgeScoree">Score {eduPoints}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='fw-bold'>Have you studied for one full-time academic year at a recognized Saskatchewan post-secondary
                            educational institution while on a valid study permit?</Form.Label>

                        <div className="radio-group" key='ssk_edu'
                             onChange={(e) => {setSskEduPoints(Number(e.target.value))}}>
                            <Form.Check
                                inline
                                label="Yes"
                                name="ssk_edu"
                                type='radio'
                                id='ssk_edu_yes'
                                value='5'
                            />

                            <Form.Check
                                inline
                                label="No"
                                name="ssk_edu"
                                type='radio'
                                id='ssk_edu_no'
                                value='0'
                            />
                        </div>
                        <div className="score-design text-danger" id="FullTimeScore">Score {sskEduPoints}</div>
                    </Form.Group>
                    <div className="form-group">
                        <Form.Label className='fw-bold'>Language Ability</Form.Label>
                        <p>
                            In order to claim points for language, candidates must demonstrate their proficiency in
                                English OR French by way of a language test recognized by the Government of
                                Saskatchewan.
                        </p>
                        <Form.Select
                            onChange={(e) => { setLanguagePoints(Number(e.target.value))}}
                        >
                            <OptionsFromObject options={SINP_LANGUAGE_OPTIONS} includeBlank={true} />
                        </Form.Select>
                        <div className="score-design text-danger" id="LanguageScore">Score {languagePoints}</div>
                    </div>
                    <div className="form-group">
                        <Form.Label className='fw-bold'>In the past five years, how many years of skilled work experience did you obtain</Form.Label>
                        <p>
                            Skilled Worker Experience is defined by the Canadian National Occupational Classification
                                (NOC) and means: Managerial jobs (NOC skill type 0), Professional jobs (NOC skill type A),
                                Technical jobs and Skilled trades (NOC skill type B).
                        </p>

                        <div className="radio-group" onChange={(e) => {setPast5ExpPoints(Number(e.target.value))}}>
                            <Form.Check
                                inline
                                label="1"
                                name="past-exp"
                                type='radio'
                                id='past-exp-1'
                                value='2'
                            />

                            <Form.Check
                                inline
                                label="2"
                                name="past-exp"
                                type='radio'
                                id='past-exp-2'
                                value='4'
                            />

                            <Form.Check
                                inline
                                label="3"
                                name="past-exp"
                                type='radio'
                                id='past-exp-3'
                                value='6'
                            />

                            <Form.Check
                                inline
                                label="4"
                                name="past-exp"
                                type='radio'
                                id='past-exp-4'
                                value='8'
                            />

                            <Form.Check
                                inline
                                label="5"
                                name="past-exp"
                                type='radio'
                                id='past-exp-5'
                                value='10'
                            />
                        </div>
                        <div className="score-design text-danger" id="PastFiveScore">Score {past5ExpPoints}</div>
                    </div>
                    <div className="form-group">
                        <Form.Label className='fw-bold'>In the five years prior (to the) date of your EOI profile submission (2009 - 2014), how many
                            years of skilled work experience did you obtain?
                        </Form.Label>

                        <div className="radio-group" onChange={(e) => {setPast5ExpPoints(Number(e.target.value))}}>
                            <Form.Check
                                inline
                                label="1"
                                name="past6-exp"
                                type='radio'
                                id='past6-exp-1'
                                value='0'
                            />

                            <Form.Check
                                inline
                                label="2"
                                name="past6-exp"
                                type='radio'
                                id='past6-exp-2'
                                value='2'
                            />

                            <Form.Check
                                inline
                                label="3"
                                name="past6-exp"
                                type='radio'
                                id='past6-exp-3'
                                value='3'
                            />

                            <Form.Check
                                inline
                                label="4"
                                name="past6-exp"
                                type='radio'
                                id='past6-exp-4'
                                value='4'
                            />

                            <Form.Check
                                inline
                                label="5"
                                name="past6-exp"
                                type='radio'
                                id='past6-exp-5'
                                value='5'
                            />
                        </div>
                        <div className="score-design text-danger" id="PastFiveScore">Score {past5ExpPoints}</div>
                    </div>
                    <div className="form-group">
                        <Form.Label className='fw-bold'>Have you obtained 12 months or more of work experience in Saskatchewan, on a valid work
                            permit, in the past five years?
                        </Form.Label>
                        <div className="radio-group" onChange={(e) => {setPermitPoints(Number(e.target.value))}}>
                            <Form.Check
                                inline
                                label="Yes"
                                name="permit"
                                type='radio'
                                id='permit-yes'
                                value='5'
                            />
                            <Form.Check
                                inline
                                label="No"
                                name="permit"
                                type='radio'
                                id='permit-no'
                                value='0'
                            />
                        </div>
                        <div className="score-design text-danger" id="ExpSaskScore">Score {permitPoints}</div>
                    </div>
                    <div className="form-group">

                        <Form.Label className='fw-bold'>Close Family Relative in Saskatchewan
                        </Form.Label>
                        <p>
                            Do you or your accompanying spouse/common-law partner have a family relative that is a
                                Canadian citizen or permanent resident living in Saskatchewan. This includes: parent, sibling,
                                grandparent, aunt, uncle, niece, nephew, cousin and step-family members or in-laws of the same
                                relationships.
                        </p>
                        <div className="radio-group" onChange={(e) => {setFamilyTiesPoints(Number(e.target.value))}}>
                            <Form.Check
                                inline
                                label="Yes"
                                name="family-ties"
                                type='radio'
                                id='family-ties-yes'
                                value='20'
                            />

                            <Form.Check
                                inline
                                label="No"
                                name="family-ties"
                                type='radio'
                                id='family-ties-no'
                                value='0'
                            />
                        </div>
                        <div className="score-design text-danger" id="FamilyRelativeScore">Score {familyTiesPoints}</div>
                    </div>

                    <input className="btn btn-danger btn-adst  mt-10 mb-40" type="submit"
                           value="Calculate Your Score"/>
                    <br/>

                </form>

            </div>

            <div className='col-md-4 results'>

                <div className="text-center-xs">
                    <span className="results-title">Total Points</span>
                    <div className='results-return text-success'>{totalPoints} </div>
                </div>

                <table className='table center '>
                    <tbody>
                    <ResultRows />
                    </tbody>
                </table>

            </div>

        </div>

    );

}

export default Sinp
