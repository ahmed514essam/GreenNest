import styles from "./Library.module.css"
import Data from "../../libraryData.json"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Library = () => {

interface info {
id : number ;
name : string ;
description : string ;
image1? : string;
image2? :string; 

}
const [data , setDate] = useState<info[]>([]);

const [searching, setSearching] = useState<string>("");

// const [filteredProducts , setFilteredProducts] = useState<info[]>([]);


useEffect(() => {
setDate(Data as info[])
}, [])


const filteredData = searching
? data.filter((item) =>
    item.name.toLowerCase().includes(searching.toLowerCase())
  )
: data;

// Clear search input
const clearSearch = () => setSearching("");


  
  








    return (
        <>
        <section className={styles.firstSectionLibrary}>


<div className={styles.searchInput}>
    <span>
    <input name="searching" value={searching} onChange={(e) => setSearching(e.target.value)} type="text"/>

    <FontAwesomeIcon onClick={clearSearch} className={styles.iconAx} icon={faX} />

    </span>
</div>


<div className={styles.contentData}>
{filteredData.map(item => (
<Link to={`/library/${item.id}`} className={styles.oneD} key={item.id}>

<div className={styles.image}>
    <img className={styles.imge} src={item.image1}/>
</div>


<div className={styles.nameofD}>
<h2>{item.name}</h2>

    </div>

    
</Link>




))}







</div>










        </section>
        
        
        </>
    )
}
export default Library ;