

import React, { Component } from 'react'
import SimpleModal from '../../component/Modal'
import {SelectTag} from '../../component/SelectTag'
// import PropTypes from 'prop-types'



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
			closeModal: true,
			isMobileView: false,
			showOptions:false
		}

		this.handleItemClick = this.handleItemClick.bind(this)
		this.setModelClose = this.setModelClose.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSelectClick = this.handleSelectClick.bind(this)
	}

	componentDidMount() {
		const isMobile = window.innerWidth < 500
		this.setState({
			isMobileView: isMobile
		})
	}

	handleSelectClick() {
		const { isMobileView } = { ...this.state }
		const optionContainer = document.getElementById('optionsContainer')

		console.log("optionContainer",optionContainer)
		this.setState({
			closeModal: !isMobileView
		})
		if(!isMobileView){
			this.setState({
				showOptions:true
			})
		}else{
			this.setState({
				showOptions:false
			})
		}
	}

	handleChange(e) {
		this.setState({
			visibleData: e.target.value,
			closeModal: true
		})
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

	setModelClose(status) {
		this.setState({
			closeModal: status
		})
	}

	render() {
		const { data } = { ...this.props }
		const { closeModal, visibleData, isMobile,showOptions } = { ...this.state }

		if (closeModal) {
			return <SelectTag
				showOptions={showOptions}
				visibleData={visibleData}
				handleChange={this.handleChange}
				handleSelectClick={this.handleSelectClick}
				data={data}
			/>
		}

		return <SimpleModal
			visibleData={visibleData}
			handleItemClick={this.handleItemClick}
			setModelClose={this.setModelClose}
			data={data}
		/>

	}
}
