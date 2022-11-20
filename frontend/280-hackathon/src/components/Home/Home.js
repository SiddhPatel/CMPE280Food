import React, { useEffect, useState, useReducer } from "react";
import { Button, Modal, InputGroup, FormControl, ListGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import SideNavigation from "../SideNavigation/SideNavigation";
import Prediction from "../Prediction/Prediction";
import "./Home.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Chart } from "react-google-charts";
import axios from "axios";

Home.propTypes = {};
let count = 0

let getYears = async (endPoint) => {
    const response = await axios.get("http://localhost:8000/"+endPoint);
    return response;
};

function valuetext(value) {
  return `${value}°C`;
}

let options = [];

export const data = [
  ["Year", "GDP"],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
];
let yearCopy = [];
let gdpGrowthRageCopy = [];
let rangeCopy = []
let countClick = 0;
let optionsCopy = []


function Home(props) {
  const [country,setCountry] = useState("USA");
  const [value, setValue] = React.useState([1965, 2000]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [year, setYear] = React.useState([]);
  const [gdpGrowthRage, setgdpGrowthRage] = React.useState(null);
  const [min, setMin] = React.useState(1960);
  const [max, setMax] = React.useState(2020);
  const [arr, setArr] = React.useState([])
  const [options, setOptions] = React.useState([])
  const LIMIT = 3

  //modal related states
  const [show, setShow] = useState(false);
  const [annotation, setAnnonation] = useState('');

  const [annotationList, setAnnotationList] = useState([]);

  const handleChangeUpdate = (newValue)=>{
    let modCopy = [...gdpGrowthRageCopy]
    for(let i = 0; i < gdpGrowthRageCopy.length; i++){
        let mod = [["Year", "GDP"]];
        mod = [
        ...mod,
        ...gdpGrowthRageCopy[i].slice(
        yearCopy.indexOf(newValue[0]),
        yearCopy.indexOf(newValue[1])
      ),
    ];
    console.log(mod)
    modCopy[i] = mod
   

    }

    setgdpGrowthRage(modCopy);
  }

  const handleChange = (event, newValue) => {
    rangeCopy = [...newValue]
    console.log(year);
    // console.log(year.indexOf(newValue[0]));
    let modCopy = [...gdpGrowthRageCopy]
    for(let i = 0; i < gdpGrowthRageCopy.length; i++){
        let mod = [["Year", "GDP"]];
        mod = [
        ...mod,
        ...gdpGrowthRageCopy[i].slice(
        yearCopy.indexOf(newValue[0]),
        yearCopy.indexOf(newValue[1])
      ),
    ];
    console.log(mod)
    modCopy[i] = mod
   
    }

    setgdpGrowthRage(modCopy);

    
    
    setValue(newValue);
  };

  let clickAlert = (dataTitle, gdp) => {

    
    if(countClick >= LIMIT){
        gdpGrowthRageCopy.shift();
        optionsCopy.shift()
    }
    console.log(gdp);
    //console.log(gdp);
    //setArr([...arr, count])
    //count += 1
    setgdpGrowthRage(null);
    getYears(dataTitle).then((res) => {
      let data = [["Year", "GDP"]];
      setYear(res.data[0].Year);
      yearCopy = res.data[0].Year;
      for (let i = 0; i < res.data[0].Year.length; i++) {
        data.push([res.data[0].Year[i].toString(), res.data[0][country][i]]);
      }
      gdpGrowthRageCopy.push(data);
    //   console.log(...gdpGrowthRage, [data])

      console.log(data)
    
      //console.log(...gdpG)
      console.log(gdpGrowthRageCopy)
      
      setgdpGrowthRage(gdpGrowthRageCopy);
      if(rangeCopy.length !== 0)
        handleChangeUpdate(rangeCopy)
    
     
      
      countClick += 1
      optionsCopy.push({
        title: dataTitle + " - " + country,
        curveType: "function",
        legend: { position: "bottom" },
      })
      console.log(optionsCopy)
      setOptions(optionsCopy)
      forceUpdate();
      //console.log(gdpGrowthRage)
    })
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addAnnotation = () => {
    let ann = "";
    if (localStorage.getItem("Annotation") === null) {
      ann = "";
    } else {
      ann = localStorage.getItem("Annotation");
    }
    console.log(ann);
    ann = ann.concat(',', annotation);
    console.log(ann);
    localStorage.setItem("Annotation", ann);
    getAnnotationList();
    handleClose();
  }

  const getAnnotationList = () => {
    let storageAnnotation = "";
    if (localStorage.getItem("Annotation") === null) {
      storageAnnotation = "";
    } else {
      storageAnnotation = localStorage.getItem("Annotation");
    }
    const splitAnnotations = storageAnnotation.split(",");
    setAnnotationList(splitAnnotations);
  }

  useEffect(() => {

    let storageAnnotation = "";
    if (localStorage.getItem("Annotation") === null) {
      storageAnnotation = "";
    } else {
      storageAnnotation = localStorage.getItem("Annotation");
    }
    const splitAnnotations = storageAnnotation.split(",");
    setAnnotationList(splitAnnotations);
    
    
    
  },[]);

  return (
    <div>
      <Navigation />
      <div class="layout">
        <div>
        <div >
          <div className="display-drop">
                            <div></div>
                            <div className='display-grid'>
                            <div >
                                <Dropdown >
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {country}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
    
                                        <Dropdown.Item  value="India" onClick={(e)=> {setCountry("India")}} >India</Dropdown.Item>
                                        <Dropdown.Item  value="China" onClick={(e)=> {setCountry("China")}} >China</Dropdown.Item>
                                        <Dropdown.Item  value="USA" onClick={(e)=> {setCountry("USA")}} >USA</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                      </div>
          </div>
          <br></br>
          <SideNavigation onChildClick={(data) => clickAlert(data, gdpGrowthRage)} />
        </div>
        <div>
          <div class="slider-arrange">
            <div>
              <p>{min}</p>
            </div>
            <div>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={min}
                max={max}
              />
            </div>
            <div>
              <p>{max}</p>
            </div>
          
            <div> 
                <Button variant="secondary" onClick={handleShow} >
                    Annotation
                </Button></div>
            </div>
            

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Annotation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup>
                <FormControl placeholder="" onChange={(e) => setAnnonation(e.target.value)} />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="transparent" onClick={handleClose}>Cancel</Button>
              <Button variant="primary" onClick={addAnnotation}>Add</Button>
            </Modal.Footer>
          </Modal>
            
     
         
          {gdpGrowthRage && gdpGrowthRage.map((ele, i)=>(
            <>
            
              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={ele}
                options={options[i]}
              />
            </>
          ))}


         
        </div>
        <div className="anotations">
            <h5>Comments</h5>
            <ListGroup variant="flush">
              {annotationList.map((item) => (
                
                <ListGroup.Item class="list-items">{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>

      </div>
      
      
    </div>
  );
}

export default Home;
