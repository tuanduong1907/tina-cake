import $ from "jquery";
const runCheckKeyBoard = () => {
  function onKeyboardOnOff(isOpen) {
    // Write down your handling code
    const listElement = document.querySelectorAll(".isKeyboard");
    Array.from(listElement).forEach((item) => {
      if (isOpen) {
        item.classList.add("flexible");
      } else {
        item.classList.remove("flexible");
      }
    });
  }

  var originalPotion = false;
  $(document).ready(function () {
    if (originalPotion === false)
      originalPotion = $(window).width() + $(window).height();
  });

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   *
   * @returns {String}
   */
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "winphone";
    }

    if (/android/i.test(userAgent)) {
      return "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    }

    return "";
  }

  function applyAfterResize() {
    if (getMobileOperatingSystem() != "ios") {
      if (originalPotion !== false) {
        var wasWithKeyboard = $("body").hasClass("view-withKeyboard");
        var nowWithKeyboard = false;

        var diff = Math.abs(
          originalPotion - ($(window).width() + $(window).height())
        );
        if (diff > 100) nowWithKeyboard = true;

        $("body").toggleClass("view-withKeyboard", nowWithKeyboard);
        if (wasWithKeyboard != nowWithKeyboard) {
          onKeyboardOnOff(nowWithKeyboard);
        }
      }
    }
  }

  $(document).on(
    "focus blur",
    "select, textarea, input[type=text], input[type=date], input[type=password], input[type=email], input[type=number]",
    function (e) {
      var $obj = $(this);
      var nowWithKeyboard = e.type == "focusin";
      $("body").toggleClass("view-withKeyboard", nowWithKeyboard);
      onKeyboardOnOff(nowWithKeyboard);
    }
  );

  $(window).on("resize orientationchange", function () {
    applyAfterResize();
  });
};

export default runCheckKeyBoard;
