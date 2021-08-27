import { Component } from "react";
import { Link, Route, NavLink } from 'react-router-dom';
const menuList = [
    {
        label: 'Home',
        to: '/home',
        exact: false
    },
    {
        label: 'About',
        to: '/about',
        exact: false
    },
    {
        label: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        label: 'Products',
        to: '/products',
        exact: false
    },
]
const MenuLink = ({ label, to, extact }) => {
    return (<Route path={to} exact={extact} children={({ match }) => {
        return (<li className={`nav-item ${match ? 'active' : ''}`}>
            <Link className="nav-link" to={to}>
                {label}
            </Link>
        </li>)
    }
    } />)
}
class Menu extends Component {
    showMenuLink = (menuList) => {
        var result = null;
        result = menuList.map((item, index) => {
            return (
                <MenuLink key={index} label={item.label} to={item.to} extact={item.exact} />
            )
        })
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" exact to="/" >
                    Router ReactJS
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {this.showMenuLink(menuList)}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
