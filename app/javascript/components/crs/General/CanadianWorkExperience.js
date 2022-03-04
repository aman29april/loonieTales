import React, { useEffect, useState } from 'react'
import {Form} from "react-bootstrap";
// import { useDispatch, useSelector } from 'react-redux'

import pointsJson from '../data/points.json';

const NONE_OR_LESS_THAN_A_YEAR = "None or less than a year"
const ONE_YEAR = "1 year"
const TWO_YEARS = "2 years"
const THREE_YEARS = "3 years"
const FOUR_YEARS = "4 years"
const FIVE_YEARS_OR_MORE = "5 years or more"

function CanadianWorkExperience(props) {

    const [experience, setExperience] = useState(null)

    // const partnered = useSelector(state => state.partnered.value)
    // const dispatch = useDispatch()

    const isPrincipal = props.target === 'principal'

    useEffect(() => {
        const setUpJsonKey = (educationKey, partnerValue = null) => {
            return partnerValue ?
                pointsJson[educationKey][partnerValue] :
                pointsJson[educationKey]
        }

        // if (!oldExperience && !newExperience) return
        // const partneredValue = isPrincipal ? (partnered ? 'partnered' : 'single') : null
        // let pointsToAdd
        // if (oldExperience) {
        //     pointsToAdd = setUpJsonKey(newExperience, partneredValue) -
        //         setUpJsonKey(oldExperience, partneredValue)
        // }
        // else {
        //     pointsToAdd = setUpJsonKey(newExperience, partneredValue)
        // }
        // setOldExperience(newExperience)
        // dispatch(incrementByAmount(pointsToAdd))
    }, [experience])

    // useEffect(() => {
    //     if (isPrincipal && newExperience) {
    //         dispatch(setCanadianWorkExperienceValue(newExperience))
    //     }
    // }, [dispatch, newExperience])
    //
    // useEffect(() => {
    //     if (!oldExperience) return
    //     if (isPrincipal) {
    //         const newPartneredValue = partnered ? 'partnered' : 'single'
    //         const oldPartneredValue = partnered ? 'single' : 'partnered'
    //         let pointsToAdd = pointsJson[oldExperience][newPartneredValue] -
    //             pointsJson[oldExperience][oldPartneredValue]
    //         dispatch(incrementByAmount(pointsToAdd))
    //     }
    //     else {
    //         let pointsDifference = pointsJson[oldExperience]
    //         if (!partnered) pointsDifference = pointsDifference * -1
    //         dispatch(incrementByAmount(pointsDifference))
    //     }
    // }, [dispatch, partnered])

    const handleCanadianWorkExperienceChange = (event) => {
        const pointsId = event.target.selectedOptions[0].id
        setExperience(pointsId)
    }

    return (
        <div className="inputFieldDivs">
            <Form.Group variant="outlined" className="inputFields">
                <Form.Text>Canadian work experience</Form.Text>
                <Form.Select
                    onChange={handleCanadianWorkExperienceChange}
                    label="Canadian work experience"
                >
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
        </div>
    )
}

export default CanadianWorkExperience
