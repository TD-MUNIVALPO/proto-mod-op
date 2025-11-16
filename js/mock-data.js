// ============================================
// DATOS MOCK PARA PROTOTIPO MUNI-OPERACIONES
// ============================================

const mockData = {
  // Departamentos
  departamentos: [
    { id: 1, DepartamentoId: 1, nombre: "Dirección de Obras", Nombre: "Dirección de Obras", activo: true },
    { id: 2, DepartamentoId: 2, nombre: "Dirección de Aseo y Ornato", Nombre: "Dirección de Aseo y Ornato", activo: true },
    { id: 3, DepartamentoId: 3, nombre: "Dirección de Tránsito", Nombre: "Dirección de Tránsito", activo: true },
    { id: 4, DepartamentoId: 4, nombre: "Dirección de Medio Ambiente", Nombre: "Dirección de Medio Ambiente", activo: true },
    { id: 5, DepartamentoId: 5, nombre: "Alumbrado Público", Nombre: "Alumbrado Público", activo: true }
  ],

  // Requerimientos
  requerimientos: [
    { id: 1, nombre: "Reparación de pavimento", departamentoId: 1 },
    { id: 2, nombre: "Poda de árboles", departamentoId: 2 },
    { id: 3, nombre: "Reparación de luminaria", departamentoId: 5 },
    { id: 4, nombre: "Retiro de escombros", departamentoId: 2 },
    { id: 5, nombre: "Señalización vial", departamentoId: 3 }
  ],

  // Ciudadanos
  ciudadanos: [
    { id: 1, rut: "12345678-9", nombres: "Juan", apellidoPaterno: "Pérez", apellidoMaterno: "González", email: "juan.perez@example.com", telefono: "+56912345678" },
    { id: 2, rut: "98765432-1", nombres: "María", apellidoPaterno: "Rodríguez", apellidoMaterno: "Silva", email: "maria.rodriguez@example.com", telefono: "+56987654321" },
    { id: 3, rut: "11223344-5", nombres: "Carlos", apellidoPaterno: "Muñoz", apellidoMaterno: "Torres", email: "carlos.munoz@example.com", telefono: "+56911223344" },
    { id: 4, rut: "55667788-0", nombres: "Ana", apellidoPaterno: "López", apellidoMaterno: "Martínez", email: "ana.lopez@example.com", telefono: "+56955667788" },
    { id: 5, rut: "99887766-K", nombres: "Pedro", apellidoPaterno: "Fernández", apellidoMaterno: "Rojas", email: "pedro.fernandez@example.com", telefono: "+56999887766" }
  ],

  // Funcionarios
  funcionarios: [
    { id: 1, nombres: "Roberto", apellidoPaterno: "Sánchez", apellidoMaterno: "Díaz", email: "roberto.sanchez@munivalpo.cl", departamentoId: 1 },
    { id: 2, nombres: "Patricia", apellidoPaterno: "Vargas", apellidoMaterno: "Castro", email: "patricia.vargas@munivalpo.cl", departamentoId: 2 },
    { id: 3, nombres: "Luis", apellidoPaterno: "Ramírez", apellidoMaterno: "Contreras", email: "luis.ramirez@munivalpo.cl", departamentoId: 3 },
    { id: 4, nombres: "Carmen", apellidoPaterno: "Morales", apellidoMaterno: "Flores", email: "carmen.morales@munivalpo.cl", departamentoId: 4 },
    { id: 5, nombres: "Jorge", apellidoPaterno: "Gutiérrez", apellidoMaterno: "Vega", email: "jorge.gutierrez@munivalpo.cl", departamentoId: 5 }
  ],

  // Solicitudes
  solicitudes: [
    {
      idSolicitud: 1,
      tipoIngreso: "Email",
      ciudadanoId: 1,
      funcionarioId: 1,
      departamentoId: 1,
      requerimientoId: 1,
      descripcion: "Bache grande en Calle Brasil altura 500, representa peligro para vehículos y peatones",
      tipoUbicacion: "Publico",
      localidad: "Cerro Alegre",
      ubicacion: "Calle Brasil 500",
      longitud: -71.6127,
      latitud: -33.0472,
      estado: "EnProceso",
      etapa: "EvaluacionTecnica",
      fechaCreacion: "2025-01-10T10:30:00",
      fechaModificacion: "2025-01-15T14:20:00",
      anexosCount: 3
    },
    {
      idSolicitud: 2,
      tipoIngreso: "Plataforma",
      ciudadanoId: 2,
      funcionarioId: 2,
      departamentoId: 2,
      requerimientoId: 2,
      descripcion: "Árboles con ramas que obstruyen la visibilidad en el cruce, necesitan poda urgente",
      tipoUbicacion: "Publico",
      localidad: "Cerro Concepción",
      ubicacion: "Paseo Yugoslavo 150",
      longitud: -71.6145,
      latitud: -33.0458,
      estado: "Ingresada",
      etapa: "Recepcion",
      fechaCreacion: "2025-01-15T09:15:00",
      fechaModificacion: null,
      anexosCount: 2
    },
    {
      idSolicitud: 3,
      tipoIngreso: "Email",
      ciudadanoId: 3,
      funcionarioId: 5,
      departamentoId: 5,
      requerimientoId: 3,
      descripcion: "Luminaria apagada hace una semana, zona queda muy oscura en la noche",
      tipoUbicacion: "Publico",
      localidad: "Cerro Florida",
      ubicacion: "Calle Higueras 789",
      longitud: -71.6083,
      latitud: -33.0501,
      estado: "Resuelta",
      etapa: "Finalizacion",
      fechaCreacion: "2025-01-05T16:45:00",
      fechaModificacion: "2025-01-14T11:30:00",
      anexosCount: 1
    },
    {
      idSolicitud: 4,
      tipoIngreso: "Providencia",
      ciudadanoId: 4,
      funcionarioId: 2,
      departamentoId: 2,
      requerimientoId: 4,
      descripcion: "Escombros acumulados en la vereda impiden el paso de peatones",
      tipoUbicacion: "Publico",
      localidad: "Plan",
      ubicacion: "Avenida Pedro Montt 2100",
      longitud: -71.6225,
      latitud: -33.0445,
      estado: "EnRevision",
      etapa: "Aprobacion",
      fechaCreacion: "2025-01-12T13:20:00",
      fechaModificacion: "2025-01-14T09:10:00",
      anexosCount: 4
    },
    {
      idSolicitud: 5,
      tipoIngreso: "Email",
      ciudadanoId: 5,
      funcionarioId: 3,
      departamentoId: 3,
      requerimientoId: 5,
      descripcion: "Falta señalización de PARE en cruce peligroso",
      tipoUbicacion: "Publico",
      localidad: "Cerro Barón",
      ubicacion: "Calle Diego Portales con Avenida Argentina",
      longitud: -71.6156,
      latitud: -33.0389,
      estado: "EnProceso",
      etapa: "Ejecucion",
      fechaCreacion: "2025-01-08T11:00:00",
      fechaModificacion: "2025-01-13T15:45:00",
      anexosCount: 2
    },
    {
      idSolicitud: 6,
      tipoIngreso: "Plataforma",
      ciudadanoId: 1,
      funcionarioId: 1,
      departamentoId: 1,
      requerimientoId: 1,
      descripcion: "Hundimiento de calzada que genera acumulación de agua",
      tipoUbicacion: "Publico",
      localidad: "Cerro Polanco",
      ubicacion: "Calle Simpson 456",
      longitud: -71.6098,
      latitud: -33.0512,
      estado: "Cerrada",
      etapa: "Finalizacion",
      fechaCreacion: "2025-01-03T14:30:00",
      fechaModificacion: "2025-01-10T16:00:00",
      anexosCount: 5
    },
    {
      idSolicitud: 7,
      tipoIngreso: "Email",
      ciudadanoId: 3,
      funcionarioId: 4,
      departamentoId: 4,
      requerimientoId: 4,
      descripcion: "Microbasural en quebrada, riesgo sanitario",
      tipoUbicacion: "Publico",
      localidad: "Cerro Esperanza",
      ubicacion: "Subida Ecuador 890",
      longitud: -71.6198,
      latitud: -33.0423,
      estado: "EnProceso",
      etapa: "Analisis",
      fechaCreacion: "2025-01-11T10:15:00",
      fechaModificacion: "2025-01-15T08:30:00",
      anexosCount: 6
    },
    {
      idSolicitud: 8,
      tipoIngreso: "Providencia",
      ciudadanoId: 2,
      funcionarioId: 5,
      departamentoId: 5,
      requerimientoId: 3,
      descripcion: "Poste de luz inclinado, riesgo de caída",
      tipoUbicacion: "Publico",
      localidad: "Cerro Artillería",
      ubicacion: "Paseo 21 de Mayo 234",
      longitud: -71.6167,
      latitud: -33.0443,
      estado: "PendienteInformacion",
      etapa: "Recepcion",
      fechaCreacion: "2025-01-14T12:00:00",
      fechaModificacion: "2025-01-15T10:00:00",
      anexosCount: 1
    },
    {
      idSolicitud: 9,
      tipoIngreso: "Email",
      ciudadanoId: 4,
      funcionarioId: 1,
      departamentoId: 1,
      requerimientoId: 1,
      descripcion: "Grieta en vereda, peligro de tropiezo",
      tipoUbicacion: "Publico",
      localidad: "Plan",
      ubicacion: "Calle Condell 1230",
      longitud: -71.6201,
      latitud: -33.0412,
      estado: "Ingresada",
      etapa: "Recepcion",
      fechaCreacion: "2025-01-15T08:45:00",
      fechaModificacion: null,
      anexosCount: 2
    },
    {
      idSolicitud: 10,
      tipoIngreso: "Plataforma",
      ciudadanoId: 5,
      funcionarioId: 2,
      departamentoId: 2,
      requerimientoId: 2,
      descripcion: "Árbol caído bloquea calle completamente",
      tipoUbicacion: "Publico",
      localidad: "Cerro Panteón",
      ubicacion: "Calle Ecuador 567",
      longitud: -71.6112,
      latitud: -33.0434,
      estado: "EnProceso",
      etapa: "Ejecucion",
      fechaCreacion: "2025-01-13T15:30:00",
      fechaModificacion: "2025-01-15T11:00:00",
      anexosCount: 7
    },
    {
      idSolicitud: 11,
      tipoIngreso: "Email",
      ciudadanoId: 1,
      funcionarioId: 3,
      departamentoId: 3,
      requerimientoId: 5,
      descripcion: "Semáforo en amarillo intermitente hace días",
      tipoUbicacion: "Publico",
      localidad: "Plan",
      ubicacion: "Avenida Francia con Errázuriz",
      longitud: -71.6234,
      latitud: -33.0402,
      estado: "Rechazada",
      etapa: "Recepcion",
      fechaCreacion: "2025-01-09T09:00:00",
      fechaModificacion: "2025-01-10T14:00:00",
      anexosCount: 1
    },
    {
      idSolicitud: 12,
      tipoIngreso: "Email",
      ciudadanoId: 2,
      funcionarioId: 1,
      departamentoId: 1,
      requerimientoId: 1,
      descripcion: "Pavimento deteriorado genera ruido excesivo al pasar vehículos",
      tipoUbicacion: "Publico",
      localidad: "Cerro Cordillera",
      ubicacion: "Calle Urriola 345",
      longitud: -71.6134,
      latitud: -33.0465,
      estado: "EnProceso",
      etapa: "EvaluacionTecnica",
      fechaCreacion: "2025-01-07T13:45:00",
      fechaModificacion: "2025-01-14T16:20:00",
      anexosCount: 3
    }
  ],

  // Derivaciones
  derivaciones: [
    {
      derivacionId: 1,
      solicitudId: 1,
      funcionarioId: 1,
      departamentoOrigenId: null,
      departamentoDestinoId: 1,
      observacionDerivacion: "Derivación automática al crear la solicitud",
      fechaCreacion: "2025-01-10T10:31:00"
    },
    {
      derivacionId: 2,
      solicitudId: 1,
      funcionarioId: 1,
      departamentoOrigenId: 1,
      departamentoDestinoId: 1,
      observacionDerivacion: "Revisión técnica en terreno requerida",
      fechaCreacion: "2025-01-12T14:15:00"
    },
    {
      derivacionId: 3,
      solicitudId: 3,
      funcionarioId: 5,
      departamentoOrigenId: null,
      departamentoDestinoId: 5,
      observacionDerivacion: "Derivación automática al crear la solicitud",
      fechaCreacion: "2025-01-05T16:46:00"
    }
  ],

  // Validaciones
  validaciones: [
    {
      validacionId: 1,
      derivacionId: 1,
      validacionEstado: true,
      solicitudExencion: false,
      prioridad: "Alta",
      observacionValidacion: "Solicitud aprobada, requiere evaluación técnica",
      informeTecnico: true,
      fechaEstimada: "2025-01-25",
      fechaCreacion: "2025-01-11T09:00:00"
    },
    {
      validacionId: 2,
      derivacionId: 3,
      validacionEstado: true,
      solicitudExencion: false,
      prioridad: "Media",
      observacionValidacion: "Aprobado, proceder con reparación",
      informeTecnico: false,
      fechaEstimada: "2025-01-15",
      fechaCreacion: "2025-01-06T10:30:00"
    }
  ],

  // Tipos de Etapa
  tiposEtapa: [
    { id: 1, nombre: "Programar Visita" },
    { id: 2, nombre: "Informe Técnico" },
    { id: 3, nombre: "Validar Informe Técnico" },
    { id: 4, nombre: "Exención" },
    { id: 5, nombre: "Orden de Pago" },
    { id: 6, nombre: "Programar Trabajo" },
    { id: 7, nombre: "Informe Término" },
    { id: 8, nombre: "Validar Informe Término" }
  ],

  // Etapas
  etapas: [
    {
      etapaId: 1,
      validacionId: 1,
      tipoEtapaId: 1,
      funcionarioId: 1,
      respuesta: '{"fechaVisita":"2025-01-13","horaVisita":"10:00","direccionVisita":"Calle Brasil 500"}',
      observacion: "Visita programada con encargado de obras",
      fechaCreacion: "2025-01-11T15:00:00",
      archivos: []
    },
    {
      etapaId: 2,
      validacionId: 1,
      tipoEtapaId: 2,
      funcionarioId: 1,
      respuesta: '{"factibilidad":"Factible","montoUTM":5.5,"descripcion":"Requiere reemplazo de carpeta asfáltica en 15m²"}',
      observacion: "Informe técnico completado, adjunto fotografías",
      fechaCreacion: "2025-01-13T14:30:00",
      archivos: [
        {
          archivoId: 1,
          nombreOriginal: "informe_tecnico_bache_brasil.pdf",
          extension: ".pdf",
          tamanoBytes: 245760,
          rutaArchivo: "/uploads/etapas/2/informe_tecnico.pdf",
          fechaSubida: "2025-01-13T14:35:00"
        },
        {
          archivoId: 2,
          nombreOriginal: "foto_dano_1.jpg",
          extension: ".jpg",
          tamanoBytes: 512000,
          rutaArchivo: "/uploads/etapas/2/foto_1.jpg",
          fechaSubida: "2025-01-13T14:36:00"
        }
      ]
    },
    {
      etapaId: 3,
      validacionId: 1,
      tipoEtapaId: 3,
      funcionarioId: 1,
      respuesta: '{"aprobado":true,"observaciones":"Informe técnico aprobado, proceder con orden de pago"}',
      observacion: "Validado por jefe de departamento",
      fechaCreacion: "2025-01-14T09:15:00",
      archivos: []
    },
    {
      etapaId: 4,
      validacionId: 2,
      tipoEtapaId: 6,
      funcionarioId: 5,
      respuesta: '{"fechaTrabajo":"2025-01-10","funcionarioAsignado":"Mario Gómez","observaciones":"Cuadrilla programada para reemplazo de luminaria"}',
      observacion: "Trabajo asignado a cuadrilla A",
      fechaCreacion: "2025-01-08T11:00:00",
      archivos: []
    },
    {
      etapaId: 5,
      validacionId: 2,
      tipoEtapaId: 7,
      funcionarioId: 5,
      respuesta: '{"observaciones":"Trabajo completado exitosamente, luminaria reemplazada"}',
      observacion: "Luminaria instalada y funcionando correctamente",
      fechaCreacion: "2025-01-10T16:30:00",
      archivos: [
        {
          archivoId: 3,
          nombreOriginal: "foto_trabajo_finalizado.jpg",
          extension: ".jpg",
          tamanoBytes: 678000,
          rutaArchivo: "/uploads/etapas/5/foto_final.jpg",
          fechaSubida: "2025-01-10T16:32:00"
        }
      ]
    },
    {
      etapaId: 6,
      validacionId: 2,
      tipoEtapaId: 8,
      funcionarioId: 5,
      respuesta: '{"aprobado":true,"calidad":"Excelente"}',
      observacion: "Trabajo verificado y aprobado",
      fechaCreacion: "2025-01-11T10:00:00",
      archivos: []
    }
  ]
};

// Enumeraciones
const EstadoSolicitud = {
  1: "Ingresada",
  2: "EnProceso",
  3: "EnRevision",
  4: "Resuelta",
  5: "Cerrada",
  6: "Rechazada",
  7: "PendienteInformacion"
};

const EtapaSolicitud = {
  1: "Recepcion",
  2: "Analisis",
  3: "EvaluacionTecnica",
  4: "Aprobacion",
  5: "Ejecucion",
  6: "Seguimiento",
  7: "Finalizacion"
};

const TipoIngreso = {
  1: "Email",
  2: "Providencia",
  3: "Otro",
  4: "Plataforma"
};

const TipoUbicacion = {
  1: "Privado",
  2: "Publico",
  3: "NoSeSabe",
  4: "Plataforma"
};

// Función helper para obtener datos enriquecidos
function getSolicitudEnriquecida(solicitudOrId) {
  // Permitir pasar tanto el objeto solicitud como el ID
  const solicitud = typeof solicitudOrId === 'object'
    ? solicitudOrId
    : mockData.solicitudes.find(s => s.idSolicitud === solicitudOrId);

  if (!solicitud) return null;

  const solicitudId = solicitud.idSolicitud;

  const ciudadano = mockData.ciudadanos.find(c => c.id === solicitud.ciudadanoId);
  const funcionario = mockData.funcionarios.find(f => f.id === solicitud.funcionarioId);
  const departamento = mockData.departamentos.find(d => d.id === solicitud.departamentoId);
  const requerimiento = mockData.requerimientos.find(r => r.id === solicitud.requerimientoId);

  const derivaciones = mockData.derivaciones
    .filter(d => d.solicitudId === solicitudId)
    .map(deriv => ({
      ...deriv,
      funcionario: mockData.funcionarios.find(f => f.id === deriv.funcionarioId),
      departamentoOrigen: deriv.departamentoOrigenId ? mockData.departamentos.find(d => d.id === deriv.departamentoOrigenId) : null,
      departamentoDestino: mockData.departamentos.find(d => d.id === deriv.departamentoDestinoId)
    }));

  const validaciones = derivaciones.map(deriv => {
    const validacion = mockData.validaciones.find(v => v.derivacionId === deriv.derivacionId);
    if (!validacion) return null;

    const etapas = mockData.etapas
      .filter(e => e.validacionId === validacion.validacionId)
      .map(etapa => ({
        ...etapa,
        tipoEtapa: mockData.tiposEtapa.find(t => t.id === etapa.tipoEtapaId),
        funcionario: mockData.funcionarios.find(f => f.id === etapa.funcionarioId)
      }));

    return {
      ...validacion,
      derivacion: deriv,
      etapas
    };
  }).filter(v => v !== null);

  // Mapear a formato PascalCase esperado por el HTML
  return {
    // Propiedades principales (PascalCase para compatibilidad con .NET)
    SolicitudId: solicitud.idSolicitud,
    CiudadanoId: solicitud.ciudadanoId,
    FuncionarioId: solicitud.funcionarioId,
    DepartamentoId: solicitud.departamentoId,
    RequerimientoId: solicitud.requerimientoId,
    Descripcion: solicitud.descripcion,
    TipoIngreso: mapTipoIngreso(solicitud.tipoIngreso),
    TipoUbicacion: mapTipoUbicacion(solicitud.tipoUbicacion),
    Localidad: solicitud.localidad,
    Ubicacion: solicitud.ubicacion,
    LatitudGPS: solicitud.latitud,
    LongitudGPS: solicitud.longitud,
    Estado: mapEstado(solicitud.estado),
    EtapaSolicitud: mapEtapa(solicitud.etapa),
    FechaCreacion: solicitud.fechaCreacion,
    UpdatedAt: solicitud.fechaModificacion,
    Observacion: solicitud.observacion || "",

    // Datos relacionados enriquecidos
    NombreCiudadano: ciudadano ? `${ciudadano.nombres} ${ciudadano.apellidoPaterno} ${ciudadano.apellidoMaterno}`.trim() : "N/A",
    RUTCiudadano: ciudadano ? ciudadano.rut : "",
    EmailCiudadano: ciudadano ? ciudadano.email : "",
    TelefonoCiudadano: ciudadano ? ciudadano.telefono : "",

    NombreDepartamento: departamento ? departamento.nombre : "N/A",
    NombreFuncionario: funcionario ? `${funcionario.nombres} ${funcionario.apellidoPaterno}`.trim() : "N/A",
    NombreRequerimiento: requerimiento ? requerimiento.nombre : "N/A",
    PrecioRequerimiento: requerimiento?.precio || null,

    // Objetos completos para referencia
    Ciudadano: ciudadano,
    Funcionario: funcionario,
    Departamento: departamento,
    Requerimiento: requerimiento,
    Derivaciones: derivaciones,
    Validaciones: validaciones
  };
}

// Funciones de mapeo de enumeraciones
function mapEstado(estado) {
  const mapeo = {
    "Ingresada": 0,  // Recepcionado
    "EnProceso": 1,   // En Proceso
    "Resuelta": 2,    // Finalizado
    "Rechazada": 3,   // Rechazado
    "Derivado": 4     // Derivado
  };
  return mapeo[estado] ?? 0;
}

function mapEtapa(etapa) {
  const mapeo = {
    "Recepcion": 0,           // Ingreso
    "Analisis": 1,            // Validación
    "EvaluacionTecnica": 2,   // Supervisión
    "Aprobacion": 2,          // Supervisión
    "Ejecucion": 3,           // Ejecución
    "Seguimiento": 4,         // Cierre
    "Finalizacion": 5         // Archivado
  };
  return mapeo[etapa] ?? 0;
}

function mapTipoIngreso(tipo) {
  const mapeo = {
    "Presencial": 0,
    "Email": 1,        // En Línea
    "Plataforma": 1,   // En Línea
    "Providencia": 2,  // Telefónico
    "Otro": 2
  };
  return mapeo[tipo] ?? 1;
}

function mapTipoUbicacion(tipo) {
  const mapeo = {
    "GPS": 0,
    "Direccion": 1,
    "Publico": 0,      // Usar GPS
    "Privado": 1,      // Usar Dirección
    "NoSeSabe": 2,     // Sin Ubicación
    "Plataforma": 0
  };
  return mapeo[tipo] ?? 0;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mockData, getSolicitudEnriquecida };
}
