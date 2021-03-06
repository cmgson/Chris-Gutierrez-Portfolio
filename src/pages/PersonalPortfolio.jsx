import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderTwo from "../component/header/HeaderTwo";
import FooterTwo from "../component/footer/FooterTwo"
import Brand from "../elements/Brand";
import PortfolioList from "../elements/portfolio/PortfolioList";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Web Developer',
        title: 'Hello, I’m <span>Christopher</span> Welcome to my World.',
        description: '',
        buttonText: 'Check out the Resume',
        buttonLink: 'https://docs.google.com/document/d/1eiuIhuoUqbPqIXTpeO6Y4wE4cO8qaeoFDIEsuE4Q0NU/edit?usp=sharing'
    }
]
class PersonalPortfolio extends Component{
    render(){
        let title = 'About Me',
        description = "Welcome!  A little about me, my name is Christopher Gutierrez.  I moved to Minnesota with my small family about eleven years ago.  I moved from Phoenix, Arizona where I was born and raised.  I have always had an interest in computers and look forward on putting together a nice portfolio with this very page!  I am a full MERN stack engineer proficient in the javascript language and many of its libraries.  Before my pursuit in computer programming, I was in the restaurant industry.  I have been bartending for roughly eighteen years.  I have worked every front of the house job that there is available in the industry until I found my home behind the bar."
        return(
            <Fragment> 
                <Helmet pageTitle="Personal Portfolio" />
                
                <HeaderTwo logo="symbol-dark" color="color-black"/>
                
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--16" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 style={{ color:`white` }} className="title" dangerouslySetInnerHTML={{__html: value.title}}></h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area about-position-top pb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-5.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner pt--100">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">My Portfolio</h2>
                                    <p>A few projects I have been working on</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40 mt_sm--5 mt_md--5">
                                <Brand branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pb--60 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55 mb_sm--0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">A few other projects on github</h2>
                                        <p>Here are some links to my repositories</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="https://github.com/cmgson"><span>View More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pb--120 bg_color--1">
                    <ContactOne />
                </div>
                {/* End Portfolio Area */}

                <FooterTwo />

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default PersonalPortfolio;