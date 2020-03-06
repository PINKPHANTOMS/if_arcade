// fyi, any line that starts with // is a "comment" and won't affect the program
// these next two lines are how we load the print and prompt functions
print = require('print')()
prompt = require('prompt-sync')()


//set idle timer


// Let's run the "intro" function
intro()

// Here's where we define what happens in the intro function
function intro() {
	print("")

	print("Please select the interactive fiction you'd like to play...")
	print("")
	print("press a to play 'a'")
	print("")
	print("press s to play 's'")
	print("")
	print("press d to play 'd'")
	print("")
	print("press f to play 'f'")
	print("")
	print("press g to play 'g'")
	print("")
	print("press h to play 'h'")
	print("")
	print("press j to play 'j'")
	print("")
	print("press k to play 'k'")
	print("")
	print("press l to play 'l'")
	print("")
	print("press z to play 'z'")
	print("")
	print("press x to play 'x'")
	print("")
	print("press c to play 'c'")
	print("")
	print("press v to play 'v'")
	print("")
	print("press b to play 'b'")
	print("")
	print("press n to play 'n'")
	print("")
	print("press m to play 'm'")
	print("")

	let name = prompt()

	// Now we can print out that name in a middle of a sentence
	// Notice the use of quotes to switch between static text and a variable

	if(name.includes("a")){
		print("you have selected 'a'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(a, 1500);

		}

	}
	else if(name.includes("s")){

		print("you have selected 's'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(s, 1500);

		}

	}
	else if(name.includes("d")){
		print("you have selected 'd'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(d, 1500);

		}

	}
	else if(name.includes("f")){
		print("you have selected 'f'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(f, 1500);

		}

	}
	else if(name.includes("g")){
		print("you have selected 'g'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(g, 1500);

		}

	}
	else if(name.includes("h")){
		print("you have selected 'h'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(h, 1500);

		}

	}
  else if(name.includes("j")){
		print("you have selected 'j'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(j, 1500);

		}

	}
	else if(name.includes("k")){
		print("you have selected 'k'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(k, 1500);

		}

		}
	else if(name.includes("l")){
		print("you have selected 'l'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(l, 1500);

		}

	}
	else if(name.includes("z")){
		print("you have selected 'z'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(z, 1500);

		}

			}
	else if(name.includes("x")){
		print("you have selected 'x'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(x, 1500);

		}

				}
	else if(name.includes("c")){
		print("you have selected 'c'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(c, 1500);

		}

			}
	else if(name.includes("v")){
		print("you have selected 'v'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(v, 1500);

		}

					}
	else if(name.includes("b")){
		print("you have selected 'b'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(b, 1500);

		}

						}
	else if(name.includes("n")){
		print("you have selected 'n'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(n, 1500);

		}

					}
	else if(name.includes("m")){
		print("you have selected 'm'!")
		print("")

		dot1()
		function dot1(){
			print(".")
			setTimeout(dot2, 1500);

		}
		function dot2(){
			print(".")
			setTimeout(dot3, 1500);

		}
		function dot3(){
			print(".")
			setTimeout(imDot, 1500);

		}
		function imDot(){
			print("")
			setTimeout(m, 1500);

		}

							}
	else {
		print("")
		// If the interactor types something unexpected, repeat this function
		print("I don't understand.")
		intro()
	}

}





function a() {
	print("You are in a")
}

function s() {
	print("You are in s")
}

function d() {
	print("You are in d")
}

function f() {
	print("You are in f")
}

function g() {
	print("You are in g")
}

function h() {
	print("You are in h")
}

function j() {
	print("You are in j")
}

function k() {
	print("You are in k")
}

function l() {
	print("You are in l")
}

function z() {
	print("You are in z")
}

function x() {
	print("You are in x")
}

function v() {
	print("You are in v")
}

function b() {
	print("You are in b")
}

function n() {
	print("You are in n")
}

function m() {
	print("You are in m")
}
