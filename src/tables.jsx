import React, {useState ,Component } from 'react';

import LandProviders from './landproviders';
import Phase from './phase'
import chart from './UI/chart.png'
import Muaza from './muaza'


class Sample extends Component {
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
                         <div className="greyhead"><p className='title'>Khasra Detail</p></div>
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
                     {this.state.tableval=="Muaza" ? <Muaza/>:this.state.tableval=="Phase" ?<Phase/>:<LandProviders/>}
                     
                
                 </div>
             </div>
           
        );
    }
}

export default Sample;