
# API Reference

## Usuario

#### Inicio de sesión

```http
  POST /usuarios/inicio-sesion
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | **Required**. |
| `contraseña` | `string` | **Required**. |

#### Respuesta
``` json
{
  "id": 1,
  "nombre": "juan",
  "contraseña": "contraseñasegura123"
}
```

#### Registro de usuario

```http
  POST /usuarios/registrar
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | **Required**. |
| `contraseña` | `string` | **Required**. |

#### Respuesta
``` json
{
  "resultado": true
}
```

## Categorias

#### Obtener todas las categorias

```http
  GET /categorias
```
#### Respuesta
``` json
[
  {
    "id": 1,
    "nombre": "Laptops",
    "ruta_img": "https://larepublica.cronosmedia.glr.pe/original/2022/01/03/61d27e54f588a6527b2aca80.jpg",
    "descripcion": "Rendimiento potente, diseño elegante."
  },...
]
```

#### Obtener categoria por nombre

```http
  POST /categorias/nombre
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | **Required**. |

#### Respuesta
``` json
{
    "id": 1,
    "nombre": "Laptops",
    "ruta_img": "https://larepublica.cronosmedia.glr.pe/original/2022/01/03/61d27e54f588a6527b2aca80.jpg",
    "descripcion": "Rendimiento potente, diseño elegante."
}
```

## Producto

#### Obtener todos los productos

```http
  GET /productos
```

#### Respuesta
``` json
[
  {
    "id": 1,
    "nombre": "iPhone 15",
    "precio": "3549.00",
    "categoria_id": 2,
    "ruta_img": "/celulares/iphone15.webp",
    "marca": "Apple"
  },...
]
```

#### Productos por categoria

```http
  GET /productos/categoria
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `categoria_id` | `number` | **Required**. |

#### Respuesta
``` json
[
  {
    "id": 1,
    "nombre": "iPhone 15",
    "precio": "3549.00",
    "categoria_id": 2,
    "ruta_img": "/celulares/iphone15.webp",
    "marca": "Apple"
  },...
]
```

#### Producto por id

```http
  GET /productos/categoria
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. |

#### Respuesta
``` json
{
    "id": 1,
    "nombre": "iPhone 15",
    "precio": "3549.00",
    "categoria_id": 2,
    "ruta_img": "/celulares/iphone15.webp",
    "marca": "Apple"
}
```

## Carrito

#### Añadir producto

```http
  POST /carrito/agregar
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usuario_id` | `number` | **Required**. |
| `producto_id` | `number` | **Required**. |
| `cantidad` | `number` | **Required**. |

#### Respuesta
``` json
{
    "resultado": true
}
```

#### Quitar producto

```http
  POST /carrito/eliminar
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usuario_id` | `number` | **Required**. |
| `producto_id` | `number` | **Required**. |

#### Respuesta
``` json
{
    "resultado": true
}
```

#### Obtener carrito

```http
  POST /carrito
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usuario_id` | `number` | **Required**. |

#### Respuesta
``` json
[
  {
    "id": 2,
    "nombre": "iPhone 15",
    "marca": "Apple",
    "precio": "3549.00",
    "cantidad": 2,
    "subtotal": "7098.00",
    "ruta_img": "/celulares/iphone15.webp"
  },...
]
```

#### Comprar

```http
  DELETE /carrito/comprar
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usuario_id` | `number` | **Required**. |

#### Respuesta
``` json
{
    "resultado": true
}
```

## Integrantes

#### Obtener integrantes

```http
  GET /integrantes
```

#### Respuesta
``` json
[
  {
    "nombre": "Joaquin",
    "apellido": "Carbajal"
  },...
]
```