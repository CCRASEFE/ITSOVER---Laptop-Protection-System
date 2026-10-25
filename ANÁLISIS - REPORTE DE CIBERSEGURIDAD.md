# **ANÁLISIS - REPORTE DE CIBERSEGURIDAD**

## **1\. Los compromisos (Trade-offs) de seguridad introducidos**

### **A. Desactivación de DNS sobre HTTPS (DnsOverHttpsMode = "off")** :  
#### Al apagar el DNS Seguro para obligar a Brave a consultar el archivo hosts local, tus solicitudes DNS ahora viajan en texto plano por el puerto UDP 53 hacia tu router/proveedor de internet. En tu red doméstica segura, el impacto es bajo (tu proveedor de internet ya ve tus conexiones por los certificados TLS/SNI). Sin embargo, en redes Wi-Fi públicas abiertas (cafeterías, aeropuertos, hoteles) eres vulnerable a ataques de DNS Spoofing o Man-in-the-Middle (MitM), donde un atacante en la misma red podría interceptar o falsificar respuestas DNS hacia sitios bancarios o correos. La mitigación recomendada radica en  utilizar una VPN confiable para encapsular todo el tráfico en un túnel cifrado cuando te conectas a una red pública.

### **B. La Extensión local en "Modo Desarrollador"**

#### Las extensiones instaladas desde la Web Store son auditadas y firmadas criptográficamente por Google. Tu extensión es código abierto local (unpacked), además que la extensión tiene permisos muy potentes: all_urls, webNavigation y tabs. Como los archivos residen en una carpeta de tu equipo, cualquier proceso que logre ejecutarse con tu usuario estándar podría modificar service_worker.js e inyectar código malicioso que lea tráfico o robe cookies de sesión. Para solucionar esta vulnerabilidad asegúrate de que nadie más tenga acceso a tu sesión de Windows y no ejecutes software de procedencia dudosa (.exe desconocidos) que pueda alterar los archivos de tu escritorio.

### **C. Uso de IFEO (Image File Execution Options) para bloquear navegadores**

#### Usamos la clave Debugger con systray.exe para impedir que se abran Edge, Chrome, Opera o Firefox. - Esta técnica está catalogada en la matriz de ciberseguridad  MITRE ATT&CK como T1546.012 (secuestro de ejecución de imágenes). Es una técnica que el malware usa con frecuencia para persistencia. Tu equipo no es más vulnerable por esto, pero es muy probable que un antivirus comercial (Windows Defender, Malwarebytes, etc.) te arroje una alerta de falso positivo diciendo que detectó una modificación sospechosa en el registro.

## **2\. Las Ganancias de Seguridad**

### **A. Sinkholing de 11,000+ dominios a 0.0.0.0:**

#### La mayoría de las páginas de contenido para adultos son vectores masivos de distribución de malvertising, estafas de ingeniería social, scripts de criptominería y troyanos bancarios. Al bloquear más de 11,000 dominios a nivel de kernel de red, eliminamos de golpe miles de vectores de infección comunes. 

### **B. Políticas de Enterprise Hardening aplicadas:**

#### BrowserGuestModeEnabled = 0 y BrowserAddPersonEnabled = 0 son directivas recomendadas por los estándares internacionales de seguridad (como los CIS Benchmarks), estos evitan que alguien use tu equipo mediante sesiones temporales no auditadas o cree perfiles fantasma para descargar binarios sin restricciones.

### **C. Bloqueo de motores de búsqueda alternativos y dudosos:**

####  Al forzar Google SafeSearch y cortar el acceso a motores sin filtrado o de reputación dudosa (como Yandex o proxies web camuflados), minimizamos la probabilidad de llegar a sitios de phishing mediante resultados de búsqueda envenenados (SEO Poisoning).

### MATRIZ DE EVALUACIÓN FINAL

| Vector de Seguridad | Estado Anterior | Estado Actual | Veredicto |
| --- | --- | --- | --- |
| Exposición a malware web / Phishing | Alta (acceso libre a sitios de riesgo) | Muy Baja (11,000 dominios y keywords bloqueados) | Mejoró significativamente |
| Privacidad en Redes Públicas (DNS) | Alta (cifrado con DoH) | Media/Baja (UDP 53 en texto plano) | Requiere precaución en Wi-Fi pública |
| Integridad del Navegador | Estándar (perfiles y extensiones libres) | Endurecida (políticas HKLM activas) | Mejoró (Hardened) |
| Riesgo de Intrusión Remota | Idéntico | Idéntico | Sin cambios (Neutro) |


## SOLUCIÓN NECESARIA

### Instalar un VPN y utilizarlo principalmente en redes públicas, el recomendado es un VPN de escritorio ya que a diferencia de uno tipo extensión, estos no crean un tunel de red completo como si lo hacen los VPN tipo extensión, si se crea un túnel de red completo, este actúa como Proxy HTTPS/SOCKS5 remoto, dando como consecuencia un salto del archivo host donde tenemos bloqueado los sitios web. El comportamiento del sistema ITSOVER - Laptop-Protection-System fue comprobado con un VPN de escritorio gratuito mostrando todas las bondades creadas del sistema y cumpliendo con la función de protección en redes públicas.

