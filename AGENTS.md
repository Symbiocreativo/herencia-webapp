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

## Reglas generales
- no romper rutas existentes
- no inventar estructura sin explicarla
- no cambiar nombres de archivos sin motivo claro
- mantener componentes simples y reutilizables
- privilegiar una v1 funcional antes que una solución compleja
- usar TypeScript
- mantener estilo sobrio y claro
- no agregar dependencias innecesarias
- cuando se modifique una página, conservar el propósito de esa ruta

## Reglas de edición
- guardar siempre archivos fuente como UTF-8
- no introducir caracteres corruptos ni símbolos extraños
- si editas texto en español, verificar que Ñ, tildes y caracteres especiales queden correctos
- no dar una tarea por terminada si el archivo tiene errores de parseo, build o codificación
- después de modificar archivos en `src/app/**`, verificar que el cambio no rompa la ruta trabajada
- preferir cambios pequeños y seguros antes que reemplazos masivos
- mostrar claramente qué archivo fue modificado

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
Construir interfaces iniciales claras para visualizar y seguir cada frente de la herencia.