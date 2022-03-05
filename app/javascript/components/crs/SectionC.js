import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Accordion, Form} from "react-bootstrap";
import FormCheckbox from "./General/Checkbox";
import ForeignWorkExperience from "./General/ForeignWorkExperience";
import pointsJson from './data/points.json';


function SectionC(props) {

    const [certificate, setCertificate] = useState(false)
    const [foreignWorkExperience, setForeignWorkExperience] = useState(null)

    // const educationStateValue = useSelector(state => state.sectionC.education)
    // const firstLanguageStateValue = useSelector(state => state.sectionC.firstLanguage)
    const canadianWorkExperienceStore = useSelector(state => state.crsStore.userProfile.canadian_experience)


    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)
    const [fourth, setFourth] = useState(0)
    const [certificatePoints, setCertificatePoints] = useState(0)

    /**
     * First table
     */
    // useEffect(() => {
    //     const calculateSum = () => {
    //         switch (firstLanguageStateValue) {
    //             case 'first_lang_clb_7':
    //                 return calculateTotal(true)
    //             case 'first_lang_clb_8':
    //                 return calculateTotal(true)
    //             case 'first_lang_clb_9':
    //                 return calculateTotal(false)
    //             case 'first_lang_clb_10_or_more':
    //                 return calculateTotal(false)
    //             default:
    //                 return 0
    //         }
    //     }
    //
    //     const calculateTotal = (lowerTierPoints) => {
    //         switch (educationStateValue) {
    //             case 'less_than_secondary_school':
    //                 return 0
    //             case 'secondary_diploma':
    //                 return 0
    //             case 'one_year_degree':
    //                 return lowerTierPoints ? 13 : 25
    //             case 'two_year_program':
    //                 return lowerTierPoints ? 13 : 25
    //             case 'bachelors_degree':
    //                 return lowerTierPoints ? 13 : 25
    //             default:
    //                 return lowerTierPoints ? 25 : 50
    //         }
    //     }
    //
    //     if (educationStateValue && firstLanguageStateValue) {
    //         setFirst(calculateSum())
    //     }
    // }, [educationStateValue, firstLanguageStateValue])

    /**
     * Second Table
     */
    // useEffect(() => {
    //     const calculateSum = () => {
    //         switch (canadianWorkExperienceStateValue) {
    //             case 'canadian_work_exp_none_or_less_than_1_year':
    //                 return 0
    //             case 'canadian_work_exp_1_year':
    //                 return calculateTotal(true)
    //             default:
    //                 return calculateTotal(false)
    //         }
    //     }
    //
    //     const calculateTotal = (lowerTierPoints) => {
    //         switch (educationStateValue) {
    //             case 'less_than_secondary_school':
    //                 return 0
    //             case 'secondary_diploma':
    //                 return 0
    //             case 'one_year_degree':
    //                 return lowerTierPoints ? 13 : 25
    //             case 'two_year_program':
    //                 return lowerTierPoints ? 13 : 25
    //             case 'bachelors_degree':
    //                 return lowerTierPoints ? 13 : 25
    //             default:
    //                 return lowerTierPoints ? 25 : 50
    //         }
    //     }
    //
    //     if (educationStateValue && canadianWorkExperienceStateValue) {
    //         setSecond(calculateSum())
    //     }
    // }, [educationStateValue, canadianWorkExperienceStateValue])

    /**
     * Third Table
     */
    // useEffect(() => {
    //     const calculateSum = () => {
    //         switch (firstLanguageStateValue) {
    //             case 'first_lang_clb_7':
    //                 return calculateTotal(true)
    //             case 'first_lang_clb_8':
    //                 return calculateTotal(true)
    //             case 'first_lang_clb_9':
    //                 return calculateTotal(false)
    //             case 'first_lang_clb_10_or_more':
    //                 return calculateTotal(false)
    //             default:
    //                 return 0
    //         }
    //     }
    //
    //     const calculateTotal = (lowerTierPoints) => {
    //         switch (foreignWorkExperience) {
    //             case 'none':
    //                 return 0
    //             case 'one_or_two':
    //                 return lowerTierPoints ? 13 : 25
    //             case 'three_or_more':
    //                 return lowerTierPoints ? 25 : 50
    //             default:
    //                 return 0
    //         }
    //     }
    //
    //     if (firstLanguageStateValue && foreignWorkExperience) {
    //         setThird(calculateSum())
    //     }
    // }, [firstLanguageStateValue, foreignWorkExperience])

    /**
     * Fourth Table
     */
    useEffect(() => {
        const calculateSum = () => {
            switch (canadianWorkExperienceStore.value) {
                case 'canadian_work_exp_none_or_less_than_1_year':
                    return 0
                case 'canadian_work_exp_1_year':
                    return calculateTotal(true)
                default:
                    return calculateTotal(false)
            }
        }

        const calculateTotal = (lowerTierPoints) => {
            switch (foreignWorkExperience) {
                case 'none':
                    return 0
                case 'one_or_two':
                    return lowerTierPoints ? 13 : 25
                case 'three_or_more':
                    return lowerTierPoints ? 25 : 50
                default:
                    return 0
            }
        }

        if (canadianWorkExperienceStore && foreignWorkExperience) {
            setFourth(calculateSum())
        }
    }, [canadianWorkExperienceStore, foreignWorkExperience])

    // useEffect(() => {
    //     if (certificate) {
    //         switch (firstLanguageStateValue) {
    //             case 'first_lang_clb_4_5':
    //                 setCertificatePoints(25)
    //                 break
    //             case 'first_lang_clb_6':
    //                 setCertificatePoints(25)
    //                 break
    //             case 'first_lang_clb_7':
    //                 setCertificatePoints(50)
    //                 break
    //             case 'first_lang_clb_8':
    //                 setCertificatePoints(50)
    //                 break
    //             case 'first_lang_clb_9':
    //                 setCertificatePoints(50)
    //                 break
    //             case 'first_lang_clb_10_or_more':
    //                 setCertificatePoints(50)
    //                 break
    //             default:
    //                 setCertificatePoints(0)
    //                 break
    //         }
    //     }
    //     else {
    //         setCertificatePoints(0)
    //     }
    // }, [firstLanguageStateValue, certificate])

    return (

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4>C. Skill transferability factors</h4>
                </Accordion.Header>
                <Accordion.Body>



                <div style={{width: '100%'}}>
                    {/*<h4>Education</h4>*/}
                    {/*<Divider />*/}
                    {/*<h5>With good official language proficiency (Canadian Language*/}
                    {/*    Benchmark Level [CLB] 7 or higher) and a post-secondary degree</h5>*/}
                    {/*<h5 id="sectionCPointsText">*/}
                    {/*    {`Additional Points Earned - ${first ? first : 0}`}*/}
                    {/*</h5>*/}
                    {/*<Divider />*/}
                    {/*<h5>With Canadian work experience and a post-secondary degree</h5>*/}
                    {/*<h5 id="sectionCPointsText">*/}
                    {/*    {`Additional Points Earned - ${second ? second : 0}`}*/}
                    {/*</h5>*/}
                    {/*<Divider />*/}
                    <h4>Foreign work experience</h4>
                    {/*<Divider />*/}
                    <ForeignWorkExperience
                        title="Foreign work experience"
                        onChange = {(newVal) => setForeignWorkExperience(newVal)}/>
                    {/*<Divider />*/}
                    {/*<h5>Foreign work experience – With good official language proficiency*/}
                    {/*    (Canadian Language Benchmark Level [CLB] 7 or higher)</h5>*/}
                    {/*<h5 id="sectionCPointsText">*/}
                    {/*    {`Additional Points Earned - ${foreignWorkExperience ? third : 'Select Your Foreign Work Experience'}`}*/}
                    {/*</h5>*/}
                    {/*<Divider />*/}
                    {/*<h5>Foreign work experience – With Canadian work experience</h5>*/}
                    {/*<h5 id="sectionCPointsText">*/}
                    {/*    {`Additional Points Earned - ${foreignWorkExperience ? fourth : 'Select Your Foreign Work Experience'}`}*/}
                    {/*</h5>*/}
                    {/*<Divider />*/}
                    {/*<FormCheckbox*/}
                    {/*    title="With a certificate of qualification"*/}
                    {/*    onChange={() => setCertificate(!certificate)} />*/}
                    {/*<h5 id="sectionCPointsText">*/}
                    {/*    {`Additional Points Earned - ${certificatePoints ? certificatePoints : '0'}`}*/}
                    {/*</h5>*/}
                </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default SectionC
