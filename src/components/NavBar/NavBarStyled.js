import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  z-index: 1;
  position: fixed;
  background-color: #fff;
  justify-content: space-between;
  padding: 16px 24px;
  box-shadow: 0px 1px 24px 0px rgba(64, 48, 96, 0.12),
    0px 1px 2px 0px rgba(64, 48, 96, 0.12);
  top: 0;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d6cfe9;
  background: #f9f6ff;
  box-shadow: 0px 0px 4px 0px rgba(64, 48, 96, 0.24) inset;
  max-width: 424px;
  width: 100%;
  padding: 8px 12px;
  input {
    width: 100%;
    border: none;
    outline: none;
    background: #f9f6ff;
    padding: 0 10px;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  gap: 33px;
  align-items: center;
`;
