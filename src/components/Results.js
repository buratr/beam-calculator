import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import InputField from './InputField'

class Results extends React.PureComponent {
	render() {
		const {results} = this.props
		return (
			<Form
				style={{
					padding: '16px',
					borderRadius: '10px',
					backgroundColor: '#b3e5fc',
					marginBottom: '64px'
				}}
			>
				<h5>Results</h5>
				<Row>
					<Col sm={12} lg={3}>
						<InputField readOnly value={results.deflection} label="Max. Deflection (mm)" />
						<InputField readOnly value={results.w} label="W (mm3)" />
					</Col>
					<Col sm={12} lg={3}>
						<InputField readOnly value={results.flexMoment} label="Max. Bending moment (Nm)" />
						<InputField readOnly value={results.i} label="I (mm^4)" />
					</Col>
					<Col sm={12} lg={3}>
						<InputField readOnly value={results.tension} label="Max. Bending stress (MPa)" />
						<InputField readOnly value={results.mass} label="Mass (kg)" />
					</Col>
					<Col sm={12} lg={3}>
						<InputField readOnly value={results.elongation} label="Elongation (%)" />
						<InputField readOnly value={results.area} label="Area (mm2)" />
					</Col>
				</Row>
			</Form>
		)
	}
}

export default Results
