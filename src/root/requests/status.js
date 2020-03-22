/**
 * This source code is and remains the property of UserZoom Technologies Inc (sucursal en España).
 * Dissemination of this information or reproduction of this material is strictly
 * forbidden unless prior written permission is obtained from
 * UserZoom Technologies Inc (sucursal en España) (https://www.userzoom.com).
 **/
export const unfetched = 'UNFETCHED';

export const fetching = 'FETCHING';

export const successful = 'SUCCESSFUL';

export const failure = 'FAILURE';

export function requestIsDone(status) {
  return [successful, failure].includes(status);
}

export function requestIsFetching(status) {
  return fetching === status;
}

export function requestIsSuccessful(status) {
  return successful === status;
}

export function requestIsFailed(status) {
  return failure === status;
}
