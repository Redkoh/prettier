run_spec(
  {
    importMeta: import.meta,
    snippets: ['namespace "a" {}', 'namespace "a";', "namespace a;"],
  },
  ["babel-ts", "typescript"]
);
