import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      {online ? (
        <p></p>
      ) : (
        <p className="bg-red-100 text-center" style={{ color: "red" }}>
          Offline - Check your internet connection
        </p>
      )}
    </div>
  );
};

export default ConnectionStatus;
