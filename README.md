<a name="br1"></a> 

# Valorant

Primeros Pasos con React

Angie Garcia



<a name="br2"></a> 

# Introducción

## Contexto

Este proyecto de React es una aplicación web que muestra información sobre los agentes del juego

"Valorant". Los agentes son personajes jugables en el juego, y la aplicación muestra sus nombres, roles

y avatares. Además, la aplicación permite filtrar los agentes por rol y buscar agentes por nombre. Al

seleccionar un agente, la aplicación muestra una vista detallada con más información sobre ese agente

específico.

Es un proyecto sencillo para dar los primeros pasos con React, que he realizado con fines educativos.

##Requisitos de Funcionalidad

Para este proyecto he tenido en cuenta los siguientes requisitos de funcionalidad:


**Mostrar la lista de agentes:** La aplicación debe obtener datos de la API "https://valorant-

api.com/v1/agents" al cargar y mostrar una lista de agentes en la página principal.


**Filtrar por Rol:** La aplicación debe permitir al usuario filtrar la lista de agentes por su rol. Los roles disponibles son "Initiator", "Sentinel", "Duelist" y "Controller". Se debe proporcionar una opción "All Role" para mostrar todos los agentes sin filtrar por rol.

**Búsqueda por Nombre:** La aplicación debe proporcionar una barra de búsqueda donde el

usuario pueda ingresar el nombre de un agente. Al presionar el botón de búsqueda, la lista de

agentes debe filtrarse y mostrar solo aquellos cuyos nombres coinciden (de forma parcial o

completa) con el texto de búsqueda ingresado. Si no se encuentran resultados, se debe mostrar

un mensaje de alerta indicando que el agente no se encontró.

**Vista Detallada del Agente:** Al hacer clic en un agente de la lista, la aplicación debe mostrar una

vista detallada con más información sobre ese agente específico. La vista detallada debe incluir el nombre del agente, su imagen/avatar, y su rol.

**Cerrar Agentes:** En la vista detallada del agente, debe haber un botón "x" para cerrar la vista detallada y volver a la lista de agentes.

**Estilo y Diseño:** La aplicación debe tener un diseño atractivo y amigable para el usuario. Se pueden utilizar gradientes de fondo en las tarjetas de los agentes para hacerlas más llamativas.

**Navegación:** La aplicación debe utilizar la biblioteca de enrutamiento "react-router-dom" para permitir la navegación entre la página principal y la vista detallada del agente.

**Nota:** Es importante asegurarse de que la API "https://valorant-api.com/v1/agents" esté accesible y proporcionando datos adecuados. Además, se recomienda agregar manejadores de errores para manejar posibles fallos en la obtención de datos desde la API.





<a name="br3"></a> 

# Instalación

Para probar este proyecto localmente, sigue los siguientes pasos:

1\. Clona este repositorio en tu máquina local uꢀlizando el siguiente comando:
git c[lone](https://github.com/angiegxg/valorant.git)[ ](https://github.com/angiegxg/valorant.git)<https://github.com/angiegxg/valorant.git>

2\. Ve al directorio del proyecto: cd valorant

3\. Instala las dependencias utilizando npm:npm install

4\. Inicia la aplicación: npm start

5\. Abre tu navegador web y navega a `http://localhost:3000`para ver la aplicación en acción.

# Uso

Una vez que la aplicación esté en funcionamiento, podrás explorar la lista completa de agentes de Valorant.

Podrás buscar agentes por nombre uꢀlizando la barra de búsqueda y ﬁltrar la lista por rol uꢀlizando el ﬁltro desplegable.
Haz clic en una tarjeta de agente para ver una vista detallada de la información del agente, incluida su
imagen, rol, descripción y habilidades.



