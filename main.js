var stageWidth = 1000;
var stageHeight = 1000;
var stage = new Konva.Stage({
  container: 'container',
  width: stageWidth,
  height: stageHeight,
});

var layer = new Konva.Layer();

var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});

layer.add(circle);
stage.add(layer);
layer.draw();

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 86 && ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey))) {
    // TODO: handling paste
  }
})

function fitStageIntoParentContainer() {
  var container = document.getElementById('stage-parent');
  var containerWidth = container.offsetWidth;
  var scale = containerWidth / stageWidth;

  stage.width(stageWidth * scale);
  stage.height(stageHeight * scale);
  stage.scale({ x: scale, y: scale });
  stage.draw();
}

fitStageIntoParentContainer();
window.addEventListener('resize', fitStageIntoParentContainer);