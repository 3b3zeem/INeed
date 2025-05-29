import axios from "axios";
import { useEffect, useState } from "react";

const useSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      const res = await axios.get("https://ineed.dinamo-app.com/api/sliders");
      setData(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

    return { data, loading, error };
};

export default useSlider;
