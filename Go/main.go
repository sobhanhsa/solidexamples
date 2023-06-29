package main

import "fmt"

type buildMethod interface {
	build()
}

type iranKhodro struct{}

func (ik iranKhodro) build() {
	fmt.Println("i need garbage to build another type of that")
}

type saipa struct{}

func (s saipa) build() {
	fmt.Println("peraid is still alive!")
}

type factory struct {
	method buildMethod
}

func (f *factory) chooseBuildMethod(buildMethod buildMethod) {
	f.method = buildMethod
}

func (f factory) buildLagan() {
	f.method.build()
}

func main() {
	// saipa := saipa{}
	iranKhodro := iranKhodro{}

	factory := factory{}

	// factory.chooseBuildMethod(saipa)
	factory.chooseBuildMethod(iranKhodro)

	factory.buildLagan()

	// OCP & DIP has been observed

}
