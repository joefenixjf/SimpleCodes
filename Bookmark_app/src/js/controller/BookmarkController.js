const capitalize = require("../helpers/capitalize.js");
const {
  updateLocalStorage,
  setLocalStorageData,
} = require("../helpers/localStorage");
const urlValidator = require("../helpers/urlValidator");
const { BList } = require("../model/BookmarkList");
const { BView } = require("../view/BookmarkView");
const { Bookmark } = require("../model/Bookmark");
class BController {
  constructor() {
    this.$ = document.querySelector.bind(document);

    this.listener();

    this.list = new BList();
    setLocalStorageData(this.list);

    this.bView = new BView("#siteLista");
    this.bView.updateView(this.list);
  }

  urlMsg(bool) {
    if (!bool) {
      const urlMsg = this.$("#urlMsg");
      urlMsg.classList.remove("d-none");
      return;
    } else {
      urlMsg.classList.add("d-none");
    }
  }

  addBookmark() {
    const url = urlValidator(this.$("#siteUrl").value)
      ? this.$("#siteUrl").value
      : false;
    if (url != false) {
      this.list.add(
        new Bookmark(
          capitalize(this.$("#siteNome").value),
          this.$("#siteDescricao").value,
          url
        )
      );
      updateLocalStorage(this.list);
      this.bView.updateView(this.list);
    }
    this.urlMsg(url);

    this.$("#siteUrl").value = "";
    this.$("#siteNome").value = "";
    this.$("#siteNome").focus;
    this.$("#siteDescricao").value = "";
  }

  removeBookmark(bookmarkId) {
    this.list.remove(bookmarkId);
    this.bView.updateView(this.list);
  }

  listener() {
    // Evento no submit do formulario para adição de bookmark
    this.$("#form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.addBookmark();
    });

    // Evento no container para deletar um bookmark da lista
    this.$("#siteLista").addEventListener("click", (e) => {
      e.preventDefault();
      this.removeBookmark(e.target.id);
      updateLocalStorage(this.list);
    });
  }
}

module.exports = { BController };
