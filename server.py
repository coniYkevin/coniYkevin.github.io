#!/usr/bin/env python3
import http.server
from logging import Handler
import socketserver

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print ("Server ok, puerto: ", PORT)
    httpd.serve_forever()