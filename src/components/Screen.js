import { textfit } from "react-textfit"; 
import "./Screenm.css";

const Screen = ({ value }) => {
    return(
        <textfit className="screen" mode="single" max={70}>{value}</textfit>
    );
};

export default Screen