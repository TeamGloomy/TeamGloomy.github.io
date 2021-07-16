---
title: FAQ
permalink: faq.html
sidebar: mydoc_sidebar
tags: [special_layouts]
keywords: frequently asked questions, FAQ, question and answer, collapsible sections, expand, collapse
last_updated: 15/05/2021
summary: "You can use an accordion-layout that takes advantage of Bootstrap styling. This is useful for an FAQ page."
toc: false
folder: mydoc
toc: false
comments: false
---

<div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Can I use the BTT WiFi chip or an ESP-01 (non RRF version)?</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
                                No. It doesn't have the right type of pins available (RRF uses SPI). There also isn't enough ram.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Can I use the WiFi header on the SKR 1.4 and SKR Pro?</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
                                No. It doesn't have SPI available, which is used by RRF for the WiFi connection.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Can I use the pi header on the GTR to connect an SBC?</a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
                                No. It doesn't have SPI available, which is used to connect to an SBC.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Will the MKS Robin v3 be supported?</a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body"> 
                                No. 
                                1. The bootloader is larger than other devices and needs more than the 32Kb reserved by our standard RRF build.  
                                2. As a result of 1 the MKS bootloader places firmware at a higher address 0x800C000 instead of 0x8008000  
                                3. This change in address requires changes to the memory map and to how we store reset data in flash (because we can no longer use a 16Kb flash page)  
                                4. It seems that the standard bootloader does not load code above 512KBytes of flash which results in a corrupt RRF  
                                Without a fix for 4 using RRF on this board is in effect not possible. But even if 4 is fixed it would require a special build. Given that the board does not seem to provide anything that other boards do not I don't think it is worth supporting (and testing) a separate build for it. I would suggest that if anyone really wants to use RRF on this board they consider providing an alternate bootloader for it that would enable the use of a standard RRF build.  
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
</div>
<!-- /.panel-group -->

{% include links.html %}
