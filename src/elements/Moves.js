import React from "react";
import {calculateNextStepVariants, getRandomId, getNextStep, getRandomArrayVal} from "../utils/utils"
import {connect} from 'react-redux'
import setPositionData from '../store/actions/setPositionData';
class Moves extends React.Component {
    constructor(props) {
        super(props);
        this._parameters = props.parameters;
        this._maxMoves = this._parameters.moves;
        this.state = {
            startingStep: '00',
            stepsData: [],
            finishStep: '00',
        }
        this._setPositionData = props.setPositionData
    }

    componentDidMount() {
        this.reDraw();
    }

    reDraw() {
        let currentId = getRandomId(this._parameters);
        this.setState({startingStep: currentId});
        const stepsData = []
        for(let i=0;i<this._maxMoves;i++) {
            const nextStep = getRandomArrayVal(calculateNextStepVariants(currentId, this._parameters));
            currentId = getNextStep(currentId, nextStep);
            stepsData.push(nextStep)
        }
        this.setState({
            stepsData: stepsData.slice(),
            finishStep: currentId
        });
    }
    componentDidUpdate() {
        this._setPositionData([this.state.startingStep, this.state.finishStep]);
    }
    renderSteps() {
        return this.state.stepsData.map((item, index)=>{
            return <li key={index}>{index+1}. {item}</li>
        })
    }
    render() {
        return (<>
        <ul className="moves-container">
            {this.renderSteps()}
        </ul>
        <button className='button-redraw' onClick={()=>this.reDraw()} type='button'>Перезапустить</button>
        </>);
    }
}

export default connect(null, {setPositionData})(Moves);