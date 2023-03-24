import React from "react";
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
             <h2 className="section__title">Qualification</h2>
             <span className="section__subtitle">My personal journey</span>

             <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap  qualification__icon"></i>
                         Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i> 
                        Experience
                    </div>
                </div>

             <div className="qualification__sections qualification__content-active">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Desing</h3>
                            <span className="qualification__subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">2021 - Present</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2021 - Present
                                </i>
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2021 - Present
                                </i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Expert</h3>
                            <span className="qualification__subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2021 - Present
                                </i>
                            </div>
                        </div>
                    </div>

                   <div className="qualification__content">
                     <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Product Desing</h3>
                            <span className="qualification__subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2021 - Present
                                </i>
                            </div>
                        </div>
                    </div>
                  
                    

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Desing</h3>
                            <span className="qualification__subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2021 - Present
                                </i>
                            </div>
                         </div>
                    </div>

                    <div className="qualification__data">
                      <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Desing</h3>
                            <span className="qualification__subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                    2021 - Present
                                </i>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
             </div>
          </div>
        </section>
    )
}

export default Qualification;