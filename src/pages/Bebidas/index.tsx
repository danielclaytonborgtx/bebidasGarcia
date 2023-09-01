import * as React from "react";

export function Bebidas() {
  const [imageData, setImageData] = React.useState<string | null>(null);

  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);

      const blob = await imageCapture.takePhoto();
      const imageUrl = URL.createObjectURL(blob);

      setImageData(imageUrl);

      track.stop();
    } catch (error) {
      console.error("Erro ao capturar imagem:", error);
    }
  };

  return (
    <div>
      <h1>BEBIDAS GARCIA</h1>
      <h2>Bebidas</h2>
      {imageData && <img src={imageData} alt="Imagem capturada" />}
      <button onClick={handleCapture}>Adicionar Foto</button>
      <a href="/Category" className="button-link">
        voltar
      </a>
    </div>
  );
}
