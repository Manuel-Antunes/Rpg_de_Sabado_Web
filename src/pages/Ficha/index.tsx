import React, { useState } from "react";

import { Container, Attributes, Cabecalho } from "./styles";

const Ficha: React.FC = () => {
  const linhas = [
    { title: "CON", full: "Constituição" },
    { title: "FR", full: "Força" },
    { title: "DEX", full: "Destresa" },
    { title: "AGI", full: "Agilidade" },
    { title: "INT", full: "Inteligencia" },
    { title: "WILL", full: "Força de Vontade" },
    { title: "PER", full: "Percepção" },
    { title: "CAR", full: "Carisma" },
    { title: "LIN", full: "Lindeza" },
    { title: "BUN", full: "Buniteza" },
  ];
  function handleUpdate(
    e: React.ChangeEvent<HTMLInputElement>,
    limite: number,
    multiplicador: number
  ) {
    if (parseInt(e.target.value) < 0) {
      e.target.value = "0";
    }
    if (parseInt(e.target.value) > limite) {
      e.target.value = "" + limite;
    }
    const [a, index] = e.target.id.split(" ");
    try {
      const b = document.getElementById("percent " + index) as HTMLInputElement;
      b.value = b.value
        ? "" + parseInt(e.target.value) * multiplicador
        : "" + parseInt(e.target.value) * multiplicador;
    } catch (err) {
      console.log("asodasd");
    }
  }
  return (
    <Container>
      <h1>Ficha</h1>
      <Cabecalho>
        <div>
          <label htmlFor="name">Nome Do Personagem</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="name">Religião</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="name">Local de Nascimento</label>
          <input type="text" id="born" />
        </div>
        <div>
          <label htmlFor="name">Nome do Jogador</label>
          <input type="text" id="player" />
        </div>

        <div>
          <label htmlFor="name">Kit</label>
          <input type="text" id="kit" />
        </div>
        <div>
          <label htmlFor="name">Idiomas</label>
          <input type="text" id="idiomas" />
        </div>
        <div>
          <label htmlFor="name">Nivel</label>
          <input
            type="number"
            onChange={(e) => {
              handleUpdate(e, 15, 1);
            }}
            id="idiomas"
          />
        </div>
      </Cabecalho>
      <Attributes>
        {linhas.map((l, index) => (
          <tr key={index}>
            <td>
              <div>
                <h1>{l.title}</h1>
                <h2>{l.full}</h2>
              </div>
            </td>
            <td>
              <input
                onChange={(e) => {
                  handleUpdate(e, 100, 4);
                }}
                type="number"
                id={"value " + index}
              />
            </td>
            <td>
              <input
                onChange={(e) => {
                  handleUpdate(e, 100, 44);
                }}
                type="number"
                id={"mod " + index}
              />
            </td>
            <td>
              <input
                disabled
                type="number"
                name="percent"
                id={"percent " + index}
              />
            </td>
          </tr>
        ))}
      </Attributes>
    </Container>
  );
};

export default Ficha;
