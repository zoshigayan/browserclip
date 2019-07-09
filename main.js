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

function makeElem(text) {
  const group = new Konva.Group({
    x: 200,
    y: 50,
    draggable: true,
  });

  const container = new Konva.Rect({
    x: 0,
    y: 0,
    width: 200,
    height: 50,
    fill: "white",
    stroke: "black",
    strokeWidth: 4,
  })

  const content = new Konva.Text({
    x: 0,
    y: 0,
    text: text,
    fontSize: 13,
  })

  group.add(container);
  group.add(content);


  return group;
}

document.addEventListener("paste", (e) => {
  e.preventDefault();
  const text = e.clipboardData.getData("text");
  const elem = makeElem(text);
  layer.add(elem);
  layer.draw();
})
