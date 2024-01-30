document.querySelector("#btn").addEventListener("click",async()=>{
	const text = document.querySelector("#text").value;
	const delay = document.querySelector("#delay").value;
	if(text&&delay){
		const myPromise = new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve(text)	
			}, delay)
		});
		let text2 = await myPromise;
		if(text2){
			document.querySelector("#output").innerText=text2;
		}
	};
});