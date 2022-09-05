import React from "react";
import ProductCard from "../components/ProductCard";
import '../Product.css';
import Search from "../components/Search";



class ProductContainer extends React.Component{

    state = {
        products: [], 
        searchTe: '',
        filter: "All", 
        sort: "none"
    };
 
    componentDidMount(){
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(products => {
            this.setState({
                products: products
            })

        })
    };


    onChange = event => {
        this.setState({
            searchTe: event.target.value
        })
    }

    render(){
        console.log("test1", this.state.products)

        const showProducts = this.state.products.filter(p =>
            p.brand.toLowerCase().includes(this.state.searchTe)
        )

        return(
            <div>  
                <Search onChange={this.onChange}/>
              { showProducts.map(product => <ProductCard key={product.id} product={product}/>)

              }
              
            </div>
        )
        };
};

export default ProductContainer