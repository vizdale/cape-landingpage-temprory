import supabase from "@/lib/supabaseClient";
import { useState } from "react";



const useCreate = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false)
  const postData = async (table, formData) => {
    setIsLoading(true)
    setError(null)
    try {
      const { error, data } = await supabase.from(table).insert(formData).select();
      if(data) setSuccess(true)
      if (error) console.log(error);
    } catch (err) {
      setError(err.message);
    }
    finally{
        setIsLoading(false)
    }
  };

  return { postData, isLoading, error, success };
};

export default useCreate
