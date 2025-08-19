import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeAction";
import styled from "styled-components";
import { Sun, Moon } from "lucide-react";

const ModeBtn = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: var(--box-color);
  border-radius: 50%;
  width: 58px;
  aspect-ratio: 1;
  box-shadow: var(--shadow2-color);
  cursor: pointer;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .light-mode {
    visibility: visible;
    opacity: 1;
    color: var(--sun-color);
  }
  .dark-mode {
    visibility: hidden;
    opacity: 0;
    color: var(--moon-color);
  }

  &.dark {
    .light-mode {
      visibility: hidden;
      opacity: 0;
      color: var(--sun-color);
    }
    .dark-mode {
      visibility: visible;
      opacity: 1;
      color: var(--moon-color);
    }
  }

  @media screen and (max-width: 530px) {
    width: 45px;
    svg {
      width: 22px;
      height: 22px;
      &.light-mode {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleClickThema = () => {
    dispatch(toggleTheme());
  };
  return (
    <ModeBtn
      onClick={handleClickThema}
      className={theme === "light" ? "light" : "dark"}
    >
      <Sun className={"light-mode"} size={30} />
      <Moon className={"dark-mode"} size={28} />
    </ModeBtn>
  );
};

export default ThemeBtn;
