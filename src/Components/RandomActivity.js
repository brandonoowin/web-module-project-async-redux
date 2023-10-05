import React from "react";
import { connect } from "react-redux";
import { getActivity } from "../actions";


const RandomActivity = (props) => {
    const fetchActivity = e => {
        e.preventDefault();
        props.getActivity();
    }
    return(
        <>
        <div>
            <h2>Activities Info</h2>
            <p>{props.activity}</p>
            <p>{props.type}</p>
            <p>{props.price}</p>
        </div>
        <button onClick={fetchActivity}>Fetch Random Activity</button>
        </>
    )
}

const mapStateToProps = state => ({
    activity: state.activity,
    type: state.type,
    price: state.price,
    error: state.error
})

export default connect(mapStateToProps, {getActivity})(RandomActivity);