import React,{useRef,useEffect} from 'react';
import { AuthComProps } from "@/types/comp2"
import Dialog from '@/components/Dialog/Dialog.tsx'
export default function Comp2({ children }: AuthComProps) {
    children = React.Children.toArray(children)
    const domRe = useRef(null)
    useEffect(()=>{
        console.log(domRe);
    })
    console.log(children);
    let headerSlot = [],footerSlot = [],defaultSlot = [];
    children.forEach(child => {
        let {slot} = child.props;
        if(slot === 'header'){
            headerSlot.push(child);
        }else if(slot === 'footer'){
            footerSlot.push(child)
        }else{
            defaultSlot.push(child)
        }
    });
    return (
        <div className="box">
            <p>这是comp2组件1</p>
            <p>这是comp2组件2</p>
            {
               headerSlot
            }
            {
                [123]
            }
            <Dialog content="好好学习React" ref={domRe}>
                <button onClick={()=> domRe.current.handle()}>确定</button>
                <button>取消</button>
            </Dialog>
        </div>
    )
}