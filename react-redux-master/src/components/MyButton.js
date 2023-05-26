import React from 'react';
import { useDispatch} from 'react-redux';
import increment from '../action';
import decrement from '../action';

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increment(1))}>Increase counter</button>
            <button onClick={()=>dispatch(decrement(1))}>Decrease counter</button>
        </div>
    );
}

export default MyButton;
