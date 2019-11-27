# form 表单相关的

## 1. 自定义表单

Angular 中常见的 ControlValueAccessor 有：

- `DefaultValueAccessor`：用于 `text` 和 `textarea` 类型的输入控件

- `SelectControlValueAccessor`： 用于 `select` 选择控件

- `CheckboxControlValueAccessor`： 用于 `checkbox` 复选控件

### 实现`ControlValueAccessor`接口

```typescript
export interface ControlValueAccessor {
  writeValue(obj: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState?(isDisabled: boolean): void;
}
```

- `writeValue(obj: any)`：该方法用于将模型中的新值写入视图或 DOM 属性中，即 model->view

- `registerOnChange(fn: any)`：设置当控件接收到 change 事件后，调用的函数，可以用来通知外部，组件已经发生变化，即 view->model

- `registerOnTouched(fn: any)`：设置当控件接收到 touched 事件后，调用的函数

- `setDisabledState?(isDisabled: boolean)`：当控件状态变成 DISABLED 或从 DISABLED 状态变化成 ENABLE 状态时，会调用该函数。该函数会根据参数值，启用或禁用指定的 DOM 元素。

### 注册成为表单控件

- `NG_VALUE_ACCESSOR`：`token`类型为`ControlValueAccessor`，将控件本身注册到 DI 框架成为一个可以让表单访问其值的控件

- `NG_VALIDATORS`：将控件注册成为一个可以让表单得到其验证状态的控件，`NG_VALIDATORS`的 token 类型为`function`或`Validator`，配合 useExisting，可以让控件只暴露对应的`function`或`Validator`的`validate`方法。针对`token`为`Validator`类型来说，控件实现了`validate`方法就可以实现表单控件验证

- `forwardRef`：向前引用，允许我们引用一个尚未定义的对象

- `multi`：设为 true，表示这个 token 对应多个依赖项，使用相同的 token 去获取依赖项的时候，获取的是已注册的依赖对象列表。如果不设置 multi 为 true，那么对于相同 token 的提供商来说，后定义的提供商会覆盖前面已定义的提供商

```typescript
@Component({
    selector: 'app-counts',
    ...
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountsComponent ),
      multi: true
    }
  ]
})
```
