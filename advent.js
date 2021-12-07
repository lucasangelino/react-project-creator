const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
  const ovejasFiltradas = ovejas
    .filter((oveja) => oveja.color === "rojo")
    .filter((oveja) => /a|A|n|N/.test(oveja.name));
  return ovejasFiltradas;
}

console.log(contarOvejas(ovejas));
