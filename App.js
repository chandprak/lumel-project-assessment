
import './App.css';
import Table from './table/table';
import { data } from './const';
import "../src/table/table.css"
import { useEffect, useState, createContext } from 'react';

export const RowContext = createContext(null)

function App() {

  const [datas, setDatas] = useState(data)


  const setRowData = (id, key, label, value, refVal) => {
    console.log("setRowData")
    // const val = datas.map((item) => {
      
    //   if (id === "allocVariable") {
    //     if (label?.toLowerCase() === item?.label?.toLowerCase()) {
    //       const newVarVal = (refVal - item.value) / item.value * 100
    //       item.variance = newVarVal.toFixed(2)
    //       item.value = refVal
    //     }
    //   }
    //   if (id === "allocPercent") {
    //     if (label?.toLowerCase() === item?.label?.toLowerCase()) {
    //       const newVal = value + (item.value * refVal) / 100
    //       item.value = newVal
    //       item.variance = refVal + "%"
    //     }
    //   }
    //   return item
    // })
  }

 useEffect(() => {

  datas.map((val) => {
    if(Array.isArray(val?.children)) {
      val?.children?.map((itm) => itm["variance"]="")
    }
    return val
  })
  setDatas(datas)
 },[])

  return (
      <div>
        <table className="table-container">
          <thead>
            <tr>
              <th>Label</th>
              <th>Value</th>
              <th>Input</th>
              <th>Allocation %</th>
              <th>Allocation Val</th>
              <th>Variance %</th>
            </tr>
          </thead>
          <RowContext.Provider value={setRowData}>
          <Table rowData={datas} />
          </RowContext.Provider>
        </table>
      </div>
  );
}

export default App;
