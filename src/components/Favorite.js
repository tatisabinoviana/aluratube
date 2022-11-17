import styled from 'styled-components';

export const StyledFavorite = styled.div`
  /* flex: 1; */
  width: 100%;
  padding: 16px;
  /* overflow: auto; */
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  img {
    /* aspect-ratio: 16/9; */
    width: 100%;
    max-width: 100px;
    font-weight: 500;
    object-fit: cover;
    /* height: auto; */
    border-radius: 50%;
  }

  section {
    width: repeat(auto-fill, minmax(200px, 1fr));
    /* padding: 0; */
    /* overflow: scroll; */
    padding: 16px;
    overflow-x: auto;
    /* height: 30px; */
    div {
      /* width: calc(100vw - 16px * 4); */
      display: grid;
      grid-gap: 16px;
      /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
      grid-auto-flow: column;
      /* grid-auto-columns: minmax(200px, 1fr); */
      scroll-snap-type: x mandatory;
      .favo-id {
        width: 150px;
        overflow-x: hidden;
      }
      a {
        scroll-snap-align: start;
        span {
          width: 100px;
          /* height: 30px; */
          padding-top: 8px;
          display: block;
          /* padding-right: 24px; */
          text-align: center;
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
