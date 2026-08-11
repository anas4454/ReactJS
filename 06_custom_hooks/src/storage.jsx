import useLocalStorage from "./hooks/useLocalStorage";

function Storage(){
    const[name , setName] = useLocalStorage("name" , "")

    return(
        <div>
            <h1>Hello {name}</h1>

            <input type="text" 
            name={name} 
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your name"
            />
        </div>
    )
}

export default Storage