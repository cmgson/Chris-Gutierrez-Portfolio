import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Front End",
        tab2 = "Back End",
        tab3 = "Everything in Between";
        // tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        {/* <Tab>{tab4}</Tab> */}
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Javascript<span> - Proficient in Javascript and many of its libraries</span></a>
                                                    
                                                </li>
                                                <li>
                                                    <a href="/service">HTML5 & CSS3<span> - </span></a>
                                                   Up to date with latest itteration of HTML & CSS
                                                </li>
                                                <li>
                                                    <a href="/service">React <span> - Experienced in the React library</span></a>
                                                    
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">MongoDb & MySql<span>- Database and Data-mobility</span></a>
                                               </li>
                                               <li>
                                                   <a href="/service">Git<span>- Primary version control experience with Github</span></a>
                                               </li>
                                               <li>
                                                   <a href="/service">Node.js<span>-Adept in utilizing node for server-side API services</span></a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Full Stack languages<span><br/> -JQuery<br/>
                                                   -AJAX<br/>
                                                   -Bootstrap<br/>
                                                   -RESTful API<br/>
                                                   -CLI<br/>
                                                    </span></a>
                                               </li>
                                               {/* <li>
                                                   <a href="/service">Front-end Engineer<span> - Microsoft</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li> */}
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">BSc In CSE<span> - ABC University, Los Angeles, CA</span></a> 2010
                                               </li>
                                               <li>
                                                   <a href="/service">Diploma in Computer Science<span> - Gamma Technical Institute</span></a> 2009
                                               </li>
                                               <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;