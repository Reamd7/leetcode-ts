module.exports = {
  "printWidth": 80,  // 换行的行长 => editorconfig max_line_length = 80
  "tabWidth": 2, // 每个缩进级别的空格数 => editorconfig indent_size = 2
  "useTabs": false, // 使用制表符而不是空格缩进 => editorconfig indent_style = space
  "semi": true, // 在语句末尾打印分号 => eslint "semi": ["error", "always"], // 强制使用分号结尾
  "singleQuote": true, // 使用单引号而不是双引号 => eslint "quotes": ["error", "single"], // 强制使用单引号
  "quoteProps": "as-needed", // 引用对象属性 -> 仅在需要时在对象属性周围添加引号
  "jsxSingleQuote": true, // 在JSX中使用单引号而不是双引号。
  "trailingComma": "es5", // 多行时尽可能打印尾随逗号 => eslint "comma-dangle": ["error", "always-multiline"],
  "bracketSpacing": true, // 在对象文字中的括号之间打印空格。
  "jsxBracketSameLine": false, // 将>多行JSX元素的放在最后一行的末尾
  "arrowParens": "always", // 在单独的箭头函数参数周围包括括号
  "requirePragma": true, // 漂亮的人可以将自己限制为仅格式化在文件顶部包含特殊注释（称为编译指示）的文件。在逐渐将大型，未格式化的代码库过渡到更漂亮时，这非常有用。
  "insertPragma": true, // 漂亮的文件可以在文件顶部插入一个特殊的@format标记，以指定文件已使用漂亮的文件格式进行了格式化。与该--require-pragma选项一起使用时，此方法效果很好。如果文件顶部已经有一个文档块，则此选项将使用@format标记向其中添加换行符。
  "proseWrap": "preserve", // 默认情况下，Prettier将按原样包装markdown文本，因为某些服务使用对换行敏感的渲染器，例如GitHub comment和BitBucket。在某些情况下，您可能希望改用编辑器/查看器软包装，因此该选项允许您选择退出"never"。
  "htmlWhitespaceSensitivity": "css", // 遵守CSS display属性的默认值。
  "vueIndentScriptAndStyle": true, // 是否缩进Vue文件中的代码<script>和<style>标记
  "endOfLine": "lf" // 文本文件中存在两种常见的行尾样式
}
