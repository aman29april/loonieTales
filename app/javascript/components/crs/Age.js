import React from "react"
import PropTypes from "prop-types"
import {Form, FormText} from "react-bootstrap";
import pointsJson from './ponts.json'


class Age extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agePoints: null,
        };
    }

  render () {
      let { newAgeValue , agePoints} = this.props
      const {partnered} = 'single';

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

      const setNewAgeValue = (newAgeValue) =>{
          if ( !newAgeValue) return
          const newAgeKey = getAgePointsKey(newAgeValue)
          const partneredValue = partnered ? 'partnered' : 'single'
          agePoints = pointsJson[newAgeKey][partneredValue]
            debugger
          // this.props.crsData['age'] = {
          //     value: newAgeValue,
          //     points: agePoints
          // }
          this.setState({ agePoints:  agePoints});
      }

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
                        setNewAgeValue(age)
                    }
                }}
                value={newAgeValue}
            ></Form.Control>

            <div>
                <Form.Text>{this.state.agePoints}</Form.Text>
            </div>
        </div>
    );
  }
}

export default Age
