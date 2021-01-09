import React from 'react'
import Recommendation from '../components/Recommendation'

class Recommendations extends React.Component {
    componentDidMount() {
        document.title = 'Bassel Ashi: Recommendations';
    }

    render() {
        return (
            <div className="container-md my-3">
                <div className="card">
                    <div className="card-header">
                        LinkedIn Recommendations
                    </div>
                    <div className="card-body pt-0">
                        <div className="row">
                            <Recommendation colour="danger" name="Ruchita Satani" position="MVC/.Net Developer at FGF Brands" image="https://media-exp1.licdn.com/dms/image/C4D03AQFkmggkdZeLCg/profile-displayphoto-shrink_100_100/0/1603579183425?e=1614211200&amp;v=beta&amp;t=D9pNDFsqtDvqQx_s6mH-FnMQPiYn2hU44TTj0DAiMqk">
                                ‘Ridiculously efficient’ is the phrase that comes to mind when I think about Bassel.<br /><br />
                                I had the pleasure of working with Bassel for eight months at the FGF Brands.<br /><br />
                                I was particularly impressed by his ability to take on any challenges in project development and come up with the solution for any kind of problem.<br /><br />
                                Bassel would be an asset to any team
                            </Recommendation>
                            <Recommendation colour="info" name="Gurpreet Chhabra" position="Software Development Manager at FGF Brands" image="https://media-exp1.licdn.com/dms/image/C5603AQFBosW6aXwZug/profile-displayphoto-shrink_100_100/0/1593823900313?e=1615420800&v=beta&t=rx0IUOtoysbneJYLlngQIZ8NOK-DfF7mHG0n6VgPDE4">
                                Bassel is, without doubt, one of the best developers that I have worked with. He is very detail-oriented &amp; a quick learner. He was a mentor to other Co-ops. I am consistently impressed with the speed with which he picks up and implements complex solutions. Our team is lucky to have him on-board
                            </Recommendation>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommendations