import styled from 'styled-components';

export const StyledMailWidget = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 50px;
  right: 50px;
  width: 400px;
  transition: all 0.3s ease;
  transform: translateY(480px);

  @media (max-width: 425px) {
    transform: translateY(330px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
    right: 0;
  }

  .toggleButton {
    position: absolute;
    right: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;
    outline: none;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #307853; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #307853 0%,
      #6ed4bc 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #307853 0%,
      #6ed4bc 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #307853 0%, #6ed4bc 100%);

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }

  &.visible {
    transform: translateY(20px);
  }

  .mailWidgetImg {
    width: 25px;
    height: auto;
    margin-top: 25px;

    &.small {
      width: 20px;

      @media (max-width: 768px) {
        width: 15px;
        height: 15px;
      }
    }

    @media (max-width: 768px) {
      width: 15px;
      height: 15px;
    }
  }

  .toggleButton:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  .contentMailWidget {
    position: relative;
    top: 50px;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 480px;
    margin: 40px 0 0 0;
    border-radius: 20px;
    padding: 20px;

    @media (max-width: 425px) {
      height: 300px;
      top: 30px;
    }

    p {
      color: #fff;
    }
  }
`;

export const CnInput = styled.input`
  font-size: 0.8rem;
  font-weight: 800;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  color: #000;
  padding: 20px;
  margin-bottom: 20px;
  outline: none;
  border: none;

  ::placeholder {
    color: #444;
    font-weight: 800;
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    height: 25px;
    margin-bottom: 0px !important;
    font-size: 0.8rem;
  }
`;

export const CnTextArea = styled.textarea`
  font-size: 0.8rem;
  font-weight: 800;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  height: 150px;
  color: #000;
  padding: 10px 20px;
  margin-bottom: 20px;
  outline: none;

  ::placeholder {
    color: #444;
    font-weight: 800;
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    height: 50px;
    font-size: 0.8rem;
  }
`;

export const CnSubmit = styled.button`
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 50px;
  border: 0;
  width: 100%;
  height: 50px;
  color: #fff;
  font-weight: 800;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
  background: #307853; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #307853 0%,
    #6ed4bc 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #307853 0%,
    #6ed4bc 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #307853 0%, #6ed4bc 100%);
  transition: all 1s ease;

  :hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;
