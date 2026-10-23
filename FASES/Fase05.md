### **FASE 05: DESACTIVACIÓN DE VENTANAS INCONGNITO, BLOQUEO DE OTROS NAVEGADORES y BLOQUEO DE OTROS MOTORES DE BUSQUEDA DIFERENTES A GOOGLE**

##### 

##### **NOTA:** En mi caso los comandos son para Brave, si usas otra navegador debes adecuar la lógica para tu navegador.



##### 

##### **PASO 01:** Ingresar al cmd como administrador y dar a los siguientes códigos:

##### 

##### &#x20; Para bloquear las ventanas en incognito

##### 

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v IncognitoModeAvailability /t REG\_DWORD /d 1 /f*

##### 

##### &#x20; Para bloquear las ventanas en incognito de tor

##### 

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v TorDisabled /t REG\_DWORD /d 1 /f*



##### 

##### **PASO 02:** Bloquear los operadores que no uso con los siguientes comandos



##### &#x20;  Para Bloquear Edge

##### 

##### &#x20;  *reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\msedge.exe" /v Debugger /t REG\_SZ /d "systray.exe" /f*

##### 

##### &#x20;  Para bloquear Chrome

##### 

##### &#x20;  *reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\chrome.exe" /v Debugger /t REG\_SZ /d "systray.exe" /f*

##### 

##### &#x20;  Para bloquear Firefox

##### &#x20;

##### &#x20;  *reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\firefox.exe" /v Debugger /t REG\_SZ /d "systray.exe" /f*

##### 

##### &#x20;  Para bloquear Opera

##### &#x20;

##### &#x20;  *reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\opera.exe" /v Debugger /t REG\_SZ /d "systray.exe" /f*



##### ***PASO 03:*** *Abrir una pestaña nueva de Brave y darle al personalizar (Simbolo de engranaje)*

##### 

##### ***PASO 04:*** *Seleccionar en "Busqueda", en "Motores de búsqueda habilitados" solo a google.*

##### 

##### ***PASO 05:*** *Entra al Cmd como administrador y da los siguientes comandos:*



##### &#x20; :: 1. Bloquear y forzar Google como motor predeterminado inmutable

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v DefaultSearchProviderEnabled /t REG\_DWORD /d 1 /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v DefaultSearchProviderName /t REG\_SZ /d "Google" /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v DefaultSearchProviderSearchURL /t REG\_SZ /d "https://www.google.com/search?q={searchTerms}" /f*

##### 

##### &#x20; :: 2. Bloquear el acceso a todos los motores alternativos

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 30 /t REG\_SZ /d "\*://search.brave.com/\*" /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 31 /t REG\_SZ /d "\*://\*.duckduckgo.com/\*" /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 32 /t REG\_SZ /d "\*://\*.bing.com/\*" /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 33 /t REG\_SZ /d "\*://\*.qwant.com/\*" /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 34 /t REG\_SZ /d "\*://\*.startpage.com/\*" /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 35 /t REG\_SZ /d "\*://\*.ecosia.org/\*" /f*

##### &#x20; *reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave\\URLBlocklist" /v 36 /t REG\_SZ /d "\*://\*.search.yahoo.com/\*" /f*





##### ***PASO 06:*** *Entrar a "brave://settings/searchEngines" y borrar los motores de busqueda, todos menos google.*



##### ***PASO 07 (Desactivar el DNS seguro de Brave):*** *Entramos al cmd como admin y damos: reg add "HKLM\\Software\\Policies\\BraveSoftware\\Brave" /v DnsOverHttpsMode /t REG\_SZ /d "off" /f*

##### 

##### ***PASO 08:*** *Aniquilamos los otros motores de busqueda con el host - Sigue los pasos aplicados en Fase 04 y agrega en el host las siguientes direcciones:*



##### 0.0.0.0 search.brave.com

##### 0.0.0.0 espanol.search.yahoo.com

##### 0.0.0.0 espanol.yahoo.com

##### 0.0.0.0 www.bing.com

##### 0.0.0.0 bing.com

##### 0.0.0.0 duckduckgo.com

##### 0.0.0.0 www.duckduckgo.com

##### 0.0.0.0 startpage.com

##### 0.0.0.0 www.startpage.com

##### 0.0.0.0 qwant.com

##### 0.0.0.0 www.qwant.com

##### 0.0.0.0 yandex.com

##### 0.0.0.0 yandex.ru

##### 0.0.0.0 search.yahoo.com

##### 0.0.0.0 bing.com

##### 0.0.0.0 ://bing.com

##### 0.0.0.0 yahoo.com

##### 0.0.0.0 ://yahoo.com

##### 0.0.0.0 ://yahoo.com

##### 0.0.0.0 duckduckgo.com

##### 0.0.0.0 ://duckduckgo.com

##### 0.0.0.0 yandex.com

##### 0.0.0.0 ://yandex.com

##### 0.0.0.0 yandex.ru

##### 0.0.0.0 www.yandex.ru

##### 0.0.0.0 baidu.com

##### 0.0.0.0 ://baidu.com

##### 0.0.0.0 ecosia.org

##### 0.0.0.0 www.ecosia.org

##### 0.0.0.0 ask.com

##### 0.0.0.0 ://ask.com

##### 0.0.0.0 aol.com

##### 0.0.0.0 ://aol.com

