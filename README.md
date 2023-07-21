# PokeList

## Índice

* [1. Resumen](#resumen)
* [2. Historias de usuario](#historias-de-usuario)
* [3. Prototipos](#prototipos)
* [4. Despliegue de la página](#despliegue-de-la-página)

 

***

## Resumen 
PoKéLiSt es un sitio en donde cualquier persona interesada en conocer el mundo de los Pokémon puede comenzar, ya que en este lugar se puede visualizar la información básica de cada uno (nombre, número, tipo, imagen) de forma clara, los fans de la serie de Pokémon pueden encontrar las listas de los Pokémon correspondientes a las dos primeras generaciones y filtrarlas de acuerdo a la rareza del Pokémon (normal, mítico, legendario). Además, para quienes son jugadores principiantes de Pokémon GO, se pueden ordenar los Pokémon por fuerza o energía, para ello se calcula el DPS y EPS de cada ataque rápido y se usa el promedio de ellos como medida de fuerza y energía de un Pokémon.

## Historias de usuario

### Historia 1

Yo como persona interesada en conocer a todos los Pokémon quisiera visualizar la lista completa de los Pokémon con sus nombres, número según la pokédex, foto y tipo. Para comenzar a conocerlos.

#### Criterio de aceptación 

Se muestra de forma clara, atractiva, con estilo de letra legible e imágenes nítidas, el nombre, número según la pokédex, foto y tipo de todos los Pokémon.

#### Definición de terminado

<img src =./src/img/Todos.jpeg width="30%">



### Historia 2
Yo como fan de la serie de Pokémon me gustaría que los Pokémon se muestren en tarjetas, donde el color de la tarjeta sea de acuerdo al tipo del Pokémon. Para diferenciar fácilmente los tipos que hay.

#### Criterio de aceptación 
La información del Pokémon se muestra en una tarjeta cuyo color es alusivo de al menos un tipo del Pokémon que se muestra y permite ver la información claramente.

#### Definición de terminado

<table>
<thead>
<tr>
<th>Tipo</th>
<th>Tarjeta</th>
<th>Tipo</th>
<th>Tarjeta</th>
</tr>
</thead>
<tbody>
<tr>
<td>Planta</td>
<td><img src =./src/img/planta.png width="100%"></td>
<td>Agua</td>
<td><img src =./src/img/agua.png width="100%"></td>
</tr>
<tr>
<td>Fuego</td>
<td><img src =./src/img/fuego.png width="100%"></td>
<td>insecto</td>
<td><img src =./src/img/insecto.png width="100%"></td>
</tr>
</tbody>
</table>

### Historia 3
Yo como usuario o jugador de Pokémon Go, quiero poder ordenar las tarjetas por nombre  de Pokémon alfabéticamente de la A-Z y Z-A. Para ubicar al Pokémon cuando no recuerde el nombre.

#### Criterio de aceptación 

En el menú **Ordenar** aparecen las opciones de "Por nombre de A-Z", "Por nombre de Z-A" y se ordena correctamente.

#### Definición de terminado


<img src =./src/img/MenuOrdenarAZ.jpeg width="30%">





### Historia 4
Yo como fan de la serie de Pokémon Go quiero ver los Pokémon por rareza de cada una de las generaciones. Para recordar cuáles son los Pokémon míticos, legendarios y normales.

#### Criterio de aceptación 

Se agregan dos menús, el primero es **Generación** donde el usuario seleccionará la generación que desea ver.
El segundo menú es **Mostrar**, aquí aparecen las opciones de "Pokémon míticos", "Pokémon legendarios" y "Pokémon normales", se filtran correctamente después de seleccionar alguna generación.

#### Definición de terminado

<p style = 'text-align:left;'>

<table>
<thead>
<tr>
<th>Generación</th>
<th>Mostrar</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src =./src/img/MenuGene.jpeg width="85%"></td>
<td><img src =./src/img/MenuRareza.jpeg width="95%"></td>
</tr>
</tbody>
</table>

### Historia 5
Yo como entrenador principiante de Pokémon me gustaría ordenar los Pokémon al comparar los ataques rápidos. Para saber cuáles son los más fuertes y cuáles te dan más energía al momento de un combate.

#### Criterio de aceptación 

En la tarjeta del cada Pokémon aparece la información que permite ordenar a los Pokémon de manera ascendente y descendente, de acuerdo al daño que causan en un ataque rápido y la energía que generan. Estas cantidades serán el DPS (promedio del daño por segundo de todos los ataques rápidos) y el EPS (el promedio de la energía por segundo de todos los ataques rápidos).

#### Definición de terminado

<table>
<thead>
<tr>
<th>EPS</th>
<th>DPS</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src =./src/img/TodosEPS.jpeg width="100%"></td>
<td><img src =./src/img/TodosDPS.jpeg width="100%"></td>
</tr>
</tbody>
</table>

## Prototipos
A continuación mostramos los prototipos de baja y alta fidelidad que se obtuvieron al hacer las historias de usuario.

### Prototipo de baja

En la parte del encabezado se mostrará el nombre y logotipo de la página, después en la barra de menú se mostrarán tres menús desplegables para poder seleccionar las generaciones, tipos de rareza y ordenar los datos mostrados como se solicita en cada una de las historias de usuarios. Todos los datos se representarán en forma de tarjetas como se representa en los prototipos para teléfono móvil y computadora:

<table>
<thead>
<tr>
<th>Telefóno</th>
<th>Computadora</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src =./src/img/bajamovil.png width="80%"></td>
<td><img src =./src/img/bajadesk.png width="100%"></td>
</tr>
</tbody>
</table>


### Prototipo de alta

Al principio decidimos hacer un prototipo de alta fidelidad para dos tamaños de dispositivos (laptop y teléfono móvil), iniciamos con el de telefono, colocando una pantalla de bienvenida y en la siguiente las tarjetas de los pokémon, un menú hamburguesa en la parte superior izquierda de la pantalla con las opciones de filtrar, ordenar y mostrar segun las historias de usuario.

![Prototipos de tarjetas](./src/img/prototipoalta1.png)

Después se realizó un prototipo de alta fidelidad para las tarjetas de los pokémon, decidimos solo hacer la representación de cuatro tipos ya que en total hay 18 pokémones. La paleta de color en que nos inspiramos para cada fondo de las tarjetas se encuentra en esta página.
![Prototipos de tarjetas](./src/img/Prototipotarjeta.png)



### Prueba de usabilidad de la aplicación 

Usamos las herramientas de figma para crear nuestra prueba de usabilidad del primer prototipo de alta que realizamos. Sin embargo nos llevamos casi un spring en realizar todo esto solo para móvil, por lo que decidimos comenzar a codear en base a lo que ya teníamos y alos comentarios que recibimos en la prueba de usabilidad. En el siguiente enlace se puede acceder para probar el prototipo, también se uncluye una imagen del mismo.

![Prueba de usabilidad](./src/img/pruebafigma.gif)

## Despliegue de la página

https://andyapg.github.io/DEV009-data-lovers/
