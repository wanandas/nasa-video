import styled from "@emotion/styled";
import { Input, Layout } from "antd";
import Image from "next/image";
import { HeaderBox } from "./Box.styled";
import { useRouter } from "next/router";

interface ILayoutMain {
  children: React.ReactNode;
  id?: string;
}
const { Header, Content } = Layout;

const LayoutMain = ({ children }: ILayoutMain) => {
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
    <Layout>
      <HeaderWrapper>
        <HeaderBox>
          <Image
            alt="logo"
            height={60}
            src="/assets/logo.png"
            style={{ cursor: "pointer" }}
            width={80}
            onClick={() => router.push("/")}
          />
          <Input.Search
            defaultValue={router.query.q as string}
            placeholder="input search text"
            onSearch={handleSearch}
          />
        </HeaderBox>
      </HeaderWrapper>
      <Layout>
        <MainContent>{children}</MainContent>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;

const HeaderWrapper = styled(Header)`
  min-height: 128px;
  background-color: #212a3e;
  padding: 0;
`;

const MainContent = styled(Content)`
  min-height: 100vh;
  width: 100%;
  background-color: #f1f6f9;
`;
