package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("web/"))
	mux.Handle("/", fs)
	fmt.Println("http://localhost:8080")
	if err := http.ListenAndServe(":8080", mux); err != nil {
		log.Fatalf("error occured while running http server: %s", err.Error())
	}
}
