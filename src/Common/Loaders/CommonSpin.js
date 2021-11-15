import React from 'react';
import "./CommonSpinLoader.scss";
import { 
    Icon 
} from 'antd';
// import CommonLoader from './CommonLoader';


const CommonSpin = () => {
    return (
        <div>
            <div className="Common-spin_container">
                <Icon 
                type="loading" 
                className="Common_spin_icon"
                spin />
        </div>
     </div>
    )
}
export default CommonSpin;
