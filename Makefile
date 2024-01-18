create-app:
	pnpm create next-app nextjs14-trpc-react-query

install-dependencies:
	pnpm add @tanstack/react-query@4.18.0
	pnpm add @tanstack/react-query-devtools@4.18.0
	pnpm add -D @tanstack/eslint-plugin-query

	pnpm add @trpc/server
	pnpm add @trpc/client
	pnpm add @trpc/react-query
	pnpm add superjson
	pnpm add zod

	pnpm add @prisma/client
	pnpm add -D prisma

commands:
	pnpm prisma init --datasource-provider postgresql
	pnpm prisma migrate dev --name init