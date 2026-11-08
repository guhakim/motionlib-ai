// 카테고리(템플릿) 페이지 왼쪽 위에 홈으로 돌아가는 둥근 버튼을 띄워요.
// 모든 템플릿 페이지가 이 파일 하나를 함께 써서 모양과 동작이 똑같아요.
(function () {
  if (document.getElementById("ms-home-btn")) return;

  var style = document.createElement("style");
  style.textContent =
    "#ms-home-btn{position:fixed;left:14px;top:14px;z-index:99;width:44px;height:44px;border-radius:50%;" +
    "display:flex;align-items:center;justify-content:center;background:#2b2b2b;color:#fff;text-decoration:none;" +
    "box-shadow:0 2px 10px rgba(0,0,0,.28);transition:transform .25s cubic-bezier(.2,.8,.2,1),background-color .25s}" +
    "#ms-home-btn:hover{background:#000;transform:scale(1.06)}" +
    "#ms-home-btn:focus-visible{outline:2px solid #fff;outline-offset:2px}" +
    "#ms-home-btn svg{width:20px;height:20px;display:block}";
  document.head.appendChild(style);

  var a = document.createElement("a");
  a.id = "ms-home-btn";
  a.href = "/";
  a.setAttribute("aria-label", "홈으로");
  a.title = "홈으로";
  a.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>';

  function mount() { document.body.appendChild(a); }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
