import { useSelector } from "react-redux"

function ElementList() {


    const elementList = useSelector(store => store.elementList)
    return(
        //render the elements list
        <ul>
        {elementList.map((element, i) =>(
          <li key={i}>{element}</li>
        ))}
      </ul>
    )
}



export default ElementList