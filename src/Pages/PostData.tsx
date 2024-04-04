import { useState } from "react";
import PostAlbum from "../Componentes/PostAlbum";
import PostSong from "../Componentes/PostSong";

export default function PostData() {
  const [dataType, setDataType] = useState(true);
  const textos = ["Adicione uma música", "Adicione um álbum"];
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
          <PostAlbum />
        </div>
      ) : (
        <div>
          <PostSong />
        </div>
      )}
    </div>
  );
}
