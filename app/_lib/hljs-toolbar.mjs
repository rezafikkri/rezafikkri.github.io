import copy from "copy-to-clipboard";

export default class HljsToolbar {
  'after:highlightElement'({ el, result, text }) {
    const pre = el.parentElement;

    if (!pre.querySelector(".hljs-toolbar")) {
      // create hljs toolbar
      const small = Object.assign(document.createElement("small"), {
        innerText: result.language.toUpperCase()
      });
      const button = Object.assign(document.createElement("button"), {
        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/></svg>'
      });

      const hljsToolbar = document.createElement("div");
      hljsToolbar.classList.add("hljs-toolbar");

      hljsToolbar.appendChild(small);
      hljsToolbar.appendChild(button);
      pre.insertBefore(hljsToolbar, el);
    }

    // add style
    const hljsToolbarStyle = "hljs-toolbar absolute left-0 right-0 top-0 flex justify-between border-b border-[#292b3d] px-4 py-1 text-slate-400/75 bg-[#1D1E2A]";
    pre.querySelector(".hljs-toolbar").setAttribute("class", hljsToolbarStyle);
  }
}
