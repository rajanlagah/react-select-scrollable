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
			scrollTolrence:0,
			totalData:[1,2,3,4,5,6],
			centerElementPossition:0,
			visibleData:1
		}

		this.handleScroll = this.handleScroll.bind(this)
	}
componentDidMount(){
	const {scrollTolrence} = {...this.props}
	const el = document.getElementById("center_element")
	if(el){
		var rect = el.getBoundingClientRect();
		var elemTop = rect.top;
		console.log("setting state",elemTop)
		this.setState({
			scrollPos:elemTop,
			scrollTolrence:scrollTolrence
		})
	}
}

handleScroll(event) {
	const { scrollPos, scrollTolrence,visibleData } = {...this.state}
		const {onSelectedDataChange} = {...this.props }
    	// let  = event.currentTarget.scrollTop ;
		const el = document.getElementById("center_element")
		var rect = el.getBoundingClientRect();
		var scrollTopNew = rect.top;
		var elemBottom = rect.bottom;
		console.log(scrollTopNew - scrollPos)
		console.log(scrollTopNew)
		console.log(scrollPos)
		if(scrollTopNew>0 && scrollPos<0 && (scrollPos - scrollTopNew) > scrollTolrence){
			console.log("over tolrence")
		}
		else if( Math.abs(scrollTopNew - scrollPos) < scrollTolrence){
			console.log("under tolrence")
			console.log(scrollTopNew - scrollPos)
			this.setState({
				isMoving:false
			})
			return
		}else{
			console.log("over tolrence")

		}
		
		// if(centerElementPossition){
		// 	this.setState({
		// 		centerElementPossition:centerElement
		// 	})
		// }

		if ( scrollTopNew < scrollPos){
				onSelectedDataChange(visibleData + 1)
				this.setState({visibleData:visibleData + 1})
				this.setState({isMovingUp:true})
		}else{
				onSelectedDataChange(visibleData - 1)
				this.setState({visibleData:visibleData-1})
				this.setState({isMovingUp:false})
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
		const { data } = {...this.props}

		return (
			<div className={styles.outterContiner}>
				<div className={styles.optionsContiner} id='modal' onScroll={this.handleScroll}>
					<li className={styles.listOfOptions}>
							{data && data.map((item,index)=><ul><a id={index == 1?"center_element":""} href='#'>{item}</a></ul>)}

					</li>
				</div>
				<div>
					<span className={styles.selectedElement}> {visibleData}</span>
				</div>
			</div>
		)
	}
}
