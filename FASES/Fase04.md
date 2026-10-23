### **FASE 04: BLOQUEO DE REDES SOCIALES**



##### **PASO 01:** (Desblindaje del host a la edición): Entrar al cmd como administrador y dar el siguiente comando:  *attrib -r -s -h C:\\Windows\\System32\\drivers\\etc\\hosts*



##### **PASO 02:** Ingresar al archivo Host y abrir con bloc de notas, comunmente se encuentra en la dirección “Windows\\System32\\drivers\\etc”



##### **PASO 03:** Pega el contenido del documento “host\_bloqueo\_redes\_sociales.txt” en el final del archivo Host



##### **PASO 04:** Dale guardar y cierra el archivo host



##### **PASO 05: (Vaceado de caché DNS):** Abrir el cmd como administrador y dar al comando *ipconfig /flushdns*



##### **PASO 06:** Cierra los navegadores y vuelve a entrar



##### **PASO 07:** (Blindaje del host a la edición): Entrar al cmd como administrador y dar el siguiente código:  *attrib +r +s +h C:\\Windows\\System32\\drivers\\etc\\hosts*



