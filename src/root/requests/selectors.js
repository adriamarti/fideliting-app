/**
 * This source code is and remains the property of UserZoom Technologies Inc (sucursal en España).
 * Dissemination of this information or reproduction of this material is strictly
 * forbidden unless prior written permission is obtained from
 * UserZoom Technologies Inc (sucursal en España) (https://www.userzoom.com).
 **/
import camelCase from 'camelcase';
import { get } from 'lodash';

import {
  requestIsFetching,
  requestIsSuccessful,
  requestIsFailed,
  requestIsDone,
} from './status';

const getObjectOfAsyncAction = (
  state,
  actionType,
  requestIdentifier = 'none',
) => (state.requestsStatuses[camelCase(actionType.replace('_REQUESTED', ''))] || {})[requestIdentifier];

export const getAsyncActionError = (
  state,
  actionType,
  requestIdentifier,
) => get(getObjectOfAsyncAction(state, actionType, requestIdentifier), 'payload.error');

export const getAsyncActionDataId = (
  state,
  actionType,
  requestIdentifier,
) => get(getObjectOfAsyncAction(state, actionType, requestIdentifier), 'payload.data.id');

export const isFetchingAsyncAction = (
  state,
  actionType,
  requestIdentifier,
) => requestIsFetching(get(getObjectOfAsyncAction(state, actionType, requestIdentifier), 'status'));

export const isSuccessfulAsyncAction = (
  state,
  actionType,
  requestIdentifier,
) => requestIsSuccessful(get(getObjectOfAsyncAction(state, actionType, requestIdentifier), 'status'));

export const isFailedAsyncAction = (
  state,
  actionType,
  requestIdentifier,
) => requestIsFailed(get(getObjectOfAsyncAction(state, actionType, requestIdentifier), 'status'));

export const isDoneAsyncAction = (
  state,
  actionType,
  requestIdentifier,
) => requestIsDone(get(getObjectOfAsyncAction(state, actionType, requestIdentifier), 'status'));
