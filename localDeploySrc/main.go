package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
	// API routes
	http.Handle("/", http.FileServer(http.Dir("./src")))

	http.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "PING: "+time.Now().String())
	})

	port := ":9090"
	fmt.Println("Server is running on port " + port)
	fmt.Println("GO: http://www.localhost" + port)

	// Start server on port specified above
	log.Fatal(http.ListenAndServe(port, nil))
}
