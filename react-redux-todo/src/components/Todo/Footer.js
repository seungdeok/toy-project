import React from 'react';
import FilterLink from '../../containers/Todo/FilterLink';
import actionTypes from '../../store/actions';
const { VisibilityFilter } = actionTypes.todos

const Footer = () => (
    <div>
        <span>SHOW: </span>
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

export default Footer;