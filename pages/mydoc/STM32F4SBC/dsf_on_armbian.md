---
title: Installing DSF on Armbian
tags: []
keywords: 
last_updated: 14/12/2021
summary: "Installing DSF on Armbian"
sidebar: mydoc_sidebar
permalink: dsf_on_armbian.html
folder: mydoc
comments: false
toc: false
---

## Running Armbian SBC to control a RRF board

The following instructions will guide you to install and run DuetSoftwareFramework (DSF) on your Single Board Computer (SBC) using Armbian OS.

### Install Armbian

#### Supported boards

You could find a list of supported SoCs in [this section of the armbian documentation](https://docs.armbian.com/#supported-socs).  
Also, you may find your board in [the download page of Armbian website](https://www.armbian.com/download/).

However, DSF in targeted at **armv7** processors so your should support these instructions.

#### Choosing the build variant

On the Armbian download page, you may find multiple build variants.  
DSF may be installed on any of those variants and [this forum post](https://forum.armbian.com/topic/14874-bionic-vs-focal-vs-buster/?do=findComment&comment=106714) may help you to choose the one suitable to your needs.  

{% include note.html content="Keep in mind if you go for a minimal version, you could still install a GUI/desktop on your system later using the package manager (apt)."%}

#### Armbian installation

Armbian installation instruction could be found at [the official documentation page](https://docs.armbian.com/User-Guide_Getting-Started/).  
Please be sure :

* A **proper power supply** according to the board requirements
* A **good, reliable and fast** SD card

A lot of issues on Armbian are related to that so don't go for cheap here.

#### Default credentials

The default login/password on Armbian are : root / 1234

On the first login, you will be asked to change this password and to create another normal (non-root) user account.

#### How to connect to wireless

If your SBC has onboard wireless capability or if you use a 3rd party wireless adapter on USB supported by Armbian, you can use `nmtui-connect` to browse and connect to your WiFi AP.

### Wiring

The communication between the board and the SBC use Serial Peripheral Interface (SPI) bus.  
A SPI bus use 4 GPIO pins:

* CLK (A clock to synchronize the data exchange)
* MOSI (A data line from the SBC to the board)
* MISO (A data line from the board to the SBC)
* CS (A chip selection pin, output on SBC side)

Two more GPIO pins are also required :

* Transfer Ready (input on SBC which is toggled by the board).
* GND (ground signal)

You may have to find where these GPIO pins are located on your SBC.  
However, in general, the GPIO headers are RasperryPi-compatible so the instructions given in the "Connecting a SBC board" section related to your board may apply here.  
Also, please **use resistors** to these pins (except GND) !

### Configure Armbian

#### Enable SPI bus

To enable the SPI bus on Armbian, you have to add the two following lines in `/boot/armbianEnv.txt` :

```text
overlays=spi-spidev
param_spidev_spi_bus=1
```

*The* `param_spidev_spi_bus` *parameter value depends on your board.  
Please look at* `/boot/dtb/chipsetManufacturer/overlay/README.chipsetManufacturer-overlays` *and* `spi-spidev` *section for more information about it.*

*You may also need to use* `param_spidev_spi_cs` *depending on which GPIO pin you plan to use for SPI CS.  
See the README file mentionned above for more information.*

To do so, type `sudo nano /boot/armbianEnv.txt` and add these two lines.  

{% include note.html content="If you already have an overlays parameter, add `spi-spidev` by separating it from the other using a space character."%}

Your `armbianEnv.txt` file may look like below

```text
verbosity=1
bootlogo=false
overlay_prefix=rockchip
rootdev=UUID=12ebc73a-000c-45cd-8c36-d02e7f0c3c6b
rootfstype=ext4
overlays=spi-spidev
param_spidev_spi_bus=1
usbstoragequirks=0x2537:0x1066:u,0x2537:0x1068:u
```

After rebooting your SBC, you may now have a `/dev/spidevX.Y` device.  
You can run `ls /dev/spi*` to check:

```text
$ ls /dev/spi*
/dev/spidev1.0
```

Let's write down it, you will need it at DSF configuration section.

#### Increase SPI Buffer size

DCS uses SPI buffer sizes of 8KiB whereas the default Armbian buffer size is limited to 4KiB.  
In order to change it, you have to add the following line in `/boot/armbianEnv.txt` :

```text
extraargs=spidev.bufsiz=8192
```

To do so, type `sudo nano /boot/armbianEnv.txt` and add the line.  

Your `armbianEnv.txt` file may look like below

```text
verbosity=1
bootlogo=false
overlay_prefix=rockchip
rootdev=UUID=12ebc73a-000c-45cd-8c36-d02e7f0c3c6b
rootfstype=ext4
overlays=spi-spidev
param_spidev_spi_bus=1
usbstoragequirks=0x2537:0x1066:u,0x2537:0x1068:u
extraargs=spidev.bufsiz=8192
```

After that, restart your SBC to apply the new buffer size.  
You can check the new settings are applied by issuing :

```text
$ cat /sys/module/spidev/parameters/bufsiz
8192
```

#### Transfer ready GPIO pin

Now you need to identify the GPIO controller and its offset at which the GPIO pin is exposed.  
This may be a bit tricky.

Obviously, this apply for the SBC that aren't known yet. For the known ones you can get the information you need at the related section below.

##### gpiod utility

To help you, you can install `gpiod` :

```text
$ sudo apt-get install gpiod
```

It will provide some usefull commands as :

* `gpioinfo` which will print the information about all lines (especially used or not) of all gpiochips present

* `gpioget` will read the current value from a GPIO chip.

#### Identifying the GPIO number

From the schematics of your SBC if available, you may find the SoC port name mapped to the GPIO header.

For Rockchip and Sunxi kernels, the GPIO number can be calculated as below:

```text
[position of GPIO port letter in the alphabet - 1] * 8 + pin number
```

The Rockchip RK3399 has 5 groups of GPIO (GPIO0~GPIO4) which correspond to a character device on Linux side (`/dev/gpiochip0` ~ `/dev/gpiochip4`)

For example, on the OrangePi 4B (RK3399 SoC), the pin on connector position #22 is mapped to port `GPIO1_D0`.  

```text
GPIO1_D0 => 3*8 + 0 = 24
(A=0, B=1, C=2, D=3, E=4)
```

It means `GPIO1_D0` is the 24th pin of bank 1 => line 24 of GPIO controller `/dev/gpiochip1`

This information may be used at DSF configuration section below.

### Install and configure DuetSoftwareFramework

To install or update the required package the procedure is the same as for a RaspberryPi.  

#### Installation steps - Stable

To obtain the required package, you will first need to add the duet sources list to APT by executing the following commands:

```text
sudo wget -q https://pkg.duet3d.com/duet3d.gpg -O /etc/apt/trusted.gpg.d/duet3d.gpg
sudo wget -q https://pkg.duet3d.com/duet3d.list -O /etc/apt/sources.list.d/duet3d.list
```

Once it's done, run the following:

```text
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install duetsoftwareframework
```

You may have a warning as below, simply ignore it and continue

```text
W: Sources disagree on hashes for supposely identical version '1.1.0' of 'duetsd:arm64'.
W: Sources disagree on hashes for supposely identical version '3.2.0-1' of 'reprapfirmware:arm64'.
```

Once installed, you may also get the error below :

```text
[fatal] Could not connect to Duet (Error 2. Can not open SPI device file '/dev/spidev0.0'.)
```

It is suggested to put the duet packages on hold so you don't accidentally update to a new version of DSF. To do so, reun the following command:

```text
sudo apt-mark hold \
    duetsoftwareframework \
    duetcontrolserver \
    duetruntime \
    duetsd \
    duettools \
    duetwebcontrol \
    duetwebserver \
    reprapfirmware
```

Don't worry about it and continue to configuration steps.

#### Installation steps - Unstable

To obtain the required package, you will first need to add the duet sources list to APT by executing the following commands:

```text
sudo wget -q https://pkg.duet3d.com/duet3d.gpg -O /etc/apt/trusted.gpg.d/duet3d.gpg
sudo wget -q https://pkg.duet3d.com/duet3d-unstable.list -O /etc/apt/sources.list.d/duet3d-unstable.list
```

Once it's done, run the following:

```text
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install duetsoftwareframework
```

You may have a warning as below, simply ignore it and continue

```text
W: Sources disagree on hashes for supposely identical version '1.1.0' of 'duetsd:arm64'.
W: Sources disagree on hashes for supposely identical version '3.2.0-1' of 'reprapfirmware:arm64'.
```

Once installed, you may also get the error below :

```text
[fatal] Could not connect to Duet (Error 2. Can not open SPI device file '/dev/spidev0.0'.)
```

It is suggested to put the duet packages on hold so you don't accidentally update to a new version of DSF. To do so, reun the following command:  

```text
sudo apt-mark hold \
    duetsoftwareframework \
    duetcontrolserver \
    duetruntime \
    duetsd \
    duettools \
    duetwebcontrol \
    duetwebserver \
    reprapfirmware
```

Don't worry about it and continue to configuration steps.

#### DSF Configuration

The DSF configuration files are located at `/opt/dsf/conf/`

Open the config file using nano :

```text
sudo nano /opt/dsf/conf/config.json
```

and edit it to replace :

* `SpiDevice` by the spidev node you found at section Configure Armbian/EnableSPI bus above.
* `GpioChipDevice` by the name of the GPIO controller that control the Transfer ready pin
* `TransferReadyPin` by the line of the GPIO controller that control the Transfer ready pin

E.g. for an OrangePi4B SBC using Pin 22 as TransferReady:

```text
{
  ...
  "SpiDevice": "/dev/spidev1.0",
  "SpiBufferSize": 8192,
  "SpiTransferMode": 0,
  "SpiFrequency": 8000000,
  "SpiConnectTimeout": 500,
  "SpiTransferTimeout": 500,
  "SpiConnectionTimeout": 4000,
  "MaxSpiRetries": 3,
  "SpiPollDelay": 25,
  "GpioChipDevice": "/dev/gpiochip1",
  "TransferReadyPin": 24,
  ...
}
```

Once it's done, write changes using `CTRL + O`, then exit using `CTRL + X`

#### Starting Duet Control Server

Now you have installed Duet Software Framework, but none of the services has been started yet. As a first step, it is important to start the main application of DSF called Duet Control Server.  
To do this, make sure you have the LPC/STM board attached to your SBC and run :

```text
sudo systemctl start duetcontrolserver
```

This should complete without an error. If it fails, check why it did so by running

```text
sudo journalctl -u duetcontrolserver
```

#### Starting Duet Web Server

Once DCS has been started, you can start the web server which provides the web interface. This can be achieved by running:

```text
sudo systemctl start duetwebserver
```

This should complete without an error. If it fails, check why it did so by running:

```text
sudo journalctl -u duetwebserver
```

#### Autostart on boot

Once DCS and DWC are both successfully started, you may want to start them automatically on boot.  
To do so, run:

```text
sudo systemctl enable duetcontrolserver
sudo systemctl enable duetwebserver
```

### Known boards settings

#### Orange Pi 4B (RK3399)

* param_spidev_spi_bus=1
* SpiDevice: `/dev/spidev1.0` (Use pins 19, 21, 23, 24 on GPIO header)
* GpioChipDevice: `/dev/gpiochip1` (To use pin 22/GPIO1_D0 on GPIO header as TransferReady pin)
* TransferReadyPin: 24 (To use pin 22/GPIO1_D0 on GPIO header as TransferReady pin)

### Changing the hostname

This is an optional step if you only have a single duet3 on your network. It is required if you have more than one SBC configured RRF setup (as each setup on a network needs a unique host name) or you just want to change the name from the default armbian one.

The name of the printer is its hostname on the network, you will need to connect to the SBC over SSH in order to run the \`armbian-config\` configuration utility and change the hostname.

Depending on the variant you choose, you may have to install this utility:

```text
sudo apt-get -y install armbian-config
```

Run the utility :

```text
sudo armbian-config
```

Choose Personal -> Hostname.  
Then write the hostname you want and validate.  
Reboot the SBC to apply the changes.

{% include note.html content="The hostname must confirm to certain limitations to be valid. Valid characters for hostnames are letters from a to z, the digits from 0 to 9, the hyphen (-)."%} 

### Plugins

#### Install Apparmor

DSF 3.3 and later allow the installation of third-party plugins on the SBC. To prevent regular plugins from performing malicious actions, they are confined using AppArmor security profiles.

This means AppArmor support must be enabled before third-party plugins can be installed. To achieve this on armbian, perform the following:

```text
sudo apt install apparmor
```

Then you have to add the following lines in `/boot/armbianEnv.txt` :  

```text
extraargs=apparmor=1
security=apparmor
```

To do so, type `sudo nano /boot/armbianEnv.txt` and add these two lines.  

Your `armbianEnv.txt` file may look like below

```text
verbosity=1
bootlogo=false
overlay_prefix=rockchip
rootdev=UUID=12ebc73a-000c-45cd-8c36-d02e7f0c3c6b
rootfstype=ext4
overlays=spi-spidev
param_spidev_spi_bus=1
usbstoragequirks=0x2537:0x1066:u,0x2537:0x1068:u
extraargs=spidev.bufsiz=8192 apparmor=1
security=apparmor
```

Then reboot using  

```text
sudo reboot
```

Once rebooted, check the status of apparmor by running the following:  

```text
sudo aa-status
```  

The output should look like below:  

```text
apparmor module is loaded.
7 profiles are loaded.
7 profiles are in enforce mode.
   /usr/bin/man
   /usr/sbin/chronyd
   /usr/sbin/haveged
   man_filter
   man_groff
   nvidia_modprobe
   nvidia_modprobe//kmod
0 profiles are in complain mode.
3 processes have profiles defined.
3 processes are in enforce mode.
   /usr/sbin/chronyd (1317)
   /usr/sbin/chronyd (1319)
   /usr/sbin/haveged (572)
0 processes are in complain mode.
0 processes are unconfined but have a profile defined.
```  

Then install the duetpluginservice

```text
sudo apt install duetpluginservice
```  

Once complete, run and enable the plugin services by running the following:  

```text
sudo systemctl enable duetpluginservice
sudo systemctl enable duetpluginservice-root
sudo systemctl start duetpluginservice
sudo systemctl start duetpluginservice-root
```

#### Install duetpimanagementplugin

Once the setup of apparmor is complete, install the duetpimanagementplugin by running the following command:  

```text
sudo apt install duetpimanagementplugin
```

Then go to the Machine-Specific -> Third-Party Plugins page on DWC to enable it after a manual installation.  
More information on the duetpimanagementplugin can be found [here](https://github.com/Duet3D/DuetSoftwareFramework/tree/v3.3-dev/src/DuetPiManagementPlugin)
