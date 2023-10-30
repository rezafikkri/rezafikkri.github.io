import copy from "copy-to-clipboard";

export default class HljsToolbar {
  'after:highlightElement'({ el, result, text }) {
    const pre = el.parentElement;

    if (!pre.querySelector(".hljs-toolbar")) {
      // create hljs toolbar
      const small = Object.assign(document.createElement("small"), {
        innerText: result.language.toUpperCase(),
      });
      const clipboardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>';
      const button = Object.assign(document.createElement("button"), {
        innerHTML: clipboardIcon,
        title: 'Salin kode',
        className: "hover:text-ajwa-blue",
      });

      const hljsToolbar = document.createElement("div");
      hljsToolbar.classList.add("hljs-toolbar");

      hljsToolbar.appendChild(small);
      hljsToolbar.appendChild(button);
      pre.insertBefore(hljsToolbar, el);

      // add eventlistener
      button.addEventListener("click", () => {
        // add code to clipboard
        copy(text);

        // change button
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>';
        button.title = "Disalin";
        button.disabled = "disabled";

        // reset button
        setTimeout(() => {
          button.innerHTML = clipboardIcon;
          button.title = 'Salin kode';
          button.removeAttribute("disabled");
        }, 2000);
      });
    }

    // add style
    const hljsToolbarStyle = "hljs-toolbar absolute left-0 right-0 top-0 flex justify-between border-b border-[#292b3d] px-4 py-1 text-slate-400/75 bg-[#1D1E2A]";
    pre.querySelector(".hljs-toolbar").setAttribute("class", hljsToolbarStyle);
  }
}
