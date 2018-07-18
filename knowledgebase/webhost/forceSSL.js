#Wie erzwinge SSL mit .htaccess

Wenn Sie SSL immer auf Ihrer Website haben möchten, können Sie .htaccess auf unserem Webhosting verwenden.
Dies ist eine Funktion in Apache, die ein einfaches Hinzufügen der Konfiguration ermöglicht.

1. Logge dich in das DeluxeNode cPanel ein.
2. Gehe zum Dateimanager.
3. Erstellen Sie eine Datei namens .htccess im Stammverzeichnis Ihrer Website, falls sie nicht existiert.
4. Fügen Sie Folgendes hinzu und speichern Sie dann:


RewriteEngineOn
RewriteCond%{HTTPS}off
RewriteRule^(.*)$https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
