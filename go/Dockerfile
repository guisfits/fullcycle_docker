## BUILDER
FROM golang:1.16-alpine as builder
WORKDIR /go/src/app
RUN go mod init github.com/guisfits/fullcycle-go
COPY . .
RUN go build

## RUNNER
FROM scratch 
COPY --from=builder /go/src/app/fullcycle-go ./fullcycle-go
CMD ["./fullcycle-go"]
