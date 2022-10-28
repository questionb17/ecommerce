import React from 'react';
import list from '../info';
import '../styles/alibaba.css'
import Cards from './Cards';

const Alibaba = ({handleClick}) => {
    return(
        <section>
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick} />
                ))
            }
        </section>
     
    )
}
export default Alibaba