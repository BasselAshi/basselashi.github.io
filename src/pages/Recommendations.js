import React from 'react'

class Recommendations extends React.Component {
    componentDidMount() {
        document.title = 'Bassel Ashi: Recommendations';
    }

    render() {
        return (
            <div className="container-md my-3">
                <div className="card">
                    <div className="card-header">
                        A Glimpse of my Skills
                    </div>
                    <div className="card-body">
                        <p className="mb-0">To make this page more interesting, I am working on getting permissions from LinkedIn to integrate ASP.NET WebAPI with their OAuth API, to automatically display recommendations from LinkedIn. Unfortunately for now, my recommendations are hard-coded below.</p>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header">
                        Recommendations
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md col-12">
                                <div className="row">
                                    <div className="col">
                                        <hr className="bg-danger" />
                                    ‘Ridiculously efficient’ is the phrase that comes to mind when I think about Bassel.<br /><br />

                                    I had the pleasure of working with Bassel for eight months at the FGF Brands.<br /><br />

                                    I was particularly impressed by his ability to take on any challenges in project development and come up with the solution for any kind of problem.<br /><br />

                                    Bassel would be an asset to any team
                                    <hr className="bg-danger" />
                                    </div>
                                </div>
                                <div className="row mt-3 text-danger">
                                    <div className="col text-right">
                                        <p className="mb-0">Ruchita Satani</p>
                                        <i>MVC/.Net Developer at FGF Brands</i>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <img className="rec-profile border border-danger float-right" src="https://media-exp1.licdn.com/dms/image/C4D03AQFkmggkdZeLCg/profile-displayphoto-shrink_100_100/0/1603579183425?e=1614211200&amp;v=beta&amp;t=D9pNDFsqtDvqQx_s6mH-FnMQPiYn2hU44TTj0DAiMqk" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommendations