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
  - 各サービス（frontend/backend/service）を独立管理しつつ、単一リポジトリで一括開発が可能です。
- **コード品質管理**
  - ESLint v9 / Prettier / Husky / lint-stagedを導入しています。コミットをトリガーにlintチェックが実行されるように設定されているため、リモートに反映するコードの品質担保を強制することができます。
- **拡張性**
  - backendやserviceはtemplateとして必要最小限の機能のみを組み込んだ超ミニマル構成となっています。**Hono / Fastify / NestJS**などへの置き換えも容易です。

## License

This project is licensed under the MIT License.
Feel free to use it as a foundation for your own development!

© 2025 TomohiroMichida. All rights reserved.
