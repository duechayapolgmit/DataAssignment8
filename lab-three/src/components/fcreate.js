import { useState } from "react";

// functional component -- uses functions instead of classes
export function FCreate(props){
    // variable and function for setting variables -- use the useState function
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // handle submission of the form -- no need for this.state as it already handles it via useState() above
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${title} ${cover} ${author}`) // Debug
    }

    // unlike class component, returns directly without .render method
    return(
        <div>
            <h3>Hello from FCreate component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Add Book Title:
                        <input type="text" 
                            className="form-control" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label>
                        Add Book Cover:
                        <input type="text" 
                            className="form-control" 
                            value={cover}
                            onChange={(e) => setCover(e.target.value)}/>
                    </label>
                    <label>
                        Add Book Author:
                        <input type="text" 
                            className="form-control" 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}/>
                    </label>
                    <input type="submit" value="Add Book"/>
                </div>
            </form>
        </div>
    );
}