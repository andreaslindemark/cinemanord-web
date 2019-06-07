import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledImg = styled(Img)`
  height: 100%;
  img {
    -moz-transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;
    z-index: 1;

    @media (min-width: 768px) {
    }
  }
`;

export const MovieImage = styled.div`
  height: 400px;
  cursor: pointer;
  img {
  }
  margin-bottom: 0px;
  :hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
  }
`;

export const MovieImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow-wrap: break-word;

  .pWrapper {
    background: rgba(0, 0, 0, 0.3);
    padding: 5px 20px;
    margin: 0 20px;
    border-radius: 20px;
  }
`;

export const MovieImageText = styled.p`
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
  line-height: 1.2rem;
  font-weight: 800;
  margin: 0px;
  padding: 0px;
  color: #fff;

  @media (min-width: 1200px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
