import { useState } from "react";
import axios from "axios";

export default function SearchSong() {
  const [songData, setSongData] = useState<any>(null);
  const [songProcurado, setSongProcurado] = useState("");
  const [songAchado, setSongAchado] = useState(false);
  const [songNaoAchado, setSongNaoAChado] = useState(false);

  const inputSongProcurado = (event: any) => {
    setSongProcurado(event.target.value);
  };

  const SongSearchResult = async () => {
    if (!songProcurado) {
      return;
    }
    try {
      const song = await axios.get(
        `http://127.0.0.1:8000/Songs/${songProcurado}`
      );

      setSongData(song.data);
      setSongAchado(true);
      setSongNaoAChado(false);
    } catch (error) {
      setSongNaoAChado(true);
    }
  };

  return (
    <div className=" text-center flex-col flex justify-center items-center gap-4  ">
      <h1>Músicas</h1>
      <div className="border-4 border-cor2 w-4/5 p-4 rounded-2xl flex flex-col justify-center items-center lg:w-2/5">
        <label className="mb-2">Nome Da musica:</label>
        <input
          className="border-4 border-cor2 rounded-2xl mb-2 text-center"
          type="text"
          name="songProcurado"
          value={songProcurado}
          onChange={inputSongProcurado}
        />
        <button
          className="border-4 border-cor3 p-2 rounded-2xl text-sm"
          onClick={SongSearchResult}
        >
          Procurar
        </button>
      </div>
      <div>
        {songAchado && (
          <div>
            {songData.data.map((song: any, index: any) => (
              <div
                key={index}
                className="flex flex-col gap-2 border-4 border-cor2 w-40 mb-4 p-2 rounded-2xl lg:w-96 lg:gap-8"
              >
                <h1 className="lg:mt-8">Música: {song.nome}</h1>
                <p>Album: {song.album.nome}</p>
                <p className="lg:mb-8">TrackID: {song.trackid}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {songNaoAchado && (
        <div>
          <h1>Música não encontrada</h1>
        </div>
      )}
    </div>
  );
}
