export const CLOSE_OVERLAY = 'overlay/CLOSE_OVERLAY';
export const OVERLAY_SET_DISPLAY = 'overlay/OVERLAY_SET_DISPLAY';
/**
 * Dispatches an action to tell us that the overlay has been closed
 * @returns {object}
 */
export const closeOverlay = () => ({ type: CLOSE_OVERLAY });

/**
 * Dispatches an action to set the display of the overlay
 * @returns {object}
 */
export const displayOverlay = payload => ({
  type: OVERLAY_SET_DISPLAY,
  payload
});
