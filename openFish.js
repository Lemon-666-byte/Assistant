var delayClickTime = 1000;
var selectImageSize = 5;
auto.waitFor();
limit();
log("launch->");
openFish();
sleep(delayClickTime);
clickViewById("indicator_itmes");
sleep(delayClickTime);
clickViewByDesc("发闲置");
sleep(delayClickTime);
clickViewByDesc("描述");
sleep(delayClickTime);
var descText = "你好";
inputText(descText);
sleep(delayClickTime);
clickViewByDesc("价格");
sleep(delayClickTime);
var price = "123";
inputPrice(price);
sleep(delayClickTime);
clickViewByDesc("原价");
sleep(delayClickTime);
var originalPrice = "33333";
inputPrice(originalPrice);
clickViewByDesc("确定");
sleep(delayClickTime);
clickAddImage();
sleep(delayClickTime);
selectImage();
sleep(delayClickTime);
clickViewByDesc("下一步");
sleep(delayClickTime);
clickViewByDesc("完成");
sleep(delayClickTime);
function openFish() {
  var fishPackageName = "com.taobao.idlefish";
  var launch = app.launchPackage(fishPackageName);
  if (launch == null) {
    log("没有打开 咸鱼");
    return;
  }
}

function clickViewById(viewId) {
  var obj = id(viewId).findOne(5000);
  if (obj == null) {
    log("没有找到->" + viewId);
    return;
  }
  var x = obj.bounds().centerX();
  var y = obj.bounds().centerY();
  click(x, y);
}

function clickViewByDesc(desc) {
  descStartsWith(desc).waitFor();
  var descObj = descStartsWith(desc).findOne();
  if (descObj == null) {
    log("没有找到->" + descObj);
    return;
  }
  var x = descObj.bounds().centerX();
  var y = descObj.bounds().centerY();
  press(x, y, 1);
}

function inputPrice(price) {
  for (let i in price) {
    var number = desc(price[i]).findOne(5000);
    number.click();
    sleep(600);
  }
}

function inputText(str) {
  auto.setWindowFilter(function (window) {
    return true;
  });
  var jkl = str;
  setClip("1");
  sleep(500);
  setClip(jkl);
  sleep(600);
  var gh = text(jkl).findOnce().click();
  log(gh);
}

function clickAddImage() {
  var descObj = descStartsWith("添加图片").findOne(5000);
  if (descObj == null) {
    log("没有找到->" + descObj);
    return;
  }
  log("找到->" + descObj);
  var bounds = descObj.bounds();
  log("找到bounds->" + bounds.top);
  var x = bounds.left + 100;
  var y = bounds.top + 100;
  log("找到x->" + x);
  log("找到y->" + y);
  click(x, y);
}

function selectImage() {
  var descObj = descStartsWith("选择").find();
  if (descObj == null) {
    log("没有找到->" + descObj);
    return;
  }
  log("selectImage->" + descObj);
  for (let i = 0; i < descObj.length; i++) {
    if (i < selectImageSize) {
      descObj[i].click();
      sleep(500);
    }
  }
}

function limit() {
  importClass(
    com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter
  );
  let bridge = runtime.accessibilityBridge;
  let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
  let configField = bridgeField.getType().getDeclaredField("mConfig");
  configField.setAccessible(true);
  configField.set(bridge, configField.getType().newInstance());
  bridge.setWindowFilter(
    new JavaAdapter(AccessibilityBridge$WindowFilter, {
      filter: function (info) {
        return true;
      },
    })
  );
}
