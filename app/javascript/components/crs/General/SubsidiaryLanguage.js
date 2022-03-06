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

    const isPrincipal = props.target === 'principal'
    const storeKey = isPrincipal ? 'secondary_language' : 'spouse_language'

    const [secondLanguageSelection, setSecondLanguageSelection] = useState(null)
    const languageStore = useSelector(state => state.crsStore.userProfile[storeKey])

    const partnered = useSelector(state => state.crsStore.partnered)
    const dispatch = useDispatch()

    useEffect(() => {
        const setUpJsonKey = (educationKey, partnerValue = null) => {
            return partnerValue ?
                pointsJson[educationKey][partnerValue] :
                pointsJson[educationKey]
        }

        if (!secondLanguageSelection ) return
        const partneredValue = isPrincipal ? (partnered ? 'partnered' : 'single') : null
        const points = setUpJsonKey(secondLanguageSelection, partneredValue)

        let data = {}
        data[storeKey] = {
            value: secondLanguageSelection,
            points: points
        }
        dispatch(setCrs(data))
    }, [secondLanguageSelection, partnered])



    const handleSubsidiaryLanguageChange = (event) => {
        const pointsJsonId = event.target.selectedOptions[0].id
        setSecondLanguageSelection(pointsJsonId)
    }

    return (
        <div className="inputFieldDivs">
            <Form.Group variant="outlined" className="inputFields mb-3">
                <Form.Label className='fw-bold'>{props.title}</Form.Label>
                {isPrincipal &&
                    <div>
                        <p>If so, which language test did you take for your second official language?</p>
                        <p>Test results must be less than two years old.</p>
                    </div>
                }
                <Form.Select
                    onChange={handleSubsidiaryLanguageChange}
                    label={props.title}
                >
                    <option value="default" selected disabled>
                        Select...
                    </option>
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
        </div>
    )
}

export default SubsidiaryLanguage
