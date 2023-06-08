import { useState } from "react"
import supabase from "../../lib/supabaseClient"

const useDelete = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

const deleteData = async(table, eq_query) => {
    try{
        setIsLoading(true)
        setError(null)
    const {error} = await supabase
    .from(table)
    .delete()
    .eq(...eq_query)
    if(error) console.log(error)
    }
    catch(err){
        setError(err)
    }
    finally{
        setIsLoading(false)
    }
}
return {deleteData, error, isLoading}
}

export default useDelete