# Приложение на React Native для обработки фотографий

### Установка и запуск Expo Dev Tools

1. Установить [Node.js](https://nodejs.org/).

2. Перейти в папку проекта и установить Expo

    ```npm install expo-cli --global```

3. Запустить Expo 

    `expo start`

4. Если появляется ошибка "Cannot determine which native SDK version ..." то установить зависимости проекта и повторить пункт 3

    ```npm install```
    
    ```expo start```

5. Откроется сайт Expo Dev Tools для запуска приложения.

### Запуск приложения

6. Для запуска приложения на эмуляторе Android/симуляторе iOS:
    - запустить эмулятор Android (для iOS этот пункт не требуется), 
    - нажать кнопку "Run on Android device/emulator" или "Run on iOS simulator" 
    - ждать пока на эмуляторе/симуляторе установится expo и запустится приложение
    - если приложение не запускается, то можно переключить CONNECION с LAN на Local и повторить предыдущие пункты

7. Для запуска на мобильном телефоне:
    - Для iOS достаточно отсканировать QR-код
    - Для Android надо установить на телефон приложение Expo и через него отсканировать QR-код
    
8. Для сборки файлов .apk (для Android) или .ipa (для iOS)
    - Зарегистрироваться на expo.io
    - Запустить сборку из командной строки и следовать инструкциям
    
        Android:
    
            expo build:android
        
        iOS:
    
            expo build:ios
        
    - Перейти по указанному адресу в https://expo.io/dashboard/
    - Дождаться завершения сборки на сервере Expo
    - Скачать получившийся файл
    - Скопировать файл на устройство
    - Установить и запустить приложение на телефоне
