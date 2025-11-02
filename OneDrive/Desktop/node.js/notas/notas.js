// notas.js
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // ← COLORES

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const TOTAL_MATERIAS = 4;
const materias = [];
let contador = 0;
let materiaActual = '';

// COLORES
const verde = chalk.bold.green;
const rojo = chalk.bold.red;
const azul = chalk.bold.cyan;
const amarillo = chalk.bold.yellow;
const morado = chalk.bold.magenta;
const blanco = chalk.white;

// === PEDIR MATERIA ===
function pedirMateria() {
  if (contador >= TOTAL_MATERIAS) {
    mostrarResultados();
    return;
  }

  const num = contador + 1;
  rl.question(azul(`\nMateria ${num}/4\n`) + blanco(`Nombre de la materia: `), (nombre) => {
    nombre = nombre.trim();
    if (!nombre) {
      console.log(rojo('✗ Nombre vacío. Intenta de nuevo.'));
      pedirMateria();
      return;
    }
    materiaActual = nombre;
    pedirNota();
  });
}

// === PEDIR NOTA ===
function pedirNota() {
  rl.question(amarillo(`Nota de "${materiaActual}" (0-5): `), (input) => {
    const nota = parseFloat(input.trim());
    if (isNaN(nota) || nota < 0 || nota > 5) {
      console.log(rojo('✗ Nota inválida. Debe ser entre 0 y 5.'));
      pedirNota();
      return;
    }

    materias.push({ materia: materiaActual, nota });
    const clase = clasificarNota(nota);
    const colorClase = clase === 'Notable' ? morado :
                       clase === 'Aprobado' ? verde :
                       clase === 'Aceptado' ? amarillo : rojo;

    console.log(verde(`✓ ${materiaActual}: ${nota.toFixed(1)} → `) + colorClase(clase));
    contador++;
    pedirMateria();
  });
}

// === CLASIFICAR NOTA ===
function clasificarNota(nota) {
  if (nota >= 5) return 'Notable';
  if (nota >= 4) return 'Aprobado';
  if (nota >= 3) return 'Aceptado';
  return 'Reprobado';
}

// === CALCULAR PROMEDIO ===
function calcularPromedio() {
  return materias.reduce((sum, m) => sum + m.nota, 0) / materias.length;
}

// === ESTADO DEL PERIODO ===
function estadoPeriodo(promedio) {
  return promedio >= 3.0 ? verde('APROBADO') : rojo('REPROBADO');
}

// === MOSTRAR RESULTADOS ===
function mostrarResultados() {
  const promedio = calcularPromedio();
  const estado = promedio >= 3.0 ? 'APROBADO' : 'REPROBADO';

  console.log(morado('\n' + '═'.repeat(50)));
  console.log(azul('        REPORTE FINAL DEL PERÍODO'));
  console.log(morado('═'.repeat(50)));

  materias.forEach(m => {
    const clase = clasificarNota(m.nota);
    const color = clase === 'Notable' ? morado :
                  clase === 'Aprobado' ? verde :
                  clase === 'Aceptado' ? amarillo : rojo;
    console.log(`${blanco(m.materia.padEnd(15))}: ${m.nota.toFixed(1)} → ${color(clase)}`);
  });

  console.log(morado('─'.repeat(40)));
  console.log(amarillo(`Promedio: ${promedio.toFixed(2)}`));
  console.log(estadoPeriodo(promedio));
  console.log(morado('═'.repeat(50)));

  guardarEnArchivo(promedio, estado);
}

// === GUARDAR EN ARCHIVO ===
function guardarEnArchivo(promedio, estado) {
  const ruta = path.join(process.cwd(), 'resultado_periodo.txt');
  let texto = '=== REPORTE FINAL ===\n\n';
  materias.forEach(m => {
    texto += `${m.materia}: ${m.nota.toFixed(1)} → ${clasificarNota(m.nota)}\n`;
  });
  texto += `\nPromedio: ${promedio.toFixed(2)}\n`;
  texto += `Estado: ${estado}\n`;
  texto += '=====================\n';

  fs.writeFile(ruta, texto, 'utf8', (err) => {
    if (err) {
      console.log(rojo('✗ Error al guardar archivo.'));
    } else {
      console.log(verde(`\nReporte guardado en:\n${ruta}`));
    }
    rl.close();
  });
}

// === INICIAR ===
console.log(morado('=== SISTEMA DE NOTAS - 4 MATERIAS ===\n'));
pedirMateria();