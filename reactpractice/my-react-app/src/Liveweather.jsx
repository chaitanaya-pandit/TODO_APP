import React, { useEffect, useState } from "react";

const Liveweather = () => {
  // ----------------- STATES -----------------
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [online, setOnline] = useState(navigator.onLine);
  const [width, setWidth] = useState(window.innerWidth);

  // ----------------- 1: FETCH WEATHER API -----------------
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&current_weather=true"
      );
      const data = await res.json();
      setWeather(data.current_weather);
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
    setLoading(false);
  };

  // Fetch data on mount
  useEffect(() => {
    fetchWeather();
  }, []);

  // ----------------- 2: AUTO REFRESH EVERY 10 SEC -----------------
  useEffect(() => {
    const timer = setInterval(() => {
      fetchWeather();
    }, 10000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  // ----------------- 3: THEME SAVE TO LOCALSTORAGE -----------------
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ----------------- 4: ONLINE / OFFLINE LISTENER -----------------
  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  // ----------------- 5: WINDOW RESIZE TRACKER -----------------
  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ----------------- UI -----------------
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#111",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "30px",
        transition: "0.7s",
      }}
    >
      <h1>🏆 useEffect All-in-One Project</h1>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ padding: "10px", margin: "10px 0", borderRadius: "8px" }}
      >
        Toggle Theme
      </button>

      {/* Online Status */}
      <p>
        Status:{" "}
        <strong style={{ color: online ? "green" : "red" }}>
          {online ? "Online" : "Offline"}
        </strong>
      </p>

      {/* Window Width */}
      <p>Window Width: {width}px</p>

      {/* Weather Card */}
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          borderRadius: "10px",
          background: theme === "light" ? "#f2f2f2" : "#222",
        }}
      >
        <h2>🌤 Live Weather (Delhi)</h2>

        {loading && <p>Loading...</p>}

        {weather && (
          <>
            <p>Temperature: {weather.temperature} °C</p>
            <p>Wind Speed: {weather.windspeed} km/h</p>
            <p>Time: {weather.time}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Liveweather;
