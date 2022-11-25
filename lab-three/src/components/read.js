import React from "react";
import bookData from "./books.json";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {Books} from "./books";

//there is no book class for this, instead it directly goes to BookItems
export class Read extends React.Component{
    
    // Runs when component output rendered to DOM
    componentDidMount() {
        // Get the source via URL using GET method
        axios.get('http://localhost:4000/api/books') // Set state from response
        .then((response)=>{
            this.setState({books:response.data}) // books from mybooks data
        })
        .catch((error)=>{
            console.log(error); // Log error to console
        })
    }

    state = {
        books: []
    }

    render(){
        // Returns Books (list of book items)
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}