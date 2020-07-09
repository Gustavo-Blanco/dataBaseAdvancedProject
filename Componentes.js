conn = new Mongo();
db = conn.getDB("proyecto1");

db.componentes.insert([
  {
    nombre: 'Ryzen 9 3950X',
    marca: 'AMD',
    precio: 1800,
    stock: 10,
    categoria: 'procesador',
    detalle: 
    {
      modelo: 'Ryzen 9 3950X',
      nucleos: 16,
      frecuencia: 4.7      
    }
  },
  {
    nombre: 'DDR4 HyperX 8GB',
    marca:'HyperX',
    precio: 150,
    stock: 10,
    categoria: 'ram',
    detalle: 
    {
      modelo: 'DDR4',
      capacidad: 8,
      frecuencia: 2666      
    }
  },
  {
    nombre: 'B450M-Plus MSI Gaming',
    marca:'MSI',
    precio: 320,
    stock: 10,
    categoria: 'placa',
    detalle: 
    {
      modelo: 'B450',
      soporte: 'tecera generacion',
      formato: 'mini-ATX'
    }
  },
  {
    nombre: 'RTX 2060 SUPER',
    marca: 'AORUS',
    precio: 1200,
    stock: 10,
    categoria: 'video',
    detalle: 
    {
      modelo: 'RTX',
      memoria: 'GDDR6 8GB',
      frecuencia: 3.7
    }
  },
  {
    nombre: 'Disco duro Western Digital 1TB',
    marca: 'Western',
    precio: 170,
    stock: 10,
    categoria:'disco',
    detalle: 
    {
      tipo: 'Mecanico',
      interfaz: 'SATA',
      velocidad: 7200
    }
  },
  {
    nombre: 'Fuente de Poder corsair 600 Watts',
    marca: 'Corsair',
    precio: 300,
    stock: 10,
    categoria: 'fuente',
    detalle: 
    {
      tipo: 'Modular',
      certificacion: 'Si',
      voltaje: 600
    }
  }
]);

db.productos.insert([
{
   	nombre:'Pc-Gaming',
   	marca:'AMD',
   	stock:10,
   	precio:2500,
   	caracteristicas:{
   	procesador: 'AMD Ryzen 5 2600',
        ram: 16,
        placa: 'B450M',
  	}
}
]);



