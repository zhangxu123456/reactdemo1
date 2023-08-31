import Icon from "@ant-design/icons";
import React from "react";
import { MouseEventHandler } from "react";
interface Props {
    name:string;
    rotate?:number;
    spin?:boolean;
    style?:React.CSSProperties,
    onClick?:MouseEventHandler
}
interface SvgProps {
    svgProps?:React.SVGProps<SVGSVGElement>;
    useProps?:React.SVGProps<SVGUseElement>
}

const Svg: React.FC<SvgProps> = props => {
    const {svgProps,useProps} = props;
    return (
        <svg {...svgProps}>
            <use {...useProps} />
        </svg>
    )
}
const SvgIcon: React.FC<Props & SvgProps> = (props) => {
  const { name, svgProps = {}, useProps = {}, ...attrs } = props;

  const Com = React.useMemo(() => () => 
    <Svg
      svgProps={svgProps}
      useProps={{ ...useProps, href: `#icon-${name}` }}
    />
    
    ,[name,svgProps,useProps]);
    return <Icon {...attrs} onClick={props.onClick} component={Com} />                 
};

export default SvgIcon;
