import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostAlbum() {
  const navigate = useNavigate();
  const [albumData, setAlbumData] = useState({
    nome: "",
    ano: "",
    album_id: "",
  });

  const postNewAlbum = async () => {
    if (!albumData.nome || !albumData.ano || !albumData.album_id) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/Albums", albumData);
      alert("Novo álbum criado");
      navigate("/");
    } catch (error) {
      alert("Erro ao criar novo álbum");
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAlbumData((prevData) => ({
      ...prevData,
      [name]: name === "album_id" ? parseInt(value) : value,
    }));
  };

  {
    return (
      <div className="border-4 border-cor2 rounded-3xl p-4 text-center flex flex-col gap-4 lg:w-96">
        <h1>Adicione um novo álbum</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            postNewAlbum();
          }}
        >
          <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={albumData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
            <label>Ano:</label>
            <input
              type="text"
              name="ano"
              value={albumData.ano}
              onChange={handleChange}
            />
          </div>
          <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
            <label>Id:</label>
            <input
              type="number"
              name="album_id"
              value={albumData.album_id}
              onChange={handleChange}
            />
          </div>
          <button
            className="border-4 border-cor3 w-4/5 ml-6 rounded-2xl"
            type="submit"
          >
            Adicionar Álbum
          </button>
        </form>
      </div>
    );
  }
}
