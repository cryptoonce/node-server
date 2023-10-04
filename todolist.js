const readline = require('readline-sync');

// Lista de tareas
let tasks = [];

// Función para mostrar la lista de tareas
function showTasks() {
    console.log('\nLista de tareas:');
    tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
    });
}

// Función para añadir una tarea
function addTask() {
    const description = readline.question('Ingrese la descripción de la tarea: ');
    const task = { description, completed: false };
    tasks.push(task);
    console.log('Tarea añadida con éxito.');
}

// Función para eliminar una tarea
function deleteTask() {
    showTasks();
    const index = readline.questionInt('Ingrese el número de la tarea que desea eliminar: ') - 1;

    if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada con éxito.');
    } else {
    console.log('Número de tarea no válido.');
    }
}

// Función para marcar una tarea como completada
function completeTask() {
    showTasks();
    const index = readline.questionInt('Ingrese el número de la tarea que desea completar: ') - 1;

    if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea marcada como completada.');
    } else {
    console.log('Número de tarea no válido.');
    }
}

// Función principal
function main() {
    while (true) {
    console.log('\n1. Mostrar tareas');
    console.log('2. Añadir tarea');
    console.log('3. Eliminar tarea');
    console.log('4. Completar tarea');
    console.log('5. Salir');

    const choice = readline.questionInt('Seleccione una opción: ');

    switch (choice) {
        case 1:
        showTasks();
        break;
        case 2:
        addTask();
        break;
        case 3:
        deleteTask();
        break;
        case 4:
        completeTask();
        break;
        case 5:
        console.log('Saliendo del programa.');
        process.exit(0);
        default:
        console.log('Opción no válida. Inténtelo de nuevo.');
    }
    }
}

// Ejecuta la función principal
main();
