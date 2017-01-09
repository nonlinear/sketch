
#Sharpen Images Plugin for Sketch
![Screenshot](http://i.imgur.com/5vopqvq.png)

The plugin allows to apply Sharpen filter to your layers in Sketch.

Sharpen Images is powerful plugin that allows you to apply Unsharp Mask filter to image layers and shape layers with image fills in Sketch.
From the very beginning of working in Sketch I dreamed about the possibility to apply sharpen filter right in Sketch and not switching between Sketch and Photoshop with all this clipboard copy-paste dance. I just want my images to be sharp. Non-destructively sharp. So I did this plugin.

The plugin can easily handle multiple layers on multiple artboards and not on them, at once. It is absolutely non-destructive algorithm. Sharpened, crisp images are added as fills to their layers fills stack. It doesn't affect any existing fills you may already have because sharpness fill always inserts at the bottom of the fills stack. So if you want to make a change, just deselect or remove that fill and apply the plugin again with different settings.

Sharpen Images includes 3 finely-tuned presets. Light, Medium and Hard. They all use 0.4px radius and intensity in range from 1.0 to 1.8. You can also run the plugin in custom mode with your own values for radius and intensity. Just select Plugins - Sharpen Images - 4. Custom...

Sharpen Images plugin supports mask detection and shape overlays. Whether it masked or unmasked image or its part, you'll always get perfect, complete result. No cropped parts or unprocessed pieces. 

The plugin fully respects Sketch built-in Color Adjust as well. All your settings and styles remain the same and are not affected.

Sharpen Images also recognizes if current image layer was scaled down in your design or scaled up or leaved in the same size. In every single case plugin carefully detects if there's a need to use raw image data from original source or makes quick resize 'on-the-fly'.

The plugin is completely free for any kind of use. 

###How to install:
Download, Unzip, double click the <b>Sharpen Images.sketchplugin</b> file. That's it!

###How to update:
Go to the Sketch Plugin folder on your Mac and replace the <b>Sharpen Images.sketchplugin</b> with the new one.

###Changelog:

06/26/2016<br>
Added Sketch 3.8+ support

01/29/2016<br>
Added Sketch 3.5+ support

10/09/2015<br>
Fixed an issue with image layers when resizing them after applying the filter. Sharpened fill is applied to image layers now in 'Fill' mode.

Fixed an issue when shape layer is processed. Now original layer image fill remains in the same scale and size in the shape, in case of 'Fill' type usage.

10/08/2015<br>
Sharpen Images now supports shape layers with image fills in addition to image layers

10/07/2015<br>
Added Sketch Beta 3.4 support
