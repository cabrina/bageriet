import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://heka4.apache.techcollege.dk/api/categories/')
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
                <div className="categories">
                    <nav>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <Link to="/products">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div> 
            );
        }

      
    }
}

export default Categories;