import React, { useEffect, useState } from "react";

const ClockAnalog = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = ((hours % 12) / 12) * 360 + minutes * 0.5;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div
      className="analog"
      style={{ position: "relative", width: 130, height: 130, margin: "auto" }}
    >
      <div style={styles.clock}>
        {/* Números del 1 al 12, con 12 arriba */}
        {numbers.map((number, index) => {
          const angle = ((index - 2) * Math.PI) / 6; // Ajustado para que 12 esté arriba
          const radius = 50;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={`num-${number}`}
              style={{
                position: "absolute",
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                fontSize: 11,
                fontWeight: "bold",
                color: "#fff",
                pointerEvents: "none",
              }}
            >
              {number}
            </div>
          );
        })}

        {/* Manecillas */}
        <div
          style={{
            ...styles.hand,
            ...styles.hourHand,
            transform: `rotate(${hourDeg}deg)`,
          }}
        />
        <div
          style={{
            ...styles.hand,
            ...styles.minuteHand,
            transform: `rotate(${minuteDeg}deg)`,
          }}
        />
        <div
          style={{
            ...styles.hand,
            ...styles.secondHand,
            transform: `rotate(${secondDeg}deg)`,
          }}
        />

        {/* Centro */}
        <div style={styles.center} />
      </div>
    </div>
  );
};

const styles = {
  clock: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: "50%",
    backgroundColor: "transparent",
    border: "4px solid #d4af37",
    margin: "auto",
    boxShadow: "0 0 0 #000",
  },
  hand: {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transformOrigin: "center 100%",
    borderRadius: 2,
  },
  hourHand: {
    width: 6,
    height: 30,
    marginLeft: -3,
    backgroundColor: "#efe",
    zIndex: 3,
  },
  minuteHand: {
    width: 4,
    height: 44,
    marginLeft: -2,
    backgroundColor: "#efe",
    zIndex: 2,
  },
  secondHand: {
    width: 2,
    height: 50,
    marginLeft: -1,
    backgroundColor: "#f44336",
    zIndex: 1,
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 8,
    height: 8,
    marginLeft: -4,
    marginTop: -4,
    backgroundColor: "#f44336",
    borderRadius: "50%",
    zIndex: 4,
  },
};

export default ClockAnalog;
