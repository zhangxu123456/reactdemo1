import React, { useEffect, useState, useContext, createContext, useReducer, useMemo, useCallback, useRef, forwardRef, useImperativeHandle } from "react";
import { Button } from 'antd';



const Home = () => {
    const datasore = { responsibilityInfo: null }
    const handle = () => {
       /*  const { responsibilityInfo: { abnormalGridConnectionInfo } } = datasore
        console.log('abnormalGridConnectionInfo', abnormalGridConnectionInfo); */


    }
    return (<div>
        home
        <Button type="primary" onClick={ handle}>删除</Button>
    </div>)
}

export default Home