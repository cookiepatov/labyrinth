import React from "react";

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this._x = props.x;
        this._y = props.y;
        this._type = props.type;
        this._id = props.id
        this._getId = props.getId;
        this._disabled = props.disabled ? true : false
    }

    render() {
        const style = {'gridRow': this._y+1, 'gridColumn': this._x+1};
        const className = this._type ? `cell ${this._type}` : `cell`;
        return(
            <button type="button" className={className} 
            style={style} disabled={this._disabled}
            onClick={()=>this._getId(this._id)}/>
        )
    }
}