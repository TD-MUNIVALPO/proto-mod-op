/**
 * UTILITIES - Prototipo Módulo Operaciones
 * Funciones auxiliares para manipulación de datos, formateo y validación
 */

// ============================================
// FORMATEO DE FECHAS
// ============================================

/**
 * Formatea una fecha al formato chileno (DD/MM/YYYY HH:mm)
 */
function formatDate(date, includeTime = true) {
  if (!date) return '-';

  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  if (!includeTime) {
    return `${day}/${month}/${year}`;
  }

  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

/**
 * Calcula los días transcurridos desde una fecha
 */
function diasTranscurridos(fecha) {
  const inicio = new Date(fecha);
  const ahora = new Date();
  const diff = ahora - inicio;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/**
 * Retorna el tiempo transcurrido en formato humano
 */
function tiempoTranscurrido(fecha) {
  const dias = diasTranscurridos(fecha);

  if (dias === 0) return 'Hoy';
  if (dias === 1) return 'Ayer';
  if (dias < 7) return `Hace ${dias} días`;
  if (dias < 30) {
    const semanas = Math.floor(dias / 7);
    return `Hace ${semanas} ${semanas === 1 ? 'semana' : 'semanas'}`;
  }
  if (dias < 365) {
    const meses = Math.floor(dias / 30);
    return `Hace ${meses} ${meses === 1 ? 'mes' : 'meses'}`;
  }
  const anos = Math.floor(dias / 365);
  return `Hace ${anos} ${anos === 1 ? 'año' : 'años'}`;
}

// ============================================
// FORMATEO DE ESTADOS Y ETAPAS
// ============================================

/**
 * Obtiene la clase CSS para un estado de solicitud
 */
function getEstadoClass(estado) {
  const estados = {
    0: 'estado-recepcionado',  // Recepcionado
    1: 'estado-en-proceso',     // EnProceso
    2: 'estado-finalizado',     // Finalizado
    3: 'estado-rechazado',      // Rechazado
    4: 'estado-derivado'        // Derivado
  };
  return estados[estado] || 'estado-recepcionado';
}

/**
 * Obtiene el nombre de un estado de solicitud
 */
function getEstadoNombre(estado) {
  const estados = {
    0: 'Recepcionado',
    1: 'En Proceso',
    2: 'Finalizado',
    3: 'Rechazado',
    4: 'Derivado'
  };
  return estados[estado] || 'Desconocido';
}

/**
 * Obtiene la clase CSS para una etapa de solicitud
 */
function getEtapaClass(etapa) {
  const etapas = {
    0: 'etapa-ingreso',       // Ingreso
    1: 'etapa-validacion',    // Validacion
    2: 'etapa-supervision',   // Supervision
    3: 'etapa-ejecucion',     // Ejecucion
    4: 'etapa-cierre',        // Cierre
    5: 'etapa-archivado'      // Archivado
  };
  return etapas[etapa] || 'etapa-ingreso';
}

/**
 * Obtiene el nombre de una etapa de solicitud
 */
function getEtapaNombre(etapa) {
  const etapas = {
    0: 'Ingreso',
    1: 'Validación',
    2: 'Supervisión',
    3: 'Ejecución',
    4: 'Cierre',
    5: 'Archivado'
  };
  return etapas[etapa] || 'Desconocido';
}

/**
 * Obtiene el nombre de un tipo de ingreso
 */
function getTipoIngresoNombre(tipo) {
  const tipos = {
    0: 'Presencial',
    1: 'En Línea',
    2: 'Telefónico'
  };
  return tipos[tipo] || 'Desconocido';
}

/**
 * Obtiene el icono para un tipo de ingreso
 */
function getTipoIngresoIcon(tipo) {
  const iconos = {
    0: '🏢',  // Presencial
    1: '💻',  // En Línea
    2: '📞'   // Telefónico
  };
  return iconos[tipo] || '📝';
}

/**
 * Obtiene el nombre de un tipo de ubicación
 */
function getTipoUbicacionNombre(tipo) {
  const tipos = {
    0: 'GPS',
    1: 'Dirección',
    2: 'Sin Ubicación'
  };
  return tipos[tipo] || 'Desconocido';
}

// ============================================
// FORMATEO DE RUT CHILENO
// ============================================

/**
 * Formatea un RUT chileno (XX.XXX.XXX-X)
 */
function formatRut(rut) {
  if (!rut) return '-';

  // Remover puntos y guión existentes
  rut = rut.replace(/\./g, '').replace(/-/g, '');

  // Separar número y dígito verificador
  const dv = rut.slice(-1);
  let numero = rut.slice(0, -1);

  // Formatear número con puntos
  numero = numero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${numero}-${dv}`;
}

/**
 * Valida un RUT chileno
 */
function validarRut(rut) {
  if (!rut) return false;

  // Limpiar RUT
  rut = rut.replace(/\./g, '').replace(/-/g, '');

  // Separar número y dígito verificador
  const dv = rut.slice(-1).toUpperCase();
  const numero = parseInt(rut.slice(0, -1), 10);

  if (isNaN(numero)) return false;

  // Calcular dígito verificador
  let suma = 0;
  let multiplo = 2;

  let numeroStr = String(numero);
  for (let i = numeroStr.length - 1; i >= 0; i--) {
    suma += parseInt(numeroStr.charAt(i)) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  const resto = suma % 11;
  const dvCalculado = resto === 0 ? '0' : resto === 1 ? 'K' : String(11 - resto);

  return dv === dvCalculado;
}

// ============================================
// FORMATEO DE NÚMEROS Y MONEDA
// ============================================

/**
 * Formatea un número con separadores de miles
 */
function formatNumber(numero) {
  if (numero === null || numero === undefined) return '-';
  return numero.toLocaleString('es-CL');
}

/**
 * Formatea un monto en pesos chilenos
 */
function formatCurrency(monto) {
  if (monto === null || monto === undefined) return '-';
  return `$${formatNumber(monto)}`;
}

// ============================================
// VALIDACIONES
// ============================================

/**
 * Valida un email
 */
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida un teléfono chileno
 */
function validarTelefono(telefono) {
  // Remover espacios y caracteres especiales
  const limpio = telefono.replace(/\s/g, '').replace(/[-()+]/g, '');

  // Validar formato chileno (+56 9 XXXX XXXX)
  return /^(\+?56)?9\d{8}$/.test(limpio);
}

/**
 * Valida coordenadas GPS
 */
function validarCoordenadas(lat, lng) {
  const latitud = parseFloat(lat);
  const longitud = parseFloat(lng);

  return !isNaN(latitud) &&
         !isNaN(longitud) &&
         latitud >= -90 && latitud <= 90 &&
         longitud >= -180 && longitud <= 180;
}

// ============================================
// BÚSQUEDA Y FILTRADO
// ============================================

/**
 * Filtra solicitudes por múltiples criterios
 */
function filtrarSolicitudes(solicitudes, filtros) {
  return solicitudes.filter(solicitud => {
    // Filtro por estado
    if (filtros.estado !== undefined && filtros.estado !== null && filtros.estado !== '') {
      if (solicitud.Estado !== parseInt(filtros.estado)) return false;
    }

    // Filtro por etapa
    if (filtros.etapa !== undefined && filtros.etapa !== null && filtros.etapa !== '') {
      if (solicitud.EtapaSolicitud !== parseInt(filtros.etapa)) return false;
    }

    // Filtro por departamento
    if (filtros.departamento && solicitud.DepartamentoId !== parseInt(filtros.departamento)) {
      return false;
    }

    // Filtro por texto (busca en descripción, nombre solicitante, etc.)
    if (filtros.texto) {
      const texto = filtros.texto.toLowerCase();
      const descripcion = solicitud.Descripcion?.toLowerCase() || '';
      const id = String(solicitud.SolicitudId);

      if (!descripcion.includes(texto) && !id.includes(texto)) {
        return false;
      }
    }

    // Filtro por rango de fechas
    if (filtros.fechaDesde) {
      const fechaSolicitud = new Date(solicitud.FechaCreacion);
      const fechaDesde = new Date(filtros.fechaDesde);
      if (fechaSolicitud < fechaDesde) return false;
    }

    if (filtros.fechaHasta) {
      const fechaSolicitud = new Date(solicitud.FechaCreacion);
      const fechaHasta = new Date(filtros.fechaHasta);
      fechaHasta.setHours(23, 59, 59);
      if (fechaSolicitud > fechaHasta) return false;
    }

    return true;
  });
}

/**
 * Ordena solicitudes por un campo
 */
function ordenarSolicitudes(solicitudes, campo, orden = 'desc') {
  return [...solicitudes].sort((a, b) => {
    let valorA, valorB;

    switch(campo) {
      case 'id':
        valorA = a.SolicitudId;
        valorB = b.SolicitudId;
        break;
      case 'fecha':
        valorA = new Date(a.FechaCreacion);
        valorB = new Date(b.FechaCreacion);
        break;
      case 'estado':
        valorA = a.Estado;
        valorB = b.Estado;
        break;
      case 'etapa':
        valorA = a.EtapaSolicitud;
        valorB = b.EtapaSolicitud;
        break;
      default:
        return 0;
    }

    if (orden === 'asc') {
      return valorA > valorB ? 1 : -1;
    } else {
      return valorA < valorB ? 1 : -1;
    }
  });
}

// ============================================
// ESTADÍSTICAS
// ============================================

/**
 * Calcula estadísticas de solicitudes
 */
function calcularEstadisticas(solicitudes) {
  const stats = {
    total: solicitudes.length,
    porEstado: {
      recepcionado: 0,
      enProceso: 0,
      finalizado: 0,
      rechazado: 0,
      derivado: 0
    },
    porEtapa: {
      ingreso: 0,
      validacion: 0,
      supervision: 0,
      ejecucion: 0,
      cierre: 0,
      archivado: 0
    },
    promedioTiempoResolucion: 0,
    solicitudesVencidas: 0
  };

  solicitudes.forEach(solicitud => {
    // Contar por estado
    switch(solicitud.Estado) {
      case 0: stats.porEstado.recepcionado++; break;
      case 1: stats.porEstado.enProceso++; break;
      case 2: stats.porEstado.finalizado++; break;
      case 3: stats.porEstado.rechazado++; break;
      case 4: stats.porEstado.derivado++; break;
    }

    // Contar por etapa
    switch(solicitud.EtapaSolicitud) {
      case 0: stats.porEtapa.ingreso++; break;
      case 1: stats.porEtapa.validacion++; break;
      case 2: stats.porEtapa.supervision++; break;
      case 3: stats.porEtapa.ejecucion++; break;
      case 4: stats.porEtapa.cierre++; break;
      case 5: stats.porEtapa.archivado++; break;
    }

    // Solicitudes vencidas (más de 15 días)
    if (diasTranscurridos(solicitud.FechaCreacion) > 15 && solicitud.Estado !== 2) {
      stats.solicitudesVencidas++;
    }
  });

  return stats;
}

// ============================================
// ALMACENAMIENTO LOCAL
// ============================================

/**
 * Guarda datos en localStorage
 */
function guardarEnLocal(clave, datos) {
  try {
    localStorage.setItem(clave, JSON.stringify(datos));
    return true;
  } catch (error) {
    console.error('Error al guardar en localStorage:', error);
    return false;
  }
}

/**
 * Obtiene datos de localStorage
 */
function obtenerDeLocal(clave, valorPorDefecto = null) {
  try {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : valorPorDefecto;
  } catch (error) {
    console.error('Error al obtener de localStorage:', error);
    return valorPorDefecto;
  }
}

/**
 * Elimina datos de localStorage
 */
function eliminarDeLocal(clave) {
  try {
    localStorage.removeItem(clave);
    return true;
  } catch (error) {
    console.error('Error al eliminar de localStorage:', error);
    return false;
  }
}

// ============================================
// TEMA CLARO/OSCURO
// ============================================

/**
 * Cambia el tema de la aplicación
 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  guardarEnLocal('theme', newTheme);

  return newTheme;
}

/**
 * Inicializa el tema desde localStorage
 */
function inicializarTema() {
  const savedTheme = obtenerDeLocal('theme', 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  return savedTheme;
}

/**
 * Obtiene el tema actual
 */
function getTemaActual() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

// ============================================
// NOTIFICACIONES
// ============================================

/**
 * Muestra una notificación temporal
 */
function mostrarNotificacion(mensaje, tipo = 'info', duracion = 3000) {
  // Crear elemento de notificación
  const notif = document.createElement('div');
  notif.className = `alert alert-${tipo}`;
  notif.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    min-width: 300px;
    animation: slideIn 0.3s ease-out;
  `;
  notif.textContent = mensaje;

  // Agregar al DOM
  document.body.appendChild(notif);

  // Eliminar después de la duración
  setTimeout(() => {
    notif.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notif.remove(), 300);
  }, duracion);
}

// Agregar animaciones CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// HELPERS DE URL
// ============================================

/**
 * Obtiene parámetros de la URL
 */
function getURLParams() {
  const params = {};
  const searchParams = new URLSearchParams(window.location.search);

  for (const [key, value] of searchParams) {
    params[key] = value;
  }

  return params;
}

/**
 * Obtiene un parámetro específico de la URL
 */
function getURLParam(nombre, valorPorDefecto = null) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nombre) || valorPorDefecto;
}

/**
 * Actualiza la URL sin recargar la página
 */
function actualizarURL(params) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.keys(params).forEach(key => {
    if (params[key] === null || params[key] === undefined || params[key] === '') {
      searchParams.delete(key);
    } else {
      searchParams.set(key, params[key]);
    }
  });

  const newURL = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.pushState({}, '', newURL);
}

// ============================================
// EXPORTAR FUNCIONES (si se usa con módulos ES6)
// ============================================

// Si no se usan módulos, las funciones están disponibles globalmente
