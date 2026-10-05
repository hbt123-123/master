@echo off
chcp 65001 >nul
title Master Server

if not exist "logs" mkdir logs

set LOGFILE=logs\server_%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%.log
set LOGFILE=%LOGFILE: =0%

echo ========================================
echo Master Server 启动中...
echo 日志文件: %LOGFILE%
echo ========================================

node server.js > "%LOGFILE%" 2>&1

pause
