import Table from './table';
import { events as allevents } from "../../Events/events";


export default function Data(){  
  const evt = Array.from(Object.entries(allevents));

    return (

      <div class="p-5 justify-content-center">
        {evt.map((data, key) => {return(
          <Table coll={data[0]} fields={data[1].fields}/>
        );
        })}
      </div>

    )
}