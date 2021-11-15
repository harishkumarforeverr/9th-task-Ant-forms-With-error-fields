import React from "react";
import { Pagination } from "antd";
import "./Pagination.scss";

const CustomPagination = ({ current, total,locationdata }) => {
  return (
    <div className="Pagination-Body-Content">
      <Pagination
        size="small"
        defaultCurrent={1}
        total={locationdata?.length}
        pageSize={2}
      />
    </div>
  );
};

export default CustomPagination;
