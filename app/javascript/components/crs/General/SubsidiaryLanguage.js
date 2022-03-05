import React, { useEffect, useState } from 'react'
import {Form, FormControl} from "react-bootstrap";
import pointsJson from '../data/points.json';
import {useDispatch, useSelector} from "react-redux";
import {setCrs} from "../../../redux/crsStore";


const CLB_4_OR_LESS = "CLB 4 or less";
const CLB_5_OR_6 = "CLB 5 or 6";
const CLB_7_OR_8 = "CLB 7 or 8";
const CLB_9_OR_MORE = "CLB 9 or more";

function SubsidiaryLanguage(props) {

    const [secondLanguageSelection, setSecondLanguageSelection] = useState(null)
    const languageStore = useSelector(state => state.crsStore.userProfile.secondary_language)

    const partnered = useSelector(state => state.partnered.value)
    const dispatch = useDispatch()

    const isPrincipal = props.target === 'principal'

    useEffect(() => {
        const setUpJsonKey = (educationKey, partnerValue = null) => {
            return partnerValue ?
                pointsJson[educationKey][partnerValue] :
                pointsJson[educationKey]
        }

        if (!secondLanguageSelection ) return
        const partneredValue = isPrincipal ? (partnered ? 'partnered' : 'single') : null
        const points = setUpJsonKey(secondLanguageSelection, partneredValue)
        dispatch(setCrs({secondary_language: {
                value: secondLanguageSelection,
                points: points
            }}
        ))
    }, [secondLanguageSelection, partnered])



    const handleSubsidiaryLanguageChange = (event) => {
        const pointsJsonId = event.target.selectedOptions[0].id
        setSecondLanguageSelection(pointsJsonId)
    }

    return (
        <div className="inputFieldDivs">
            <Form.Group variant="outlined" className="inputFields mb-3">
                <Form.Text>{props.title}</Form.Text>
                <Form.Select
                    onChange={handleSubsidiaryLanguageChange}
                    label={props.title}
                >
                    <option id={isPrincipal ?
                        'second_lang_clb_4_or_less' :
                        'spouse_first_lang_clb_4_or_less'}
                              value={0}>{CLB_4_OR_LESS}</option>
                    <option id={isPrincipal ?
                        'second_lang_clb_5_6' :
                        'spouse_first_lang_clb_5_6'}
                              value={1}>{CLB_5_OR_6}</option>
                    <option id={isPrincipal ?
                        'second_lang_clb_7_8' :
                        'spouse_first_lang_clb_7_8'}
                              value={2}>{CLB_7_OR_8}</option>
                    <option id={isPrincipal ?
                        'second_lang_clb_9_or_more' :
                        'spouse_first_lang_clb_9_or_more'
                    }
                              value={3}>{CLB_9_OR_MORE}</option>
                </Form.Select>
            </Form.Group>

            {/*<div>*/}
            {/*    <Form.Text>{languageStore ? languageStore.points : 0}</Form.Text>*/}
            {/*</div>*/}
        </div>
    )
}

export default SubsidiaryLanguage
