import React from 'react'

class BeamProfile extends React.PureComponent {
	getProfileImage(isFullScreen, profileName) {
		const img = isFullScreen
			? require(`../images/${profileName}.jpeg`)
			: require(`../images/${profileName}_thumb.png`)
		return img
	}

	render() {
		const {profile, isFullScreen, isActive, onClick} = this.props
		const size = isFullScreen ? 200 : 40
		return (
			<div
				className="InLine"
				onClick={onClick}
				tabIndex={0}
				role="button"
				onKeyPress={() => null}
				style={{
					padding: '5px',
					textAlign: isFullScreen ? 'center' : '',
					paddingBottom: isFullScreen ? '20px' : '5px',
					backgroundColor: isActive ? '#F7B334' : null,
					borderRadius: '4px',
					outline: 'none'
				}}
			>
				<img
					src={this.getProfileImage(isFullScreen, profile.name)}
					alt="Rod"
					style={{width: size, marginRight: '10px'}}
				/>
				{!isFullScreen && profile.displayName}
			</div>
		)
	}
}

export default BeamProfile
