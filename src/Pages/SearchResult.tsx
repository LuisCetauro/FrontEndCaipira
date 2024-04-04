import { useState } from "react";
import SearchAlbum from "../Componentes/SearchAlbum";
import SearchSong from "../Componentes/SearchMusic";

export default function SearchData() {
  const [dataType, setDataType] = useState(true);
  const textos = ["Procurando uma música?", "Procurando um álbum?"];
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
    <div className="flex flex-col mt-4 gap-4 pb-20 ">
      <div className="flex items-center justify-center">
        <button
          className="border-4 border-cor3 w-3/5 rounded-2xl lg:w-1/5"
          onClick={handleDataPosted}
        >
          {text}
        </button>
      </div>
      {dataType ? (
        <div>
          <SearchAlbum />
        </div>
      ) : (
        <div>
          <SearchSong />
        </div>
      )}
    </div>
  );
}
