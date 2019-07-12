import React from 'react'
import { gatsby } from 'gatsby'

const Template = (props) => { 
    console.log('bite');
    console.log(props, 'this is a prop');
    return ( 
        <div>
            This is content
        </div>
    )
}

export default Template