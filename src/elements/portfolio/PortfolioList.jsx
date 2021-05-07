import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Javascript/Jquery',
        title: 'Dynamic-Day-Planner',
        href: 'https://github.com/cmgson/Day-Planner'
    },
    {
        image: 'image-2',
        category: 'MySql/NodeJs',
        title: 'CLI for office Generator and Maintenance',
        href: 'https://github.com/cmgson/employee_tracker'
    },
    {
        image: 'image-3',
        category: 'Express and Storage',
        title: 'Note Taker utilizing full CRUD operators, NodeJs, and Express',
        href: 'https://github.com/cmgson/Note-Taker'
    },
    {
        image: 'image-4',
        category: 'NodeJs',
        title: 'CLI utilizing node and inquirer to build a team webpage',
        href: 'https://github.com/cmgson/Team-Generator'
    },
    {
        image: 'image-5',
        category: 'Cli Inquirer NodeJs',
        title: 'Readme Generator',
        href: 'https://github.com/cmgson/Readme_Generator'
    },
    {
        image: 'image-6',
        category: 'Html & CSS',
        title: 'Dynamically Created Password Generator',
        href: 'https://cmgson.github.io/password_generator/'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={value.href}>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.href}>View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;