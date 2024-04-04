import axios from "axios";
import { useState } from "react";

interface AlbumData {
  nome: string;
  ano: number;
  album_id: number;
  musicas: Array<{ nome: string; trackid: number }>;
}

export default function SearchAlbum() {
  const [albumData, setAlbumData] = useState<AlbumData | null>(null);
  const [albumProcurado, setAlbumProcurado] = useState("");
  const [albumAchado, setAlbumAchado] = useState(false);
  const [albumNaoAchado, setAlbumNaoAchado] = useState(false);

  const handleInputChange = (event: any) => {
    setAlbumProcurado(event.target.value);
  };

  const AlbumSearchResult = async () => {
    if (!albumProcurado) {
      return;
    }

    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/Albums/${albumProcurado}`
      );

      if (res.data) {
        setAlbumData(res.data);

        setAlbumAchado(true);
        setAlbumNaoAchado(false);
      } else {
        setAlbumAchado(false);
        setAlbumNaoAchado(true);
      }
    } catch (error) {
      console.error("Erro ao buscar o álbum:", error);
      setAlbumAchado(false);
      setAlbumNaoAchado(true);
    }
  };

  return (
    <div className="text-center flex-col flex justify-center items-center gap-4 ">
      <h1>Álbuns:</h1>
      <div className="border-4 border-cor2 w-4/5 p-4 rounded-2xl flex flex-col justify-center items-center lg:w-2/5">
        <label className="mb-2">Nome do Álbum:</label>
        <input
          className="border-4 border-cor2 rounded-2xl mb-2 text-center"
          type="text"
          name="albumProcurado"
          value={albumProcurado}
          onChange={handleInputChange}
        />
        <button
          className="border-4 border-cor3 p-2 rounded-2xl text-sm"
          onClick={AlbumSearchResult}
        >
          Procurar
        </button>
      </div>
      <div>
        {albumAchado && albumData && (
          <div className="flex flex-col gap-2 border-4 border-cor2 w-72 rounded-lg p-4 lg:flex-row lg:w-full lg:gap-12">
            <div className="lg:w-96">
              <img className="rounded-3xl" src={`/Img1.jpg`} />
            </div>
            <div className="flex flex-col gap-4 lg:gap-28 lg:mt-10">
              <h1>Título:{albumData.nome}</h1>
              <p>Ano:{albumData.ano}</p>
              <p>Faixas:{albumData.musicas.length}</p>
            </div>
            <ul className="border-4 border-cor2 p-2 rounded-2xl flex-col flex gap-2 lg:gap-6 ">
              {albumData.musicas.map((musica, index) => (
                <li key={index}>
                  <span>Nome da faixa: {musica.nome}</span>
                  <span>
                    <br />
                  </span>
                  <span>ID da faixa: {musica.trackid}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {albumNaoAchado && (
        <div>
          <h1>Album nao encontrado </h1>
        </div>
      )}
    </div>
  );
}
