// Provide same API as built in Sketch importers for SVG, EPS, etc.
function BitmapImporter() {
}

BitmapImporter.prototype.prepareToImportFromData = function(imageData) {
  this.imageData = imageData;
}

BitmapImporter.prototype.importAsLayer = function() {
  var image = NSImage.alloc().initWithData(this.imageData);
  var imageLayer = [MSBitmapLayer bitmapLayerFromImage:image withSizeScaledDownByFactor:1];
  var group = MSLayerGroup.new();
  group.addLayers([imageLayer]);
  group.resizeToFitChildrenWithOption(0);
  return group;
}
