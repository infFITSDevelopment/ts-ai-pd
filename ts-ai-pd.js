;(function ($) {
  // 動態添加 Google 字體連結
  var googleFontLink = document.createElement("link");
  googleFontLink.rel = "preconnect";
  googleFontLink.href = "https://fonts.googleapis.com";
  document.head.appendChild(googleFontLink);

  var googleFontLink2 = document.createElement("link");
  googleFontLink2.rel = "preconnect";
  googleFontLink2.href = "https://fonts.gstatic.com";
  googleFontLink2.crossorigin = "anonymous";
  document.head.appendChild(googleFontLink2);

  var googleFontLink3 = document.createElement("link");
  googleFontLink3.rel = "stylesheet";
  googleFontLink3.href =
    "https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans+TC:wght@100..900&display=swap";
  document.head.appendChild(googleFontLink3);

  // 動態添加自定 CSS
  var customCSS = document.createElement("link");
  customCSS.rel = "stylesheet";
  customCSS.type = "text/css";
  customCSS.href = "https://cdn.jsdelivr.net/gh/lmybs112/ts-iframe/css/iframe_ai_pd_style.css";
  document.head.appendChild(customCSS);

  $(function () {
    console.log("DOM is ready");
    $(window).on("message", function (event) {
      var origin = event.originalEvent.origin;
      // if (origin !== 'https://iframe所在的網址') return; // 避免跨域攻擊
      // 處理從 <iframe> 來的訊息
      console.log("接收到來自 iframe 的訊息：", event.originalEvent.data);
      if (event.originalEvent.data.type === "result") {
        if (event.originalEvent.data.value) {
          $(".ai-pd-container__trigger").addClass(
            "ai-pd-container__trigger--result"
          );
        } else {
          $(".ai-pd-container__trigger").removeClass(
            "ai-pd-container__trigger--result"
          );
        }
      }
    });
    // 添加 html template
    var aiSearchPdTemplate = `
            <div class="ai-pd-container">
            <button
                class="ai-pd-container__trigger ai-pd-container__trigger--search"
                type="button"
            >
                <div class="ai-pd-container__icon"></div>
                <img class="ai-pd-container__icon--alert" src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/icon-alert.svg"></img>
            </button>
                <div
      style="
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: 999;
        background: rgba(0, 0, 0, 0.5);
        transform: none;
      "
    >
      <div
        id="inffits_cblock"
        style="
          z-index: 60;
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        "
      >
        <div id="tryon">
          <iframe
            id="inffits_tryon_window"
            style="
              width: 100%;
              height: 100%;
              visibility: visible;
              position: relative;
              border: none;
              outline: none;
              z-index: 14;
              border-radius: 10px;
            "
            src="https://ts-iframe-8ysy.vercel.app/iframe_container_module.html"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
    <style media="screen and (min-height:721px)">
      #inffits_cblock {
        position: fixed;
        right: 0;
        bottom: 0;
        height: 720px;
        width: 480px !important;
      }
      #tryon {
        margin: auto;
        height: 720px;
        width: 480px !important;
      }
    </style>
    <style media="screen and (min-width: 441px) and (max-height:720px)">
      #inffits_cblock {
        position: fixed;
        right: 0;
        bottom: 0;
        height: 700px;
        width: 440px !important;
      }
      #tryon {
        margin: auto;
        height: 700px;
        width: 440px !important;
      }
    </style>
    <style media="screen and (min-width: 401px) and (max-width: 440px)">
      #inffits_cblock {
        position: fixed;
        right: 0;
        bottom: 0;
        height: 640px;
        width: 400px !important;
      }
      #tryon {
        margin: auto;
        height: 640px;
        width: 400px !important;
      }
    </style>
    <style media="screen and (min-width: 361px) and (max-width: 400px)">
      #inffits_cblock {
        position: fixed;
        right: 0;
        bottom: 0;
        height: 600px;
        width: 360px !important;
      }
      #tryon {
        margin: auto;
        height: 600px;
        width: 360px !important;
      }
    </style>
    <style media="screen and (max-width: 360px)">
      #inffits_cblock {
        position: fixed;
        right: 0;
        bottom: 0;
        height: 580px;
        width: 320px !important;
      }
      #tryon {
        margin: auto;
        height: 580px;
        width: 320px !important;
      }
    </style>
      `;
    document.body.insertAdjacentHTML("beforeend", aiSearchPdTemplate);
    $(".ai-pd-container__trigger").on("touchstart click", function (event) {
      // 防止點擊事件在觸摸設備上被觸發
      if (event.type === "touchstart") {
        event.preventDefault(); // 阻止後續 click 事件觸發
      }
      if ($(this).hasClass("ai-pd-container__trigger--search")) {
        $("#inffits_cblock").parent().fadeIn();
      } else {
        $("#inffits_cblock").parent().fadeOut();
      }
      $(this).toggleClass(
        "ai-pd-container__trigger--search ai-pd-container__trigger--close"
      );
    });

    var breakpoint = 992;

    // 監聽窗口大小變化
    window.addEventListener("resize", handleWindowResize);

    // 首次載入時執行檢查
    handleWindowResize();
    function handleWindowResize() {
      // 取得當前視窗寬度
      var windowWidth = window.innerWidth;

      // 當視窗寬度大於等於 992px (桌面版)
      if (windowWidth >= breakpoint) {
      } else {
      }
    }
  });
})(jQuery);
