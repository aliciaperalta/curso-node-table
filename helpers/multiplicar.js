const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      let resultado = base * i;
      consola += `${base} ${colors.red("*")} ${i} ${
        "=".magenta
      } ${resultado}\n`;
      salida += `${base} * ${i} = ${resultado}\n`;
    }

    if (listar) {
      console.log("=================".cyan);
      console.log("  Tabla del".cyan, base);
      console.log("=================".cyan);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  crearArchivo,
};
