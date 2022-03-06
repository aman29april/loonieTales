import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Form, FormText} from "react-bootstrap";
import pointsJson from '../data/points.json';
import { useDispatch, useSelector } from 'react-redux'
import {setCrs} from "../../../redux/crsStore";
import {PROVINCIAL_CODES} from "@equisoft/tax-ca";


function Age(props)  {
    const [ageValue, setAgeValue] = useState(null)
    const partnered = useSelector(state => state.crsStore.partnered)
    const ageStore = useSelector(state => state.crsStore.userProfile.age)
    const dispatch = useDispatch()

    const getAgePointsKey = (age) => {
      if (age <= 17){
          return '17 or less';
      }
      else if (age >= 20 && age <= 29){
          return '20 to 29';
      }
      else if (age >= 45){
          return '45 or more';
      }
      else {
          return age.toString();
      }
  }

    useEffect(() => {
        const newAgeKey = getAgePointsKey(ageValue)
        const partneredValue = partnered ? 'partnered' : 'single'
        const points = pointsJson[newAgeKey][partneredValue]
        dispatch(setCrs({age: {
                value: ageValue,
                points: points
            }}
        ))

    }, [ ageValue, partnered])

    function ageOptions(){
        const first = {'17 years of age or less': 17}
        const last = {'45 years of age or more': 45}
        let middle = {}
        for(let i = 18; i<=44; i++){
            middle[i + ' years of age'] = i;
        }
        const all =  {...first, ...middle, ...last}
        return Object.entries(all).map(([key,value]) => {
            return(<option key={value} value={value}>{key}</option>)
        })
    }

return (
    <div className="inputFieldDivs">

        <Form.Label className='fw-bold'>How old are you?</Form.Label>

        <Form.Select
            onChange={(e) => setAgeValue(e.target.selectedOptions[0].value) }
            label="Age"
            placeholder="Age"
        >
            <option value="default" selected disabled>
                Select...
            </option>
            {
                ageOptions()
            }
        </Form.Select>

        {/*<div>*/}
        {/*    <Form.Text>{ageStore ? ageStore.points : 0}</Form.Text>*/}
        {/*</div>*/}
    </div>
);

}

export default Age