import React from 'react'
import {Row, Col} from 'react-bootstrap'
import BeamProfile from './BeamProfile'
import Dimensions from './Dimensions'
import Conditions from './Conditions'
import Results from './Results'
import LoadProfile from './LoadProfile'
import {calcBeam} from '../services/beam'
import Profiles from '../types/profiles'

class NavBar extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			selectedProfile: Profiles[0],
			selectedLoadProfile: 1,
			selectedDimension: Profiles[0].dimensions[0],
			selectedModulus: 24000,
			dimensions: {
				H: 80,
				B: 100,
				s: 8,
				D: 0,

				h: 0,
				b: 0,
				t: 4,
				d: 0
			},
			conditions: {
				density: 1.8,
				length: 1000,
				precision: 3,

				load: 1000,
				modulus: 24000
			},
			results: {
				deflection: 0,
				flexMoment: 0,
				tension: 0,
				elongation: 0,
				w: 0,
				i: 0,
				mass: 0,
				area: 0
			}
		}
	}

	componentDidMount() {
		this.calculate()
	}

	setValue(category, key, value) {
		this.setState(
			(prevState) => ({
				[category]: {
					...prevState[category],
					[key]: value
				}
			}),
			() => this.calculate()
		)
	}

	setDimension(value) {
		this.setState(
			{
				selectedDimension: value
			},
			() => this.calculate()
		)
	}

	setModulus(value) {
		this.setState(
			{
				selectedModulus: value
			},
			() => this.calculate()
		)
	}

	setLoadProfile(value) {
		this.setState(
			{
				selectedLoadProfile: value
			},
			() => this.calculate()
		)
	}

	calculate() {
		const {conditions, selectedDimension, selectedModulus, selectedLoadProfile, selectedProfile} = this.state


		const stressResult = calcBeam({
			concentratedLoad: conditions.load,
			lengthInMM: conditions.length,
			EModulus: selectedModulus,
			density: conditions.density,
			dimension: selectedDimension,
			loadingCase: selectedLoadProfile, 
			id: selectedProfile.id
		})

		this.setState((prevState) => ({
			results: {
				...prevState.results,
				deflection: stressResult.deflection,
				flexMoment: stressResult.flexMoment,
				tension: stressResult.tension,
				elongation: stressResult.elongation,
				w: stressResult.w,
				i: stressResult.i,
				mass: stressResult.mass,
				area: stressResult.area,
			}
		}))
	}

	renderProfiles() {
		return Profiles.map((item) => {
			const isActive = item.name === this.state.selectedProfile.name
			return (
				<div key={item.name} style={{paddingBottom: '10px'}}>
					<BeamProfile
						profile={item}
						isActive={isActive}
						onClick={() =>
							this.setState({
									selectedProfile: item,
									selectedDimension: item.dimensions[0]
								},
								() => this.calculate()
							)
						}
					/>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="Calculator">
				<Row>
					<Col lg={2}>{this.renderProfiles()}</Col>
					<Col lg={10}>
						<Row>
							<Col sm={12} lg={8}>
								<Dimensions
									dimensions={this.state.dimensions}
									profile={this.state.selectedProfile}
									conditions={this.state.conditions}
									onDimensionsChange={(value) =>
										this.setDimension(value)
									}
									onModulusChange={(value) => this.setModulus(value)}
									selectedDimension={this.state.selectedDimension}
								/>
							</Col>
							<Col sm={12} lg={3}>
								<LoadProfile load={this.state.selectedLoadProfile} onLoadProfileChange={value => this.setLoadProfile(value)} />
							</Col>
						</Row>
						<Row>
							<Col sm={12} lg={12}>
								<Conditions
									conditions={this.state.conditions}
									onChange={(key, value) =>
										this.setValue('conditions', key, value)
									}
								/>
							</Col>
						</Row>
						<Row style={{paddingTop: '10px', paddingBottom: '10px'}}>
							<Col sm={12}>
								<Results
									results={this.state.results}
									dimension={this.state.selectedDimension}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		)
	}
}

export default NavBar
