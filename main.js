"ui";

$ui.layout(
  <vertical>
    <appbar>
      <toolbar id="toolbar" title="小助手" />
    </appbar>
    <vertical>
      <button id="openFish" text="打开咸鱼" />
    </vertical>
  </vertical>
);
activity.setSupportActionBar($ui.toolbar);

ui.openFish.click(function () {
  engines.execScriptFile("/sdcard/脚本/Assistant/openFish.js");
});


