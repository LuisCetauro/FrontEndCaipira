import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteSong() {
  const [songData, setSongData] = useState({
    nomeAlbum: "",
    nomeSong: "",
  });
  const [songDeletado, setSongDeletado] = useState(false);

  const navigate = useNavigate();

  const DeleteSong = async () => {
    try {
      await axios.delete(
        `http://localhost:8000/Albums/${songData.nomeAlbum}/Songs/${songData.nomeSong}`,
        {
          data: songData,
        }
      );
      setSongDeletado(true);
    } catch (error) {
      alert("Erro ao deletar música");
    }
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    DeleteSong();
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setSongData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="border-4 border-cor2 p-4 rounded-3xl text-center flex flex-col gap-4 lg:w-96">
      <h1>Deletar Música</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
          <label>Nome do Álbum:</label>
          <input
            type="text"
            name="nomeAlbum"
            value={songData.nomeAlbum}
            onChange={handleChange}
          />
        </div>
        <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
          <label>Nome da Música:</label>
          <input
            type="text"
            name="nomeSong"
            value={songData.nomeSong}
            onChange={handleChange}
          />
        </div>
        <button
          className="border-4 border-cor3 w-4/5 ml-6 rounded-2xl"
          type="submit"
        >
          Deletar Música
        </button>
      </form>
      {songDeletado && (
        <div>
          <h1>Música deletada com Sucesso</h1>
          <button
            className="mt-4 border-4 border-cor3 p-3 rounded-2xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
}
