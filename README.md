```
yarn workspace relay-example run relay --watch
yarn workspace relay-example run start
```

# Relay examples

This repository contains examples of common patterns used in real-world applications so you don't have to re-invent the wheel every time. It currently contains following examples:

- `@kiwicom/relay` package usage
- simple fetching using `createFragmentContainer`
- bi-directional (also known as window) pagination using `createRefetchContainer`
- _"load more"_ pagination using `createRefetchContainer`
- _"load more"_ pagination using `createPaginationContainer`
