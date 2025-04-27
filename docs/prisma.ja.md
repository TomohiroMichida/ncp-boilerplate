## Prismaモデル設計について

本テンプレートは、PrismaによるDB操作のための最低限のセットアップのみを提供しています。
実際に開発を進める際は、必要に応じて以下の手順でモデル設計・マイグレーションを行ってください。

1. `src/service/prisma/schema.prisma`ファイルに、必要なデータモデルを定義してください。
2. モデルを定義したら、以下のコマンドを実行してマイグレーションとクライアント生成を行います。

```bash
cd src/service
pnpm prisma:migrate
pnpm prisma:generate
```

※ Prisma関連コマンドを実行する際は、PostgreSQLコンテナが起動している必要があります。
