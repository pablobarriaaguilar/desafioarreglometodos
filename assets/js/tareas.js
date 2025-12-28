let tareas = [
    { id: 1, descripcion: 'Aprender JavaScript', estado: 'pendiente' },
    { id: 2, descripcion: 'Hacer la compra', estado: 'pendiente' },
    { id: 3, descripcion: 'Lavar el coche', estado: 'pendiente' }
];

const txtTarea = document.getElementById("txttarea");
const btnAgregar = document.getElementById("btnagregar");
const listContainer = document.getElementById("listatareas");

btnAgregar.addEventListener("click", () => {
    tareas.push({
        id: tareas.length + 1,
        descripcion: txtTarea.value,
        estado: 'pendiente'
    });
    listarTareas();
    actualizarContadores();
});

const listarTareas = () => {
    listContainer.innerHTML = '';

    tareas.forEach(tarea => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const buttonEliminar = document.createElement('button');
        
buttonEliminar.addEventListener('click', () => {
   
    eliminarTarea(tarea.id);
    listarTareas();
    actualizarContadores();
});

        buttonEliminar.textContent = 'Eliminar';
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.estado === 'completada';

        checkbox.addEventListener('change', () => {
            cambiarEstado(tarea.id, checkbox.checked ? 'completada' : 'pendiente');
            listarTareas();
        });

        li.textContent = `${tarea.descripcion} - ${tarea.estado} `;
        li.appendChild(checkbox);
        li.appendChild(buttonEliminar);
        listContainer.appendChild(li);

    });
    actualizarContadores()
};


const eliminarTarea = (id) => {
    tareas = tareas.filter(t => t.id !== id);
};

const cambiarEstado = (id, estado) => {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) tarea.estado = estado;
};

const actualizarContadores = () => {
    const total = tareas.length;
    const completadas = tareas.filter(t => t.estado === 'completada').length;   
    document.getElementById('total').textContent = total;
    document.getElementById('completadas').textContent = completadas;
}               



listarTareas();

