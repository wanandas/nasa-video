import { Input, Typography } from "antd";
import {
  BoxWrapper,
  ContentWrapper,
} from "component/template/layouts/Box.styled";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleSearch = (value: string) => {
    if (value) {
      router.push({
        pathname: "/list",
        query: { q: value },
      });
    }
  };

  return (
    <ContentWrapper>
      <BoxWrapper>
        <Typography.Title level={1}>Welcome to NASA</Typography.Title>
        <Input.Search
          height={"100px"}
          placeholder="input search text"
          onSearch={handleSearch}
        />
      </BoxWrapper>
    </ContentWrapper>
  );
}
