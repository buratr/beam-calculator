import React from 'react'
import DropDown from './DropDown'

class Template extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			image: null
		}
	}

	render() {
		const {load, onLoadProfileChange} = this.props
		const img = require(`../images/stress_${load}.png`)
		const profiles = [
			{label: 'Loading Case 1', value: 1},
			{label: 'Loading Case 2', value: 2},
			{label: 'Loading Case 3', value: 3},
			{label: 'Loading Case 4', value: 4}
		]
		return (
			<div>
				<DropDown
					label="Load Profile"
					values={[profiles[0]]}
					options={profiles}
					onChange={(item) => onLoadProfileChange(item)}
				/>
				<img alt=" " src={img} style={{maxWidth: '250px'}} />
			</div>
		)
	}
}

export default Template
