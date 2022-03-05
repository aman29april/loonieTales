import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Form} from "react-bootstrap";
import pointsJson from '../data/points.json'
import {setCrs} from "../../../redux/crsStore";
import {useDispatch, useSelector} from "react-redux";

const LESS_THAN_CLB_4 = "Less than CLB 4";
const CLB_4_OR_5 = "CLB 4 or 5";
const CLB_6 = "CLB 6";
const CLB_7 = "CLB 7";
const CLB_8 = "CLB 8";
const CLB_9 = "CLB 9";
const CLB_10_OR_MORE = "CLB 10 or more";

function FirstLanguage(props)  {

    const [firstLanguageSelection, setFirstLanguageSelection] = useState(null)

    const firstLanguageStore = useSelector(state => state.crsStore.userProfile.first_language)
    const partnered = useSelector(state => state.partnered.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const partneredValue = partnered ? 'partnered' : 'single'
        if(!firstLanguageSelection) return
        const points = pointsJson[firstLanguageSelection][partneredValue]
        // setFirstLanguagePoints(points)
        dispatch(setCrs({first_language: {
                value: firstLanguageSelection,
                points: points
            }}
        ))
    }, [firstLanguageSelection, partnered])

    const handleFirstLanguageChange = (event) => {
      const pointsJsonId = event.target.selectedOptions[0].id
        setFirstLanguageSelection(pointsJsonId)
    }

    return (
        <div>
            <div className="inputFieldDivs">
              <Form.Group variant="outlinehandleFirstLanguageChanged" className="inputFields">
                <Form.Text>First Official Language</Form.Text>
                <Form.Select
                    onChange={handleFirstLanguageChange}
                    label="First Official Language"
                >
                  <option id="first_lang_less_than_clb_4"
                            value={0}>{LESS_THAN_CLB_4}</option>
                  <option id="first_lang_clb_4_5"
                            value={1}>{CLB_4_OR_5}</option>
                  <option id="first_lang_clb_6"
                            value={2}>{CLB_6}</option>
                  <option id="first_lang_clb_7"
                            value={3}>{CLB_7}</option>
                  <option id="first_lang_clb_8"
                            value={4}>{CLB_8}</option>
                  <option id="first_lang_clb_9"
                            value={5}>{CLB_9}</option>
                  <option id="first_lang_clb_10_or_more"
                            value={6}>{CLB_10_OR_MORE}</option>
                </Form.Select>
              </Form.Group>
            </div>

            {/*<div>*/}
            {/*    <Form.Text>{firstLanguageStore ? firstLanguageStore.points : 0}</Form.Text>*/}
            {/*</div>*/}
        </div>
    );

}

export default FirstLanguage
