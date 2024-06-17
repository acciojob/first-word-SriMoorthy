function firstWord('see and stop') {
  // your code here
	let S = s.trim()
	let ans = ''
	for (let i = 0; i < S.length; i++) {
		if(S[i]==' '){
			break
		}
		else{
			ans+=S[i]
		}
	}
	return ans
}

// Do not change the code below

const  = prompt("Enter String:");
alert(firstWord(s));
