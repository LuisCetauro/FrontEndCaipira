import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteAlbum() {
  const [albumNome, setAlbumNome] = useState("");
  const navigate = useNavigate();
  const [albumDeletado, setAlbumDeletado] = useState(false);

  const DeleteAlbum = async () => {
    try {
      await axios.delete(`http://localhost:8000/Albums/${albumNome}`);
      setAlbumDeletado(true);
    } catch (error) {
      alert("Erro ao deletar álbum");
    }
  };

  const handleChange = (event: any) => {
    setAlbumNome(event.target.value);
  };

  return (
    <div className="border-4 border-cor2 p-4 rounded-3xl text-center flex flex-col gap-4 lg:w-96">
      <h1>Deletar Álbum</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          DeleteAlbum();
        }}
      >
        <div className="border-4 border-cor2 p-1 flex flex-row gap-2 rounded-2xl">
          <label>Nome do Álbum:</label>
          <input type="text" value={albumNome} onChange={handleChange} />
        </div>
        <button
          className="border-4 border-cor3 w-4/5 ml-6 rounded-2xl"
          type="submit"
        >
          Deletar Álbum
        </button>
      </form>
      {albumDeletado && (
        <div>
          <h1>Album Deletado com Sucesso</h1>
          <button
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
