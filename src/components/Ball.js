import React from 'react'
import {connect} from 'react-redux';

function Ball(props) {
    return (
        <div>
            <h1>Number of Balls {props.balls}</h1>
            <button onClick={props.buyball}> Buy Ball</button>
            <button onClick={props.sellball}>Sell Ball</button>
        </div>
    )
}
const mapStateToProps=store=>{
    return store;
}

const mapDispatchtoState=dispatch=>{
    return {
        buyball:()=>{
            return dispatch({type:"buy_ball"});
        },
        sellball:()=>{
            return dispatch({type:"sell_ball"});
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoState)(Ball)

