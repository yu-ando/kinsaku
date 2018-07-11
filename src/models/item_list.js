// itemの集合データ
// localStorageへの登録単位
var Item = require('./item').default

/**
 * タスクのリスト
 */
export default class ItemList
{
  constructor($key = '')
  {
    // key未設定の場合は現在日付を元にする
    if ($key === '') {
      const date = new Date();
      $key = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate();
    }
    // load data.
    load($key);
  }

  load($key) {
    // データ取得
    var source = ItemList.fetch($key);

    this.currentkey = $key;
    this.items = [];
    let items = source.items || [];
    items.forEach((item) => {
      this.items.push(new Item(item))
    })
  }

  // 新しいタスクをタスクリストに追加する
  add(item)
  {
    this.items.push(item)
  }

  // タスクリストを永続化する
  save()
  {
    // 今回はローカルストレージを使います。
    localStorage.setItem(this.currentkey, JSON.stringify(this))
  }

  // ローかストレージから保存された内容を復元します
  static fetch($key)
  {
    return JSON.parse(localStorage.getItem($key) || '{}')
  }

}
