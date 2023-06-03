import styled from "@emotion/styled";

export const Box = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  color: #444;
  gap: 1rem 1rem;
  padding: 0 1rem;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #444;
  background-image: url("https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding: 1rem;

  .ant-input-search {
    width: 100%;
    max-width: 500px;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  }
`;

export const BoxWrapper = styled(Box)`
  display: flex;
  max-width: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  backdrop-filter: blur(1rem);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  text-align: center;
`;
