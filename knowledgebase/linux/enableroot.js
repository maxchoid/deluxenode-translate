#So aktivieren Sie den Root-SSH-Zugriff mit Passwörtern auf unseren VPS.

Wenn Sie den Passwort-Zugriff anstelle eines SSH-Schlüssels aktivieren möchten, um den Root-Benutzer Ihres DeluxeNode VPS zu steuern, folgen Sie dieser Anleitung.

HINWEIS: Wir empfehlen dringend, zur Sicherheit einen SSH-Schlüssel anstelle der Kennwortauthentifizierung zu verwenden.

1. Gehen Sie in Ihren Kundenbereich und klicken Sie auf den virtuellen Server, für den Sie den Passwort-Zugang aktivieren möchten.
2. Klicken Sie auf NoVNC und melden Sie sich mit den Anmeldeinformationen an, die Ihnen kurz nach der Bestellung des virtuellen Servers per E-Mail zugesandt wurden.
3. Führen Sie "apt update && apt upgrade" aus und geben Sie "nano / etc / ssh / sshd_config" ein.
4. Scrollen Sie mit den Pfeiltasten nach unten, bis Sie den Text "PermitRootLogin prohibit-password" sehen.
5. Ersetzen Sie "prohibit-password" durch "yes" und entfernen Sie die "#".
6. Drücken Sie gleichzeitig STRG und X, und drücken Sie Y und geben Sie ein, um die Datei zu speichern.
7. Sie "service ssh restart" aus, um Ihre Änderungen zu aktivieren und den Kennwortzugriff auf den Benutzer root zuzulassen.
