We can pick words from a string in C++ using a `stringstream` object.
We need an empty string object that acts as a reference variable for every word, as we iterate over words.

```cpp title="Get words from C++ String"
string text = "Hello World";	
string temp; // Temp variable
stringstream ss(text);

while(ss >> temp) {
	// Runs for each sub-string with delimited with " "
	cout<<temp<<endl;
}

/*

Output:

Hello
World

*/

```