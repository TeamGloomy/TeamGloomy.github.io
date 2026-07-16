---
title: Setting up PuTTY
tags: []
keywords: 
last_updated: 21/12/2021
summary: "Setting up PuTTY for use with RRF"
permalink: putty_lpc.html
folder: mydoc
comments: false
toc: false
---

## Setting up PuTTY

PuTTY can be downloaded from [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/)  
Install it as you would any other program.  

### PuTTY settings for RRF

There are a couple of settings that should be modified to ensure that putty displays information from RRF correctly.  
On the main putty window, click on terminal on the left.  
{% include image.html file="putty1.png" alt="PuTTY 1" caption="PuTTY 1" %}
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
{% include image.html file="putty2.png" alt="PuTTY 2" caption="PuTTY 2" %}  
Now click on Features (under terminal) on the left menu and add a tick to **Disable application keypad mode** as shown below.  
{% include image.html file="putty5.png" alt="PuTTY 3" caption="PuTTY 3" %}  
Now click on Session on the left menu.  
{% include image.html file="putty4.png" alt="PuTTY 4" caption="PuTTY 4" %}  
Finally, save the settings so they don't need changing next time you open up putty.  
Click on default settings and then click the save button.  
{% include image.html file="putty3.png" alt="PuTTY 5" caption="PuTTY 5" %}

### Connecting to RRF

Click on the "serial" radio button highlighted below.
{% include image.html file="putty6.png" alt="PuTTY 6" caption="PuTTY 6" %}  
Fill in the [COM port number](https://www.google.com/search?q=how+to+find+a+com+port+number) of your RRF board. Leave the baud rate as it is. Then click "open"
{% include image.html file="putty7.png" alt="PuTTY 7" caption="PuTTY 7" %}  
