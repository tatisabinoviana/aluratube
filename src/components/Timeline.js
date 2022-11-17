import styled from 'styled-components';

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-auto-flow: column;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      .video-id {
        width: 250px;
        overflow-x: hidden;
      }
      a {
        scroll-snap-align: start;
        span {
          width: 216px;
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || '#222222'};
        }
      }
      button {
        height: 20px;
        width: 20px;
      }
    }
  }
`;
