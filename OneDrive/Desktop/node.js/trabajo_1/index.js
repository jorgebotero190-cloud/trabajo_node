const fs = require("fs");
const readline = require("readline");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CARPETA = path.join(__dirname, "notas");

function verificarCarpeta() {
  try {
    if (fs.existsSync(CARPETA)) {
      fs.mkdirSync(CARPETA);
      console.log("1 Carpeta 'notas' creada correctamente.");
    }
  } catch (error) {
    console.error("Error al crear la carpeta:", error.message);
  }
}

function crearNota() {
  rl.question("Título de la nota: ", (titulo) => {
    rl.question(" Contenido de la nota: ", (contenido) => {
      try {
        if (!titulo.trim()) throw new Error("El título no puede estar vacío.");
        const nombreArchivo = path.join(CARPETA, `${titulo}`);
        fs.writeFileSync(nombreArchivo, contenido, "utf8");
        console.log(`✅ Nota '${titulo}' creada correctamente.`);
      } catch (error) {
        console.error("⚠️ Error al crear la nota:", error.message);
      } finally {
        mostrarMenu();
      }
    });
  });
}
function listarNotas() {
  try {
    const archivos = fs.readdirSync(CARPETA);
    if (archivos.length === 0) {
      console.log(" No hay notas guardadas.");
    } else {
      console.log("\n Notas guardadas:");
      archivos.forEach((archivo, i) => console.log(`${i + 1}. ${archivo}`));
    }
  } catch (error) {
    console.error(" Error al listar notas:", error.message);
  } finally {
    mostrarMenu();
  }
}function leerNota() {
  rl.question(" Ingrese el título de la nota que desea leer: ", (titulo) => {
    try {
      const ruta = path.join(CARPETA, `${titulo}.txt`);
      if (!fs.existsSync(ruta)) throw new Error("La nota no existe.");
      const contenido = fs.readFileSync(ruta, "utf8");
      console.log(`\n Contenido de '${titulo}':\n${contenido}\n`);
    } catch (error) {
      console.error(" Error al leer la nota:", error.message);
    } finally {
      mostrarMenu();
    }
  });
}
function eliminarNota() {
  rl.question(" Ingrese el título de la nota a eliminar: ", (titulo) => {
    try {
      const ruta = path.join(CARPETA, `${titulo}.txt`);
      if (!fs.existsSync(ruta)) throw new Error("La nota no existe.");
      fs.unlinkSync(ruta);
      console.log(` Nota '${titulo}' eliminada correctamente.`);
    } catch (error) {
      console.error("Error al eliminar la nota:", error.message);
    } finally {
      mostrarMenu();
    }
  });
}

function mostrarMenu() {
  console.log(`
==============================
     📔 GESTOR DE NOTAS SENA
==============================
1. Crear nueva nota
2. Listar notas
3. Leer una nota
4. Eliminar una nota
5. Salir
==============================
`);
  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        crearNota();
        break;
      case "2":
        listarNotas();
        break;
      case "3":
        leerNota();
        break;
      case "4":
        eliminarNota();
        break;
      case "5":
        console.log(" Cerrando el gestor de notas...");
        rl.close();
        break;
      default:
        console.log("Opción no válida.");
        mostrarMenu();
    }
  });
}

verificarCarpeta();
mostrarMenu();
