import React from "react";
import { Nav, Ul, Li, I, HoverText } from "./style";
import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <Nav>
            <Ul>
                <Li>
                    <NavLink to="/" aria-label="Home">
                        <I className="fa-solid fa-house"></I>
                        <HoverText>Store/Home</HoverText>
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="shopping-list" aria-label="Shopping list">
                        <I className="fa-solid fa-cart-shopping"></I>
                        <HoverText>Shopping-list</HoverText>
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="tasks" aria-label="tasks">
                        <I className="fa-solid fa-hammer"></I>
                        <HoverText>Tasks</HoverText>
                    </NavLink>
                </Li>
            </Ul>
        </Nav>
    );
}
