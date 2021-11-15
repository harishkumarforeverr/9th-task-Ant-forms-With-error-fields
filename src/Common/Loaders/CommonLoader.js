import React from 'react';
import "./CommonSpinLoader.scss";
import { 
    Spin, 
    Icon 
} from 'antd';

const CommonLoader = ({loader}) => {
    return (
     <div>
        <div className="Common_Loader_Container">
             {loader ?
                <Spin 
                className="Common_Loader_icon"
                indicator={Icon}
                spinning={loader}
                />:""}
        </div>
    </div>
    )
}

export default CommonLoader;
