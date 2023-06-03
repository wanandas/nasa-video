import styled from "@emotion/styled";

export const VideoStyledCustom = styled.div`
  position: relative;
  align-content: center;
  justify-content: center;
  display: flex;
  aspect-ratio: 16/9;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const VideoDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  flex-wrap: wrap;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
  flex-wrap: wrap;
`;
