import React,{useState} from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu,CgClose} from "react-icons/cg";

const Nav=()=>{

    const [menuIcon, setMenuIcon] = useState();


    const Nav=Styled.nav` 
    .navbar-lists{
        display: flex;
        gap: 4.8rem;
        align-items: center;
        
        .navbar-link{
            &:link,
            &:visited{
                display: inline-block;
                text-decoration: none;
                font-size: 1.8rem;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.black};
                transition: color 0.3s linear;
            }
            &:hover,
            &:active {
                color: ${({ theme }) => theme.colors.helper};
            }
        }
    }
    .mobile-navbar-btn {
        // cgmenu ar cgclose full screen e dekha jabe na
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: ${({ theme }) => theme.colors.black};
    }
    .mobile-nav-icon[name="close-outline"] {
        display: none;
    }
    //nav-icon er close-outline jodi by chance kaj na kore tahole next line er jonno jeno kaj kore
    .close-outline {
        display: none;
    }
    .cart-trolley--link {
        position: relative;
    
        .cart-trolley {
            position: relative;
            font-size: 3.2rem;
        }
        .cart-total--item {
            width: 2.4rem;
            height: 2.4rem;
            font-size: 10px;
            position: absolute;
            background-color: #000;
            color: #fff;
            border-radius: 50%;
            // display ar grid diye number center e antesi
            display: grid;
            place-items: center;
            top: -20%;
            left: 70%;
            background-color: ${({ theme }) => theme.colors.helper};
        }
    }

    @media (max-width: ${({theme})=>theme.media.mobile}){
        .mobile-navbar-btn{
            display: inline-block;
            z-index: 9999;
            border: ${({ theme }) => theme.colors.black};
        }
        .mobile-nav-icon {
            font-size: 2.9rem;
            color: ${({ theme }) => theme.colors.black};
        }
        .active .mobile-nav-icon {
            display: none;
            font-size: 2.9rem;
            position: absolute;
            top: 30%;
            right: 10%;
            color: ${({ theme }) => theme.colors.black};
            z-index: 9999;
          }
          .active .close-outline {
            display: inline-block;
          }
          .navbar-lists {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
      
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
      
            visibility: hidden;
            opacity: 0;
            transform: translateX(100%);
            transition: all 3s linear;
          }
          .active .navbar-lists {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
            transform-origin: right;
            transition: all 3s linear;
      
            .navbar-link {
              font-size: 1.9rem;
            }
          }
          .cart-trolley--link {
            position: relative;
      
            .cart-trolley {
              position: relative;
              font-size: 2.9rem;
            }
      
            .cart-total--item {
              width: 1.9rem;
              height: 1.9rem;
              font-size: 1rem;
            }
          }
    }

    `;
    return (
        <Nav>
            <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
                <li>
                    <NavLink to="/" className="navbar-link nome-link" onClick={()=>setMenuIcon(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navbar-link " onClick={()=>setMenuIcon(false)}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="navbar-link " onClick={()=>setMenuIcon(false)}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar-link " onClick={()=>setMenuIcon(false)}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={()=>setMenuIcon(false)}><FiShoppingCart className="cart-trolley" />
                    <span className="cart-total--item">10</span>
                    </NavLink>
                </li>
            </ul>
            {/* two buttons for open and close menu */}
            <div className="mobile-navbar-btn">
                <CgMenu name="menu-outline" className="mobile-nav-icon"
                 onClick={()=>setMenuIcon(true)}/>
                <CgClose name="menu-outline" className="mobile-nav-icon close-outline" 
                 onClick={()=>setMenuIcon(false)}/>
            </div>

            </div>
        </Nav>
    )
}

export default Nav;