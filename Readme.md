## GO Flavorings,

1. go mod init' as 'goflavorings'
2. in main, appName(), version(), 

Prerequsites:

```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
#delve debugging
$ git clone https://github.com/go-delve/delve
$ cd delve
$ go install github.com/go-delve/delve/cmd/dlv
```

Hints and musts:

```
1. fileName having _, will not be included in project files, such as 'session_test.go, this has to be run by go run session_test.go
2. reflex: reflex -r "\.go$" -s go run .
3. cd db, sqlite3 mydb.db, .tables, select * from Users/insert
```

TODOs:
1. go session, get package by: go get github.com/kataras/go-sessions/v3
2. go cache
3. go jwt
4. go json
5. routes.go
6. go reflex, 'go get github.com/cespare/reflex
7. go sqlite3
8. login to get jwt token; jwt verify; permission check; data logic; cors; return json;
9. this very often is not an spa, so, session is used in this app, rather than jwt;