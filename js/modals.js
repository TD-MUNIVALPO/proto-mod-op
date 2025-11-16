/**
 * MODAL MANAGER - Prototipo Módulo Operaciones
 * Sistema de gestión de modales para la página de detalle
 */

class ModalManager {
  constructor() {
    this.modales = new Map();
    this.modalActual = null;
    this.inicializar();
  }

  /**
   * Inicializa el sistema de modales
   */
  inicializar() {
    // Escuchar tecla ESC para cerrar modales
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalActual) {
        this.cerrar(this.modalActual);
      }
    });

    // Cerrar modal al hacer clic en el overlay
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay') && this.modalActual) {
        this.cerrar(this.modalActual);
      }
    });
  }

  /**
   * Registra un modal
   */
  registrar(id, opciones = {}) {
    const config = {
      onAbrir: null,
      onCerrar: null,
      cerrarAlGuardar: true,
      validarAntesDeCerrar: null,
      ...opciones
    };

    this.modales.set(id, config);
  }

  /**
   * Abre un modal
   */
  abrir(id, datos = {}) {
    const modal = document.getElementById(id);
    if (!modal) {
      console.error(`Modal ${id} no encontrado`);
      return;
    }

    const config = this.modales.get(id);

    // Ejecutar callback onAbrir si existe
    if (config?.onAbrir) {
      config.onAbrir(datos);
    }

    // Mostrar modal
    modal.classList.add('active');
    this.modalActual = id;

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';

    // Focus en primer input si existe
    setTimeout(() => {
      const primerInput = modal.querySelector('input, textarea, select');
      if (primerInput) {
        primerInput.focus();
      }
    }, 100);
  }

  /**
   * Cierra un modal
   */
  cerrar(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    const config = this.modales.get(id);

    // Validar antes de cerrar si existe validación
    if (config?.validarAntesDeCerrar) {
      const puedeCerrar = config.validarAntesDeCerrar();
      if (!puedeCerrar) return;
    }

    // Ejecutar callback onCerrar si existe
    if (config?.onCerrar) {
      config.onCerrar();
    }

    // Ocultar modal
    modal.classList.remove('active');
    this.modalActual = null;

    // Restaurar scroll del body
    document.body.style.overflow = '';
  }

  /**
   * Cierra todos los modales
   */
  cerrarTodos() {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
    });
    this.modalActual = null;
    document.body.style.overflow = '';
  }

  /**
   * Verifica si hay un modal abierto
   */
  hayModalAbierto() {
    return this.modalActual !== null;
  }
}

// ============================================
// FUNCIONES ESPECÍFICAS PARA CADA MODAL
// ============================================

/**
 * Datos del modal activo (para uso en formularios)
 */
const modalData = {
  solicitudId: null,
  derivacionId: null,
  validacionId: null,
  etapaId: null
};

/**
 * Inicializa los modales de la página de detalle
 */
function inicializarModalesDetalle(solicitudId) {
  const modalManager = new ModalManager();

  modalData.solicitudId = solicitudId;

  // ========== MODAL EDITAR SOLICITUD ==========
  modalManager.registrar('modal-editar', {
    onAbrir: (datos) => {
      const solicitudBase = mockData.solicitudes.find(s => s.idSolicitud === solicitudId);
      if (!solicitudBase) return;
      const solicitud = getSolicitudEnriquecida(solicitudBase);
      if (!solicitud) return;

      // Llenar formulario
      document.getElementById('edit-descripcion').value = solicitud.Descripcion || '';
      document.getElementById('edit-observacion').value = solicitud.Observacion || '';
      document.getElementById('edit-latitud').value = solicitud.LatitudGPS || '';
      document.getElementById('edit-longitud').value = solicitud.LongitudGPS || '';
    }
  });

  // ========== MODAL DERIVAR ==========
  modalManager.registrar('modal-derivar', {
    onAbrir: () => {
      // Llenar select de departamentos
      const select = document.getElementById('derivar-departamento');
      select.innerHTML = '<option value="">Seleccione departamento...</option>';

      mockData.departamentos.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.nombre;
        select.appendChild(option);
      });

      // Llenar select de funcionarios
      const selectFunc = document.getElementById('derivar-funcionario');
      selectFunc.innerHTML = '<option value="">Seleccione funcionario...</option>';

      mockData.funcionarios.forEach(func => {
        const option = document.createElement('option');
        option.value = func.id;
        option.textContent = `${func.nombres} ${func.apellidoPaterno}`;
        selectFunc.appendChild(option);
      });
    }
  });

  // ========== MODAL VALIDAR ==========
  modalManager.registrar('modal-validar', {
    onAbrir: () => {
      // Resetear formulario
      document.getElementById('validar-aprobado').checked = true;
      document.getElementById('validar-observacion').value = '';
    }
  });

  // ========== MODAL CAMBIAR ESTADO ==========
  modalManager.registrar('modal-cambiar-estado', {
    onAbrir: () => {
      const solicitudBase = mockData.solicitudes.find(s => s.idSolicitud === solicitudId);
      if (!solicitudBase) return;
      const solicitud = getSolicitudEnriquecida(solicitudBase);
      if (!solicitud) return;

      // Llenar select de estados
      const select = document.getElementById('nuevo-estado');
      select.innerHTML = '';

      const estados = [
        { value: 0, label: 'Recepcionado' },
        { value: 1, label: 'En Proceso' },
        { value: 2, label: 'Finalizado' },
        { value: 3, label: 'Rechazado' },
        { value: 4, label: 'Derivado' }
      ];

      estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.value;
        option.textContent = estado.label;
        option.selected = estado.value === solicitud.Estado;
        select.appendChild(option);
      });
    }
  });

  // ========== MODAL CAMBIAR ETAPA ==========
  modalManager.registrar('modal-cambiar-etapa', {
    onAbrir: () => {
      const solicitudBase = mockData.solicitudes.find(s => s.idSolicitud === solicitudId);
      if (!solicitudBase) return;
      const solicitud = getSolicitudEnriquecida(solicitudBase);
      if (!solicitud) return;

      // Llenar select de etapas
      const select = document.getElementById('nueva-etapa');
      select.innerHTML = '';

      const etapas = [
        { value: 0, label: 'Ingreso' },
        { value: 1, label: 'Validación' },
        { value: 2, label: 'Supervisión' },
        { value: 3, label: 'Ejecución' },
        { value: 4, label: 'Cierre' },
        { value: 5, label: 'Archivado' }
      ];

      etapas.forEach(etapa => {
        const option = document.createElement('option');
        option.value = etapa.value;
        option.textContent = etapa.label;
        option.selected = etapa.value === solicitud.EtapaSolicitud;
        select.appendChild(option);
      });
    }
  });

  // ========== MODAL ADJUNTAR ARCHIVO ==========
  modalManager.registrar('modal-adjuntar', {
    onAbrir: () => {
      // Resetear formulario
      document.getElementById('archivo-input').value = '';
      document.getElementById('archivo-descripcion').value = '';
      document.getElementById('archivo-preview').innerHTML = '';
    }
  });

  // ========== MODAL AGREGAR ETAPA ==========
  modalManager.registrar('modal-agregar-etapa', {
    onAbrir: () => {
      // Llenar select de tipos de etapa
      const select = document.getElementById('etapa-tipo');
      select.innerHTML = '<option value="">Seleccione tipo de etapa...</option>';

      mockData.tiposEtapa.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.id;
        option.textContent = tipo.nombre;
        select.appendChild(option);
      });

      // Resetear otros campos
      document.getElementById('etapa-observacion').value = '';
      document.getElementById('etapa-fecha-inicio').value = '';
      document.getElementById('etapa-fecha-fin').value = '';
    }
  });

  // ========== MODAL VER MAPA ==========
  modalManager.registrar('modal-ver-mapa', {
    onAbrir: () => {
      const solicitudBase = mockData.solicitudes.find(s => s.idSolicitud === solicitudId);
      if (!solicitudBase) return;
      const solicitud = getSolicitudEnriquecida(solicitudBase);
      if (!solicitud || !solicitud.LatitudGPS || !solicitud.LongitudGPS) return;

      // Inicializar mapa (se implementará en maps.js)
      setTimeout(() => {
        if (typeof inicializarMapaModal === 'function') {
          inicializarMapaModal(solicitud.LatitudGPS, solicitud.LongitudGPS);
        }
      }, 100);
    }
  });

  // ========== MODAL HISTORIAL ==========
  modalManager.registrar('modal-historial', {
    onAbrir: () => {
      cargarHistorial(solicitudId);
    }
  });

  // ========== MODAL ELIMINAR ==========
  modalManager.registrar('modal-eliminar', {
    onAbrir: () => {
      // Mostrar información de la solicitud a eliminar
      const solicitudBase = mockData.solicitudes.find(s => s.idSolicitud === solicitudId);
      if (!solicitudBase) return;
      const solicitud = getSolicitudEnriquecida(solicitudBase);
      if (solicitud) {
        document.getElementById('eliminar-info').innerHTML = `
          <p><strong>ID:</strong> ${solicitud.SolicitudId}</p>
          <p><strong>Descripción:</strong> ${solicitud.Descripcion}</p>
          <p><strong>Estado:</strong> ${getEstadoNombre(solicitud.Estado)}</p>
        `;
      }
    }
  });

  return modalManager;
}

/**
 * Carga el historial de una solicitud
 */
function cargarHistorial(solicitudId) {
  const container = document.getElementById('historial-container');
  if (!container) return;

  const eventos = [];

  // Agregar creación de solicitud
  const solicitudBase = mockData.solicitudes.find(s => s.idSolicitud === solicitudId);
  if (solicitudBase) {
    eventos.push({
      fecha: solicitudBase.fechaCreacion,
      tipo: 'creacion',
      titulo: 'Solicitud creada',
      descripcion: `Creada por ${solicitudBase.ciudadanoId ? 'ciudadano' : 'funcionario'}`,
      icono: '📝'
    });
  }

  // Agregar derivaciones
  const derivaciones = mockData.derivaciones.filter(d => d.solicitudId === solicitudId);
  derivaciones.forEach(der => {
    const deptDestino = mockData.departamentos.find(d => d.id === der.departamentoDestinoId);
    eventos.push({
      fecha: der.fechaCreacion,
      tipo: 'derivacion',
      titulo: 'Solicitud derivada',
      descripcion: `Derivada a ${deptDestino?.nombre || 'Desconocido'}. ${der.observacionDerivacion}`,
      icono: '➡️'
    });
  });

  // Agregar validaciones (relacionadas a través de derivaciones)
  const derivacionesIds = derivaciones.map(d => d.derivacionId);
  const validaciones = mockData.validaciones.filter(v => derivacionesIds.includes(v.derivacionId));
  validaciones.forEach(val => {
    eventos.push({
      fecha: val.fechaCreacion,
      tipo: val.validacionEstado ? 'validacion-aprobada' : 'validacion-rechazada',
      titulo: val.validacionEstado ? 'Validación aprobada' : 'Validación rechazada',
      descripcion: val.observacionValidacion,
      icono: val.validacionEstado ? '✅' : '❌'
    });
  });

  // Agregar etapas (relacionadas a través de validaciones)
  const validacionesIds = validaciones.map(v => v.validacionId);
  const etapas = mockData.etapas.filter(e => validacionesIds.includes(e.validacionId));
  etapas.forEach(etapa => {
    const tipo = mockData.tiposEtapa.find(t => t.id === etapa.tipoEtapaId);
    eventos.push({
      fecha: etapa.fechaCreacion,
      tipo: 'etapa',
      titulo: `Etapa: ${tipo?.nombre || 'Desconocida'}`,
      descripcion: etapa.observacion,
      icono: '🔄'
    });
  });

  // Ordenar eventos por fecha (más reciente primero)
  eventos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  // Renderizar historial
  container.innerHTML = eventos.map(evento => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-title">${evento.icono} ${evento.titulo}</span>
          <span class="timeline-date">${formatDate(evento.fecha)}</span>
        </div>
        <div class="timeline-body">${evento.descripcion}</div>
      </div>
    </div>
  `).join('');
}

/**
 * Guarda cambios de edición de solicitud
 */
function guardarEdicionSolicitud() {
  const descripcion = document.getElementById('edit-descripcion').value;
  const observacion = document.getElementById('edit-observacion').value;
  const latitud = document.getElementById('edit-latitud').value;
  const longitud = document.getElementById('edit-longitud').value;

  // Validar
  if (!descripcion.trim()) {
    mostrarNotificacion('La descripción es obligatoria', 'error');
    return;
  }

  if (latitud && longitud && !validarCoordenadas(latitud, longitud)) {
    mostrarNotificacion('Las coordenadas GPS no son válidas', 'error');
    return;
  }

  // Simular guardado
  console.log('Guardando solicitud:', {
    descripcion,
    observacion,
    latitud,
    longitud
  });

  mostrarNotificacion('Solicitud actualizada correctamente', 'success');

  // Cerrar modal y recargar
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

/**
 * Guarda derivación
 */
function guardarDerivacion() {
  const departamentoId = document.getElementById('derivar-departamento').value;
  const funcionarioId = document.getElementById('derivar-funcionario').value;
  const observacion = document.getElementById('derivar-observacion').value;

  // Validar
  if (!departamentoId) {
    mostrarNotificacion('Debe seleccionar un departamento', 'error');
    return;
  }

  if (!funcionarioId) {
    mostrarNotificacion('Debe seleccionar un funcionario', 'error');
    return;
  }

  // Simular guardado
  console.log('Guardando derivación:', {
    departamentoId,
    funcionarioId,
    observacion
  });

  mostrarNotificacion('Solicitud derivada correctamente', 'success');

  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

/**
 * Guarda validación
 */
function guardarValidacion() {
  const aprobado = document.getElementById('validar-aprobado').checked;
  const observacion = document.getElementById('validar-observacion').value;

  if (!observacion.trim()) {
    mostrarNotificacion('Debe ingresar una observación', 'error');
    return;
  }

  console.log('Guardando validación:', { aprobado, observacion });

  mostrarNotificacion(`Solicitud ${aprobado ? 'aprobada' : 'rechazada'} correctamente`, 'success');

  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

/**
 * Guarda cambio de estado
 */
function guardarCambioEstado() {
  const nuevoEstado = document.getElementById('nuevo-estado').value;
  const observacion = document.getElementById('estado-observacion').value;

  console.log('Cambiando estado:', { nuevoEstado, observacion });

  mostrarNotificacion('Estado actualizado correctamente', 'success');

  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

/**
 * Guarda cambio de etapa
 */
function guardarCambioEtapa() {
  const nuevaEtapa = document.getElementById('nueva-etapa').value;
  const observacion = document.getElementById('etapa-cambio-observacion').value;

  console.log('Cambiando etapa:', { nuevaEtapa, observacion });

  mostrarNotificacion('Etapa actualizada correctamente', 'success');

  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

/**
 * Guarda archivo adjunto
 */
function guardarArchivo() {
  const archivo = document.getElementById('archivo-input').files[0];
  const descripcion = document.getElementById('archivo-descripcion').value;

  if (!archivo) {
    mostrarNotificacion('Debe seleccionar un archivo', 'error');
    return;
  }

  console.log('Guardando archivo:', { archivo: archivo.name, descripcion });

  mostrarNotificacion('Archivo adjuntado correctamente', 'success');

  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

/**
 * Guarda nueva etapa
 */
function guardarNuevaEtapa() {
  const tipoEtapaId = document.getElementById('etapa-tipo').value;
  const observacion = document.getElementById('etapa-observacion').value;
  const fechaInicio = document.getElementById('etapa-fecha-inicio').value;
  const fechaFin = document.getElementById('etapa-fecha-fin').value;

  if (!tipoEtapaId) {
    mostrarNotificacion('Debe seleccionar un tipo de etapa', 'error');
    return;
  }

  console.log('Guardando etapa:', { tipoEtapaId, observacion, fechaInicio, fechaFin });

  mostrarNotificacion('Etapa creada correctamente', 'success');

  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

/**
 * Confirma eliminación de solicitud
 */
function confirmarEliminacion() {
  console.log('Eliminando solicitud:', modalData.solicitudId);

  mostrarNotificacion('Solicitud eliminada correctamente', 'success');

  setTimeout(() => {
    window.location.href = '../bandeja/index.html';
  }, 1000);
}

/**
 * Preview de archivo seleccionado
 */
function previewArchivo(input) {
  const preview = document.getElementById('archivo-preview');
  if (!preview) return;

  const archivo = input.files[0];
  if (!archivo) {
    preview.innerHTML = '';
    return;
  }

  const size = (archivo.size / 1024 / 1024).toFixed(2);
  preview.innerHTML = `
    <div class="alert alert-info">
      <strong>📎 ${archivo.name}</strong><br>
      Tamaño: ${size} MB<br>
      Tipo: ${archivo.type || 'Desconocido'}
    </div>
  `;
}
