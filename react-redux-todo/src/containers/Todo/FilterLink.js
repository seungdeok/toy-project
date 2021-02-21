import {  connect} from 'react-redux';
import actionTypes from '../../store/actions';
import Link from '../../components/Todo/Link';
const { setVisibilityFilter } = actionTypes.todos;

const mapStateToProps = (state, props) => ({
    active: props.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(setVisibilityFilter(props.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)