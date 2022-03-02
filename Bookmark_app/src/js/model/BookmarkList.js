let id = 0;
class BList {
  constructor() {
    this.list = [];
  }

  add(bookmark) {
    bookmark.id = ++id;
    this.list.push(bookmark);
  }

  remove(bookmarkId) {
    this.list = this.list.filter((el) => {
      if (el.id != bookmarkId) return el;
    });
  }
}

module.exports = { BList };
