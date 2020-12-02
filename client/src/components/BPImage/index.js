import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import SearchForm from "../../components/SearchForm";
import "./style.css";

function BPImage () {
return (
    
  <section>      
        <Row>
            <SearchForm />
            <Col size="md-6" id="bloodpressure">                                             
                <p id="secondtext">Understanding Blood Pressure Readings</p> 
                    <img id="bloodpressure-chart" src={"./assets/images/blood pressure readings chart.jpg"} alt="bloodpressure-chart" 
                    className="img-fluid"/>                      
                                
            </Col>
          
        </Row>
</section>

);

}

export default BPImage;