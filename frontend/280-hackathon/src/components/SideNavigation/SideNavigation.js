import React from "react";
import { Sidenav, Nav, Dropdown } from "rsuite";

function SideNavigation({onChildClick}) {
  return (
    <div>
      <div style={{ width: 240 }}>
        <Sidenav defaultOpenKeys={["1"]} >
          <Sidenav.Body>
            <Nav>
              <Dropdown eventKey="1" title="Macroeconomic">
                <Dropdown eventKey="1-1" title="GDP(USD)">
                  <Dropdown.Item eventKey="1-1-1" onClick={()=>{onChildClick("GDPGrowthRage")}} >GDP Growth Rate</Dropdown.Item>
                  <Dropdown.Item eventKey="1-1-2" onClick={()=>{onChildClick("GDPCurrentUSD")}} >GDP Current USD</Dropdown.Item>
                  <Dropdown.Item eventKey="1-1-3" onClick={()=>{onChildClick("CurrentAccountBalance")}}>
                    Current Account Balance(% of GDP)
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="1-2" title="FDI Inflows (USD)">
                  <Dropdown.Item eventKey="1-2-1"  onClick={()=>{onChildClick("FDINetIn")}} >Foreign direct investment, net inflows (% of GDP)</Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="1-3" title="FDI Outflows (USD)">
                  <Dropdown.Item eventKey="1-3-1"  onClick={()=>{onChildClick("FDINetOut")}} >Foreign direct investment, net outflows (BoP, current US$) </Dropdown.Item>
                  <Dropdown.Item eventKey="1-3-2"  onClick={()=>{onChildClick("FDINetOutflows")}} >FDI-NetOutflows(%ofGDP)</Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="1-4" title="FDI Net (USD)">
                  <Dropdown.Item eventKey="1-4-1"  onClick={()=>{onChildClick("FDINetCurrent")}} >Foreign direct investment, net (BoP, current US$)</Dropdown.Item>
                  
                </Dropdown>
              </Dropdown>

              <Dropdown eventKey="2" title="Agriculture">
                <Dropdown eventKey="2-1" title="Contribution of Agri (% GDP)">
                  <Dropdown.Item eventKey="2-1-1"  onClick={()=>{onChildClick("AgrCont")}} >Agricultural Contribution (% GDP)</Dropdown.Item>
                  <Dropdown.Item eventKey="2-1-2"  onClick={()=>{onChildClick("AgriForFis")}} >Agriculture, forestry, and fishing, value added (annual % growth)</Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="2-2" title="Manufacturing">
                  <Dropdown.Item eventKey="2-2-1"  onClick={()=>{onChildClick("Manufacturing")}} >Manufacturing(%GDP)</Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="2-3" title="Fertilizer">
                  <Dropdown.Item eventKey="2-3-1"  onClick={()=>{onChildClick("FertilizerKGPH")}} >Fertilizer consumption (kilograms per hectare of arable land)</Dropdown.Item>
                  <Dropdown.Item eventKey="2-3-2"  onClick={()=>{onChildClick("FertilizerPercent")}} >Fertilizer consumption (% of fertilizer production</Dropdown.Item>
                </Dropdown>
              </Dropdown>


              <Dropdown eventKey="3" title="Debt Service">
                <Dropdown eventKey="3-1" title="Reserves">
                  <Dropdown.Item eventKey="3-1-1"  onClick={()=>{onChildClick("TotalReservesMonthImport")}} >Total reserves in months of imports</Dropdown.Item>
                  <Dropdown.Item eventKey="3-1-2"  onClick={()=>{onChildClick("TotalReservesGoldUSD")}} >Total reserves (includes gold, current US$)</Dropdown.Item>
                  <Dropdown.Item eventKey="3-1-3"  onClick={()=>{onChildClick("TotalReservesPercent")}} >Total reserves (% of total external debt)</Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="3-2" title="Debt Service">
                  <Dropdown.Item eventKey="3-2-1"  onClick={()=>{onChildClick("DebtService")}} >Debt service (PPG and IMF only, % of exports of goods, services and primary income)</Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="3-3" title="Total debt">
                  <Dropdown.Item eventKey="3-3-1"  onClick={()=>{onChildClick("TotalDebtService")}} >Total debt service (% of GNI)</Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="3-4" title="GNI">
                  <Dropdown.Item eventKey="3-4-1"  onClick={()=>{onChildClick("GNICurrent")}} >GNI (current US$)</Dropdown.Item>
                </Dropdown>
              </Dropdown>



              <Dropdown eventKey="4" title="Speciality Crops">
                <Dropdown.Item eventKey="4-1" onClick={()=>{onChildClick("Bananas")}} > Bananas</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2" onClick={()=>{onChildClick("Mangoes")}} > Mangoes</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3" onClick={()=>{onChildClick("Walnuts")}}>Walnuts</Dropdown.Item>
                </Dropdown>
              
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
}

export default SideNavigation;
