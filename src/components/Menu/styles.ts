import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px; 
  margin-top: 40px;
`

export const Button = styled(Link)`
  width: 240px;
  font-size: 14px;
  color: #fff;
  background: rgba(95, 86, 142);
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 20px;
  margin-top: 40px;

  &:hover{
    background-color:rgba(95, 86, 142, 0.9);
  }
`