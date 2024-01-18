create-app:
	pnpm create next-app nextjs14-trpc-react-query

install-dependencies:
	pnpm add @tanstack/react-query@4.18.0
	pnpm add -D @tanstack/eslint-plugin-query
	# pnpm add -D @tanstack/react-query-devtools

	pnpm add @trpc/server
	pnpm add @trpc/client
	pnpm add @trpc/react-query
	pnpm add superjson

	pnpm add @prisma/client
	pnpm add -D prisma

commands:
	pnpm prisma init --datasource-provider postgresql