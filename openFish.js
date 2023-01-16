auto.waitFor();
limit();
log("launch->");
var fishPackageName = "com.taobao.idlefish";
var launch = app.launchPackage(fishPackageName);
// var obj=textContains('我的').findOne(4000);
var obj=text("我的").findOne(5000)

log("obj->" + obj);
// sleep(1000);
// obj.parent().parent().click();
// log("obj.parent()->" + obj.parent());
// var x=obj.bounds().centerX()
// var y=obj.bounds().centerY()
// log("x->"+x);
// log("y->"+y);
// var fishPackageName = "com.taobao.idlefish";
// var launch = app.launchPackage(fishPackageName);
// if (launch) {
//   log("launch->" + launch);
//   sleep(1000);
//   clickMy();
// }

// function clickMy() {
//   log("我的");
//   var tab = id("tab_title").text("我的").find();
//   tab.setText("jjj")
//   log(tab);
//   // var my = className("android.widget.FrameLayout").filter(function (my) {
//   //   return my.desc() == "我的,未选中状态";
//   // });
//   // if (my == null) {
//   //   log("没有找到");
//   // } else {
//   //   log("找到我的");
//   //   log(my);
//   //   my.click();
//   // }
//   // var my = className("android.widget.FrameLayout")
//   //   .desc("我的,未选中状态").depth(1).findOne();
//   // if (my == null) {
//   //   log("没有找到");
//   // } else {
//   //   log("找到我的");
//   //   log(my);
//   //   my.click();
//   // }
// }

// // className("TextView").text('我的').findOne().click()
// // var my = text("我的").findOne(5000);
// // if (my == null) {
// //   log("没有找到");
// // } else {
// //   my.click();
// // }
// // }

// // launchApp("BIYAPAY");
// //   var my = id('menu_transaction').findOne(5000);
// //   if (my == null) {
// //     log("没有找到");
// //   } else {
// //     log("找到");
// //     my.click();
// //   }

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
