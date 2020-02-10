import React from 'react'
import Input from "./Components/Input"
import Screen from "./Components/Screen"
import {data} from "./Data/data"
import {paginate} from "./util/pager"

export default function Main() {
    const [mydata,setdata]=React.useState(data)
    const [sorted,setSorted] = React.useState()
    const [page,setPage] = React.useState(0)
    const [filters,setFilters] = React.useState({
        names:"",
        type:"",
        Company:"",
        
    })
    
    
    React.useEffect(() => {  
        // setdata(data) 
        const otherdata = data
        setdata(data)
        const pagedata=paginate(otherdata)      

        console.log(mydata);
        
        setSorted(pagedata)    
        // setdata()
    } ,[])

    
    const changePage = (index) => {
        setPage(index);
        
    }

    
    const inputs = e =>{
        console.log(e);
        
        setFilters(e)        
    }

    
    
    // React.useEffect(()=>{        
    //     // let newdata =mydata
    //     // console.log(newdata);
    //     // console.log(sorted);
    //     // console.log(mydata);
    //     let newdata = data
        
        
        

    //     // let newProducts = [...mydata].sort((a,b)=>a.price-b.price)
    //     // const {search,category,shipping,price} = filters
    //     // // console.log(newProducts);
        
    //     // // console.log(category);
        
    //     if(filters.names !== ""){
    //         // console.log(category);
    //         // console.log(newProducts);
    //         // console.log("name");
            
    //         // console.log(filters.names);

    //         // newdata = data.filter(item => {
    //         //     let title = item.title.toLowerCase().trim();
    //         //     return title.startsWith(filters.names)?item:null
    //         // })
            
            
    //         // newProducts = newProducts.filter(item => item.Category === category)
    //     }
        

        
    //     setPage(0);
    //     setSorted(paginate(newdata))
    // },[input,filters])
    React.useEffect(()=>{ 
    console.log("filters");
    let newdata = data
    if(filters.names !== ""){
        newdata = data.filter(item => {
                let title = item.name.toLowerCase().trim();
                return title.startsWith(filters.names)?item:null
            })
    }
    setPage(0);
    setSorted(paginate(newdata))

    
    },[filters])


    return (
        <div>
          <br></br><br></br>
            <Input input={inputs}></Input>
            <br></br>
            <div className="container">
            <Screen sorted={sorted} changePage={changePage} page={page}></Screen>
            </div>
        </div>
    )
}
