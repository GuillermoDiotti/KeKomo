# Informe de testing 
Proyecto asignado: [https://github.com/ORT-FIS-2023S1/proyecto-aristimuno-bia-gonzalez]

## Test de sistema

## Reporte de issues
Los issues propuestos se los podrían clasificar en errores y aspectos a mejorar
A su vez, se los clasifican en base a su prioridad, pudiendo esta ser de "Alta" prioridad, o "Baja" prioridad, o prioridad "media"

### Errores

#### Error 1

##### Resúmen del problema
En la sección del Calendario, hay una alerta que dice que no se puede seleccionar ni un sabado ni domingo en el calendario, sin embargo, hay sabados o domingos en donde la alerta que te pone es distinta

##### Pasos para visualizar el issue
1 - Ir a la sección de Calendario
2 - Seleccionar el día 17/06/2023, el cual es un Sabado, en el calendario
3 - Presionar el botón Buscar
4 - Verificar como aparece la alerta "No se pueden seleccionar los días sábado y domingo"
5 - Seleccionar el día 01/07/2023, el cual es un Sabado, en el calendario
6 - Presionar el botón buscar

##### Resultado
Aunque el último día de estos seleccionado es un Sábado, la alerta que aparece es distinta, por lo cual no se mantiene la alerta "No se pueden seleccionar los días sábado y domingo" durante todos los Sábados o Domingos

##### Grado de Severidad
Alta


#### Error2

##### Resúmen del problema
En la sección del Calendario, hay una alerta que dice "seleccione una fecha a partir de mañana", sin embargo, no se puede distinguir con total claridad a qué día se refiere con mañana y qué día es el que se considera como día actual para así verificar que se seleccione a partir del día siguiente

##### Pasos para visualizar el issue
Esta prueba fue realizada el día Sábado 24/06/2023, por lo cual el llamado "día actual", sería dicho día

1 - Ir a la sección de Calendario
2 - Seleccionar, por ejemplo, la fecha 09/06/2023 en el calendario y presionar Buscar
3 - Ver como el error o aviso aparecido menciona "Por favor seleccione una fecha a partir de mañana", dando por entender de que solamente se podría elegir un menú a partir del día siguiente del día actual, siendo este caso a partir del 10/06/2023
4 - Seleccionar el día 23/06/2023 en el calendario, siendo un día anterior al llamado día actual en este ejemplo, y seleccionar Buscar
5 - Ver como no aparece ninguna alerta y el sistema te permite a su vez realizar una reserva para dicho día

##### Resultado
Se puede observar una inconsistencia sobre a partir de cuál día se podría hacer una reserva de un plato, te sigue dejando hacer pedidos antes que el día actual

##### Grado de Severidad
Alta


#### Error3

##### Resúmen del problema
En un mismo día, hay platos los cuales no te los deja reservar más de una vez

##### Pasos para visualizar el issue
1 -  Dirigirse a la seccion de calendario
2 - Seleccionar 27/06/2023 en el calendario y presionar Buscar
3 - Agregar una reserva de Pechuga a la plancha con ensalada, el cual es el primer plato en la lista de menús para tal día
4 - Dirigirse a la sección de registro de consumo y ver como este plato fue añadido
5 - Verificar cómo el saldo disminuyó al pedir el plato
6 - Repetir pasos de 2 y 3
7 - Al ir a la sección de consumo se puede ver que este último no fue agregado
8 - Al ir a la sección del registro de saldo, se puede verificar que el saldo no descontó este último plato, el plato no fue agregado

##### Resultado
Se puede observar que para un mismo día, no se pueden reservar más de un mismo plato. Este error no ocurre con todos los platos, sin embargo, no debería ocurrir

##### Grado de Severidad
Alta


### Aspectos a mejorar

#### Aspecto1
Estaría bueno que hubiese un maximo de carga de saldo, es decir, que no se pudiese cargar una cantidad mayor a dicha cifra
Por ejemplo, si se quisiera cargar $10.000.000, se puede sin problema, lo cual sería algo exagerado

##### Grado de Severidad
Media


#### Aspecto2
Estaría bueno de que haya un saldo tope, cota
Por ejemplo, si un usuario presenta un saldo de, digamos, $10.000, podría estar bueno de que no se pudiese ingresar un saldo adicional, ya que el máximo saldo que alguien pudiese tener, fuese ese

##### Grado de Severidad
Baja


#### Aspecto3
Estaría bueno de que en la sección Calendario, cuando se seleccione un Sábado o Domingo, la tabla se vaciara, desaparezca, indicando que no habría ningún menú para ese dia

##### Grado de Severidad
Baja


#### Aspecto4
Estaría bueno que la tabla dentro de la sección de registro consumo, se muestren los alimentos con su respectivo precio

##### Grado de Severidad
Media


#### Aspecto5
Estaría bueno poder elegir la cantidad de menús a elegir en un día en puntual, es decir, no tener la necesidad de hacer todo el mismo pedido para poder reservar más de una vez el mismo alimento en un mismo día en el caso de, por ejemplo, se quiera reservar para más de un estudiante

##### Grado de Severidad
Media


#### Aspecto6
Dentro de la sección del registro de saldo, hay un campo que te dice si queres cargar una cantidad específica se saldo
Estaría bueno que, una vez cargada la cantidad deseada, el campo se reseteara, vaciando el valor ingresado y poniendo en su lugar, por ejemplo, cero

##### Grado de Severidad
Baja


#### Aspecto7
Probando la responsividad, en determinados tamaños de pantalla, en el registro de saldo, los botones y el campo no quedan alineados

##### Grado de Severidad
Media

## Informe de calidad del sistema

## Reflexión
    
    



