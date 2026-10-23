### **FASE 07: BLOQUEO DE YOUTUBE SHORTS**



##### **PASO 01 (Bloqueo duro por comandos):** Entramos en el cmd como administrador y corremos los siguientes códigos:

##### 

##### &#x20; reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 1 /t REG\_SZ /d "\*://\*.youtube.com/shorts\*" /f

##### 

##### &#x20; reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 2 /t REG\_SZ /d "\*://youtube.com/shorts\*" /f

##### 

##### **PASO 02:** Abre lo siguiente en la barra de direcciones de tu buscador: brave://settings/shields/filters

##### 

##### **PASO 03:** Baja con la barra y activa la opcion de modo desarrollador

##### 

##### **PASO 04:** Pega las siguientes lineas en la caja:

##### 

##### ! ==========================================

##### ! 1. ELIMINAR SHORTS DE BUSQUEDAS Y RECOMENDACIONES (SIN RETRASO)

##### ! ==========================================

##### youtube.com##ytd-reel-shelf-renderer

##### youtube.com##ytd-shelf-renderer:has(a\[href\*="/shorts/"])

##### youtube.com##ytd-rich-shelf-renderer:has(a\[href\*="/shorts/"])

##### youtube.com##grid-shelf-view-model:has(a\[href\*="/shorts/"])

##### youtube.com##ytd-video-renderer:has(a\[href\*="/shorts/"])

##### 

##### ! ==========================================

##### ! 2. ELIMINAR BOTONES Y ELEMENTOS DE LA INTERFAZ

##### ! ==========================================

##### youtube.com##ytd-guide-entry-renderer:has(path\[d\*="10 14.65v-5.3L15 12l-5 2.65"])

##### youtube.com##ytd-mini-guide-entry-renderer\[aria-label="Shorts"]

##### youtube.com##a\[title="Shorts"]

##### youtube.com##yt-chip-cloud-chip-renderer:has-text(Shorts)

##### 

##### ! ==========================================

##### ! 3. DESTRUIR EL REPRODUCTOR SI SE ABRE UN SHORT

##### ! ==========================================

##### youtube.com##ytd-shorts

##### youtube.com##ytd-reel-video-renderer

##### 

