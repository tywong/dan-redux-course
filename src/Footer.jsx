import React from 'react';
import { connect } from 'react-redux';

import { filterLinkClick } from './actions';


const Link = ({
    active,
    onFilterClick,
    children
} ) => {
    if(active) {
        return (
            <span>{ children }</span>
        );
    }

    return (
        <a href='#'
            onClick={ (e) => {
                e.preventDefault();
                onFilterClick();
            } }
        > { children } </a>
    );
}

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFilterClick: () => {
        dispatch(filterLinkClick(ownProps.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

const Footer = () => (
    <p>
        Show:
        { ' ' }
        <FilterLink filter={ 'SHOW_ALL' }>All</FilterLink>
        { ', ' }
        <FilterLink filter={ 'SHOW_ACTIVE' }>Active</FilterLink>
        { ', ' }
        <FilterLink filter={ 'SHOW_COMPLETED' }>Completed</FilterLink>
    </p>
);

export default Footer;
