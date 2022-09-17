import { useState, useEffect } from "react";
import QRCode from "qrcode";

function App({ text }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(text).then(setSrc);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center h-screen w-full justify-center bg-slate-800">
        <img src={src} />
      </div>
    </>
  );
}

export default App;
