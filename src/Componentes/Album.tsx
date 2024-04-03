interface Props {
  Album: {
    nome: string;
    ano: string;
    album_id: number;
    musicas: { nome: string; album: any; trackid: number }[];
  };
}

export default function Album(props: Props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center border-4 border-cor2 p-4 rounded-3xl lg:flex-row lg:gap-8">
      <div>
        <img className="w-60 rounded-3xl lg:w-96" src="/Img1.jpg" />
      </div>
      <div className="flex flex-col lg:gap-12">
        <p>
          Título:
          <br />
          {props.Album.nome}
        </p>
        <p>
          Ano de lançamento:
          <br />
          {props.Album.ano}
        </p>
        <p>Album ID: {props.Album.album_id}</p>
        <p>Faixas: {props.Album.musicas.length}</p>
      </div>
      <ul className="border-4 border-cor2 p-2 rounded-2xl flex-col flex gap-2">
        {props.Album.musicas.map((musica, index) => (
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
  );
}
