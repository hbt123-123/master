@echo off
chcp 65001 >nul

if not exist "logs" mkdir logs

set LOGFILE=logs\server_%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%.log
set LOGFILE=%LOGFILE: =0%

echo Master Server 正在新窗口中启动...
echo 日志将保存到: %LOGFILE%
echo.

start "Master Server" cmd /k "node server.js > \"%LOGFILE%\" 2>&1"
