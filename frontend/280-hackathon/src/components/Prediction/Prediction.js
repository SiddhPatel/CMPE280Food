import React from 'react';
import Navigation from '../Navigation/Navigation';
import SideNavigation from '../SideNavigation/SideNavigation';
import './Prediction.css'

class Prediction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projected: '24',
            FDIValue: '24',
            current: '24',
            agricultural: '24',
            Foreign: '24',
            manufacturing: '24',
            fertilizer: '24',
            agriculture: '24',
            revenue: '24',
            debt: '24'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log("handleChange activated", e.target);
        this.setState(Object.assign(
            {},
            this.state,
            { [e.target.id]: e.target.value }
        ));
    }

    handleSubmit(event) {
        alert('Projected GDP: ' + this.state.projected + '\nFDINetOutflows: ' + this.state.FDIValue + '\nCurrent Account Balance:' + this.state.current +
            '\nAgricultural Contribution: ' + this.state.agricultural + '\nForeign direct investment, net inflows: ' + this.state.Foreign + '\nManufacturing: ' + this.state.manufacturing +
            '\nFertilizer consumption: ' + this.state.fertilizer + '\nAgriculture, forestry,and fishing: ' + this.state.agriculture + '\nTotal reserves: ' + this.state.revenue
            + '\nTotal debt: ' + this.state.debt + '\n\n MODEL CREATED SUCCESSFULLY!');
        event.preventDefault();
    }

    render(props) {
        return (
            <div>
                <Navigation />
                <div class="layout">
                    <div>
                        
                    </div>
                    <div>
                        <br></br>
                        <h3 className="heading">Model Prediction</h3>
                        <hr></hr>
                        <br/>
                        {/* <input className="button" type="submit" value="Call Machine Learning Model" /> */}
                        <form className="formtab" onSubmit={this.handleSubmit}>
                            <table>
                                <tr>
                                    <td><label for="range_weight" >Projected GDP </label></td>
                                    <td><input type="range" name="weight" id="projected" class="slider" min="0" max="100" width="80px" value={this.state.projected} onChange={this.handleChange} /> {this.state.projected}</td>
                                    <td><label for="range_weight" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FDI-NetOutflows(%ofGDP)</label></td>
                                    <td><input type="range" name="weight" id="FDIValue" class="slider" min="0" max="100" value={this.state.FDIValue} onChange={this.handleChange} /> {this.state.FDIValue}</td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><label for="range_weight" >Current Account Balance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>(% of GDP) </label></td>
                                    <td><input type="range" name="height" id="current" class="slider" min="0" max="100"  value={this.state.current} onChange={this.handleChange} />{this.state.current}</td>
                                    <td><label for="range_weight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agricultural Contribution<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(%GDP) </label></td>
                                    <td><input type="range" name="height" id="agricultural" class="slider" min="0" max="100"  value={this.state.agricultural} onChange={this.handleChange} />{this.state.agricultural}</td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><label for="range_weight">Foreign direct investment, net &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>inflows(% of GDP) </label></td>
                                    <td><input type="range" name="height" id="Foreign" class="slider" min="0" max="100"  value={this.state.Foreign} onChange={this.handleChange} />{this.state.Foreign}</td>
                                    <td><label for="range_weight" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacturing(%GDP) </label></td>
                                    <td><input type="range" name="height" id="manufacturing" class="slider" min="0" max="100" value={this.state.manufacturing} onChange={this.handleChange} />{this.state.manufacturing}</td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><label for="range_weight" >Fertilizer consumption(% of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>fertilizer production) </label></td>
                                    <td><input type="range" name="height" id="fertilizer" class="slider" min="0" max="100" value={this.state.fertilizer} onChange={this.handleChange} />{this.state.fertilizer}</td>
                                    <td><label for="range_weight" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agriculture, forestry,and fishing,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value added (annual % growth)</label></td>
                                    <td><input type="range" name="height" id="Agriculture" class="slider" min="0" max="100"  value={this.state.agriculture} onChange={this.handleChange} />{this.state.agriculture}</td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><label for="range_weight">Total reserves (% of total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>external debt) </label></td>
                                    <td><input type="range" name="height" id="revenue" class="slider" min="0" max="100"  value={this.state.revenue} onChange={this.handleChange} />{this.state.revenue}</td>
                                    <td><label for="range_weight" id="Total debt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total debt service (% of GNI) </label></td>
                                    <td><input type="range" name="height" id="debt" class="slider" min="0" max="100"  value={this.state.debt} onChange={this.handleChange} />{this.state.debt}</td>
                                </tr>

                            </table>
                            <br />
                            <input className="button" type="submit" value="Call Machine Learning Model" />
                            {/* <button type="submit" id="submitBtn" className="button"> <span>Call Machine Learning Model</span></button> */}
                        </form>
                    </div>
                </div>

            </div >
        );
    }
}

export default Prediction;