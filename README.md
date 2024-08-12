Confirm that tests are passing on `main`.

```
nx run-many -t e2e-ci
```

Run the migrations, then make sure each `e2e-ci-**/*` targets still work.

