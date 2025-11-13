# none.css - Design Tokens (v0.1)

目的: shadcn のようなシンプルで落ち着いた UI トーンをデフォルトにする。

カラー（例）
- primary: #2563eb (アクセント)
- primary-dark: #1d4ed8
- bg: #ffffff
- surface: #ffffff
- text: #0f172a
- muted: #64748b

タイポグラフィ
- base font-family: system UI stack (ui-sans-serif, system-ui, -apple-system ...)
- base font-size: 1rem (16px)
- heading scale: h1 text-3xl, h2 text-2xl, h3 text-xl

スペーシング
- Tailwind の spacing scale を利用（px, 0.5, 1, 1.5, 2, 2.5, 3, 4 ...）

アクセシビリティの考慮点
- コントラスト: 主要テキストと背景で WCAG AA レベルを目標
- フォーカスリング: すべてのインタラクティブ要素に focus-visible スタイルを提供
- スキップリンクはプロジェクト側で必要に応じて追加

カスタマイズ方法
- run-time: CSS 変数 (--nc-*) を上書き
- build-time: tailwind.config.js の theme.extend で color/spacing を上書き