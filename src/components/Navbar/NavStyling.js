import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

import { NavLink as Link } from 'react-router-dom'

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
  position: sticky;
  background: rgba(236, 240, 241,0.8);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`
export const MenuLink = styled(Link)`
  color: #8247E5;
  display: flex;
  cursor: pointer;
  font-size: 1.5em;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &:hover {
    position: relative;
    color: #000000;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    outline: 0;
    border: none;
  }
  &.active {
    color: #000000;
  }
`

export const Hamburger = styled(FaBars)`
  display: none;
  color: #8247E5;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`