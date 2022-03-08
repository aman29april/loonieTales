import React from "react"


const BLANK_OPTION = 'Select...'

export function OptionsFromObject(props){

    let tags = []

    if(props.includeBlank){
        tags.push(<option value="default" selected disabled>{BLANK_OPTION}</option>)
    }

    Object.entries(props.options).forEach(([key, value]) => {
        tags.push(<option key={value} value={value}>{key}</option>)
    })
    return tags
}