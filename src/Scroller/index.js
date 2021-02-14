

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Scroller extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isMovingUp: false,
			isMoving: false,
			scrollPos: 0,
			scrollTolrence: 0,
			totalData: [1, 2, 3, 4, 5, 6],
			centerElementPossition: 0,
			visibleData: 1,
			centerData: 20,
			closeModal: true
		}

		this.handleItemClick = this.handleItemClick.bind(this)
		this.toggleModal = this.toggleModal.bind(this)
	}
	
	
	handleItemClick(e) {
		const { onSelectedDataChange } = this.props

		const selectedValue = e.target.getAttribute('value')

		onSelectedDataChange(selectedValue)
		this.setState({
			visibleData: selectedValue,
			closeModal: true
		})
	}

	toggleModal(e) {
		const { closeModal } = { ...this.state }
		this.setState({
			closeModal: !closeModal
		})
	}

	render() {
		const { data } = { ...this.props }
		const { closeModal,visibleData } = { ...this.state }

		if (closeModal) {
			return (
				<div>
					<select value={visibleData} onChange={this.handleChange} onClick={() => this.setState({ closeModal: false })}>
						{data && data.map((item, index) => <option value={item.value}>{item.displayName}</option>)}
					</select>

				</div>

			)
		}

		return (
			<div>
				<select value={visibleData} disabled />
				<div>
					<div className={`${styles.inputModal}  ${styles.outterContiner}`}>
						<div className={styles.optionsContiner} id='modal' onScroll={this.handleScroll}>
							<span className={styles.listOfOptions}>
								{data && data.map((item, index) => <a className="elemets" href='#' value={item.value} onClick={this.handleItemClick}>{item.displayName}</a>)}
							</span>
						</div>
						<button onClick={this.toggleModal} className={`${styles.modalCloseButton}`}>cancel</button>
					</div>
				</div>
			</div>

		)

	}
}
