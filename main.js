var stageWidth = 1000;
var stageHeight = 1000;
var stage = new Konva.Stage({
  container: 'container',
  width: stageWidth,
  height: stageHeight,
});

var layer = new Konva.Layer();

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

  layer.add(group);
  layer.draw();
}

function makeImageElem(uri) {
  const group = new Konva.Group({
    width: 100,
    height: 100,
    draggable: true,
  });

  const container = new Konva.Rect({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "white",
    stroke: "black",
    strokeWidth: 4,
  })

  const pasteImage = new Konva.Image({
    width: 100,
    height: 100
  });

  group.add(container);
  group.add(pasteImage);
  layer.add(group);
  layer.draw();

  var imageObj = new Image();
  imageObj.onload = function() {
    pasteImage.image(imageObj);
  };
  imageObj.src = uri;
}

document.addEventListener("paste", (e) => {
  const files = e.clipboardData.files
  // 画像だった場合
  if (files.length !== 0) {
    const file = files.item(0);
    const reader = new FileReader();
    reader.onload = (e) => {
      const uri = e.target.result;
      makeImageElem(uri);
    }
    reader.readAsDataURL(file);
    return
  }

  // テキストだった場合
  const text = e.clipboardData.getData("text");
  makeElem(text);
})
