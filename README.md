# Mis Tareas — Panel de gestión de tareas

Panel de administración para organizar tareas personales o de un equipo pequeño: cuántas hay pendientes, en progreso, completadas y vencidas, un vistazo rápido de lo que se completó en la semana, y una tabla con el detalle de cada tarea donde se pueden marcar como completadas directamente.

![Vista de escritorio](evidencias/escritorio.png)

## Repositorio

Código fuente completo en: `<pegar aquí el link de tu repositorio de GitHub>`

## Qué hace

- Resumen rápido en tarjetas: pendientes, en progreso, completadas y vencidas.
- Gráfico de barras con las tareas completadas por día de la semana.
- Lista de "lo más urgente" con las tareas que vencen pronto.
- Tabla completa con todas las tareas, su prioridad, fecha límite y estado, con un checkbox en cada fila para marcarla como completada (se tacha y se atenúa al instante).
- Menú lateral que se puede achicar para ganar espacio, y que en el celular se convierte en un panel que se abre y cierra con el botón de hamburguesa.

## Tecnologías usadas

- HTML5 con etiquetas semánticas (`aside`, `header`, `main`, `section`, `footer`, `nav`).
- CSS puro: Grid para el esqueleto general del panel y Flexbox para el contenido de cada tarjeta, el menú, el encabezado y las filas.
- Variables CSS (`:root`) para colores, tamaños de sidebar y transiciones, para no repetir valores sueltos por todo el archivo.
- Media queries para adaptar el panel a escritorio, tablet y celular.
- JavaScript simple, sin ninguna librería externa, para el menú lateral y para marcar tareas como completadas.
- El gráfico de barras está hecho solo con `div` y Flexbox (la altura de cada barra viene de una variable CSS `--alto`), no usa ninguna librería de gráficos.

## Estructura del repositorio

```
tareas-dashboard/
├── index.html
├── styles.css
├── script.js
├── README.md
└── evidencias/
    ├── escritorio.png
    ├── tablet.png
    └── celular.png
```

## Evidencias (capturas de pantalla)

**Escritorio**

![Escritorio](evidencias/escritorio.png)

**Tablet**

![Tablet](evidencias/tablet.png)

**Celular**

![Celular](evidencias/celular.png)

## Cómo cumple cada criterio de entrega

**Layout avanzado (Grid + Flexbox)**
El esqueleto completo del panel (sidebar, encabezado, contenido, pie) se arma con `grid-template-areas` en `.app`, así queda clarísimo en el CSS qué bloque va dónde. Dentro de cada bloque se usa Flexbox: la fila de tarjetas, los links del menú, el encabezado, las filas de la tabla y hasta el gráfico de barras (que es una fila de `div` con `align-items: flex-end`).

**Interactividad visual**
- El menú lateral se contrae a solo íconos con un botón, y en celular se desliza como panel superpuesto.
- Las tarjetas y filas de la tabla cambian de color al pasar el mouse (`:hover`).
- Los checkboxes de la tabla marcan la tarea como completada al instante (tachado + atenuado), sin recargar nada.
- Todos los elementos interactivos tienen un estado de foco visible (`:focus-visible`) para quien navega con teclado.

**Responsividad**
Tres puntos de quiebre: en escritorio se ve todo completo, en tablet (≤1024px) el sidebar se reduce a solo íconos y las tarjetas pasan a 2 columnas, y en celular (≤680px) el sidebar se oculta por completo y se abre como panel encima del contenido, la tabla se reorganiza en tarjetas apiladas en vez de columnas, y las tarjetas de resumen pasan a una sola columna.

**Accesibilidad**
- Roles (`role="navigation"`, `role="main"`) para que un lector de pantalla entienda la estructura.
- Enlace "Saltar al contenido" al principio de la página.
- Foco de teclado visible en todos los botones, enlaces y checkboxes.
- El gráfico de barras tiene una descripción en texto (`aria-label`) con los mismos datos que se ven visualmente.
- Los botones del menú usan `aria-expanded` para indicar si está abierto o cerrado.
- Los checkboxes tienen `aria-label` describiendo qué tarea marcan.
- Los colores se eligieron cuidando el contraste del texto sobre el fondo, no solo por estética.
- Se respeta la preferencia de "reducir movimiento" del sistema operativo.

**Calidad del código**
El HTML y el CSS están comentados por bloques (barra lateral, encabezado, contenido, tabla, media queries) para que se entienda qué hace cada sección sin tener que leer todo de corrido. Los colores, espaciados y tiempos de transición están centralizados en variables CSS dentro de `:root`, y las clases siguen una convención de nombres en español consistente en todo el proyecto.

**Documentación**
Este mismo archivo: qué hace el panel, tecnologías, capturas y la explicación de decisiones de diseño más abajo.

## Decisiones de diseño

Elegí una paleta clara (fondo gris muy suave, tarjetas blancas) en vez de un tema oscuro, porque para un panel de tareas de uso diario me parece más cómodo de leer por periodos largos. El azul oscuro del menú lateral da un ancla visual sin ser muy fuerte, y el color vino/burdeos se usa solo para resaltar lo que importa (el botón activo, el avatar, la barra del día actual), no en todos lados.

Para los títulos usé una fuente serif (Georgia) y para el resto del texto la fuente del sistema del navegador. La idea era que se viera un poco más cálido y menos "plantilla genérica", sin depender de fuentes externas que tarden en cargar.

El menú lateral se puede colapsar a solo íconos con el botón de abajo, y en pantallas chicas ese mismo botón (junto con el ícono de hamburguesa del encabezado) lo convierte en un panel que se desliza desde la izquierda.

## Cómo verlo

Abrir `index.html` directamente en el navegador ya funciona, no necesita servidor ni instalar nada.
