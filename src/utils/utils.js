const calculateNextStepVariants = (posId, parameters) => {
    const x = +posId.slice(0,1);
    const y = +posId.slice(1);
    const variants=[];
    const {cols, rows} = parameters;
    const maxX = cols-1;
    const maxY = rows-1;
    switch(x) {
        case 0: {
            variants.push('RIGHT');
            break;
        }
        case maxX: {
            variants.push('LEFT');
            break;
        }
        default: {
            variants.push('RIGHT');
            variants.push('LEFT');
        }
    };
    switch(y) {
        case 0: {
            variants.push('DOWN');
            break;
        }
        case maxY: {
            variants.push('UP');
            break;
        }
        default: {
            variants.push('UP');
            variants.push('DOWN');
        }
    };
    return variants;
}

const getRandomId = (parameters) => {
    const x = Math.floor(Math.random() * parameters.cols);
    const y = Math.floor(Math.random() * parameters.rows);
    return x+''+y;
}


const getNextStep = (posId, direction) => {
    let x = +posId.slice(0,1);
    let y = +posId.slice(1);
    switch(direction) {
        case 'UP': {
            y--;
            break;
        }
        case 'DOWN': {
            y++;
            break;
        }
        case 'RIGHT': {
            x++;
            break;
        }
        case 'LEFT': {
            x--
            break;
        }
        default: {
            break
        }
    }
    return x+''+y;
}


const getRandomArrayVal = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

export {calculateNextStepVariants, getRandomId, getNextStep, getRandomArrayVal};