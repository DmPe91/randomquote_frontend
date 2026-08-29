import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
`;

const Skeleton = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  div {
    height: 20px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.3);
    margin-bottom: 15px;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }

  .skeleton-text {
    height: 60px;
    margin-bottom: 20px;
  }

  .skeleton-author {
    width: 150px;
    height: 18px;
    margin-left: auto;
  }
`;

export default Skeleton;
