### **FASE 09: BLOQUEAR LA OPCION DE CREAR OTROS PERFILES O INGRESAR COMO INVITADO**



##### **PASO 01:** Entrar al cmd como administrador y dar los siguientes códigos:

##### 

##### :: 1. Desactivar y eliminar el Modo Invitado

##### reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v BrowserGuestModeEnabled /t REG\_DWORD /d 0 /f

##### 

##### :: 2. Bloquear la creacion de nuevos perfiles (conserva los existentes)

##### reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v BrowserAddPersonEnabled /t REG\_DWORD /d 0 /f

