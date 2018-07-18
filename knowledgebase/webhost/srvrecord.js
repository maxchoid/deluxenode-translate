
Mit all unseren freigegebenen IP-Minecraft-Plänen können Sie Ihre (Sub-) Domain mit Ihrem Server verknüpfen, und dazu müssen Sie einen SRV-Eintrag einrichten.
Wenn Sie eine dedizierte IP-Adresse gekauft haben oder einen Unternehmensserver haben, können Sie stattdessen einen A-Eintrag einrichten, der diese IP verwendet.

Bitte beachten Sie: Es kann bis zu 48 Stunden dauern, bis ein DNS-Update stattfindet. Wenn dieses Tutorial nicht sofort funktioniert, warten Sie bitte ein wenig.

Die Schritte zum Hinzufügen des SRV-Datensatzes lauten wie folgt:
1. Melden Sie sich bei Ihrem DeluxeNode cPanel-Konto an. Ein schneller Login-Link ist im Kundenbereich verfügbar.
2. Scrollen Sie nach unten oder suchen Sie nach Zonen-Editor.
3. Wählen Sie Verwalten für die Domäne aus, der Sie den SRV-Eintrag hinzufügen möchten.
4. Klicken Sie auf das Drop-down-Menü neben der Schaltfläche "Datensatz hinzufügen" und wählen Sie "SRV".
5. In diesem Tutorial wollen wir sagen wir wollen play.example.com
Name: Soll die gewünschte Subdomain zusammen mit dem Protokoll / Service sein. In unserem Fall ist es _minecraft._tcp.play (der Rest der Domain wird automatisch gefüllt, sobald Sie zum nächsten Textfeld gehen).
TTL: Verwenden Sie 14400. Sie können auch andere Werte verwenden, wenn Sie genau wissen, was dies ist und wie Sie es verwenden.
Priorität: Verwenden Sie 0. Sie können auch andere Werte verwenden, wenn Sie genau wissen, was dies ist und wie Sie es verwenden.
Gewicht: Verwenden Sie 5. Sie können auch andere Werte verwenden, wenn Sie genau wissen, was dies ist und wie Sie es verwenden.
Port: Dies sollte der Port sein, auf dem Ihr Server läuft. (dh, 25565, 40000 usw.)
Ziel: Die Adresse des Knotens, auf dem Sie sich befinden, z. B. mc01.node.deluxenode.com.
Drücken Sie zum Schluss auf den Eintrag Aufnahme rechts.
Es kann einige Stunden dauern, bis Dinge stattfinden.
Wir empfehlen die Verwendung von CloudFlare DNS. Unter https://1.1.1.1 können Sie mehr darüber erfahren, warum es besser ist, da DNS-Updates extrem schnell sind.
