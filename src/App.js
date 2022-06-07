import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  const getData = async () => {
      const response = await fetch(`https://swapi.dev/api/${dataType}`)
      const json = await response.json()

      if ('results' in json) {
        setData(json)
      }
  }

  // Write code here.
  useEffect(() => {
    getData()
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
