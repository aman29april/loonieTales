import React from "react"
import PropTypes from "prop-types"
import SectionA from "./SectionA/SectionA";
import {useSelector} from "react-redux";
import crsStore from "../../redux/crsStore";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import {Form} from "react-bootstrap";
import {Button} from "bootstrap";


function CrsCalculator(props){
    const totalPoints = useSelector(state => state.crsStore.total)
    const userProfile = useSelector(state => state.crsStore.userProfile)

    return (
        <div style={{display: 'flex'}} className='mb-lg-5'>
            <div id="currentScore" className='col-md-7'>
                <Form>

                    <SectionA></SectionA>
                    <br/>
                    <SectionB />

                    <br/>
                    <SectionC />

                    <br/>
                    <SectionD />

                    {/*<Button as="input" type="submit" value="Submit" />*/}
                    {/*<Button as="input" type="reset" value="Reset" >Reset</Button>*/}
                    {/*<Button variant="primary" type="submit">*/}
                    {/*    Click here to submit form*/}
                    {/*</Button>*/}
                </Form>
            </div>

            <div className='col-md-4 results'>
                <div className="text-center-xs">
                    <span className="results-title">Total Points</span>
                    <div className='results-return'>{totalPoints} </div>
                </div>


                <table className='table center'>
                    <thead>
                        <th>Type</th>
                        <th> Points</th>
                    </thead>
                    <tbody>
                        {
                            Object.entries(userProfile).map(([key, value]) => {
                                return (
                                    <tr>
                                        <td>{key.toUpperCase()}</td>
                                        <td>{value.points}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );

}

export default CrsCalculator