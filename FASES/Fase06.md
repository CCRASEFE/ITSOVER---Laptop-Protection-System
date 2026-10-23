### **FASE 06: SAFESEARCH APLICAR A BRAVE**

##### 

##### **NOTA:** En mi caso los comandos son para Brave, si usas otra navegador debes adecuar la lógica para tu navegador.



##### 

##### **PASO 01:** Ingresar al cmd como administrador y dar a los siguientes códigos:

##### 

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v ForceGoogleSafeSearch /t REG\_DWORD /d 1 /f*



##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v ForceYouTubeRestrict /t REG\_DWORD /d 2 /f*





##### **PASO 02:** Entramos al host siguiendo las indicaciones de la fase04 y agregamos estas lineas:



##### \# --- FORZAR GOOGLE SAFESEARCH PERMANENTE ---

##### 216.239.38.120 www.google.com

##### 216.239.38.120 google.com

##### 216.239.38.120 forcesafesearch.google.com

##### 216.239.38.120 www.google.com.pe

##### 216.239.38.120 google.com.pe









##### **NOTA:** En caso de que veas contenido de acción que contenga luchas y peleas como en solo leveling, considera bajar la restricción de edad del youtube con: 

##### 

##### &#x20; *reg delete "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v ForceYouTubeRestrict /f*

##### 

##### Y cuando deseas activarlo de nuevo aplicas

##### 

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v ForceYouTubeRestrict /t REG\_DWORD /d 2 /f*

