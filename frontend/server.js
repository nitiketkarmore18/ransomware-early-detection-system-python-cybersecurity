// server.js
const io = require("socket.io")(5000, {
  cors: { origin: "http://localhost:3000" }
});

console.log("✅ Mock ransomware detection server running on port 5000");

// Emit fake entropy data every 2 seconds
setInterval(() => {
  const entropy = (Math.random() * 8).toFixed(2);
  io.emit("entropy_update", { time: Date.now(), entropy });
  console.log("Sent entropy_update:", entropy);
}, 2000);

// Emit fake alert data every 5 seconds
setInterval(() => {
  const alert = {
    name: ["ransomware.exe", "trojan.ps1", "encryptor.bat"][Math.floor(Math.random() * 3)],
    pid: Math.floor(Math.random() * 9999),
    write_speed: (Math.random() * 1024).toFixed(2),
    open_files: Math.floor(Math.random() * 50),
    entropy: (Math.random() * 8).toFixed(2),
    file: `C:/Users/test/Documents/${Math.random().toString(36).substring(2, 8)}.tmp`
  };
  io.emit("alert_event", alert);
  console.log("Sent alert_event:", alert);
}, 5000);
