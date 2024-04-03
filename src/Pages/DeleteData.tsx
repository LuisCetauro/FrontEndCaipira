import { useState } from "react";
import DeleteAlbum from "../Componentes/DeleteAlbum";
import DeleteSong from "../Componentes/DeleteSong";

export default function DeleteData() {
  const [dataType, setDataType] = useState(true);
  const textos = ["Delete uma música", "Delete um Album"];
  const [text, setText] = useState(textos[0]);

  const handleTexto = () => {
    if (text == textos[0]) {
      setText(textos[1]);
    } else if (text == textos[1]) {
      setText(textos[0]);
    }
  };

  const handleDataPosted = () => {
    setDataType(!dataType);
    handleTexto();
  };

  return (
    <div className="flex flex-col gap-4 mt-2 justify-center items-center">
      <button
        className="border-4 border-cor3 w-3/5 rounded-2xl lg:w-1/5"
        onClick={handleDataPosted}
      >
        {text}
      </button>
      {dataType ? (
        <div>
          <DeleteAlbum />
        </div>
      ) : (
        <div>
          <DeleteSong />
        </div>
      )}
    </div>
  );
}
