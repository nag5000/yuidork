/* globals Event */

export const event = new Event('eq-update');

export default function eqTrigger() {
  return window.dispatchEvent(event);
}
