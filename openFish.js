auto.waitFor();
limit();
log("launch->");
openMy();
openMyPublish();

function openMy() {
  var fishPackageName = "com.taobao.idlefish";
  var launch = app.launchPackage(fishPackageName);
  if (launch == null) {
    log("没有打开 咸鱼");
    return;
  }
  sleep(1000);
  var obj = text("我的").findOne(5000);

  if (obj != null) {
    log("找到我的");
    var x = obj.bounds().centerX();
    var y = obj.bounds().centerY();
    click(x, y);
  } else {
    log("没有找到我的");
  }
}

function openMyPublish() {
  var myPublish = descStartsWith("我发布的").findOne(5000);
  if (myPublish == null) {
    log("没有找到我发布的");
    return;
  }
  var x = myPublish.bounds().centerX();
  var y = myPublish.bounds().centerY();
  click(x, y);
  log("我发布的->" + myPublish);
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