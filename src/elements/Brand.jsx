import React, { Component } from "react";

class Brand extends Component{
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                    <li>
                        <a href="https://cmgson.github.io/Weather-Api/">
                        <img src="/assets/images/brand/weathericon.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://cmgson.github.io/Travel-Pal/">
                        <img src="/assets/images/brand/travel-pal-icon.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://park-pack.herokuapp.com/">
                        <img src="/assets/images/brand/parkpack.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://pwa-budget-tracker21.herokuapp.com/">
                        <img src="/assets/images/brand/piggy.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://salty-forest-35089.herokuapp.com/exercise?id=6094529119bd24001582c3a6">
                        <img src="/assets/images/brand/workout.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://cmgson.github.io/Employee-Directory/">
                        <img src="/assets/images/brand/employee.png" alt="Logo Images"/></a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;