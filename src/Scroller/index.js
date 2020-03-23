/* eslint-disable */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Scroller extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isMovingUp:false,
			isMoving:false,
			scrollPos:0,
			scrollTolrence:10,
			totalData:[1,2,3,4,5,6],
			visibleData:2
		}

		this.handleScroll = this.handleScroll.bind(this)
	}

componentDidMount(){
	// this.setState({visibleData:[1,2,3]})
}

handleScroll(event) {
	const { isMovingUp, scrollTolrence,visibleData,isMoving } = {...this.state}

		const { scrollPos } = {...this.state}
    let scrollTopNew = event.currentTarget.scrollTop ;

		if( Math.abs(scrollTopNew - scrollPos) < scrollTolrence){
			this.setState({
				isMoving:false
			})
			return
		}
		
		

		if ( scrollTopNew > scrollPos){
			if(!isMovingUp){
				this.setState({visibleData:visibleData + 1})
				this.setState({isMovingUp:true})
			}
		}else{
			if(isMovingUp){
				this.setState({visibleData:visibleData-1})
				this.setState({isMovingUp:false})
			}
		}
		this.setState({
			scrollPos:scrollTopNew
		})
		
		this.setState({isMoving:true})
		
		// if(!isMoving && isMovingUp){
		// 	console.log("Updaating")
		// }else if(!isMoving && !isMovingUp){
		// 	console.log("Updaating")
		// }
	}

	render() {
		let { scrollPos,isMovingUp,visibleData } = {...this.state}

		console.log(this.state)
		return (
			<div className={styles.optionsContiner} id='modal' onScroll={this.handleScroll}>
				<li className={styles.listOfOptions}>
						<ul><a href='#'>{visibleData-1}</a></ul>
						<ul><a href='#'>{visibleData}</a></ul>
						<ul><a href='#'>{visibleData+1}</a></ul>
						<ul><a href='#'>-</a></ul>
						<ul><a href='#'>-</a></ul>

				</li>
			</div>
		)
	}
}
