@echo off
color 0A
cls
echo ========================================================
echo             ACTIVANDO BLINDAJE EN WINDOWS
echo ========================================================
echo.

:: Comprobar permisos de Administrador
net session >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Ejecuta este archivo con CLIC DERECHO: "Ejecutar como administrador".
    echo.
    pause
    exit /b
)

echo [1/2] Aplicando bloqueo estricto en el Registro de Windows...

:: Sintaxis canonica para bloquear la pagina de extensiones en Brave y Chrome
reg add "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 10 /t REG_SZ /d "brave://extensions" /f >nul 2>&1
reg add "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 11 /t REG_SZ /d "brave://extensions/*" /f >nul 2>&1
reg add "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 12 /t REG_SZ /d "chrome://extensions" /f >nul 2>&1
reg add "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 13 /t REG_SZ /d "chrome://extensions/*" /f >nul 2>&1
reg add "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 14 /t REG_SZ /d "brave://settings/extensions" /f >nul 2>&1
reg add "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 15 /t REG_SZ /d "chrome://settings/extensions" /f >nul 2>&1

:: Redundancia en rama de usuario
reg add "HKCU\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 10 /t REG_SZ /d "brave://extensions" /f >nul 2>&1
reg add "HKCU\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 11 /t REG_SZ /d "chrome://extensions" /f >nul 2>&1

echo [2/2] Reiniciando Brave...
taskkill /F /IM brave.exe >nul 2>&1
timeout /t 1 >nul
start brave

echo.
echo ========================================================
echo   BLINDAJE ACTIVADO: EXTENSIONES BLOQUEADAS POR SISTEMA
echo ========================================================
echo.
pause