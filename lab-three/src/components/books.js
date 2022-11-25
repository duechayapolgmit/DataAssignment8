import React from "react";
import Card from 'react-bootstrap/Card';

// List all books via looping through each book
export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book._id} t></BookItem>
            }
        );
    }
}

// Card for each book item (called from above)
class BookItem extends React.Component {
    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
            <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
            <img src={this.props.book.cover}></img>
            <footer >
                {this.props.book.author}
                    </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}