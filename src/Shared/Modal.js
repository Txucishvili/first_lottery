import React, { Component, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

export class Modal {
  _currentGlobalLoader = null; //reference variable

  /**
   * getting reference of bottom wrapper component
   */
  static registerModal(ref) {
    this._currentGlobalLoader = ref;
  }

  static open({ ...args }) {
    if (this._currentGlobalLoader) {
      this._currentGlobalLoader.open({ ...args });
    }
  }

  static updateProps({ ...props }, index) {
    if (this._currentGlobalLoader) {
      this._currentGlobalLoader.updateProps(
        { ...props },
        index
      );
    }
  }

  static close(index) {
    if (this._currentGlobalLoader) {
      this._currentGlobalLoader.close(index);
    }
  }
}
// eslint-disable-next-line react/display-name
export const ModalComponent = React.forwardRef(
  (propsValues, ref) => {
    const {
      //main component to show inside the modal
      component: RenderInner,
      props,
      //allow modal to close by clicking backdrop or not
      closable = true,
      //execute something while closing the modal
      onClose = () => {},
      closeModal = () => {},
      isVisible,
      width = 500,
      title,
      className = "",
      modalFooter,
      closeable = true,
      closeIcon = false,
      centered = true,
    } = propsValues;

    const onModalClose = (isClose) => {
      if (!closable) return;
      if (isClose) {
        closeModal();
        onClose();
      }
      //modal method to close the modal
      Modal.close();
    };

    return (
      <div
      >
        <div
          style={{
            position: "relative",
          }}
        >
          {RenderInner && <RenderInner inModal={true} {...props} />}
        </div>
      </div>
    );
  }
);

// eslint-disable-next-line react/display-name
export class ModalWrapper extends Component {
  state = {
    modals: [], // includes multiple models
  };

  totalIndex = 0;

  open = ({ ...args }) => {
    const modal = { ...args };

    let { modals } = this.state;

    // console.log('modals', modal.id)

    // if (modals.includes(modal))

    // isVisible controls the visibility of bottomsheet
    this.totalIndex++;

   modal.isVisible = true;
   modal.id = this.totalIndex;

    // ref controls the modal behaviour, like closing the modal our update the modal
    if (!modal.ref) {
      modal.ref = React.createRef();
    }

    modals.push({ ...modal });
    this.setState({ modals });
  };

  close = (index = this.state.modals.length - 1) => {
    let { modals } = this.state;
    setTimeout(() => {
      modals.splice(index, 1);
      this.setState({ modals });
    }, 200);

    // in order to retain close effect
    if (modals[index]) {
      modals[index].isVisible = false;
      this.setState({ modals });
    }
  };

  updateProps = (
    { ...props },
    index
  ) => {
    const { modals } = this.state;
    modals[index].props = { ...modals[index].props, ...props };
    this.setState({ modals });
  };

  render() {
    const { modals } = this.state;

    return modals.map((modal, index) => (
      <ModalComponent
        key={modal.id + "" + index}
        closeModal={this.close}
        {...modal}
      />
    ));
  }
}