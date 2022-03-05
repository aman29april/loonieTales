import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import FormCheckbox from "./General/Checkbox";
import {Accordion} from "react-bootstrap";
import pointsJson from './data/points.json';
import {removeCrsKey, setCrs} from "../../redux/crsStore";


const SIBLING_IN_CANADA = 'sibling_in_canada'
const NCLC_7_HIGHER_CLB_4_LOWER = 'nclc_7_or_higher_and_clb_4_or_lower'
const NCLC_7_HIGHER_CLB_5_HIGHER = 'nclc_7_or_higher_and_clb_5_or_higher'
const POST_SECONDARY_EDUCATION_CANADA_1_2_YEARS = 'post_secondary_education_in_canada_1_or_2_years'
const POST_SECONDARY_EDUCATION_CANADA_3_YEARS = 'post_secondary_education_in_canada_3_years_longer'
const ARRANGED_EMPLOYMENT_NOC_00 = 'arranged_employment_noc_00'
const ARRANGED_EMPLOYMENT_NOC_0_A_B = 'arranged_employment_noc_0_a_b'
const PROVINCIAL_TERRITORIAL_NOMINATION = 'provincial_nomination'

function SectionD(props) {

    const [sibling, setSibling] = useState(false)
    const [clb4OrLower, setClb4OrLower] = useState(false)
    const [clb5OrHigher, setClb5OrHigher] = useState(false)
    const [postSecShort, setPostSecShort] = useState(false)
    const [postSecLong, setPostSecLong] = useState(false)
    const [arrangedEmployment00, setArrangedEmployment00] = useState(false)
    const [arrangedEmploymentOther, setArrangedEmploymentOther] = useState(false)
    const [provTerNomination, setProvTerNomination] = useState(false)

    const dispatch = useDispatch()

    const checkBoxClick = (idToChange) => {
        const addPoints = (shouldAdd) => {
            const points = pointsJson[idToChange]
            if(shouldAdd){
                let data = {}
                data[idToChange]  = {
                    value: true,
                    points: points
                }
                dispatch(setCrs(data))

            }else{
                dispatch(removeCrsKey(idToChange))
            }

        }

        switch (idToChange) {
            case SIBLING_IN_CANADA:
                addPoints(!sibling)
                setSibling(!sibling)
                break
            case NCLC_7_HIGHER_CLB_4_LOWER:
                addPoints(!clb4OrLower)
                setClb4OrLower(!clb4OrLower)
                break
            case NCLC_7_HIGHER_CLB_5_HIGHER:
                addPoints(!clb5OrHigher)
                setClb5OrHigher(!clb5OrHigher)
                break
            case POST_SECONDARY_EDUCATION_CANADA_1_2_YEARS:
                addPoints(!postSecShort)
                setPostSecShort(!postSecShort)
                break
            case POST_SECONDARY_EDUCATION_CANADA_3_YEARS:
                addPoints(!postSecLong)
                setPostSecLong(!postSecLong)
                break
            case ARRANGED_EMPLOYMENT_NOC_00:
                addPoints(!arrangedEmployment00)
                setArrangedEmployment00(!arrangedEmployment00)
                break
            case ARRANGED_EMPLOYMENT_NOC_0_A_B:
                addPoints(!arrangedEmploymentOther)
                setArrangedEmploymentOther(!arrangedEmploymentOther)
                break
            case PROVINCIAL_TERRITORIAL_NOMINATION:
                addPoints(!provTerNomination)
                setProvTerNomination(!provTerNomination)
                break
            default:
                break
        }
    }

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4>D. Additional points</h4>
                </Accordion.Header>
                <Accordion.Body>


                <div style={{textAlign: 'left'}}>
                    <FormCheckbox
                        onChange={() => checkBoxClick(SIBLING_IN_CANADA)}
                        title="Brother or sister living in
            Canada who is a citizen or permanent resident of Canada"/>
                    <FormCheckbox
                        onChange={() => checkBoxClick(NCLC_7_HIGHER_CLB_4_LOWER)}
                        title="Scored NCLC 7 or higher on all four
            French language skills and scored CLB 4 or lower in
            English (or didn’t take an English test)"/>
                    <FormCheckbox
                        onChange={() => checkBoxClick(NCLC_7_HIGHER_CLB_5_HIGHER)}
                        title="Scored NCLC 7 or higher on all four
            French language skills and scored CLB 5 or higher on all
            four English skills	"/>
                    <FormCheckbox
                        onChange={() => checkBoxClick(POST_SECONDARY_EDUCATION_CANADA_1_2_YEARS)}
                        title="Post-secondary education in
            Canada - credential of one or two years	"/>
                    <FormCheckbox
                        onChange={() => checkBoxClick(POST_SECONDARY_EDUCATION_CANADA_3_YEARS)}
                        title="Post-secondary education in Canada -
            credential three years or longer	"/>
                    <FormCheckbox
                        onChange={() => checkBoxClick(ARRANGED_EMPLOYMENT_NOC_00)}
                        title="Arranged employment - NOC 00"/>
                    <FormCheckbox
                        onChange={() => checkBoxClick(ARRANGED_EMPLOYMENT_NOC_0_A_B)}
                        title="Arranged employment – any other NOC 0, A or B"/>
                    <FormCheckbox
                        onChange={() => checkBoxClick(PROVINCIAL_TERRITORIAL_NOMINATION)}
                        title="Provincial Nomination (PNP)"/>
                </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default SectionD
