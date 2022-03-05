import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Form, FormText} from "react-bootstrap";
import pointsJson from '../data/points.json';
import { useDispatch, useSelector } from 'react-redux'
import {setCrs} from "../../../redux/crsStore";


function Age(props)  {
    const [ageValue, setAgeValue] = useState(null)
    const partnered = useSelector(state => state.partnered.value)
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

return (
    <div className="inputFieldDivs">

        <Form.Text>Age</Form.Text>
        <Form.Control
            className="form-control"
            type="number"
            id="age"
            label="Age"
            placeholder="Age"
            onChange={(e) => {
                const age = e.target.value;
                const re = /^[0-9]+$/;
                if (age === '' || re.test(age)){
                    setAgeValue(age)
                }
            }}
            value={ageValue}
        ></Form.Control>

        {/*<div>*/}
        {/*    <Form.Text>{ageStore ? ageStore.points : 0}</Form.Text>*/}
        {/*</div>*/}
    </div>
);

}

export default Age