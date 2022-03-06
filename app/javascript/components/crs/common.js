import React from "react";

export const SPOUSE_KEYS = ['spouse_education', 'spouse_language', 'spouse_canadian_experience'];
const SPOUSE_SECTION_NAME = 'Spouse Factors'
export const isSpouseKey = (key) =>  SPOUSE_KEYS.includes(key)


function transformHash(props){
    const hash = {
        'Core/Human Factors': {
            keys: ['age',  'education', 'first_language', 'secondary_language', 'canadian_experience'],
            data: {
                age: 0,
                education: 0,
                first_language: 0,
                secondary_language: 0,
                canadian_experience: 0
            },
            total: 0,
            max: 500
        },
        [SPOUSE_SECTION_NAME]: {
            keys: SPOUSE_KEYS,
            data: {
                spouse_education: 0,
                spouse_language: 0,
                spouse_canadian_experience: 0
            },
            total: 0,
            max: 40
        },
        'Skill Transferability Factors': {
            keys: ['foreign_work_experience', 'certificate_of_qualification'],
            data: {
                'foreign_work_experience': 0
            },
            total: 0,
            max: 100
        },
        'Additional Points': {
            keys: ['provincial_nomination', 'sibling_in_canada',
                'arranged_employment_noc_00', 'arranged_employment_noc_0_a_b',
                'study_in_canada', 'french_language_skills'],
            data: {
                provincial_nomination: 0
            },
            total: 0,
            max: 600
        }
    };

    //Fill data in hash structure
    Object.entries(props.userProfile).map(([dataKey, dataValue]) => {
        Object.entries(hash).forEach(([sectionName, value]) => {
            if(value.keys.includes(dataKey)){
                //SKIP if spouse section and its disabled
                if(sectionName === SPOUSE_SECTION_NAME && !props.partnered){
                    hash[sectionName]['data'][dataKey] = 0
                    hash[sectionName]['total'] = 0
                }else{
                    hash[sectionName]['data'][dataKey] = dataValue.points
                    hash[sectionName]['total'] += dataValue.points
                }
            }
        })
    })
    return hash
}
export const ResultTable = (props) => {
    // const userProfile = props.userProfile
    let html = [];
    const hash = transformHash(props)

    Object.entries(hash).forEach(([sectionName, dataValue]) => {
        html.push(<tr>
            <td className='fw-bold'>{sectionName}</td>
            <td className='fw-bold'>
                <span className='text-success'>{dataValue['total']} </span> / {dataValue['max']}
            </td>
        </tr>)

        Object.entries(dataValue['data']).forEach(([lineItemKey, points]) => {
            html.push(
                <tr>
                    <td className='text-capitalize'>{lineItemKey.split('_').join(' ')}</td>
                    <td>{points}</td>
                </tr>
            )
        })

    })
    return html
}

function findSection(hash, lineType){
    Object.entries(hash).forEach(([key, value]) => {
        if(value.keys.includes(lineType)) return key
    })
    return null
}