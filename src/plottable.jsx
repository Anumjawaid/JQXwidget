import React,{useState} from 'react/cjs/react.development';
import LandProviders from './landproviders';
import chart from './UI/chart.png'


export default function PlotTable(){
    let tabstate="Land Providers"
    return(
        <div>
        <div className="landpurchased panel panel-default">
               <div className="headingborder">
                    <div className="iconhead">
                         <div className="icon"><img width='20px' height='20px' src={chart} /></div>
                         <div className="title"><p>Land Provider Details</p></div>
                     </div>
                     <div className="dropdownhead">
                         <div className="greyhead"><p className='title'>Khasra Detail</p></div>
                         <div className="dropdown">
                             <select onChange={(e)=>{tabstate=e.target.value}}>
                                 <option value="Land Providers">Land Providers</option>
                                 <option value="Phase">Phase</option>
                                 <option value="Muaza">Muaza</option>
                             </select>

                         </div>
                     </div>


                 </div>

                 <div className="jqxtable">
                     {tabstate=="Land Providers" ? <LandProviders />:<p>no land</p>}
                
                 </div>
             </div>
        </div>
    )
}