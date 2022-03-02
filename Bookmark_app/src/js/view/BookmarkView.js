class BView {
  constructor(seletor) {
    this.container = document.querySelector(seletor);
  }

  template(model) {
    return model.list
      .map((bookmark) => {
        return `<div class="card mt-2">
          <div class="card-body d-flex justify-content-between">
            <div class="card-text">
              <h3>${bookmark.nome}</h3>
              <p>${bookmark.descricao}</p>
            </div>
            <div class="d-flex flex-column">
              <button class="btn btn-primary mb-1">
                <a
                  class="text-decoration-none text-light"
                  rel="bookmark"
                  target="blank"
                  href="${bookmark.url}"
                  >Visualizar</a
                >
              </button>
              <button id="${bookmark.id}" class="btn btn-danger btnDel">deletar</button>
            </div>
          </div>
        </div>`;
      })
      .join(" ");
  }

  updateView(model) {
    this.container.innerHTML = this.template(model);
  }
}

module.exports = { BView };
