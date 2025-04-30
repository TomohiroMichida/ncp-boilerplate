## セットアップ手順

このリポジトリはテンプレートとして利用できます。自身のGitHubアカウントに複製して開発を始めてください。

### 1. このリポジトリをテンプレートとしてコピー

- リポジトリ上部の「**Use this template**」ボタンをクリック
- 「**Create a new repository**」画面で任意のリポジトリ名を入力し、「**Create repository from template**」を押下

### 2. 作成したリポジトリをクローン

```bash
git clone https://github.com/あなたのユーザー名/作成したリポジトリ名.git
cd 作成したリポジトリ名
```

### 3. 依存関係をインストール

```bash
pnpm install
```

### 4. envファイルを準備

プロジェクトルート、および以下の各ディレクトリ内で`.env.example`を`.env`にコピーしてください。

- ./src/frontend
- ./src/backend
- ./src/service

```bash
cp .env.example .env
```

### 5. dockerコンテナを起動

```bash
docker-compose up --build
```
