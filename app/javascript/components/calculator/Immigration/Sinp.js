import React, {useEffect, useState} from "react"
import {OptionsFromObject} from "../../util/reactHtml";

const SINP_AGE_OPTIONS =  {
    'Under 18': 0,
    '18 to 21': 8,
    '22 to 34': 12,
    '35 to 45': 10,
    '46 and 50': 8,
    '50 or over': 0
}

const SINP_EDUCATION_OPTIONS = {
    'PhD degree': 23,
    'Masters degree': 23,
    "Bachelor's degree OR 3 or more year degree program at a university": 20,
    "Trade certification equivalent to journey person status in Saskatchewan": 20,
    "Degree program that requires two years at a university": 15,
    "Degree program that requires one year at a university": 12
}

const SINP_LANGUAGE_OPTIONS = {
    'Less Fluent Basic (CLB 0-3)': 0,
    'Fluent Basic (CLB 4)': 4,
    'Initial Intermediate (CLB 5)': 5,
    'Developing Intermediate (CLB 6)': 6,
    'Adequate Intermediate (CLB 7)': 7,
    'Fluent Intermediate or Above (CLB 8 and up)': 8
}




function Sinp(props)  {



    return (

        <form id="sinp-form" role="form" className="canada67form" autoComplete="off">
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>Select the age group you belong to</strong>
                </label>
                <select name="displayage" className="displayage form-control" id="age" required="">
                    <OptionsFromObject options={SINP_AGE_OPTIONS} includeBlank={true} />
                </select>
                <div className="score-design text-danger" id="AgeScore">Score 00</div>
            </div>
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>Education and Training</strong>
                </label>
                <p>
                    <strong>What is your highest level of completed education?</strong>
                </p>
                <select name="displayagee" className="displayagee form-control" id="agee" required="">
                    <OptionsFromObject options={SINP_EDUCATION_OPTIONS} includeBlank={true} />
                </select>
                <div className="score-design text-danger" id="AgeScoree">Score 00</div>
            </div>
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>Have you studied for one full-time academic year at a recognized Saskatchewan post-secondary
                        educational institution while on a valid study permit?</strong>
                </label>
                <div className="radio-group">
                    <input type="radio" id="full-time-yes" name="full-time" value="Yes"/>
                    <label htmlFor="full-time-yes" required="">Yes</label>
                    <input type="radio" id="full-time-no" name="full-time" value="No" required=""/>
                    <label htmlFor="full-time-no">No</label>
                </div>
                <div className="score-design text-danger" id="FullTimeScore">Score 00</div>
            </div>
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>Language Ability</strong>
                </label>
                <p>
                    <strong>In order to claim points for language, candidates must demonstrate their proficiency in
                        English OR French by way of a language test recognized by the Government of
                        Saskatchewan.</strong>
                </p>
                <select name="language_en" id="language_en" className="language_en form-control" required="">
                    <OptionsFromObject options={SINP_LANGUAGE_OPTIONS} includeBlank={true} />
                </select>
                <div className="score-design text-danger" id="LanguageScore">Score 00</div>
            </div>
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>Skilled Work Experience</strong>
                </label>
                <p>
                    <strong>Skilled Worker Experience is defined by the Canadian National Occupational Classification
                        (NOC) and means: Managerial jobs (NOC skill type 0), Professional jobs (NOC skill type A),
                        Technical jobs and Skilled trades (NOC skill type B).</strong>
                </p>
                <label htmlFor="" className="pl-0">
                    <strong>In the past five years, how many years of skilled work experience did you obtain?</strong>
                </label>
                <div className="radio-group">
                    <input type="radio" id="past-five-exp-1" name="past-five-exp" value="1" required=""/>
                    <label htmlFor="past-five-exp-1">1</label>
                    <input type="radio" id="past-five-exp-2" name="past-five-exp" value="2" required=""/>
                    <label htmlFor="past-five-exp-2">2</label>
                    <input type="radio" id="past-five-exp-3" name="past-five-exp" value="3" required=""/>
                    <label htmlFor="past-five-exp-3">3</label>
                    <input type="radio" id="past-five-exp-4" name="past-five-exp" value="4" required=""/>
                    <label htmlFor="past-five-exp-4">4</label>
                    <input type="radio" id="past-five-exp-5" name="past-five-exp" value="5" required=""/>
                    <label htmlFor="past-five-exp-5">5</label>
                </div>
                <div className="score-design text-danger" id="PastFiveScore">Score 00</div>
            </div>
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>In the five years prior (to the) date of your EOI profile submission (2009 � 2014), how many
                        years of skilled work experience did you obtain?</strong>
                </label>
                <div className="radio-group">
                    <input type="radio" id="past-six-exp-1" name="past-six-exp" value="1" required=""/>
                    <label htmlFor="past-six-exp-1">1</label>
                    <input type="radio" id="past-six-exp-2" name="past-six-exp" value="2" required=""/>
                    <label htmlFor="past-six-exp-2">2</label>
                    <input type="radio" id="past-six-exp-3" name="past-six-exp" value="3" required=""/>
                    <label htmlFor="past-six-exp-3">3</label>
                    <input type="radio" id="past-six-exp-4" name="past-six-exp" value="4" required=""/>
                    <label htmlFor="past-six-exp-4">4</label>
                    <input type="radio" id="past-six-exp-5" name="past-six-exp" value="5" required=""/>
                    <label htmlFor="past-six-exp-5">5</label>
                </div>
                <div className="score-design text-danger" id="PastSixScore">Score 00</div>
            </div>
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>Have you obtained 12 months or more of work experience in Saskatchewan, on a valid work
                        permit, in the past five years?</strong>
                </label>
                <div className="radio-group">
                    <input type="radio" id="exp-sask-yes" name="exp-sask" value="Yes" required=""/>
                    <label htmlFor="exp-sask-yes">Yes</label>
                    <input type="radio" id="exp-sask-no" name="exp-sask" value="No" required=""/>
                    <label htmlFor="exp-sask-no">No</label>
                </div>
                <div className="score-design text-danger" id="ExpSaskScore">Score 00</div>
            </div>
            <div className="form-group">
                <label htmlFor="" className="pl-0">
                    <strong>Close Family Relative in Saskatchewan</strong>
                </label>
                <p>
                    <strong>Do you or your accompanying spouse/common-law partner have a family relative that is a
                        Canadian citizen or permanent resident living in Saskatchewan. This includes: parent, sibling,
                        grandparent, aunt, uncle, niece, nephew, cousin and step-family members or in-laws of the same
                        relationships.</strong>
                </p>
                <div className="radio-group">
                    <input type="radio" id="family-relative-yes" name="family-relative" value="Yes" required=""/>
                    <label htmlFor="family-relative-yes">Yes</label>
                    <input type="radio" id="family-relative-no" name="family-relative" value="No" required=""/>
                    <label htmlFor="family-relative-no">No</label>
                </div>
                <div className="score-design text-danger" id="FamilyRelativeScore">Score 00</div>
            </div>
            <div className="form-group">
                <input id="LeadSource" name="LeadSource" type="hidden" value="Website-SINP Calculator"
                       readOnly="readonly" className="form-control"/>
            </div>
            <input className="btn btn-danger btn-adst  mt-10 mb-40" type="submit" onClick="total1()"
                   value="Calculate Your Score"/>
            <br/>

        </form>
    );

}

export default Sinp
