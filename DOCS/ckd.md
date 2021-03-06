# 一、 ListKeyManager

## 1.1 ListKeyManager 常用的方法

### 1.1.1 ListKeyManagerOption

```typescript
export interface ListKeyManagerOption {
  /** 当前item是否可用 */
  disable?: boolean;
  /**
   * 获取当前item对应的label,配合ListKeyManager里面withTypeAhead函数的使用
   * 适用于输入框的情况，比如输入框下面有一些list item。当输入框输入字符的时候list item 里面的active item 和输入的文字匹配
   */
  getLabel?(): string;
}
```

### 1.1.2 ListKeyManager 常用方法介绍

```typescript
export interface ListKeyManager {
  /**
   * tab 按键的时候触发的
   */
  tabOut: Subject<void>;
  /** 当ListKeyManager里面的list item ,active item 改变的时候触发*/
  change: Subject<number>;
  /**
   * 设置那些ListKeyManager管理的list里在移动(比如tab 按键切换)过程中那些item需要跳过。
   */
  skipPredicate(predicate: (item: T) => boolean): this;
  /**
   * 设置是否循环移动(当active item是最好一个的时候，继续下一个跳到第一个)
   */
  withWrap(shouldWrap?: boolean): this;
  /**
   * active item 移动方向垂直(对应键盘方向键的 上下按键)
   */
  withVerticalOrientation(enabled?: boolean): this;
  /**
   * active item 移动方向水平(对应键盘方向键的 左右按键)
   */
  withHorizontalOrientation(direction: 'ltr' | 'rtl' | null): this;
  /**
   * 用来处理组合按键的情况，比如 altr + 方向键的时候。同样达到方向按键的效果
   */
  withAllowedModifierKeys(keys: ListKeyManagerModifierKey[]): this;
  /**
   * 设置typeahead 模式 配合ListKeyManagerOption的getLabel()函数使用，一般用于配合有输入框的情况下使用，比如输入框输入一个字符，active item 会自动设置到包含这个字符item
   */
  withTypeAhead(debounceInterval?: number): this;
  /**
   * 设置 active item 对应的index
   */
  setActiveItem(index: number): void;
  /**
   * 设置 active item 对应的item
   */
  setActiveItem(item: T): void;
  /**
   * 设置按键
   */
  onKeydown(event: KeyboardEvent): void;
  /** 当前active item 对应的事件 */
  readonly activeItemIndex: number | null;
  /** 当前active item 对应的item */
  readonly activeItem: T | null;
  /** 设置第一个位置的item 为active item(当然了如果第一个item 是disable,则设置第二个) */
  setFirstItemActive(): void;
  /** 设置最后一个位置的item 为 active item */
  setLastItemActive(): void;
  /** 设置下一个item 为active item */
  setNextItemActive(): void;
  /** 设置上一个item 为active item */
  setPreviousItemActive(): void;
  /**
   * 设置active item,但是不产生其他的效果
   */
  updateActiveItem(index: number): void;
  /**
   * 设置active item,但是不产生其他的效果
   */
  updateActiveItem(item: T): void;
}
```
