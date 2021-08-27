import { Component } from "react";
class Product extends Component {
    render() {
        var {match} = this.props;
        return (
            <div>
                <h1>Product Name: {match.params.name}</h1>
            </div>
        );
    }
}

export default Product;
