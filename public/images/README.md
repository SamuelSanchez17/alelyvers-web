# Organizacion de imagenes - AlelyVers

## Estructura

- `branding/logo/`: logotipo principal y variaciones
- `hero/`: imagenes de portada para home y banners
- `collections/velas/`: imagenes de la coleccion velas
- `collections/resina/`: imagenes de la coleccion resina
- `collections/macetas/`: imagenes de la coleccion macetas
- `products/velas/`: fotos de producto individuales de velas
- `products/resina/`: fotos de producto individuales de resina
- `products/macetas/`: fotos de producto individuales de macetas
- `icons/`: iconos de UI y redes

## Convencion de nombre

Usar kebab-case y versionado simple:

- `hero-home-v1.webp`
- `vela-bergamota-01.webp`
- `resina-colgante-botanico-01.webp`

## Formatos recomendados (web)

- `AVIF`: mejor compresion y buena calidad (ideal para fotos si el flujo de trabajo lo soporta).
- `WEBP`: estandar recomendado para fotos y banners.
- `PNG`: solo para transparencias complejas o arte con bordes duros.
- `SVG`: logos e iconos vectoriales.
- `JPG/JPEG`: fallback cuando no se tenga WEBP/AVIF.

## Reglas practicas

- Hero desktop sugerido: 1920x1080 (o 1600x900), comprimido en WEBP/AVIF.
- Miniaturas de coleccion: proporcion 4:3 o 3:2, mismo alto entre cards.
- Producto listado: cuadrado 1:1 para consistencia visual.
- Peso recomendado:
  - Hero: < 350 KB
  - Card de coleccion: < 180 KB
  - Producto: < 220 KB

## Nota de uso en Next.js

En componentes, referenciar rutas desde `/images/...`, por ejemplo:

- `/images/hero/hero-home-v1.webp`
- `/images/collections/velas/velas-grid-v1.webp`
- `/images/products/resina/resina-colgante-botanico-01.webp`
