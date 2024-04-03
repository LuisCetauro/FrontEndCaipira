import axios from "axios";
import { useEffect, useState } from "react";
import Album from "./Album";

interface AlbumType {
  album_id: number;
}

export default function GetAlbums() {
  const [albums, setAlbums] = useState<AlbumType[] | null>(null);

  const pegarTodosAlbums = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/Albums");
      const respostaFiltrada = response.data.data;

      setAlbums(respostaFiltrada);
    } catch (error) {
      console.error("Erro ao buscar dados dos álbuns:", error);
    }
  };

  useEffect(() => {
    pegarTodosAlbums();
  }, []);

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h2>Albums:</h2>
      <button
        className="border-4 border-cor3 w-2/5 rounded-2xl p-1 lg:w-1/5"
        onClick={pegarTodosAlbums}
      >
        Refresh
      </button>
      {albums &&
        albums.map((album: any) => (
          <div key={album.album_id}>
            <Album key={album.album_id} Album={album} />
          </div>
        ))}
    </div>
  );
}
