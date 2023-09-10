import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Routes from "../../routes";
import { styled } from "styled-components";

const Navbar = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #333;
  display: flex;
  direction: rtl;
  li {
    margin-right: 20px;
    color: white;
    padding: 10px 15px;
    transition: background-color 0.3s;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #555;
    }
  }
`;

const AppBar: FC = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <Navbar>
      {Routes.map((route) => (
        <li key={route.key} onClick={() => navigate(route.path)}>
          {route.title}
        </li>
      ))}
    </Navbar>
  );
};

export default AppBar;
