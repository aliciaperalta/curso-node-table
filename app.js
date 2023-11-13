const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();

// console.log(process.argv);

// console.log("base: yargs ", argv.b);
// const [, , arg3 = "num=5"] = process.argv;
// const [, num = 5] = arg3.split("=");

crearArchivo(argv.b, argv.l, argv.h)
  .then((crearArchivo) => console.log(crearArchivo.rainbow, "creada"))
  .catch((err) => console.log(err));
