@echo off
color 0E
cls
echo ========================================================
echo       DESACTIVANDO BLINDAJE: MODO MANTENIMIENTO
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

echo [1/2] Retirando bloqueos del Registro de Windows...

:: Eliminar las restricciones de URL
reg delete "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 10 /f >nul 2>&1
reg delete "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 11 /f >nul 2>&1
reg delete "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 12 /f >nul 2>&1
reg delete "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 13 /f >nul 2>&1
reg delete "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 14 /f >nul 2>&1
reg delete "HKLM\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 15 /f >nul 2>&1

reg delete "HKCU\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 10 /f >nul 2>&1
reg delete "HKCU\Software\Policies\BraveSoftware\Brave\URLBlocklist" /v 11 /f >nul 2>&1

echo [2/2] Reiniciando Brave...
taskkill /F /IM brave.exe >nul 2>&1
timeout /t 1 >nul
start brave

echo.
echo ========================================================
echo   BLINDAJE DESACTIVADO: ACCESO A EXTENSIONES PERMITIDO
echo ========================================================
echo.
pause