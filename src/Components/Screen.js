import React from 'react'

export default function Screen({sorted,changePage,page}) {
 
    
    if (sorted){    
    return (
        <div>
        <table className="table">
        <thead>
          <tr>
            
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          
          {sorted[page].map(function(item) {
          return (<>
          <tr>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.company}</td>
          </tr>
          </>)
        })}            
        
         
        </tbody>
      </table>
      {sorted.map((_,index)=>{
        return (
            <button 
            onClick={()=>changePage(index)}
             key={index}
             className={`page-btn ${page === index && `page-btn-current`}`}
             >
                 {index + 1}
         </button>
            
        
         )})}
      
      </div>
    )}
    else{
        return <h5>We didnot get any data here...</h5>
    }
}
