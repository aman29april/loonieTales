import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Form, FormText} from "react-bootstrap";
import pointsJson from '../data/points.json';
import { useDispatch, useSelector } from 'react-redux'
import {setCrs} from "../../../redux/crsStore";


function Age(props)  {
    const [agePoints, setAgePoints] = useState(0)
    const [ageValue, setAgeValue] = useState(null)

    const partnered = useSelector(state => state.partnered.value)
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
        setAgePoints(points)
        dispatch(setCrs({age: {
                value: ageValue,
                points: points
            }}
        ))

    }, [dispatch, ageValue, partnered])

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

        <div>
            <Form.Text>{agePoints}</Form.Text>
        </div>
    </div>
);

}

export default Age
