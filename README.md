# IrisBank

Aplicacion web donde podrás crear tareas y marcarlas como finalizadas

## Development server

Antes que nada se deben instalar los paquetes necesarios con el comando `npm install`

Para lanzar el proyecto `ng serve` en servidor de desarrollo en la url `http://localhost:4200/`


## Base de dato para pruebas

Es necesario instalar de manera global e iniciar el json-server para poder tener un funcionamiento adecuado del proyecto con el comando 
`json-server --watch db.json`

aqui la documentacion https://www.npmjs.com/package/json-server#getting-started

## Reto 2
El reto 2 consistió en poder dar por finalizadas las tareas y mostrarlas en la lista del lado derecho

## Versiones
La prueba se construyó mediante versiones en las cuales se iban agregando nuevas
características hasta llegar al producto mínimo viable, a continuación se detallan cada una
de las versiones y que se hizo en cada una

### v0.1.0 - Proyecto inicial y estructura
La estructura inicial del proyecto pensada para una escalabilidad y crecimiento del mismo, a
medida que se van desarrollando características al proyecto pueden surgir nuevas carpetas

### v0.2.0 - Estilos
Se agregó la librería de bootstrap para estilos globales de la aplicación. Se personalizaron colores basados en los que se encuentran en la pagina de https://www.irisbank.co/, de la misma forma que la fuente SourceSansPro

### v1.0.0 - Layout principal
creación del layout principal y de componente header con logo de iris bank

### v1.1.0 - Componentes personalizados
Se crearon los componentes de control Select, Checkbox y InputButton para ser usados de manera global en la aplicación, además de estos se crearon los de ToDoItem y ToDoList

### v1.2.0 - Primera versión estable
Pantalla principal donde se escoge categoría y se agregan items a la lista de toDo, también se eliminan. Aún no hay persistencia de datos

### v1.3.0 - Manejo de estado
Si bien se sabe que es una aplicación pequeña, utilice el manejador de estado NGRX para demostrar mis conocimientos sobre le patrón redux. Ambas listas, tanto la de tareas por hacer como las finalizadas estan siendo manejadas por el estado y la persistencia mediante json-server. En esta version ademas de eso se agregó la lista de tareas finalizadas reutilizando el componente de las tareas pendientes.

Todo lo explicado en las versiones se puede ver en el video DEMO


### Demo


https://user-images.githubusercontent.com/34575757/146931210-e33ebd2f-a75e-4e8f-8e2d-fde36a4623a9.mov


### Librerias usadas
- "@ngrx/effects": "^13.0.2",
- "@ngrx/store": "^13.0.2",
- "@ngrx/store-devtools": "^13.0.2",
- "bootstrap": "^5.1.3",
- "uuid": "^8.3.2",

