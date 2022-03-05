import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Form, FormText, OverlayTrigger, Overlay, Tooltip, Button} from "react-bootstrap";
import Popover from 'react-bootstrap/Popover'
import {
    getFederalTaxAmount,
    getProvincialTaxAmount,
    getTotalTaxAmount,
    PROVINCIAL_CODES,
    roundToPrecision
} from '@equisoft/tax-ca';
import NumberFormat from "react-number-format";


function IncomeTax(props)  {
    const [salary, setSalary] = useState(null)
    const [province, setProvince] = useState(null)
    const [taxObj, setTaxObj] = useState({})


    useEffect(() => {
        if( !province || !salary) return
        const tmp = PROVINCIAL_CODES
        const precision = 0
        // const provName = Object.keys(tmp).find(key => tmp[key] === province);
        const federalTax =  getFederalTaxAmount(province ,  salary)
        const provincialTax = getProvincialTaxAmount(province ,  salary)
        const totalTax = federalTax + provincialTax
        const averageTaxRate = roundToPrecision(totalTax/salary * 100, 2)
        const marginalTaxRate = totalTax/salary * 100
        const afterTaxIncome = salary - totalTax
        setTaxObj({
            federalTax: roundToPrecision(federalTax, precision),
            provincialTax: roundToPrecision(provincialTax, precision),
            totalTax: roundToPrecision(totalTax, precision),
            afterTaxIncome: roundToPrecision(afterTaxIncome, precision),
            afterTaxIncomeMonthly: roundToPrecision(afterTaxIncome/12, precision),
            averageTaxRate: averageTaxRate,
            marginalTaxRate: marginalTaxRate
        })
    }, [salary, province])

    const popover = (
        <Popover>
            <Popover.Title as="h3">Popover Top</Popover.Title>
            <Popover.Content>
                The quick brown fox jumps over the lazy dog!
            </Popover.Content>
        </Popover>
    );

    const handleProvinceChange = (e) => {
        // const prv = e.target.value
        setProvince(e.target.value)
    }

    return (
        <div className=" row">
            <div className="col-md-6 ">
                <form className='form-calculator-tax'>
                    <Form.Group>
                        <Form.Text>Province</Form.Text>

                        <Form.Select
                            onChange={handleProvinceChange}
                            label="Province"
                            placeholder="Province"
                        >
                            <option value="default" selected disabled>
                                Choose your Province
                            </option>
                            {
                                Object.entries(PROVINCIAL_CODES).map(([name, code]) => {
                                    return(<option key={code} value={code}>{name}</option>)
                                    // console.log(code)
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Text>Income</Form.Text>
                        <NumberFormat
                            thousandSeparator={true}
                            prefix={'$'}
                            className="form-control"
                            hintText="Annual Income"
                            placeholder="Annual Income"
                            value={salary}
                            onValueChange={(values) => {
                                const { formattedValue, value } = values;
                                setSalary(value)
                            }}

                            // onValueChange={(e) => {
                            //     setSalary(Number(e.target.value))
                            // }}

                        />

                    </Form.Group>
                </form>


            </div>

            <div id="results" className="col col-xs-12 col-sm-6 col-md-4 col-md-offset-1">
                <div className="results">
                    <div className="text-center-xs">
                        <span className="results-title">Estimated Tax amount</span>
                        <span className="results-return balance">
                            <NumberFormat
                                value={taxObj.totalTax}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                        </span>
                    </div>
                    <div className="additional">
                        <div className="results-note">&nbsp;</div>
                        <table>
                            <tbody>
                            {/*<tr>*/}
                            {/*    <th><strong>Total income</strong></th>*/}
                            {/*    <td className="value value-dollar value-income-total">$0</td>*/}
                            {/*</tr>*/}
                            <tr>
                                <th>Federal tax</th>
                                <td className="value value-dollar value-tax-federal">
                                    <NumberFormat
                                        value={taxObj.federalTax}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Provincial tax</th>
                                <td className="value value-dollar value-tax-provincial">
                                    <NumberFormat
                                        value={taxObj.provincialTax}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {/*<span className="quebec-content" style="display: none;">QPP/EI Premiums</span>*/}
                                    <span
                                    className="non-quebec-content">CPP/EI Premiums</span>
                                    {/*<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>*/}
                                    {/*  <span className="d-inline-block">*/}
                                    {/*    <Button disabled style={{ pointerEvents: 'none' }}>*/}
                                    {/*      B*/}
                                    {/*    </Button>*/}
                                    {/*  </span>*/}
                                    {/*</OverlayTrigger>*/}

                                    <div className="bullet bullet-info d-inline-block" role="button" tabIndex="0" data-bs-toggle="popover"
                                         data-bs-trigger="hover" data-bs-placement="top"
                                         data-bs-content="Your total annual contribution towards the Canada Pension Plan and Employment Insurance."
                                         data-bs-original-title="" title=""></div>

                                </th>
                                <td className="value value-dollar value-deductions">$0</td>
                            </tr>
                            <tr className="row-emph">
                                <th><strong>Total tax</strong></th>
                                <td className="value value-dollar value-tax-total">
                                    <NumberFormat
                                        value={taxObj.totalTax}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><strong>After-tax income(Yearly)</strong></th>
                                <td className="value value-dollar value-income-aftertax">
                                    <NumberFormat
                                        value={taxObj.afterTaxIncome}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><strong>After-tax income (Monthly)</strong></th>
                                <td className="value value-dollar value-income-aftertax">
                                    <NumberFormat
                                        value={taxObj.afterTaxIncomeMonthly}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><strong>Average tax rate</strong></th>
                                <td className="value value-percentage value-tax-rate-average">
                                    <NumberFormat
                                        value={taxObj.averageTaxRate}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'%'}
                                    />
                                </td>
                            </tr>
                            {/*<tr>*/}
                            {/*    <th><strong>Marginal tax rate</strong></th>*/}
                            {/*    <td className="value value-percentage value-tax-rate-marginal">{taxObj.averageTaxRate}%</td>*/}
                            {/*</tr>*/}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/*<div className="col-md-6">*/}
            {/*    <div>*/}
            {/*        <Form.Text>{totalTax}</Form.Text>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );

}

export default IncomeTax
