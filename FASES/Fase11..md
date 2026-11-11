### **FASE 11: USO DE TELEGRAM Y BLOQUEO DE CANALES QUE NO COLABORAN**



##### **PASO 01:** Para eliminar toda capacidad de acceder a contenido explicito y asi hacer más agresivo este sistema para nuestra PC haremos el bloqueo del telegram web, y en caso se tenga links, información, se los copia a Whatsapp y se soluciona todo.



##### Prcedemos a desbloquear el host para editarlo con el comando:



##### *attrib -r -s -h C:\\Windows\\System32\\drivers\\etc\\hosts*



##### **PASO 02:** Agregamos las siguientes entradas a nuestro host.



##### \# BLOQUEO DE TELEGRAM

##### 0.0.0.0 web.telegram.org

##### 0.0.0.0 telegram.org

##### 0.0.0.0 www.telegram.org

##### 0.0.0.0 desktop.telegram.org

##### 0.0.0.0 t.me

##### 0.0.0.0 www.t.me

##### 0.0.0.0 web.telegram.org/a



##### **PASO 03:** Cerramos el host y en el CMD modo admin damos:



##### *attrib +r +s +h C:\\Windows\\System32\\drivers\\etc\\hosts*



##### **PASO 04:** Para el bloqueo de canales de youtube y complementar a nuestro firewall keyword procedemos a instalar la extensión "BlockTube", la encontramos en la Chrome web store



##### **PASO 05:** Ahora cada vez que veas un canal que no te sirva para nada, das clic en los tres puntitos y le das a "Block Chanel". 

##### 

##### **NOTA:** Con esta fase se completa el sistema y se cierra las puertas a todo contenido no deseado, me esforcé por buscar salidas a mi sistema inicial de tal forma que este repositorio agrupe todo lo necesario para modificar tu laptop y controlar el contenido entrante para se el objetivo que tengas. Si encuentras alguna salida o fuga que deseas que solucione, busca informarmelo. Proximamente se desarrollará una interfaz para seleccionar que y que fase implementar para que usuarios con pocos conocimientos tambien logren usar este método.



