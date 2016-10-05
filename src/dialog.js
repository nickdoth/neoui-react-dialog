import {BaseComponent} from 'neoui-sparrow/js/BaseComponent';
import {addClass,removeClass,hasClass,getStyle,makeDOM,makeModal} from 'neoui-sparrow/js/dom';
import {on,stopEvent,trigger} from 'neoui-sparrow/js/event';
import {extend} from 'neoui-sparrow/js/extend';
import React from 'react';

require('../dist/style.css');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Dialog, DialogInline, Modal;

DialogInline = React.createClass({
	submitClick: function(){
		alert(222);
	},
	render: function() {

		return (
			<div className="u-msg-dialog">
			<div className="u-msg-title">
			<h4>title</h4>
			</div>
			<div className="u-msg-content">
			<p>msg</p>
			</div>
			<div className="u-msg-footer only-one-btn"><button className="u-msg-button u-button u-button-primary raised" onClick={this.submitClick} >btnText</button></div>
			</div>
		);
	}
});

Modal = React.createClass({
	render: function() {
		return 	(
			<ReactCSSTransitionGroup 
				className="modal"
				transitionName={this.props.transitionName}
				transitionEnterTimeout={200}
				transitionLeaveTimeout={200}>
				{this.props.isOpen ? this.props.children : null}
			</ReactCSSTransitionGroup>
		);
	}
});


Dialog = React.createClass({
	getInitialState: function() {
		return { isModalOpen: false };
	},

	openModal: function() {
		this.setState({ isModalOpen: true });
	},

	closeModal: function() {
		this.setState({ isModalOpen: false });
	},

	componentDidMount: function() {
		this.popup = document.createElement("nav");
		document.body.appendChild(this.popup);
	},

	render: function() {
		console.log(this.props);
		return (
			<div>
				<button id="msgDialogBtn" className="u-button u-button-primary raised accent" onClick={this.openModal}>提示框</button>
				<Modal isOpen={this.state.isModalOpen} transitionName="modal-anim">

					<div className="u-msg-dialog">
						<div className="u-msg-title">
						<h4>{this.props.title}</h4>
						</div>
						<div className="u-msg-content">
						<p>{this.props.msg}</p>
						</div>
						<div className="u-msg-footer only-one-btn">
							<button onClick={this.closeModal} className="u-msg-button u-button u-button-primary raised">{this.props.btnText}</button>
						</div>
					</div>

				</Modal>
			</div>
		);
	}
});

module.exports = Dialog;


