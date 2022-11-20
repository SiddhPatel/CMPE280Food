import React, { useEffect, useState, useReducer } from 'react';
import Navigation from "../Navigation/Navigation"
import SideNavigation from '../SideNavigation/SideNavigation';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from 'react-google-charts';
import Axios from "axios";
import "./Import.css";

const sankeyData1 = [
    ['From', 'To', 'Weight'],
    ['A', 'X', 5],
    ['A', 'Y', 7],
    ['A', 'Z', 6],
    ['B', 'X', 2],
    ['B', 'Y', 9],
    ['B', 'Z', 4],
  ]

function Import(props) {

    const [country,setCountry] = useState("Select Country");
    const [year,setYear] = useState("Select Year");
    const [crop,setCrop] = useState("Select Crop");
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [sankeyData,setData] = useState([]);
    const [pieData,setPiedData] = useState([]);

    useEffect(()=>{
        // getDataFunction().then((data)=>{
        //     console.log(data);
        //     const yearData = data[0].year1;
        //     //console.log(country)
        // })
    })

    const getDataFunction = () => {
        return new Promise((resolve,reject)=>{
            Axios.get("http://localhost:8000/"+country).then((response)=>{
                resolve(response.data);
            }).catch((e)=>{});
        });
    }

    const setDataFunc = () => {
            console.log(country);
            console.log(year);
            console.log(crop);
            getDataFunction(country).then((data)=>{
                //console.log(data);
                let yearData = [];
                if(year=="2019"){
                    yearData = data[0].year1;
                }else{
                    yearData = data[0].year2;
                }
                let filteredData = [];
                let filteredData2 = [];
                filteredData.push(["Country","ImportCountry","Quantity"])
                filteredData2.push(["Country","Quantity"]);
                for(let i=0;i<yearData.length;i++){
                    //console.log(yearData[i]);
                    let arr = [];
                    let arr2 = [];
                    if(yearData[i].Item+""===crop && parseInt(yearData[i].Quantity)!=0){
                        arr.push(country);
                        arr.push(yearData[i].Country);
                        arr.push(parseInt(yearData[i].Quantity))
                        console.log(arr);

                        arr2.push(yearData[i].Country);
                        arr2.push(parseInt(yearData[i].Quantity))

                    filteredData.push(arr);
                    filteredData2.push(arr2);
                    }

                    //console.log(filteredData);
                    
                }
                console.log(filteredData);
                setData(filteredData)
                setPiedData(filteredData2);
            })

           
    }

    const setCountryFunc = (country1) => {
        console.log(country1);
        setCountry(country1);
        setDataFunc();
    }

    const setYearFunc = (year1) => {
        setYear(year1);
        setDataFunc();
    }

    const setCropFunc = (crop1) => {
        setCrop(crop1);
        setDataFunc();
    }


    return (
        <div>
            <Navigation />
            <div className="layout-imp">
               
                <SideNavigation />
                
                <div >
                
               
                   
                        <div className="display-drop">
                            <div></div>
                            <div className='display-grid'>
                            <div >


                                <Dropdown >
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {country}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item  value="Egypt" onClick={(e)=> {setCountryFunc("Egypt")}} >Egypt</Dropdown.Item>
                                        <Dropdown.Item  value="Saudi" onClick={(e)=> {setCountryFunc("SaudiArabia")}}>Saudi Arabia</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        
                       
                            <div>

                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {year}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={(e)=> setYearFunc("2019")} value="2019">2019</Dropdown.Item>
                                        <Dropdown.Item onClick={(e)=> setYearFunc("2020")} value="2020">2020</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                       
                        
                            <div>

                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {crop}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={(e)=> setCropFunc("Wheat")} value="Wheat">Wheat</Dropdown.Item>
                                        <Dropdown.Item onClick={(e)=> setCropFunc("Rice")} value="Rice">Rice</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            </div>                        

                    </div>

                    

                    <div className='grid-charts'>
                        <div className='chart1'>
                        {sankeyData.length !== 0 && <Chart
                            width={400}
                            height={'350px'}
                            chartType="Sankey"
                            loader={<div>Loading Chart</div>}
                            data={sankeyData}
                            rootProps={{ 'data-testid': '1' }}
                        />}
                        </div>
                   
                        <div className='chart2'>
                        {pieData.length !== 0 && <Chart
                            width={700}
                            height={'350px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={pieData}
                            rootProps={{ 'data-testid': '1' }}
                        />}
                        </div>
                    </div>
                    
                </div>
                   
            </div>
        </div>
    );
}

export default Import;