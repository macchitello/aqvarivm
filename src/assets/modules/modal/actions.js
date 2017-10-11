export const DISPLAY_MODAL = 'modal/DISPLAY_MODAL';

/**
 * Set whether to show the modal.
 * @param {object} payload - Object representing the details
 * of the section to display in the Modal
 * @returns {object}
 */
export const displayModal = ({ show, section }) => (
  {
    type: DISPLAY_MODAL,
    payload: {
      show,
      section
    }
  }
);
