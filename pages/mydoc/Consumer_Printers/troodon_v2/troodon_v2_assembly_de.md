---
title: Troodon V2 Drucker Montageanleitung in Deutsch
tags: []
keywords: 
last_updated: 22/02/2023
summary: "Montageanleitung für den Troodon V2 Drucker"
sidebar: mydoc_sidebar
permalink: troodon_v2_assembly_de.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Übersicht

Diese verbesserte Anleitung dient als Ersatz für die von Formbot bereitgestellte Troodon V2 Aufbauanleitung.

### Werkzeuge

Im Paket sind die meisten benötigten Werkzeuge enthalten, allerdings sollten die Folgenden ebenfalls bereitgelegt werden.
* Schere
* 5.5mm Schraubenschlüssel / anpassbarer Schraubenschlüssel / Zange
* Spritze mit stumpfer Nadel für das Fetten der Gleitlager (benötigte Nadelgrößen: 16G, 18G)
* Loctite Schraubensicherung
* Verschiedene Schraubendreher (Kreuz, Schlitz) für die Elektronik

Die folgenden druckbaren Werkzeuge können beim Aufbau helfen
* [MGN9 Kunststoffschiene](https://github.com/VoronDesign/Voron-Tap/blob/main/STLs/MGN9_Assembly_Tool.stl)  

### Voraussetzungen

* Alle Teile aus dem Lieferkarton wurden entnommen
* Eine saubere Arbeitsfläche mit genügend Platz

### Erste Schritte

Platziere zuerst das folgende Stück Schaumstoff auf die Arbeitsfläche.
{% include image.html file="troodon_v2_foam.jpg" alt="Schaumstoff" caption="Schaumstoff" %}
Platziere die Druckerbasis umgekehrt auf den Schaumstoff und entferne die Bodenplatte (Abdeckung des Elektronikschachts).
{% include image.html file="troodon_v2_electronics_bay.jpg" alt="Elektronikschacht" caption="Elektronikschacht" %}
Überprüfe alle elektrischen Verbindungen und Bauteile nach Wackelkontakten (ziehe ggf. Schrauben nach und befestige lose Abdeckungen an den entsprechenden Stellen).
Montiere die Bodenplatte.

Die gelieferten Gleiter der Linearschienen sind nicht von Werk aus gefettet.
Um eine längere Haltbarkeit der Teile zu gewährleisten, sollte dies nachgeholt werden (dem Druckerzubehör liegt eine Tube Fett bei).
Fülle hierzu die Spritze mit dem beiliegenden Fett.
Benutze die 16G Spitze um das Fett beidseitig in die Gleiter der MGN9 Schienen zu drücken, die 18G Spitze für die der MGN12 Schienen.

Siehe [video](https://www.youtube.com/watch?v=GWzz6fQiWmw) für weitere Informationen.

### Aufbau des Rahmens

Statt die Schrauben wie in der Anleitung mit einem 3mm Inbusschlüssel zu lösen, ist es ratsam diese zu entfernen, Schraubensicherung anzubringen und sie mit dem vorgeschlagenen Abstand wieder anzubringen.
{% include image.html file="troodon_v2_assembly_1.png" alt="Z-Profil Schrauben" caption="Z-Profil Schrauben" %}
Montiere das Z-Profil wie im Bild gezeigt. Stelle sicher, dass das Profil bündig mit der Metallplatte am Boden des Druckers abschließt. Ziehe die Schrauben an, bis sie das Profil fassen und das Profil in die richtige Position bringen. Sobald alle vier Schrauben so angezogen sind, können alle fest angezogen werden.
{% include image.html file="troodon_v2_assembly_2.png" alt="Z-Profil montieren" caption="Z-Profil montieren" %}
Wiederhole diese Schritte für die restlichen Z-Profile.
{% include image.html file="troodon_v2_assembly_3.png" alt="Alle Z-Profile montiert" caption="Alle Z-Profile montiert" %}
Montiere die Deckplatte des Druckers. Stelle sicher, das die LED auf der Rückseite des Druckers ist und die Türmagnete an der Front sind. Benutze die Loctite Schraubensicherung für die Schrauben, mit denen die Platte befestigt wird.
{% include image.html file="troodon_v2_assembly_4.png" alt="Deckplatte montieren" caption="Deckplatte montieren" %}
Montiere die Füße an den vier Ecken am Boden des Druckers.  
{% include image.html file="troodon_v2_assembly_5.png" alt="Fuß montieren" caption="Fuß montieren" %}
Montiere die Umlenkrollen für die Z-Achsen lose. Die Schrauben sollen nur etwas durch die vorhandenen Löcher in den Halterungen herausragen.
{% include image.html file="troodon_v2_assembly_6.png" alt="Umlenkrolle montieren" caption="Umlenkrolle montieren" %}
Überprüfe den Druckkopf und stelle sicher, dass alle Kabelbinder vorhanden sowie festgezogen sind und kein Kabel seitlich oder unter der Druckspitze hängt.
Platziere ein Stück des gelieferten Schaumstoffes auf die Druckplatte (sollte das Gerüst herunterfallen, kommt es so zu keinen Schäden).
{% include image.html file="troodon_v2_assembly_7.png" alt="schützender Schaumstoff" caption="schützender Schaumstoff" %}
Hebe das Gerüst in einem Winkel in den Drucker.
{% include image.html file="troodon_v2_assembly_8.png" alt="Gerüst montieren" caption="Gerüst montieren" %}
Platziere das Gerüst auf den Schaumstoff.
{% include image.html file="troodon_v2_assembly_9.png" alt="Gerüst montieren" caption="Gerüst montieren" %}
Hänge die vorgeformte Schlaufe des Z-Riemens in den Haken auf der Unterseite des Gerüstes.
{% include image.html file="troodon_v2_assembly_10.png" alt="Untere Riemenschlaufe des Gerüstes" caption="Untere Riemenschlaufe des Gerüstes" %}
Führe das andere Ende des Riemens durch das Blech.
{% include image.html file="troodon_v2_assembly_11.png" alt="Gerüst Riemendurchführung" caption="Gerüst Riemendurchführung" %}
Ziehe den Riemen durch die obere Umlenkrolle.
{% include image.html file="troodon_v2_assembly_12.png" alt="Gerüst Riemen über der Umlenkrolle" caption="Gerüst Riemen über der Umlenkrolle" %}
Montiere eine Schnalle an den Riemen. Das Loch für die Madenschraube soll auf der Seite des Riemens mit den Zähnen sein.
{% include image.html file="troodon_v2_assembly_13.png" alt="Schnalle an Riemen" caption="Schnalle an Riemen" %}
Ziehe den Riemen durch und bilde eine Schlaufe am Ende des Riemens. Die Schlaufe soll so positioniert sein, dass sie gerade so über den Haken auf der Oberseite des Gerüstes eingehakt werden kann. Der Riemen soll dabei nicht zu lose sein. Ein leichtes hochheben des Gerüstes kann hierbei helfen.
{% include image.html file="troodon_v2_assembly_14.png" alt="Obere Riemenschlaufe" caption="Obere Riemenschlaufe" %}
Führe die Schnalle über die Schlaufe, sodass sie sich bei ca. 15mm vom Ende befindet. Nutze Schraubensicherung für die Madenschraube und schraube diese mithilfe eines 2mm Inbusschlüssels an.
{% include image.html file="troodon_v2_assembly_15.png" alt="Letzte Schnalle für das Gerüst" caption="Letzte Schnalle für das Gerüst" %}
Hänge die neue Schlaufe an den Haken auf der Oberseite des Gerüstes.
{% include image.html file="troodon_v2_assembly_16.png" alt="Obere Riemenschleife des Gerüstes" caption="Obere Riemenschleife des Gerüstes" %}
Wiederhole dies für alle 4 Ecken.
{% include tip.html content="Stelle sicher, dass das Kabel in der rechten hinteren Ecke hinter dem Zahnriemen ist (wie im Bild zu sehen)." %}
{% include image.html file="troodon_v2_cable_route.jpg" alt="X-Kabel hinter dem Z-Riemen" caption="X-Kabel hinter dem Z-Riemen" %}
Drehe die Schraubenlöcher der vier Gelenke, sodass diese mittig nach oben zeigen.
{% include image.html file="troodon_v2_assembly_17.png" alt="Vorbereiten der Gerüstgelenke" caption="Vorbereiten der Gerüstgelenke" %}
Befestige die M5x35 Schrauben mit den Unterlegscheiben, ohne sie fest anzuziehen. Die Schrauben müssen mit den vorgebohrten Schraublöchern der beweglichen Gelenke ausgerichtet sein. Sobald alle befestigt sind, können alle Schrauben festgezogen werden.
{% include image.html file="troodon_v2_assembly_18.png" alt="Befestigen der Z-Gleiter am Gerüst" caption="Befestigen der Z-Gleiter am Gerüst" %}
Wenn die Ausrichtung der Schrauben mit den Löchern der Gelenke schwer ist, können die vier M4 Schrauben auf der Rückseite des Gerüstes gelockert werden. Ziehe diese Schrauben wieder an, wenn die vier Löcher ausgerichtet sind.
{% include image.html file="troodon_v2_assembly_19.png" alt="Lösen, sofern notwendig" caption="Lösen, sofern notwendig" %}
Nun müssen die Z-Achsenriemen gespannt werden. Stelle die Gürtel auf 140Hz, wie [hier](https://docs.vorondesign.com/tuning/secondary_printer_tuning.html#belt-tension) beschrieben, ein.
{% include image.html file="troodon_v2_assembly_20.png" alt="Z-Riemen spannen" caption="Z-Riemen spannen" %}
{% include tip.html content="Prüfe beim Spannen der Riemen, dass diese korrekt auf den unteren und oberen Umlenkrollen sitzen." %}
{% include important.html content="Das ist auch ein geeigneter Zeitpunkt, um die A/B Riemenspannung wie oben beschrieben anzupassen. Einige Nutzer haben gemeldet, dass die Riemen in ihren Maschinen fester als empfohlen gespannt waren." %}
Entferne den Schaumstoff auf der Druckplatte.
{% include image.html file="troodon_v2_assembly_21.png" alt="Schaumstoff entfernen" caption="Schaumstoff entfernen" %}
Stecke die Kabel der Schleppkette in die entsprechenden Anschlüsse der Schnittstellenplatine (Kabelbeschriftung muss zu Beschriftung auf dem gelben Sticker auf Druckerbasis passen).
{% include image.html file="troodon_v2_assembly_22.png" alt="Verbinden der Kabel für das Gerüst" caption="Verbinden der Kabel für das Gerüst" %}
Montiere die Halterung der Schleppkette der Z-Achse.
{% include image.html file="troodon_v2_assembly_23.png" alt="Montieren der Schleppkettenhalterung" caption="Montieren der Schleppkettenhalterung" %}

### Aufbau der Seitenverkleidung

Entferne die Schutzfolie der beiden Seiten der schwarzen Acrylplatte. (Rückseite)
Bring auf der inneren Seite der Platte Schaumstoff mit 1mm Dicke an.
{% include image.html file="troodon_v2_assembly_24.png" alt="Schaumstoff anbringen" caption="Schaumstoff anbringen" %}
Bring das VHB Klebeband am Luftfilter an.
{% include image.html file="troodon_v2_assembly_25.png" alt="VHB Klebeband anbringen" caption="VHB Klebeband anbringen" %}
Installiere den aktivierten Kohlefilter in den Luftfilter.
{% include image.html file="troodon_v2_assembly_26.png" alt="Filter installieren" caption="Filter installieren" %} 
Bring den Luftfilter auf der Rückseite der schwarzen Acrylplatte an.
{% include image.html file="troodon_v2_assembly_27.png" alt="Filter anbringen" caption="Filter anbringen" %}
{% include tip.html content="Befestige die Schrauben zuerst, während du den Bereich mit dem VHB Band von der Platte weghälst. Drücke erst dann den Filter an die Rückseite an. Das hilft bei der Positionierung." %}
Setze sechs M3 T-Nutensteine in die abgebildeten Stellen ein.
{% include image.html file="troodon_v2_assembly_28.png" alt="M3 T-Nutenstein einsetzen" caption="M3 T-Nutenstein einsetzen" %}
Schließe die Kabel für den Luftfilter, die LED Lampe und den Filament-Auslaufsensor in die entsprechenden Anschlüsse an der Schnittstellenplatine an. Benutze den gelben Sticker auf der Basis als Hilfe.
{% include image.html file="troodon_v2_assembly_29.png" alt="Kabel anschließen" caption="Kabel anschließen" %}
Montiere die Rückseite im Spalt in der Blende. Führe die drei Kabel durch das Loch auf der unteren Kante.
{% include image.html file="troodon_v2_assembly_30.png" alt="Rückseite anbringen" caption="Rückseite anbringen" %}
{% include image.html file="troodon_v2_assembly_31.png" alt="Rückseite anbringen" caption="Rückseite anbringen" %}
Drücke die Rückseite gegen den Rahmen und führe das Kabel für die LED durch das Loch an der oberen Kante.
{% include image.html file="troodon_v2_assembly_32.png" alt="Rückseite anbringen" caption="Rückseite anbringen" %}
Montiere die Rückseite mithilfe von neun M3x10mm Schrauben am Rahmen.
{% include image.html file="troodon_v2_assembly_33.png" alt="Rückseite anbringen" caption="Rückseite anbringen" %}
Bringe die drei Kabelbinder an der Rückseite, wie dargestellt, an.
{% include image.html file="troodon_v2_assembly_34.png" alt="Kabelbinder anbringen" caption="Kabelbinder anbringen" %}
Wickle die drei Kabel in dem beigelegten Kabelschlauch ein.
{% include image.html file="troodon_v2_assembly_35.png" alt="Kabelschlauch anbringen" caption="Kabelschlauch anbringen" %}
Sichere den Kabelschlauch mithilfe der drei Kabelbinder ab.
{% include image.html file="troodon_v2_assembly_35.png" alt="Kabelschlauch absichern" caption="Kabelschlauch absichern" %}
Bringe die Schraubenhalterung für den PTFE Schlauch an. 
{% include image.html file="troodon_v2_assembly_36.png" alt="PTFE Halterung anbringen" caption="PTFE Halterung anbringen" %}
Bewege den Druckkopf in die Ecke vorne links, senke ihn bis zum Druckbett ab und schließe den PTFE Schlauch an (Hinweis: Belasse genug PTFE Schlauch innerhalb der Druckerkammer, da der Extruder während des Drucks nach oben gezogen werden kann).
{% include image.html file="troodon_v2_assembly_37.png" alt="PTFE Schlauch einführen" caption="PTFE Schlauch einführen" %}
Setze einen M5 T-Nutenstein in die dargestellte Position ein.
{% include image.html file="troodon_v2_assembly_38.png" alt="M5 T-Nutenstein einsetzen" caption="M5 T-Nutenstein einsetzen" %}
Bringe den Filamentrollenhalter, wie dargestellt, an.
{% include image.html file="troodon_v2_assembly_39.png" alt="Filamentrollenhalter anbringen" caption="Filamentrollenhalter anbringen" %}
Entferne die Schutzfolie von beiden Seiten der Türen.
Bringe die Scharniere und Metallhalterungen, wie dargestellt, an den Türen an. Das mitgelieferte Werkzeug kann für die M5 Sicherungsmutter verwendet werden. Die M3 Sicherungsmutter muss mit einer Zange / 5.5mm Schraubenschlüssel / anpassbarem Schraubenschlüssel angebracht werden. Stelle beim festziehen der Schrauben sicher, das die Scharniere im rechten Winkel zu den Türen ist.
{% include image.html file="troodon_v2_assembly_40.png" alt="Türgarnitur anbringen" caption="Türgarnitur anbringen" %}
Setze acht M5 T-Nutensteine in die abgebildeten Stellen ein.
{% include image.html file="troodon_v2_assembly_41.png" alt="M5 T-Nutensteine einsetzen" caption="M5 T-Nutensteine einsetzen" %}
Bringe 3mm Schaumstoff, wie dargestellt, als Versiegelung an den Rahmen an.
{% include image.html file="troodon_v2_assembly_42.png" alt="Schaumstoff anbringen" caption="Schaumstoff anbringen" %}
Entferne die Schutzfolie von beiden Seiten der Abstandshalter für die Türscharniere.
Montiere die Türen mithilfe der Schrauben am Rahmen. Befestige die Abstandshalter für die Scharniere zwischen dem Scharnier und dem Rahmen. Stelle sicher, dass die Türen sich einfach öffnen und schließen lassen, sowie nach oben und unten bündig abschließen, bevor du die Schrauben festziehst.
{% include image.html file="troodon_v2_assembly_43.png" alt="Türen anbringen" caption="Türen anbringen" %}
Entferne die Schutzfolie auf beiden Seiten der Seitenplatte.
Bringe 3mm Schaumstoffband an der Seitenplatte, wie gezeigt, an.
{% include image.html file="troodon_v2_assembly_44.png" alt="Schaumbstoffband anbringen" caption="Schaumbstoffband anbringen" %}
Setze sechs M3 T-Nutensteine in die abgebildeten Stellen ein.
{% include image.html file="troodon_v2_assembly_45.png" alt="M3 T-Nutenstein einsetzen" caption="M3 T-Nutenstein einsetzen" %}
Entferne die Schutzfolie von beiden Seiten der drei Abstandshalter der Seitenplatten.
Bringe die Seitenplatte, wie dargestellt, am Rahmen an. Stelle sicher, dass der Schaumstoff in Richtung Drucker zeigt.
{% include image.html file="troodon_v2_assembly_46.png" alt="Seitenplatte anbringen" caption="Seitenplatte anbringen" %}
Wiederhole die vorangehenden Schritte für die andere Seite.
Entferne die Schutzfolie auf beiden Seiten der Deckenplatte.
Bringe 3mm Schaumstoffband am äußeren Rand an (einseitig, Seite mit Schaumstoff zeigt Richtung Drucker).
Montiere die Deckenplatte am Rahmen.
{% include image.html file="troodon_v2_assembly_47.png" alt="Anbringung der Deckenplatte" caption="Anbringung der Deckenplatte" %}
Entferne die Schraube, die sich an folgender Stelle befindet.
{% include image.html file="troodon_v2_assembly_48.png" alt="Schraube entfernen" caption="Schraube entfernen" %}
Verbinde die zwei Flachbandkabel an die entsprechend beschriftete Stelle hinter dem Bildschirm und befestige den Bildschirm mit der vorher entfernten Schraube.
{% include image.html file="troodon_v2_assembly_49.png" alt="Bildschirm befestigen" caption="Bildschirm befestigen" %}
Bringe die vier Eckschutze an.
{% include image.html file="troodon_v2_assembly_50.png" alt="Eckschutz befestigen" caption="Eckschutz befestigen" %}
Stecke den Schaft in die AutoZ Sonde.
{% include image.html file="troodon_v2_assembly_51.png" alt="AutoZ Schaft" caption="AutoZ Schaft" %}
Drehe die vier Standfüße, um den Drucker zu nivelieren und sichere die Füße mit den Muttern wie gezeigt ab.
{% include image.html file="troodon_v2_assembly_52.png" alt="Stellfüße" caption="Stellfüße" %}
Nimm die Flex-Platte vom Heizbett und entferne die Schutzfolie von der glatten Seite der Druckplatte.  