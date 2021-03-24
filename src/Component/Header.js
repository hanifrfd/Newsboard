import React, { useState } from "react";
import { Navbar, Form, FormControl} from 'react-bootstrap'
import './Header.css'


export default function Header(props) {

    const [hiddens, setHiddens] = useState(true);

    const onSearch = () => {
        setHiddens( hiddens === true ? false : true);
    }

    const inputQuery = (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            props.setQuery(e.target.value);
          },1000);
    }

    return (        
        <Navbar >
            <Navbar.Brand href="#home"><img src="./assets/logos.png" alt=""/></Navbar.Brand>
            <Form className="ml-auto" inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-3" hidden={hiddens} onChange={(e) => inputQuery(e)}/>
                <img src="./assets/search.png" alt="" onClick={() => onSearch()}/>
            </Form>
        </Navbar>        
    )
}   
