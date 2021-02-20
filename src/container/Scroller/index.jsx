import React, { Component } from "react";
import SimpleModal from "../../component/Modal/index.jsx";
import { SelectTag } from "../../component/SelectTag/index.jsx";
// import PropTypes from 'prop-types'

export default class Scroller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMovingUp: false,
      isMoving: false,
      scrollPos: 0,
      scrollTolrence: 0,
      totalData: [1, 2, 3, 4, 5, 6],
      centerElementPossition: 0,
      visibleData: null,
      centerData: 20,
      closeModal: true,
      isMobileView: false,
      showOptions: false
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.setModelClose = this.setModelClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setItemSelect = this.setItemSelect.bind(this);
    this.handleSelectClick = this.handleSelectClick.bind(this);
  }

  componentDidMount() {
    const { mobileViewThreshold } = this.props;

    const isMobile = window.innerWidth < mobileViewThreshold;
    this.setState({
      isMobileView: isMobile
    });
  }

  handleSelectClick() {
    const { isMobileView, showOptions } = { ...this.state };
    const optionContainer = document.getElementById("optionsContainer");
    if (showOptions) {
      return;
    }
    console.log("optionContainer", optionContainer);
    this.setState({
      closeModal: !isMobileView
    });
    if (!isMobileView) {
      this.setState({
        showOptions: true
      });
    } else {
      this.setState({
        showOptions: false
      });
    }
  }

  handleChange(e) {
    this.setState({
      visibleData: e.target.value,
      closeModal: true
    });
  }

  setItemSelect(item) {
    const { onSelectedDataChange } = this.props;

    this.setState({
      visibleData: item,
      closeModal: true,
      showOptions: false
    });
    onSelectedDataChange(item);
  }

  handleItemClick(e) {
    const { onSelectedDataChange } = this.props;
    const selectedValue = e.target.getAttribute("value");

    onSelectedDataChange(selectedValue);
    this.setState({
      visibleData: selectedValue,
      closeModal: true
    });
  }

  setModelClose(status) {
    this.setState({
      closeModal: status
    });
  }

  render() {
    const { data, heading, classNameForModal, classNameForSelectTag } = {
      ...this.props
    };
    const { closeModal, visibleData, isMobile, showOptions } = {
      ...this.state
    };
    console.log(this.state);
    if (closeModal) {
      return (
        <SelectTag
          classNameForSelectTag={classNameForSelectTag}
          heading={heading}
          showOptions={showOptions}
          visibleData={visibleData}
          setItemSelect={this.setItemSelect}
          handleChange={this.handleChange}
          handleSelectClick={this.handleSelectClick}
          data={data}
        />
      );
    }

    return (
      <SimpleModal
        heading={heading}
        classNameForModal={classNameForModal}
        visibleData={visibleData}
        handleItemClick={this.handleItemClick}
        setModelClose={this.setModelClose}
        data={data}
      />
    );
  }
}
