import React from 'react'
import { gatsby } from 'gatsby'

const Content = (props) => { 
    console.log(props, 'this is a prop');
    return ( 
        <div>
            This is content
        </div>
    )
}

export default Content