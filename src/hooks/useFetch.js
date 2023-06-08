import { useState } from "react";
import supabase from "../../lib/supabaseClient";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async (table, column = "*",eq_query = null, array_query = null) => {
    try {
      setIsLoading(true);
      setData(null)
      setError(null)
      if (!eq_query && !array_query) {
        const { data, error } = await supabase.from(table).select(column);

        if (data) setData(data);
        if (error) console.log(error);
      }

      if (eq_query) {
        const { data, error } = await supabase
          .from(table)
          .select(column)
          .eq(...eq_query);

        data && setData(data);
        if (error) throw new Error(error.message);
      }

      if (array_query) {
        const { data, error } = await supabase
          .from(table)
          .select(column)
          .contains(array_query.column, array_query.arr)

        data && setData(data);
        if (error) throw new Error(error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { getData, data, error, isLoading };
};

export default useFetch;
