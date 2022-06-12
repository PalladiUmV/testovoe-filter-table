import { useSelector } from "react-redux";
import "../App.css";

export const Table = ({ data }) => {

    const loading = useSelector(({ loading }) => loading);


    // Отображение данных в таблице
    return (
        <>
            {loading ? (
                <div className="loading">
                    loading...
                </div>
            ) : (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Название</th>
                                <th>Количество</th>
                                <th>Расстояние</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item) => {
                                let { name, quantity, distance, date } = item;
                                let year = new Date(date);
                                let getYear = year.getFullYear();
                                return (
                                    <tr key={name + quantity}>
                                        <td>{getYear} г.</td>
                                        <td>{name}</td>
                                        <td>{quantity}</td>
                                        <td>{distance}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            )};
        </>
    )
}
