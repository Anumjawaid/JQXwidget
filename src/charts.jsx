import React, {useState ,Component } from 'react';

import LandProviders from './landproviders';
import Phase from './phase'
import chart from './UI/chart.png'
import Muaza from './muaza'

import LineChart3 from './chartphase'
import LineChart2 from './chartmuaza'
import LineChart1 from './chartland'


class Charts extends Component {
    constructor() {
        super();
        this.state = {tableval: "Land Providers"};
      }
    render() {
       


      console.log(this.state.tableval)
        return (
            <div className="landpurchased panel panel-default">
               <div className="headingborder">
                    <div className="iconhead">
                         <div className="icon"><img width='20px' height='20px' src={chart} /></div>
                         <div className="title"><p>Land Provider Details</p></div>
                     </div>
                     <div className="dropdownhead">
                         <div className="dropdown">
                             <select onChange={(e)=>{this.setState({tableval:e.target.value})}}>
                                 <option value="Land Providers">Land Providers</option>
                                 <option value="Phase">Phase</option>
                                 <option value="Muaza">Muaza</option>
                             </select>

                         </div>
                     </div>


                 </div>

                 <div className="jqxtable">
                     {this.state.tableval=="Muaza" ? <LineChart2/>:this.state.tableval=="Phase" ?<LineChart3/>:<LineChart1/>}
                     
                
                 </div>
             </div>
           
        );
    }
}

export default Charts;