/* eslint-disable */

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
			visibleData: 1
		}

		this.handleScroll = this.handleScroll.bind(this)
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

	getClosestElementToCenter = () => {
		let closestDiff = Math.pow(2,10)
		let closestNode = null
		
		const elements = document.querySelectorAll('.elemets')
		const centerElement = document.getElementById('center-element-display')
		
		console.log(elements[0].getBoundingClientRect())

		elements.forEach(element => {
			const diff = Math.abs(element.getBoundingClientRect().y - centerElement.getBoundingClientRect().y) 
			if(diff < closestDiff){
				console.log("setting up")
				closestDiff = diff 
				closestNode = element
			}
		});

		return closestNode
	}

	handleScroll() {
		const { visibleData } = { ...this.state }
		const { onSelectedDataChange } = this.props
		
		const nodeAtCenter = this.getClosestElementToCenter()
		const intersectValue = nodeAtCenter.getAttribute("value")
		if( visibleData != intersectValue){
			onSelectedDataChange(intersectValue)
		}
		this.setState({
			visibleData:intersectValue
		})
	}

	render() {
		let { scrollPos, isMovingUp, visibleData } = { ...this.state }
		const { data } = { ...this.props }

		return (
			<div className={styles.outterContiner}>
				<div className={styles.optionsContiner} id='modal' onScroll={this.handleScroll}>
					<li className={styles.listOfOptions}>
						{data && data.map((item, index) => <ul><a className="elemets" href='#' value={item} >{item}</a></ul>)}

					</li>
				</div>
				<div>
					<span className={styles.selectedElement} id="center-element-display"> {visibleData}</span>
				</div>
			</div>
		)
	}
}
