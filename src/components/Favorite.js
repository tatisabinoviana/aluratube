import styled from 'styled-components';

export const StyledFavorite = styled.div`
  .add-favorite {
    width: 90px;
    height: 90px;
    font-size: 20px;
    color: inherit;
    /* position: fixed; */
    /* bottom: 16px; */
    /* right: 16px; */
    margin-top: 26px;
    /* border: 0; */
    border-color: inherit;
    background-color: ${({ theme }) => theme.backgroundLevel2};

    /* background-color: red; */
    /* border-radius: 50%; */
    /* z-index: 99; */
    /* cursor: pointer; */
    /* font-weight: 500; */
    /* object-fit: cover; */
    /* height: auto; */
    border-radius: 50%;
  }
  /* flex: 1; */
  width: 100%;
  padding: 16px;
  overflow: hidden;
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
    height: auto;
    border-radius: 50%;
  }

  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: table-cell;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      /* overflow-x: scroll; */
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || '#222222'};
        }
      }
    }
  }
`;
