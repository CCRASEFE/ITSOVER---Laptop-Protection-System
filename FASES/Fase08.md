### **FASE 08: KEYWORDS BLOCK - BUSCADOR Y YOUTUBE**



##### **PASO 01:** Crea la estructura de carpetas, en el lugar que tu eligas, de la siguiente manera:

##### 

##### keyword-firewall/

##### 

##### ├── manifest.json

##### ├── service\_worker.js

##### ├── engine/

##### │   ├── normalizer.js

##### │   └── rule\_compiler.js

##### ├── rules/

##### │   └── static\_rules.json

##### └── ui/

##### &#x20;   ├── blocked.html

##### &#x20;   └── blocked.css

##### 

##### **PASO 02:** Pegar el codigo de cada archivo, lo encuentras en la carpeta "keyword\_firewall"

##### 

##### **PASO 03:** Entra a brave y busca *brave://extensions* y activa el interruptor de modo desarrollador

##### 

##### **PASO 04:** Clica en “cargar descomprimida” y Selecciona la carpeta keyword\_firewall

##### 

##### **PASO 05:** Da una vez, dentro del recuadro de la extension al simbolo de cargar

##### 

##### **PASO 06:** Ahora vamos al cmd y damos:

##### 

##### &#x20; reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 10 /t REG\_SZ /d "brave://extensions\*" /f

##### 

##### &#x20; reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 11 /t REG\_SZ /d "chrome://extensions\*" /f

##### 

##### &#x20; reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 12 /t REG\_SZ /d "brave://flags\*" /f

##### 

##### &#x20; reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 13 /t REG\_SZ /d "brave://settings/extensions\*" /f

##### 

##### &#x20; reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v DeveloperToolsAvailability /t REG\_DWORD /d 2 /f

