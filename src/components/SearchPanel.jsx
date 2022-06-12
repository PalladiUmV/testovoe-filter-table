import { useDispatch } from "react-redux";
import "../App.css";

export const SearchPanel = () => {

    const dispatch = useDispatch();

    function byColumnName(e) {
        dispatch({
            type: "BY_FIELD_NAME",
            payload: e.target.value
        })
    }

    function byCondition(e) {
        const value = e.target.value;
        dispatch({
            type: "BY_CONDITION",
            payload: value
        })
    }

    function inputChange(e) {
        const value = e.target.value;
        dispatch({
            type: "INPUT_FIELD",
            payload: value
        })
    }

    return (
        <div className="search-panel">
            <select onChange={byColumnName}>
                <option selected value="name">
                    Название
                </option>
                <option value="quantity">Количество</option>
                <option value="distance">Расстояние</option>
            </select>

            <select onChange={byCondition}>
                <option value="equals">Равно</option>
                <option value="contains">Содержит</option>
                <option selected value="more">
                    Больше
                </option>
                <option value="less">Меньше</option>
            </select>
            <input type="text" onChange={inputChange} />
        </div>
    );
};
