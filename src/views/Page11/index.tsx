import React, { useRef, useState } from 'react';
import {Button} from 'antd';
import Demo from './Demo';


const Page11 = () => {
 const refs =  useRef(null)
    return <Demo ref={refs} x={10} />
}

export default Page11