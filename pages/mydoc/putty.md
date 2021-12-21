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

# Setting up Putty

Putty can be downloaded from [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/)  
Install it as you would any other program.  

## Putty settings for RRF

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