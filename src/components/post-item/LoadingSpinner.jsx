import React from "react";
import { Spin, Space } from "antd";

const LoadingSpinner = () => {
  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );
};

export default LoadingSpinner;
