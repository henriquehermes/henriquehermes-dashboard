import styled from 'styled-components';
import { ReactComponent as SVGDashboard } from '../../images/dashboard.svg';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  width: 40%;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 28px;
    font-weight: 900;
    color: #33334f;
  }

  h4 {
    margin: 5px 0;
    color: #767ead;
    font-weight: normal;
  }

  form {
    margin: 20px 0;
  }

  input {
    border-radius: 6px;
    border: 0;
    width: 100%;
    outline: none;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 300;
    padding: 15px;
    font-size: 16px;
    margin-bottom: 10px;
    transition: all 0.25s ease-out;

    &:hover {
      box-shadow: 0 1px 4px 0 rgba(96, 120, 255, 0.5);
    }
  }

  button {
    cursor: pointer;
    border-radius: 6px;
    min-width: 145px;
    padding: 15px;
    display: inline-block;
    text-align: center;
    font-weight: 700;
    box-sizing: border-box;
    font-size: 18px;
    background: #6078ff;
    color: #fff;
    transition: all 0.25s ease-out;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);

    &:hover {
      transform: translate3d(0, -2px, 0);
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 30px;

  h1 {
    font-size: 50px;
    font-weight: 900;
  }

  h2 {
    font-size: 40px;
    font-weight: 900;
  }
`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  margin-top: 100px;
  text-align: center;
  flex-direction: column;

  h3 {
    color: #767ead; 
    font-weight: normal;
  }
`;

export const BoxDash = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 30px;
`;

export const SvgDash = styled(SVGDashboard)`
  height: 500px;
  width: 100%;
`;
