import { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Product from "./product";

const productList = [
    {
        name: 'iphone',
        price: 1000,
    },
    {
        name: 'samsung',
        price: 500
    },
    {
        name: 'oppo',
        price: 200
    },

]
class Products extends Component {
    match = this.props.match;
    showProducts = (productList) => {
        var result = null;
        result = productList.map((item, index) => {
            return (
                <NavLink key={index} to={`${this.match.path}/${item.name}`} >
                    <li className="list-group-item">{`Product: ${item.name} - price:${item.price}$`}</li>
                </NavLink>
            )
        })
        return result;
    }
    render() {
        return (
            <div>
                <h1>Product List</h1>
                <ul className="list-group">
                    {this.showProducts(productList)}
                </ul>
                    <Route path={`${this.match.path}/:name`} component={Product} />
            </div>
        );
    }
}

export default Products;
