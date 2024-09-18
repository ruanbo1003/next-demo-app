
## run pg database and migrations
* start a pg database using docker
```shell
docker compose -f docker/docker-compose.yml up demo_postgres_dev
```
* generate migrations
```shell
npx drizzle-kit generate
```
* run migrations
```shell
npx drizzle-kit migrate
```
