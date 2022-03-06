import React, { useEffect, useState } from 'react'
import {Form} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'

import pointsJson from '../data/points.json';
import {setCrs} from "../../../redux/crsStore";

const NONE_OR_LESS_THAN_A_YEAR = "None or less than a year"
const ONE_YEAR = "1 year"
const TWO_YEARS = "2 years"
const THREE_YEARS = "3 years"
const FOUR_YEARS = "4 years"
const FIVE_YEARS_OR_MORE = "5 years or more"

function CanadianWorkExperience(props) {

    const isPrincipal = props.target === 'principal'
    const storeKey = isPrincipal ? 'canadian_experience' : 'spouse_canadian_experience'

    const [experienceSelection, setExperienceSelection] = useState(null)
    // const experienceStore = useSelector(state => state.crsStore.userProfile[storeKey])
    const partnered = useSelector(state => state.crsStore.partnered)
    const dispatch = useDispatch()

    useEffect(() => {
        const setUpJsonKey = (educationKey, partnerValue = null) => {
            return partnerValue ?
                pointsJson[educationKey][partnerValue] :
                pointsJson[educationKey]
        }

        if (!experienceSelection) return
        const partneredValue = isPrincipal ? (partnered ? 'partnered' : 'single') : null
        const points = setUpJsonKey(experienceSelection, partneredValue)

        let data = {}
        data[storeKey] = {
            value: experienceSelection,
            points: points
        }
        dispatch(setCrs(data))
    }, [experienceSelection, partnered])

    const handleCanadianWorkExperienceChange = (event) => {
        const pointsId = event.target.selectedOptions[0].id
        setExperienceSelection(pointsId)
    }

    return (
        <div className="inputFieldDivs">
            <Form.Group variant="outlined" className="inputFields">
                <Form.Label className='fw-bold'>Skilled work experience in Canada</Form.Label>
                {isPrincipal &&
                <div>
                    <p>In the last ten years, how many years of skilled work experience in Canada do you have?</p>
                    <p>It must have been paid and full-time (or an equal amount in part-time).</p>
                    <p>“Skilled work” in the NOC is:</p>
                    <ul>
                        <li>managerial jobs (NOC Skill Level 0)</li>
                        <li>professional jobs (NOC Skill Type A)</li>
                        <li>technical jobs and skilled trades/manual work (NOC Skill Type B)</li>
                    </ul>
                </div>
                }
                <Form.Select
                    onChange={handleCanadianWorkExperienceChange}
                    label="Canadian work experience"
                >
                    <option value="default" selected disabled>
                        Select...
                    </option>
                    <option id={
                        isPrincipal ?
                            'canadian_work_exp_none_or_less_than_1_year' :
                            'spouse_canadian_work_exp_none_or_less_than_1_year'
                    }
                              value={0}>{NONE_OR_LESS_THAN_A_YEAR}</option>
                    <option id={
                        isPrincipal ?
                            'canadian_work_exp_1_year' :
                            'spouse_canadian_work_exp_1_year'
                    }
                              value={1}>{ONE_YEAR}</option>
                    <option id={
                        isPrincipal ?
                            'canadian_work_exp_2_years' :
                            'spouse_canadian_work_exp_2_years'
                    }
                              value={2}>{TWO_YEARS}</option>
                    <option id={
                        isPrincipal ?
                            'canadian_work_exp_3_years' :
                            'spouse_canadian_work_exp_3_years'
                    }
                              value={3}>{THREE_YEARS}</option>
                    <option id={
                        isPrincipal ?
                            'canadian_work_exp_4_years' :
                            'spouse_canadian_work_exp_4_years'
                    }
                              value={4}>{FOUR_YEARS}</option>
                    <option id={
                        isPrincipal ?
                            'canadian_work_exp_5_years_or_more' :
                            'spouse_canadian_work_exp_5_years_or_more'
                    }
                              value={5}>{FIVE_YEARS_OR_MORE}</option>
                </Form.Select>
            </Form.Group>

            {/*<div>*/}
            {/*    <Form.Text>{experienceStore ? experienceStore.points : 0}</Form.Text>*/}
            {/*</div>*/}
        </div>
    )
}

export default CanadianWorkExperience
