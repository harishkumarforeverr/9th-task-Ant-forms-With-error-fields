import React from 'react';
import { Skeleton } from 'antd';
import "./SkeletoViewCentre.scss";

const SkeletoViewCentre = () => {
    return (
        <div>
            <div className="viewCentres_skeleton_container">
             <Skeleton active paragraph={{ rows: 4 }}/>
            </div>
        </div>
    )
}

export default SkeletoViewCentre;
