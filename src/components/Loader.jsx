import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div className="loader">

      <div className="loader-content">

        <h1>
          &lt;/&gt; AYAT360
        </h1>

        <div className="loader-bar">

          <span></span>

        </div>

      </div>

    </div>

  );
}