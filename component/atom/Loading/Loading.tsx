import { Spin } from "antd";
import { LoadingWrapper } from "./Loading.styled";

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spin size="large" />
    </LoadingWrapper>
  );
};
