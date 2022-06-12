import "../App.css";
import { Table } from "./Table.jsx";
import { SearchPanel } from "./SearchPanel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TablePagination from "./TablePagination";



export default function App() {

  const copyData = useSelector(({ copyData }) => copyData);
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(10) // Здесь можно изменить значение - сколько элементов будет на странице

  // Запрос при загрузке App и dispatch данных в store

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      dispatch({
        type: 'DATA_REQUEST',
      })
      const amountElements = 50; // Количество элементов в запросе
      const res = await axios.get(`https://filltext.com/?rows=${amountElements}&name={firstName}&quantity={numberLength|3}&distance={numberLength|4}&date={date}`)
      dispatch({
        type: 'DATA_SUCCESS',
        payload: res,
      })
    }
    getData()
  }, []);


  //Логика для пагинациии

  const lastIndex = currentPage * dataPerPage
  const firstIndex = lastIndex - dataPerPage
  const currentData = copyData?.slice(firstIndex, lastIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)


  return (
    <div className="main">
      <SearchPanel />
      <div className="App">
        <Table data={currentData} />
        <TablePagination dataPerPage={dataPerPage} totalData={copyData?.length} paginate={paginate} />
      </div>
    </div>
  );
}
