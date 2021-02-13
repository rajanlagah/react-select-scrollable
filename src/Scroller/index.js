

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

		this.handleScroll = this.handleScroll.bind(this)
		this.handleItemClick = this.handleItemClick.bind(this)
		this.toggleModal = this.toggleModal.bind(this)
	}
	componentDidMount() {
		const { scrollTolrence } = { ...this.props }
		const el = document.getElementById("center_element")
		if (el) {
			var rect = el.getBoundingClientRect();
			var elemTop = rect.top;
			this.setState({
				scrollPos: elemTop,
				scrollTolrence: scrollTolrence
			})
		}
	}

	// getClosestElementToCenter = (centerData) => {
	// 	let closestDiff = Math.pow(2, 10)
	// 	let closestNode = null

	// 	const elements = document.querySelectorAll('.elemets')
	// 	const centerElement = document.getElementById('center-element-display')

	// 	// console.log(elements[0].getBoundingClientRect())

	// 	elements.forEach(element => {
	// 		const diff = Math.abs(element.getBoundingClientRect().y - centerData)
	// 		if (diff < closestDiff) {
	// 			closestNode = element
	// 		}
	// 	});

	// 	return closestNode
	// }

	handleScroll() {
		return

		// const { visibleData, centerData } = { ...this.state }
		// const { onSelectedDataChange } = this.props

		// const nodeAtCenter = this.getClosestElementToCenter(centerData)
		// const intersectValue = nodeAtCenter.getAttribute("value")
		// if (visibleData != intersectValue) {
		// 	onSelectedDataChange(intersectValue)
		// }
		// this.setState({
		// 	visibleData: intersectValue
		// })
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
