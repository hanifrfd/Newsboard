import React,{ useState } from 'react'
import {Button, Container, Row, Col, Dropdown} from 'react-bootstrap'

import "./ToolsBar.css"

export default function ToolsBar(props) {
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]    
        
    const chgCategory = (e) => {        
        e.preventDefault();        
        props.setCategory(e.target.id); 

        var elems = document.querySelectorAll(".category-item");
        [].forEach.call(elems, function(el) {
            el.className = el.className.replace(/\bactive\b/, "");
        });

        e.target.className+="active"
    }

    

    return (
        <Container>
            <Row className="toolbar">
                <Col md="11" className="category-list d-flex flex-row">
                    <div className="category-item active" id="" onClick={(e) => chgCategory(e)}>
                        all
                    </div>
                    {
                        categories.map((value,index) => {
                            return (
                                <div className={'category-item '} key={index} id={value} onClick={(e) => chgCategory(e)}>
                                    {value}
                                </div>            
                            )
                        })
                    }
                    
                </Col>
                <Col md="auto" className="filter">                    
                    <Dropdown>                        
                            <img src="../assets/filter.png" alt="filter" className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>                                                            
                        <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <Dropdown.Item eventKey="1">Date</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Popularity</Dropdown.Item>                            
                        </Dropdown.Menu>    
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}
