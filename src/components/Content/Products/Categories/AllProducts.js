import React, { Component } from 'react';

class AllProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://heka4.apache.techcollege.dk/api/products/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json, 
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div></div>;
        } else {

            return (
                <div className="AllProducts-Grid">
        
                {items.map(item => (
                    <div className="AllProducts" key={item.id}>
                        <img src={item.filename_absolute} alt=""/>
                        <h2>{item.title}</h2>
                        <p>{item.teaser}</p>
                        <input type="button" value="se mere"/>
                    </div>
                ))}
                    
                </div> 
            );
        }

      
    }
}

export default AllProducts;