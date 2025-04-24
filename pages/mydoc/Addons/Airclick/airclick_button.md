---
title: Mellow Airclick Adding a Button
tags: []
keywords: 
last_updated: 24/04/2025
summary: "How to add a button to the Mellow Airclick"
sidebar: mydoc_sidebar
permalink: airclick_button.html
folder: mydoc
comments: false
toc: false
datatable: true
name: Mellow Airclick Wireless Buttons
---

## Adding a Button

First connect to the {{page.name}} with your browser using the IP address you got when you connected it to your network.  

Click the + button as indicated below.  

{% include image.html file="airclick_button_1.png" alt="Mellow Airclick Wireless Buttons 1" caption="Mellow Airclick Wireless Buttons 1" %}  

When the following interface appears, press the wireless button with the battery installed normally. The wireless button ID will be automatically generated in the red box. This ID is unique.  

{% include image.html file="airclick_button_2.png" alt="Mellow Airclick Wireless Buttons 2" caption="Mellow Airclick Wireless Buttons 2" %}  

Enter the name you want to give the button in the red box.  

{% include image.html file="airclick_button_3.png" alt="Mellow Airclick Wireless Buttons 3" caption="Mellow Airclick Wireless Buttons 3" %}

Click on the first red box and a second blue box will appear.  

{% include image.html file="airclick_button_4.png" alt="Mellow Airclick Wireless Buttons 4" caption="Mellow Airclick Wireless Buttons 4" %}

Select "Execute GCODE".  

In the final box, you can send gcode which RRF understands such as `G28` or you can call macros, such as `M98 P\"0:/macros/button1\"`.  

Finally click the "confirm to add" button.  
