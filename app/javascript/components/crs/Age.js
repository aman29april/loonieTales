import React from "react"
import PropTypes from "prop-types"
import {Form, FormText} from "react-bootstrap";
class Age extends React.Component {

  render () {
    return (
        <div className="inputFieldDivs">
          <Form.Select>
              <option>Age</option>
              <option value='17'>17 or Less</option>
              {for (var i = 0; i < 4; i++) {
                <option value='17'>17 or Less</option>
              }}
          </Form.Select>
        </div>
    );
  }
}

export default Age
