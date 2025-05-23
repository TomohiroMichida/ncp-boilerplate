# NCP Boilerplate

NCP Boilerplateは、Next.js / Chakra UI / Prisma / PostgreSQL を採用した、スケーラブルなモノレポ構成のマイクロサービス開発テンプレートです。  
開発初期から本番運用、さらには将来的なフレームワークの差し替えやサービス分割までを見据え、拡張性と柔軟性に優れたアーキテクチャを提供します。

## ドキュメント一覧

- [セットアップ手順(Setup Guide)](./docs/setup.ja.md)
- [Prismaモデル設計について](./docs/prisma.ja.md)

## プロジェクト構成図（Dockerコンテナ＋ポート＋プロトコル）

各サービスは責務ごとに独立したDockerコンテナで管理されています。

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
- **service** : Express, Prisma (ORM)
- **database** : PostgreSQL

## 特徴

- **モノレポ構成**
  - 各サービス（frontend / backend / service）を独立管理しながら、単一リポジトリで一括運用できる設計です。モノレポの管理効率と、マイクロサービスの柔軟性を両立しています。
- **pnpmワークスペースによる依存関係管理**
  - 各サービス間の依存関係をpnpmワークスペースで統一管理しています。開発・ビルド・デプロイがスムーズかつ高速になり、スケールしやすい構成を実現しています。
- **コード品質管理**
  - ESLint v9 / Prettier / Husky / lint-stagedを導入し、コミット**前**に自動でlintチェックとTypeScriptのビルドチェック（`tsc --noEmit`）を実行します。構文エラーや型定義の問題をリモートに反映される前に検出し、常に高品質な状態を保つ仕組みを整えています。
  - **ユニットテスト**はJest + @testing-library をテンプレート時点で組み込み済です。<br>`pnpm test` でサービス横断テスト、`pnpm test:frontend` などで個別実行も可能です。
- **拡張性**
  - backendおよびserviceは、責務ごとに厳密にレイヤー分離されており、templateとしての最小構成を保ちながらも、本番運用を想定した拡張性の高い設計となっています。
  - Expressに依存する処理はroutes層に限定しており、controller以降のレイヤーはすべてフレームワーク非依存の純粋なTypeScriptクラスで構成されています。そのため、**Hono / Fastify / NestJS**など他フレームワークへの移行は、routes層の差し替えのみで対応可能となっています。
  - repository層は、interfaceベースの抽象化と依存注入（DI）を前提としたクラス設計を採用しており、実装の差し替えやテストが比較的容易です。
- **本番環境移行**
  - 開発環境と本番環境を柔軟に切り替えられる構成を採用。`.env`による環境変数管理とDockerコンテナ化により、開発から本番リリースまでシームレスな移行を実現しています。

## CI / CD

| 種別   | 状態          | 内容                                                                                                                    |
| ------ | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **CI** | **✅ 導入済** | GitHub Actions で `lint ➜ typecheck ➜ test ➜ build` を自動実行。<br>pnpm + lockfileDigest キャッシュで高速化。          |
| **CD** | **未実装**    | デプロイ先はテンプレート利用者ごとに異なる想定のため、未実装となります。<br>（例: Vercel / Render / ECS / Fly.io など） |

> **CI ワークフロー** は `.github/workflows/ci.yml` を参照してください。

## License

This project is licensed under the MIT License.
Feel free to use it as a foundation for your own development!

© 2025 TomohiroMichida.
