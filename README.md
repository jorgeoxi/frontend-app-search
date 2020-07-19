![react](https://github.com/jorgeoxi/badge-app-react/blob/master/docs/React.jpg?raw=true)

  # Frontend Test 2.0

El proyecto tiene como finalidad, realizar un busqueda entre 4 archivos JSON. La búsqueda se debe realizar por la mayor cantidad de campos.

Se deben mostrar los resultados de la busqueda en todos los archivos locales.

# Instalación

Realizar descarga del proyecto 

```sh
git clone https://github.com/jorgeoxi/frontend-app-search.git
cd frontend-app-search
npm start
```


**Landing Page**

![LandingPage](https://github.com/jorgeoxi/frontend-app-search/blob/master/docs/landingpage.png?raw=true)

**Search Page**

![SearchPage](https://github.com/jorgeoxi/frontend-app-search/blob/master/docs/searchpage.png?raw=true)

#### Cuestionario: 

**¿Por qué no debería usar la librería JQuery, si estoy usando ReactJS?**
Siendo que, JQuery es una librería algo vieja (aunque muchos sitios legacy la siguen utilizando), La funcionalidad que te da React, es superior en este tiempo. Con React puedes manejar la interacción, manejo de eventos y manipular el VirtualDOM de una manera sencilla y transformando las aplicaciones a proyectos mucho más responsivos y de una sola página (SPA).  Con esto manejamos de mejor manera el uso de la memoria en el navegador y lo que se traduce en mejor manejo de memoria del equipo en donde se esté accediendo a nuestra aplicación.

**¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?**
Uno de los beneficios de Hooks, es escribir estado de una aplicación, sin la necesidad de hacerlo en un class component, esto se traduce en una manera    más sencilla de agregar lógica a nuestra aplicación en componentes más sencillos.

**¿Que es un archivo JSX?**
Un archivo JSX, es una forma de escribir nuestra lógica en javascript junto a laestructura (maquetado) de una página hecha con HTML y CSS, lo que nos permiteintegrar y trabajar proyectos mucho más rápido, traduciendo esto a menos archivos en nuestro proyecto. Es aquí donde se trabaja con componentes, que son como pequeños legos que arman al final nuestra aplicación

**¿Que diferencia hay entre una function y una arrow function de Javascript?**
Básicamente es el contexto, ya que en funciones "tradicionales", se maneja  el contexto al llamar dichas funciones, mientras que en las arrow function se maneja al declararlas.       

**¿Qué es Redux y cómo nos ayuda en los proyectos?**
Redux es una herramienta que nos ayuda con el manejo de estado de una aplicación, es una herramienta bastante útil hoy en día, inspirada en Flux. Digamos que tienes una aplicación tipo netflix. el estado nos puede ayudar agregando, por ejemplo, películas del catalogo, a nuestra lista de favoritos, removerlas del mismo, etc.

**¿Por qué usuarios pruebas unitarias en tu código?**
Las pruebas unitarias son bastante útiles, ya que, las buenas prácticas indican que, al hacer pruebas unitarias, se puede ahorrar mucho tiempo, al momento de hacer merge con el trabajo de los demás miembros del equipo y así, evitar o bajar el nivel de pruebas de integración. Al igual que utilizar un workflow CI/CD.

**¿Que nos permite hacer la siguiente declaración?**			

const anyFunction = (param_1) => (param_2) => param_1 + param_2

