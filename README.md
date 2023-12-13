This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Development

Install dependencies:

```bash
pnpm install
```

### API Type Definitions

Create a virtual environment:

```bash
python -m venv /path/to/new/virtual/environment

# Example 
python -m venv .venv
```

Install python packages for retrieving type definitions from the [Atlas Academy API](https://github.com/atlasacademy/fgo-game-data-api):

```bash
pip install -r requirements.txt
```

Convert the pydantic definitions in any of the files in `fgo_api_types` to typescript (in this example `nice.py` is used).  
Note that the `json-schema-to-typescript` npm package must be installed for the `pydantic2ts` tool to work. Personally, I found that it only works if either the option `--json2ts-cmd "pnpm json2ts"` was used, or if it was installed globally (i.e. `pnpm add json-schema-to-typescript -g`) instead. I chose to use the former method and added the package to `devDependencies`.

```bash
# If json-schema-to-typescript is not installed globally
pydantic2ts --json2ts-cmd 'pnpm json2ts' --module VENV_PATH/Lib/site-packages/fgo_api_types/nice.py --output OUTPUT_DIR/FILENAME.ts

# If json-schema-to-typescript is installed globally, the "--json2ts-cmd" option is not necessary
pydantic2ts --module VENV_PATH/Lib/site-packages/fgo_api_types/nice.py --output OUTPUT_DIR/FILENAME.ts

# Example
pydantic2ts --json2ts-cmd 'pnpm json2ts' --module ./.venv/Lib/site-packages/fgo_api_types/nice.py --output ./app/_types/atlasTypes.ts
```
