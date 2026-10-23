### **FASE 03: BLOQUEO DE PERMISOS DE EDICIÓN DEL HOST**



##### **PASO 01 (Que el host bloquee para todos los perfiles):** Entrar al cmd como administrador y dar el siguiente comando: *reg add "HKLM\\Software\\Policies\\Google\\Chrome" /v DnsOverHttpsMode /t REG\_SZ /d "off" /f*



##### ***PASO 02 (Vaciar DNS):*** <i>Dar al siguiente código: ipconfig /flushdns</i>

##### &#x20;

##### **PASO 03:** Reiniciar el equipo





##### **PASO 04:** (Blindaje del host a la edición): Entrar al cmd como administrador y dar el siguiente código:  *attrib +r +s +h C:\\Windows\\System32\\drivers\\etc\\hosts*



##### 

