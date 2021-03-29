import React from "react";
import Cell from "./Cell";
import { connect } from 'react-redux';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this._parameters = props.parameters;
        this._cols = this._parameters.cols;
        this._rows = this._parameters.rows;
        this.state = {clickedCell: null, result: null};
        this.getClicked = this.getClicked.bind(this);
    }
    getClicked(id) {
        this.setState({
            clickedCell: id,
            result: (this.props.positions[1]===id) ? 'WIN' : 'Loose'
        })
    }
    createCells() {
        const positions = this.props.positions;
        const cells = [];
        for(let c=0;c<this._cols;c++) {
            for(let r=0;r<this._rows;r++) {
                const id=c+''+r;
                let type = (positions && (id===positions[0])) ? 'cell_type_start' : '';
                if((id===this.state.clickedCell))
                {
                    type = (positions && (id===positions[1])) ? 'cell_type_correct' : 'cell_type_wrong';
                }
                if((this.state.result==='Loose') && id===positions[1]) {
                    type = 'cell_type_correct';
                }
                cells.push(<Cell 
                     x={c}
                     y={r} 
                     key={id+type+this.state.result}
                     id={id}
                     type={type}
                     getId={this.getClicked}
                     disabled={this.state.result}/>)
            }
        }
        return cells
    }
    componentDidUpdate() {
        if((this.props.positions) && (this._positions)) {
            (this._positions!==this.props.positions)&&this.restartGame()
        }
        this._positions = this.props.positions;
    }
    restartGame() {
        this.setState({
            clickedCell: null, 
            result: null
        })
    }
    render() {
        return(
        <>
            <div className='field'>
                {this.createCells()}
            </div>
            {this.state.result&&(<h2>{this.state.result}</h2>)}
        </>)
    }
}

const mapStateToProps = (state) => {
    return state || {}
  }

export default connect(mapStateToProps)(Field)