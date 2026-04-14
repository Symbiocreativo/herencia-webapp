# Herencia Webapp – Reglas del proyecto

## Objetivo
Esta app organiza y visualiza el estado de tres frentes de una herencia:

- Terreno / Casa Isla Negra
- Depto Ñuñoa
- Depósito a plazo

## Prioridades
1. claridad
2. estabilidad
3. legibilidad
4. estructura simple
5. evitar sobreingeniería

## Reglas
- no romper rutas existentes
- no inventar estructura sin explicarla
- no cambiar nombres de archivos sin motivo claro
- mantener componentes simples y reutilizables
- privilegiar una v1 funcional antes que una solución compleja
- usar TypeScript
- mantener estilo sobrio y claro
- no agregar dependencias innecesarias
- cuando se modifique una página, conservar el propósito de esa ruta

## Rutas actuales
- /
- /dashboard
- /documentos
- /cronologia
- /pendientes
- /frentes/isla-negra
- /frentes/depto-nunoa
- /frentes/deposito-plazo

## Objetivo siguiente
Construir un dashboard inicial que muestre los 3 frentes con acceso claro a cada uno.