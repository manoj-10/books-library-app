import React from 'react';
import './List.css';
import Card from './Card';

function List({state}){
    return(
       <div className='list'>
           {state.data?.map((item,index)=>(
              <Card 
                   item={item}
                   key={index}
                   id={item.id}
                   title={item.title}
                   author={item.author}
                   genre={item.genre}
                   summary={item.summary}
              />
           ))}

       </div>
    );
}

export default List;