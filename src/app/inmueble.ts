export interface Visita {
    clienteNombre: string;
    clienteTelefono: string;
    fecha: string;
    comentario: string;
  }

export interface Inmueble {
    numeroReferencia: string;
    superficie: number;
    direccionCompleta: string;
    tipo: string;
    precioVenta: number;
    precioAlquiler: number;
    modoOferta: string;
    nombrePropietario: string;
    telefonoPropietario: string;
    oficinaNombre: string;
    visitas?: Visita[];
    zona?: string;
    urbanizacion?: string;
    tamanoParcela?: number;
    habitaciones?: number;
    banos?: number;
    cocinas?: number;
    gas?: boolean;
    puertaBlindada?: boolean;
    parquet?: boolean;
    puertasEntrada?: number;
    diafono?: boolean;
    acondicionado?: boolean;
  }