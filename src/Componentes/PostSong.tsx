import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostSong() {
  const navigate = useNavigate();
  const [addedSong, setAddedSong] = useState(false);
  const [songData, setSongData] = useState({
    nome: "",
    album_id: "",
    trackid: "",
  });

  const postNewSong = async () => {
    if (!songData.nome || !songData.album_id || !songData.trackid) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/Songs", songData);
      setAddedSong(true);
    } catch (error) {
      console.error("Erro ao adicionar nova música:", error);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setSongData((prevData) => ({ ...prevData, [name]: value }));
  };

  {
    return (
      <div className="border-4 border-cor2 p-4 rounded-3xl text-center flex flex-col gap-4 lg:w-96">
        <h1>Adicione uma nova música</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            postNewSong();
          }}
        >
          <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={songData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
            <label>Albumid:</label>
            <input
              type="text"
              name="album_id"
              value={songData.album_id}
              onChange={handleChange}
            />
          </div>
          <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
            <label>TrackId:</label>
            <input
              type="text"
              name="trackid"
              value={songData.trackid}
              onChange={handleChange}
            />
          </div>
          <button
            className="border-4 border-cor3 w-4/5 ml-6 rounded-2xl"
            type="submit"
          >
            Adionar Música
          </button>
        </form>
        {addedSong && (
          <div>
            <h2>Adicionado com sucesso</h2>
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
}
