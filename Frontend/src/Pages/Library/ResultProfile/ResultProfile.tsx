import { Link, useParams } from "react-router-dom";
import styles from "./ResultProfile.module.css"
import Data from "../../../libraryData.json"
import { useEffect } from "react";
import { useState } from 'react';
import "./resultP.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
const ResultProfile = () => {
    interface info {
        id : number ;
        name : string ;
        description : string ;
        image1? : string;
        image2? :string; 
        
        }

const {id} = useParams<{id : string}>();

const [ chooseimg , setChooseimg ] = useState<boolean>(false);



    // const [data , setDate] = useState<info[]>([]);
    
    const [filter, setFilter] = useState<info | null>(null);
    
    
    
    // useEffect(() => {
    // setDate(Data as info[])
    // }, [])
    
    
    // const filteredData = data.filter((item) =>
    //      item.id === id
    // );
    
    
    


    useEffect(() => {
        if (id) {
          const matchedProduct = Data.find((item) => item.id === parseInt(id));
          setFilter(matchedProduct || null); 
        }
      }, [id]);
    
      if (!filter) {
        return <div>Product not found!</div>;
      }
    
      


const chooseOne = () => {
setChooseimg(true) ;
}

const  chooseTwo = () => {
setChooseimg(false) ;
}



    return (
        <>
        
        
   


<section className={styles.sectionProfile}>


<div className={styles.navTop}>
<FontAwesomeIcon className={styles.arrowBack} icon={faArrowLeft} />
<Link className={styles.twoLinks} to={"/library"}>Back To Library</Link>

</div>


{filter ?  (
<div className={styles.oneD} key={filter.id}>

<div className={styles.image}>

<div className={styles.choseImage}>
<img onClick={chooseOne} className={styles.oneIm} src={filter.image1} />
<img onClick={chooseTwo} className={styles.twoIm} src={filter.image2} />
</div>

{chooseimg ?     <img className={styles.imge} src={filter.image1}/>
:      <img className={styles.imge} src={filter.image2}/>
}
</div>


<div className={styles.nameofD}>
<h1>{filter.name}</h1>
<h2>{filter.description}</h2>
    </div>

    
</div>




) : null }








</section>
</>

    );
}
export default ResultProfile ;