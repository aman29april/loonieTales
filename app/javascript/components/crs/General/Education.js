import React, { useEffect, useState } from 'react'
import {Form, FormControl} from "react-bootstrap";
import pointsJson from '../data/points.json';
import {Tooltip} from "bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setCrs} from "../../../redux/crsStore";


const LESS_THAN_SECONDARY_SCHOOL = "Less than secondary school (high school)"
const SECONDARY_DIPLOMA = "Secondary diploma (high school graduation)"
const ONE_YEAR_DEGREE = "One-year degree, diploma or certificate"
const TWO_YEAR_PROGRAM = "Two-year program"
const BACHELORS_DEGREE = "Bachelor's degree OR a 3+ year program"
const TWO_OR_MORE_CERTIFICATES = "Two or more certificates, diplomas, or degrees"
const MASTERS_DEGREE = "Master's degree OR professional degree (licensed profession)"
const DOCTORAL_LEVEL = "Doctoral level university degree (Ph.D.)"

function Education(props) {

    const [educationSelection, setEducationSelection] = useState(null)

    const partnered = useSelector(state => state.partnered.value)
    const educationStore = useSelector(state => state.crsStore.userProfile.education)
    const dispatch = useDispatch()

    const isPrincipal = props.target === 'principal'

    useEffect(() => {
        const setUpJsonKey = (educationKey, partnerValue = null) => {
            return partnerValue ?
                pointsJson[educationKey][partnerValue] :
                pointsJson[educationKey]
        }

        if (!educationSelection ) return
        const partneredValue = isPrincipal ? (partnered ? 'partnered' : 'single') : null
        const points = setUpJsonKey(educationSelection, partneredValue)
        dispatch(setCrs({education: {
                value: educationSelection,
                points: points
            }}
        ))
    }, [educationSelection, partnered])


    const handleEducationChange = (event) => {
        const pointsId = event.target.selectedOptions[0].id
        setEducationSelection(pointsId)
    }

    return (
        <div>
            <div className="inputFieldDivs">
                <Form.Group variant="outlined" className="inputFields">
                    <Form.Text>Education</Form.Text>
                    <Form.Select
                        onChange={handleEducationChange}
                        label="Education"
                    >
                        <option id={
                            isPrincipal ?
                                'less_than_secondary_school' :
                                'spouse_less_than_secondary_school'
                        }
                                  value={0}>{LESS_THAN_SECONDARY_SCHOOL}</option>
                        <option id={
                            isPrincipal ? 'secondary_diploma' : 'spouse_secondary_diploma'
                        }
                                  value={1}>{SECONDARY_DIPLOMA}</option>
                        <option id={
                            isPrincipal ? 'one_year_degree' : 'spouse_one_year_degree'
                        }
                                  value={2}>
                  {/*          <Tooltip title="One-year degree, diploma or certificate from  a*/}
                  {/*university, college, trade or technical school, or other institute">*/}
                  {/*              <div>{ONE_YEAR_DEGREE}</div>*/}
                  {/*          </Tooltip>*/}
                        </option>
                        <option id={
                            isPrincipal ? 'two_year_program' : 'spouse_two_year_program'
                        }
                                  value={3}>
                  {/*          <Tooltip title="Two-year program at a university, college,*/}
                  {/*trade or technical school, or other institute">*/}
                  {/*              <div>{TWO_YEAR_PROGRAM}</div>*/}
                  {/*          </Tooltip>*/}
                        </option>
                        <option id={
                            isPrincipal ? 'bachelors_degree' : 'spouse_bachelors_degree'
                        }
                                  value={4}>
                  {/*          <Tooltip title="Bachelor's degree OR a three or more year program at*/}
                  {/*a university, college, trade or technical school, or other institute">*/}
                  {/*              <div>{BACHELORS_DEGREE}</div>*/}
                  {/*          </Tooltip>*/}
                        </option>
                        <option id={
                            isPrincipal ?
                                'two_or_more_certificates' :
                                'spouse_two_or_more_certificates'
                        }
                                  value={5}>
                  {/*          <Tooltip title="Two or more certificates, diplomas, or degrees.*/}
                  {/*One must be for a program of three or more years	">*/}
                  {/*              <div>{TWO_OR_MORE_CERTIFICATES}</div>*/}
                  {/*          </Tooltip>*/}
                        </option>
                        <option id={
                            isPrincipal ? 'masters_degree' : 'spouse_masters_degree'
                        }
                                  value={6}>
                    {/*        <Tooltip title="Master's degree, OR professional degree needed to*/}
                    {/*practice in a licensed profession (For “professional degree,” the*/}
                    {/*degree program must have been in: medicine, veterinary medicine,*/}
                    {/*dentistry, optometry, law, chiropractic medicine, or pharmacy.)	">*/}
                    {/*            <div>{MASTERS_DEGREE}</div>*/}
                    {/*        </Tooltip>*/}
                        </option>
                        <option id={
                            isPrincipal ? 'doctoral_level' : 'spouse_doctoral_level'
                        }
                                  value={7}>{DOCTORAL_LEVEL}</option>
                    </Form.Select>
                    {/*<FormHelperText>Hover for more details (where applicable)</FormHelperText>*/}
                </Form.Group>
            </div>
            {/*<div>*/}
            {/*    <Form.Text>{educationStore ? educationStore.points : 0}</Form.Text>*/}
            {/*</div>*/}
        </div>
    );
}

export default Education
