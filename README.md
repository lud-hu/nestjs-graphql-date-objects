Just a reproduction repo to show a problem with date object conversion with nestjs and graphql.

```gql
query Query($dummyId: ID!, $createdAtCreatedAt: Date!) {
  dummy(id: $dummyId) {
    id
    name
    createdAt(createdAt: $createdAtCreatedAt)
  }
}
```

```json
{
  "dummyId": "1",
  "createdAtCreatedAt": "2021-10-06T06:05:45.482Z"
}
```