// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCart, toggleCatalog, toggleCartSelection, increaseCartItem, decreaseCartItem } from '@gringo/services/actions';
import * as Selector from '@gringo/services/selectors';
import Component from './component';


const makeMapStateToProps = (): Object => {
  const getCartServicesState = Selector.makeCartServicesState();

  const mapStateToProps = (state: Object): Object => ({
    cartServices: getCartServicesState(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch: Dispatch): Object => (
  bindActionCreators({
    toggleCart,
    toggleCatalog,
    toggleCartSelection,
    increaseCartItem,
    decreaseCartItem,
  }, dispatch)
);
export default connect(makeMapStateToProps, mapDispatchToProps)(Component);
