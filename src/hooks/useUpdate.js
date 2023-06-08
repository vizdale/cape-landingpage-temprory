import { useState } from "react";
import supabase from "../../lib/supabaseClient";
const useUpdate = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const updateData = async (table, formData, eq_query) => {
    try {
      setError(null);
      setIsLoading(true);
      const { error } = await supabase
        .from(table)
        .update(formData)
        .eq(...eq_query);
      if (error) console.log(error);
    } catch (err) {
      setError(err);
    }
    finally{
        setIsLoading(false)
    }
  };

  return { updateData, error, isLoading };
};

export default useUpdate;
