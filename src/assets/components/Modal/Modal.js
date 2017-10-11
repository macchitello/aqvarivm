import PropTypes from 'prop-types';
import React, { Component } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as NativeModal } from 'react-modal';
import { Post as PostRecord } from '../../modules/application/reducer';
import { Icon } from 'semantic-ui-react';
import Post from '../Post';
import './Modal.css';

export default class Modal extends Component {
  static get propTypes() {
    return {
      config: PropTypes.object.isRequired,
      displayModal: PropTypes.func.isRequired
    };
  }

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.displayModal(false);
  }

  render() {
    let content;
    let title;
    let extraClasses = `mb-modal--${this.props.config.section} `; // space needed
    switch (this.props.config.section) {
      case 'new-post':
        title = 'Create New Post';
        content = (
          <Post
            className="aqv-post--newPost"
            id={0}
            item={new PostRecord({})}
          />
        );
        break;
      default:
        title = 'Create new Post';
        content = (
          <div
            className="mb-modal-empty"
            key="mb-modal-empty"
          />
        );
    }

    return (
      <NativeModal
        isOpen={this.props.config.show}
        onRequestClose={this.closeModal}
        contentLabel="Mb Modal"
        className="react-modal"
        overlayClassName="mb-modal__overlay"
        shouldCloseOnOverlayClick
      >
        <div
          className={`mb-modal ${extraClasses}`}
        >
          <div className="mb-modal__header">
            <span>{title}</span>
            <div
              role="button"
              className="mb-modal__header__close"
              onClick={this.closeModal}
            >

              <Icon
                name='cancel'
              />
            </div>
          </div>
          <div className="mb-modal__content">
            {content}
          </div>
        </div>
      </NativeModal>
    );
  }
}
