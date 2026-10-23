# 🛡️ ITSOVER - Laptop Protection System

**Sistema de protección multinivel para Windows y Brave Browser orientado a la eliminación de contenido explícito, implícito, redes sociales y vías de elusión.**

---

## 📌 Descripción General

**ITSOVER - Laptop** es un marco de trabajo (*framework*) de seguridad y disciplina digital diseñado para convertir un equipo de trabajo (laptop con Windows) en un entorno blindado. El proyecto combina políticas de grupo local, reglas a nivel de sistema de nombres de dominio (`hosts`), restricciones en el Registro de Windows, extensiones personalizadas e inyección de reglas CSS/Shields para erradicar el acceso a pornografía, material sugerente, algoritmos de hiper-estimulación (como YouTube Shorts) y cualquier método de bypass convencional.

---

## 🎯 Filosofía y Arquitectura de Protección

El sistema opera bajo el principio de **Defensa en Profundidad** (protección por capas). Bloquear únicamente sitios web a nivel de navegador resulta insuficiente frente a la tentación o los hábitos compulsivos. Por ello, ITSOVER articula 10 fases complementarias:

```
[ Nivel 1: Sistema / DNS ]        ---;  Bloqueo de dominios en hosts + Blindaje de permisos
[ Nivel 2: Registro de Windows ]  ---;  Políticas HKLM (Brave / Chrome / IFEO)
[ Nivel 3: Navegador ]            ---;  SafeSearch forzado + Desactivación de Incógnito / Perfiles
[ Nivel 4: Interfaz y Algoritmo]  ---;  Ocultamiento de Shorts + Keyword Firewall Extensión
[ Nivel 5: Automatización ]       ---;  Scripts unificados de activación / desactivación (.bat)

```

---

## 📂 Estructura del Repositorio

```
.
├── ACTIVAR_GLOBAL.bat                  # Script batch de aplicación masiva de directivas
├── DESACTIVAR_GLOBAL.bat               # Script batch de reversión/mantenimiento
├── hosts_bloqueados - Laptop.txt       # Lista de dominios explícitos
├── host_bloqueo_redes_sociales.txt     # Lista de dominios de redes sociales
├── host_cont_implicito - Laptop.txt     # Lista de dominios implícitos/sugerentes
├── README.md                           # Visión general y guía arquitectónica del proyecto
├── FASES/                              # Documentación técnica paso a paso
│   ├── Fase01.md                       # Fase 01: Bloqueo de sitios web pornográficos
│   ├── Fase02.md                       # Fase 02: Bloqueo de contenido implícito y sugerente
│   ├── Fase03.md                       # Fase 03: Blindaje de permisos de edición del host
│   ├── Fase04.md                       # Fase 04: Bloqueo de redes sociales
│   ├── Fase05.md                       # Fase 05: Bloqueo de incógnito, navegadores y motores alternativos
│   ├── Fase06.md                       # Fase 06: Forzado de SafeSearch y restricción de edad
│   ├── Fase07.md                       # Fase 07: Eliminación y bloqueo de YouTube Shorts
│   ├── Fase08.md                       # Fase 08: Firewall por palabras clave (Keyword Firewall)
│   ├── Fase09.md                       # Fase 09: Bloqueo de perfiles secundarios y modo invitado
│   └── Fase10.md                       # Fase 10: Scripts globales de protección y automatización
└── Keyword_Firewall/                   # Extensión personalizable para Brave/Chromium
    ├── manifest.json
    ├── service_worker.js
    ├── engine/
    │   ├── normalizer.js
    │   └── rule_compiler.js
    ├── rules/
    │   └── static_rules.json
    ├── ui/
    │   ├── blocked.css
    │   └── blocked.html
    └── _metadata/
        └── generated_indexed_rulesets/
            └── _ruleset1

```

---

## 🗺️ Mapa de Fases del Proyecto

A continuación se detalla el propósito de cada fase dentro de la arquitectura de blindaje (para los comandos específicos y configuraciones paso a paso, consulta cada documento `.md` ubicado dentro de la carpeta `FASES/`):

| Fase        | Documento                          | Título                                    | Objetivo Principal                                                                                                                                          |
| ----------- | ---------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fase 01** | [FASES/Fase01.md](FASES/Fase01.md) | **Bloqueo Web Pornográfico**              | Mapeo de IP nula (`0.0.0.0`) a nivel de `hosts` para dominios explícitos.                                                                                   |
| **Fase 02** | [FASES/Fase02.md](FASES/Fase02.md) | **Bloqueo de Contenido Implícito**        | Extensión del filtrado de resolución local hacia sitios con contenido sugerente o disparadores de lujuria.                                                  |
| **Fase 03** | [FASES/Fase03.md](FASES/Fase03.md) | **Blindaje del Archivo Hosts**            | Bloqueo de lectura/escritura/ocultamiento (`attrib +r +s +h`) y desactivación de DNS sobre HTTPS (`DnsOverHttpsMode`).                                      |
| **Fase 04** | [FASES/Fase04.md](FASES/Fase04.md) | **Bloqueo de Redes Sociales**             | Inserción de reglas `hosts` para eliminar plataformas de distracciones sociales masivas.                                                                    |
| **Fase 05** | [FASES/Fase05.md](FASES/Fase05.md) | **Restricción de Navegadores y Búsqueda** | Desactivación de modo incógnito/Tor, anulación de ejecutables de otros navegadores (Edge, Chrome, Firefox, Opera) y forzado de Google como motor inmutable. |
| **Fase 06** | [FASES/Fase06.md](FASES/Fase06.md) | **SafeSearch y Restricción de YouTube**   | Redirección de IP a servidores `forcesafesearch.google.com` y directivas del Registro para YouTube restringido.                                             |
| **Fase 07** | [FASES/Fase07.md](FASES/Fase07.md) | **Erradicación de YouTube Shorts**        | Combinación de directivas `URLBlocklist` y filtros cosméticos de ocultamiento de interfaz de Shorts en Brave Shields.                                       |
| **Fase 08** | [FASES/Fase08.md](FASES/Fase08.md) | **Keyword Firewall &amp; Anti-Bypass**        | Carga de extensión personalizada (`Keyword_Firewall/`) para bloqueo por palabras clave y bloqueo del acceso a `brave://extensions` y Developer Tools.       |
| **Fase 09** | [FASES/Fase09.md](FASES/Fase09.md) | **Bloqueo de Perfiles e Invitado**        | Inhabilitación de la creación de nuevos usuarios o ventanas de invitado en el navegador.                                                                    |
| **Fase 10** | [FASES/Fase10.md](FASES/Fase10.md) | **Control Global Batch**                  | Integración de scripts automáticos `.bat` para gestión rápida y orquestación del sistema.                                                                   |

---

## 💻 Requisitos del Sistema

* **Sistema Operativo:** Windows 10 / 11 (con permisos de Administrador).
* **Navegador Principal:** Brave Browser (la lógica de registro utiliza la rama `Software\Policies\BraveSoftware\Brave`, adaptable a Google Chrome o Edge ajustando la clave del registro).
* **Consola:** Símbolo del Sistema (`cmd.exe`) ejecutado como Administrador.

---

## ⚙️ Orden Sugerido de Implementación

Para asegurar que no existan inconsistencias ni bloqueos de permisos prematuros durante la instalación, se recomienda seguir el orden numérico secuencial:

1. **Configurar Listas Base:** Completar las **Fases 01, 02 y 04** (modificación de `hosts` usando los archivos `.txt` de la raíz).
2. **Aplicar Políticas de Navegador:** Ejecutar las **Fases 05, 06, 07 y 09** (modificaciones mediante `reg add`).
3. **Desplegar la Extensión:** Cargar la carpeta `Keyword_Firewall/` en **Fase 08** antes de bloquear la ventana de extensiones.
4. **Cerrar Vías de Escape y Blindar:** Aplicar el blindaje de archivos en **Fase 03** y los scripts globales de la **Fase 10**.

---

## ⚠️ NOTA Y ADVERTENCIA DE USO

* Este sistema modifica políticas del sistema (`HKLM\Software\Policies`) y archivos críticos de red de Windows. Realiza una copia de seguridad del Registro de Windows antes de aplicar cambios masivos.
* La efectividad del sistema radica en la **inmutabilidad**: una vez configurado, el acceso a herramientas de edición y modos de navegación sin filtro queda totalmente restringido.
