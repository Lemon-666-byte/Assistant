var fishPackageName = "com.taobao.idlefish";
var launch = app.launchPackage(fishPackageName);
if (launch) {
  var my = className("android.widget.TextView")
    .textMatches("我的")
    .findOne(4000);
  //   var my = text("我的").findOne(4000);
  if (my == null) {
    log("没有找到");
  } else {
    my.click();
  }
}
