/**
 * 収支アイテムオブジェクト
 */
export default class Item
{
  constructor(source = {})
  {
    this.category = source.category || '';
    this.topic = source.topic || '';
    this.price = source.price || '';
    this.tags = source.tags || '';
  }
}
