import { useEffect, useRef } from "react";

export default function ChromaKeyImage({ src, alt, className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      
      // Draw image
      ctx.drawImage(img, 0, 0);
      
      // Get pixels
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Loop pixels: [R, G, B, A]
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Match the pure red background (e.g. high Red, low Green & Blue)
        if (r > 130 && g < 75 && b < 75) {
          data[i + 3] = 0; // set alpha (A) to 0 (make fully transparent)
        }
      }
      
      // Put pixels back
      ctx.putImageData(imgData, 0, 0);
    };
  }, [src]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className} 
      style={{ display: "block" }} 
      role="img" 
      aria-label={alt} 
    />
  );
}
