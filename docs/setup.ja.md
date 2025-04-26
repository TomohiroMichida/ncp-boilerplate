## セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/TomohiroMichida/ncp-boilerplate.git
cd ncp-boilerplate
```

### 2. 依存関係をインストール

```bash
pnpm install
```

### 3. envファイルを準備

プロジェクトルート、および以下の各ディレクトリ内で`.env.example`を`.env`にコピーしてください。

- ./src/frontend
- ./src/backend
- ./src/service

```bash
cp .env.example .env
```

### 4. dockerコンテナを起動

```bash
docker-compose up --build
```
