import { styled } from "styled-components";

const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  padding-block: 10px;
  direction: rtl;

  .card-body {
    height: 226px;
    width: 162px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #e0e0e0;
    animation: blink 1s infinite;
  }

  .title {
    width: 120px;
    height: 10px;
    border-radius: 8px;
    background-color: #e0e0e0;
    animation: blink 1s infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;

const VideoLoadingCard = () => {
  return (
    <CustomCard>
      <div className="card-body"></div>
      <div className="title"></div>
    </CustomCard>
  );
};

export default VideoLoadingCard;
