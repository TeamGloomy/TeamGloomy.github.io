---
title: Setting up Putty
tags: []
keywords: 
last_updated: 21/12/2021
summary: "Setting up Putty for use with RRF"
sidebar: mydoc_sidebar
permalink: putty.html
folder: mydoc
comments: false
toc: false
---

## Setting up Putty

Putty can be downloaded from [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/)  
Install it as you would any other program.  

### Putty settings for RRF

There are a couple of settings that should be modified to ensure that putty displays information from RRF correctly.  
On the main putty window, click on terminal on the left.  
{% include image.html file="putty1.png" alt="Putty 1" caption="Putty 1" %}
From there, you need to change the following items.  
Tick the box for:  

- Implicit CR in every LF  
- Implicit LF in every CR  

Select the radio button:  

- Force on  

for both  

- Local echo  
- Local line editing  

As shown below.  
{% include image.html file="putty2.png" alt="Putty 2" caption="Putty 2" %}  
Now click on Features (under terminal) on the left menu and add a tick to **Disable application keypad mode** as shown below.  
{% include image.html file="putty5.png" alt="Putty 3" caption="Putty 3" %}  
Now click on Session on the left menu.  
{% include image.html file="putty4.png" alt="Putty 4" caption="Putty 4" %}  
Finally, save the settings so they don't need changing next time you open up putty.  
Click on default settings and then click the save button.  
{% include image.html file="putty3.png" alt="Putty 5" caption="Putty 5" %}

### Connecting to RRF

Click on the "serial" radio button highlighted below.
{% include image.html file="putty6.png" alt="Putty 6" caption="Putty 6" %}  
Fill in the [COM port number](https://www.google.com/search?q=how+to+find+a+com+port+number&rlz=1C1ONGR_en-GBGB982GB983&oq=how+to+find+a+com+port+number&aqs=chrome..69i57.5571j0j7&sourceid=chrome&ie=UTF-8) of your RRF board. Leave the baudrate as it is. Then click "open"
{% include image.html file="putty7.png" alt="Putty 7" caption="Putty 7" %}  
