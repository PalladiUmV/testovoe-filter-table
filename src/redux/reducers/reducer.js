const initialState = {
    data: null,
    copyData: null,
    loading: false,
    byColumnName: 'name',
    condition: 'more',
    inputValue: ''
}

function filterByInput(inputValue, data, byColumnName, condition) {

    if (!inputValue) return data
    else if (byColumnName === 'name' && condition === 'contains') {

        let filteredData = data.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()))
        return filteredData
    } else if (byColumnName === 'quantity' && condition === 'contains') {
        let filteredData = data.filter(({ quantity }) => quantity.toString().includes(inputValue))
        return filteredData
    } else if (byColumnName === 'distance' && condition === 'contains') {
        let filteredData = data.filter(({ distance }) => distance.toString().includes(inputValue))
        return filteredData
    }
    else if (byColumnName === 'name' && condition === 'equals') {
        let filteredData = data.filter(({ name }) => name === inputValue)
        return filteredData
    }
    else if (byColumnName === 'quantity' && condition === 'equals') {
        let filteredData = data.filter(({ quantity }) => quantity.toString() === inputValue)
        return filteredData
    }
    else if (byColumnName === 'distance' && condition === 'equals') {
        let filteredData = data.filter(({ distance }) => distance.toString() === inputValue)
        return filteredData
    }
    else if (byColumnName === 'name' && condition === 'more') {
        let filteredData = data.filter(({ name }) => name > inputValue)
        return filteredData
    }
    else if (byColumnName === 'quantity' && condition === 'more') {
        let filteredData = data.filter(({ quantity }) => quantity > Number(inputValue))
        return filteredData
    }
    else if (byColumnName === 'distance' && condition === 'more') {
        let filteredData = data.filter(({ distance }) => distance > Number(inputValue))
        return filteredData
    }
    else if (byColumnName === 'name' && condition === 'less') {
        let filteredData = data.filter(({ name }) => name < inputValue)
        return filteredData
    }
    else if (byColumnName === 'quantity' && condition === 'less') {
        let filteredData = data.filter(({ quantity }) => quantity < Number(inputValue))
        return filteredData
    }
    else if (byColumnName === 'distance' && condition === 'less') {
        let filteredData = data.filter(({ distance }) => distance < Number(inputValue))
        return filteredData
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: [...action.payload.data],
                copyData: [...action.payload.data],
            }
        case 'BY_FIELD_NAME':
            return {
                ...state,
                byColumnName: action.payload,
            }
        case 'BY_CONDITION':
            return {
                ...state,
                condition: action.payload,
            }
        case 'INPUT_FIELD':
            let { data, byColumnName, condition } = state;
            return {
                ...state,
                inputValue: action.payload,
                copyData: filterByInput(action.payload, data, byColumnName, condition),
            }
        default:
            return state;
    }
}
export default reducer;


