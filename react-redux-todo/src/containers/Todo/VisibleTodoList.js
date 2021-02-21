import { connect } from 'react-redux';
import actionTypes from '../../store/actions';
import TodoList from '../../components/Todo/todoList';

const { toggleTodo, VisibilityFilter } = actionTypes.todos;

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => todo.completed)
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(todo => !todo.completed)
        default:
            throw new Error('Unkown filter:' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)