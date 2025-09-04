@echo off
echo 🎬 Optimizing Gomanic Landing Videos...
echo ====================================

set SOURCE_DIR=D:\projects\gomanic-landing-ru\public\images\masters
set OUTPUT_DIR=D:\projects\gomanic-landing-ru\public\videos

if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

echo.
echo ⏳ Converting video 1/3: copy_61419D38...
ffmpeg -i "%SOURCE_DIR%\copy_61419D38-6BD1-432E-AFDE-7587071CE25C.mov" ^
  -c:v libx264 -crf 28 -preset medium ^
  -vf "scale=1280:720" ^
  -c:a aac -b:a 128k ^
  "%OUTPUT_DIR%\training1.mp4" -y

echo.
echo ⏳ Converting video 2/3: copy_E50046E2...
ffmpeg -i "%SOURCE_DIR%\copy_E50046E2-F8A7-481A-AC2B-02659A859387.mov" ^
  -c:v libx264 -crf 28 -preset medium ^
  -vf "scale=1280:720" ^
  -c:a aac -b:a 128k ^
  "%OUTPUT_DIR%\training2.mp4" -y

echo.
echo ⏳ Converting video 3/3: hd.mp4...
ffmpeg -i "%SOURCE_DIR%\hd.mp4" ^
  -c:v libx264 -crf 26 -preset medium ^
  -vf "scale=1280:720" ^
  -c:a aac -b:a 128k ^
  "%OUTPUT_DIR%\training3.mp4" -y

echo.
echo 📊 Checking sizes...
dir "%OUTPUT_DIR%\*.mp4" /Q

echo.
echo ✅ Video optimization complete!
echo Original sizes: ~138MB total
echo Check new sizes above.
