import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect
} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import MyWork from './pages/MyWork'
import Recommendations from './pages/Recommendations'
import SmartLobby from './pages/SmartLobby'
import LetsFindSpace from './pages/LetsFindSpace';
import UtscRep from './pages/UtscRep';
import P404 from './pages/P404';
import Vgras from './pages/Vgras';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TyperSetup } from './libraries/typer'
import { faBriefcase, faEnvelope, faFileAlt, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
	componentDidMount() {
		TyperSetup();
	}

	render() {
		return (
			<Router>
				<Route render={({ location }) => (
					<div>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
							<div className="navbar-bassel">
								<a className="typer navbar-brand mr-0" data-colors="#fff" id="main" data-words="Bassel Ashi" data-delay="150"
									data-loop="1"></a>
								<a className="cursor navbar-brand" data-owner="main"></a>
							</div>
							<span className="mr-3 d-lg-block d-none">--&gt;</span>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
								aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

							<div className="collapse navbar-collapse pt-1" id="navbarColor02">
								<ul className="navbar-nav mr-auto">
									<li className="nav-item mr-3">
										<NavLink className="nav-link" exact to="/" activeClassName="active">
											<FontAwesomeIcon className="mr-1" icon={faHome} />Home
										</NavLink>
									</li>
									<li className="nav-item mr-3">
										<NavLink className="nav-link" to="/mywork" activeClassName="active">
											<FontAwesomeIcon className="mr-1" icon={faBriefcase} />My Work
										</NavLink>
									</li>
									<li className="nav-item mr-3">
										<NavLink className="nav-link" to="/recommendations" activeClassName="active">
											<FontAwesomeIcon className="mr-1" icon={faUser} />Recommendations
										</NavLink>
									</li>
									<li className="nav-item mr-3">
										<a className="nav-link" href="mailto:p.ashi@mail.utoronto.ca">
											<FontAwesomeIcon className="mr-1" icon={faEnvelope} />Contact
										</a>
									</li>
									<li className="nav-item mr-3">
										<a className="nav-link" href="resume.pdf">
											<FontAwesomeIcon className="mr-2" icon={faFileAlt} />Résumé
										</a>
									</li>
								</ul>

								<ul className="navbar-nav float-lg-right">
									<li className="nav-item mr-3">
										<a target="_blank" className="nav-link" href="https://github.com/BasselAshi/">
											<FontAwesomeIcon className="social-media" icon={faGithub} />
										</a>
									</li>
									<li className="nav-item mr-3">
										<a target="_blank" className="nav-link" href="https://www.linkedin.com/in/basselashi/">
											<FontAwesomeIcon className="social-media" icon={faLinkedinIn} />
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<TransitionGroup>
							<CSSTransition key={location.key} classNames="fade" timeout={750}>
								<Switch location={location}>
									<Route path="/" exact component={Home} />
									<Route path="/recommendations" exact component={Recommendations} />
								</Switch>
							</CSSTransition>
							<CSSTransition key={location.key + '2'} classNames="slide" timeout={600}>
								<Switch location={location}>
									<Route path="/mywork/smartlobby" exact component={SmartLobby} />
									<Route path="/mywork/letsfindspace" exact component={LetsFindSpace} />
									<Route path="/mywork/utscrep" exact component={UtscRep} />
									<Route path="/mywork/vgras" exact component={Vgras} />
								</Switch>
							</CSSTransition>
							<CSSTransition key={location.key + '3'} classNames="slide-up" timeout={600}>
								<Switch location={location}>
									<Route path="/mywork" exact component={MyWork} />

									<Route path="/" exact />
									<Route path="/recommendations" exact />
									<Route path="/mywork/smartlobby" exact />
									<Route path="/mywork/letsfindspace" exact />
									<Route path="/mywork/utscrep" exact />
									<Route path="/mywork/vgras" exact />

									<Route path="/404" exact component={P404} />
									<Redirect to="/404" />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					</div>
				)} />
			</Router>
		)
	}
}

export default App