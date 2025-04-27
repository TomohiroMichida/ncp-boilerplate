# NCP Boilerplate

NCP BoilerplateはNext.js + Chakra UI + Prisma + PostgreSQL構成の、モノレポ型マイクロサービス開発テンプレートです。
開発効率・拡張性を重視し、将来的なフレームワーク置き換えや本番環境への移行を意識したひな型プロジェクトを提供します。

## ドキュメント一覧

- [セットアップ手順(Setup Guide)](./docs/setup.ja.md)
- [Prismaモデル設計について](./docs/prisma.ja.md)

## プロジェクト構成図（Dockerコンテナ＋ポート＋プロトコル）

各サービスは独立したDockerコンテナとして管理されています。

- frontendは、backend（Express API）に対してHTTPリクエストを送信し、レスポンスを受け取ります。
- backendは、必要に応じてservice（Prisma ORM）にHTTPリクエストを送り、データ操作を委譲します。
- serviceは、Prisma経由で直接PostgreSQLと通信し、データの読み書きを行います。
- 各コンテナは、Docker内部ネットワーク上で相互通信します。

```
+-------------------------------------------------+
| [Container] frontend (Next.js + Chakra UI)      |
| - Port: 3000                                    |
+-------------------------------------------------+
⇅ (HTTP)
+-------------------------------------------------+
| [Container] backend (Express API server)        |
| - Port: 4000                                    |
+-------------------------------------------------+
⇅ (HTTP)
+-------------------------------------------------+
| [Container] service (Prisma ORM service)        |
| - Port: 5000                                    |
+-------------------------------------------------+
⇅ (PostgreSQL Protocol)
+-------------------------------------------------+
| [Container] postgres (PostgreSQL database)      |
| - Port: 5432                                    |
+-------------------------------------------------+
```

## テンプレート使用技術

- **frontend** : Next.js, Chakra UI
- **backend** : Express
- **service** : Prisma (ORM)
- **database** : PostgreSQL

## 特徴

- **モノレポ構成**
  - 各サービス（frontend / backend / service）を独立管理しながら、単一リポジトリで一括運用できる設計です。モノレポの管理効率と、マイクロサービスの柔軟性を両立しています。
- **pnpmワークスペースによる依存関係管理**
  - 各サービス間の依存関係をpnpmワークスペースで統一管理しています。開発・ビルド・デプロイがスムーズかつ高速になり、スケールしやすい構成を実現しています。
- **コード品質管理**
  - ESLint v9 / Prettier / Husky / lint-stagedを導入し、コミット**前**に自動でlintチェックを実行します。リモートに反映される前に問題を検出し、常に高品質な状態を保つ仕組みを整えています。
- **拡張性**
  - backendやserviceはtemplateとして必要最小限の機能のみを組み込んだ超ミニマル構成となっています。**Hono / Fastify / NestJS**などへのスムーズな置き換えを想定して設計されています。
- **本番環境移行**
  - 開発環境と本番環境を柔軟に切り替えられる構成を採用。`.env`による環境変数管理とDockerコンテナ化により、開発から本番リリースまでシームレスな移行を実現しています。

## License

This project is licensed under the MIT License.
Feel free to use it as a foundation for your own development!

© 2025 TomohiroMichida. All rights reserved.
