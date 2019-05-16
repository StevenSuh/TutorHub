import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Modal from 'src/scripts/components/Modal/Component';

class SubjectModal extends React.Component {
  render() {
    const { open } = this.props;

    return (
      <Modal open={open}>
        <div>Subject Modal</div>
      </Modal>
    );
  }
}

SubjectModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SubjectModal;
