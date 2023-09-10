import { FC, useState, useEffect } from "react";
import styled from "styled-components";

const BackTopButton = styled.button<{ show: string }>`
  display: ${({ show }) => show};
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #e30619;
  color: #fff;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aa1916;
  }
`;

const ScrollToTop: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BackTopButton show={showButton ? "block" : "none"} onClick={scrollToTop}>
      &#8679;
    </BackTopButton>
  );
};

export default ScrollToTop;
