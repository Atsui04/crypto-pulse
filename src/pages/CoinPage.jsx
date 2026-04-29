import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getCoin } from "../api/coinsApi";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const CoinPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(
    function () {
      async function fetchPost() {
        try {
          setIsLoading(true);
          const data = await getCoin(id);

          console.log(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchPost();
    },
    [id],
  );

  return (
    <div className="container">
      {isLoading ? <Loader /> : error ? <ErrorMessage error={error} /> : ""}
    </div>
  );
};

export default CoinPage;
