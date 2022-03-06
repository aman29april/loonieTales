import React from "react"
import SectionA from "./SectionA/SectionA";
import {useSelector} from "react-redux";
import crsStore from "../../redux/crsStore";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import {Form} from "react-bootstrap";
import {Button} from "bootstrap";
import {ResultTable} from "./common";

function CrsCalculator(props){
    const totalPoints = useSelector(state => state.crsStore.total)
    const userProfile = useSelector(state => state.crsStore.userProfile)
    const partnered = useSelector(state => state.crsStore.partnered)

    return (
        <div style={{}} className='mb-lg-5 row'>
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

            <div className='col-md-4 results sticky-top'>
                <div className="text-center-xs">
                    <span className="results-title">Total Points</span>
                    <div className='results-return'>{totalPoints} </div>
                </div>


                <table className='table center'>
                    {/*<thead>*/}
                    {/*    <th>Type</th>*/}
                    {/*    <th> Points</th>*/}
                    {/*</thead>*/}
                    <tbody>
                      <ResultTable userProfile={userProfile} partnered={partnered}/>
                        {


                            // Object.entries(userProfile).map(([key, value]) => {
                            //
                            //     return (
                            //         <tr>
                            //             <td>{key.toUpperCase()}</td>
                            //             <td>{value.points}</td>
                            //         </tr>
                            //     )
                            // })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );

}

export default CrsCalculator