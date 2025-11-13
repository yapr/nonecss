# none.css (Tailwind v4 preset)

概要
- Tailwind v4 の preset として動作する "class-minimal" UI ベース。
- デフォルトの HTML 要素にスタイルを与え、主要コンポーネントはシンプルなクラス名（例: btn, card）で利用可能。

Quickstart
1. インストール (開発):
   npm install -D tailwindcss@^4
   npm install

2. tailwind.config.js に preset を追加:
   const nonePreset = require('nonecss-tailwind/src/presets/none-preset');
   module.exports = {
     content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/**/*.html'],
     plugins: [ nonePreset({ prefix: '' }) ]
   };

3. src/none.css:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

4. ビルド:
   npx tailwindcss -i ./src/none.css -o ./dist/none.min.css --minify

命名規則
- デフォルトではクラス名にプレフィックスは付けません（btn, card）。プロジェクト導入時にまとめて採用することを推奨します。
- 既存プロジェクトに後付けで導入する場合、prefix オプションで名前衝突を回避できます（例 prefix: 'nc-'）。

アクセシビリティ / テスト
- v0.1 の受け入れ要件: 正常にビルドできること。
- 追加推奨: components-showcase.html を CI でビルドし、axe-core などで自動チェックを行うと包括的な確認が可能。

Contribution
- LICENSE: MIT
- See CONTRIBUTING.md for contribution guidelines.
