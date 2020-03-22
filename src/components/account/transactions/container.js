// External Dependencies
import { connect } from 'react-redux';
import { compose } from 'redux';

// Internal Dependencies
import Component from './component';
import {
  getFidelTransactions,
  getSFidelTransactions,
} from '../../../modules/transactions/selectors';
import {
  getFidelTransactionsRequested,
  getSFidelTransactionsRequested
} from '../../../modules/transactions/action-creators';
import {
  isFetchingAsyncAction,
} from '../../../root/requests/selectors';
import {
  GET_FIDEL_TRANSACTIONS_REQUESTED,
  GET_S_FIDEL_TRANSACTIONS_REQUESTED,
} from '../../../modules/transactions/action-types';

const mapStateToProps = (state) => {
  return {
    fidel: getFidelTransactions(state),
    sFidel: getSFidelTransactions(state),
    isFetchingFidel: isFetchingAsyncAction(state, GET_FIDEL_TRANSACTIONS_REQUESTED),
    isFetchingSFidel: isFetchingAsyncAction(state, GET_S_FIDEL_TRANSACTIONS_REQUESTED),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFidelTransactions() {
    dispatch(getFidelTransactionsRequested());
  },
  getSFidelTransactions() {
    dispatch(getSFidelTransactionsRequested());
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(Component);
