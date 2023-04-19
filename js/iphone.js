var capek;

function myLoad() {
    capek = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('product');
    listProduct();
}

function listProduct() {
	let parent = document.getElementById('product');
	let products = [
		{
			name: "Apple iPhone 14 Pro Max",
			gambar: "../img/iphone/img1.png",
			desc: "Chipset : Apple A16<br>Ram : 6GB/1TB<br>Battery : 4323 mAh",
			harga: "Rp.20.999.000",
		},
		{
			name: "Apple iPhone 14 Pro",
			gambar: "../img/iphone/img2.png",
			desc: "Chipset : Apple A16<br>Ram : 6GB/1TB<br>Battery : 3200 mAh",
			harga: "Rp.18.999.000",
		},
		{
			name: "Apple iPhone 14 Plus",
			gambar: "../img/iphone/img3.png",
			desc: "Chipset : Apple A15<br>Ram : 6GB/512GB<br>Battery : 4323 mAh",
			harga: "Rp.16.999.000",
		},
		{
			name: "Apple iPhone 14",
			gambar: "../img/iphone/img4.png",
			desc: "Chipset : Apple A15<br>Ram : 6GB/512GB<br>Battery : 3729 mAh",
			harga: "Rp.14.999.000",
		},
		{
			name: "Apple iPhone 14 Pro Max",
			gambar: "../img/iphone/img1.png",
			desc: "Chipset : Apple A16<br>Ram : 6GB/1TB<br>Battery : 4323 mAh",
			harga: "Rp.20.999.000",
		},
		{
			name: "Apple iPhone 14 Pro",
			gambar: "../img/iphone/img2.png",
			desc: "Chipset : Apple A16<br>Ram : 6GB/1TB<br>Battery : 3200 mAh",
			harga: "Rp.18.999.000",
		},
		{
			name: "Apple iPhone 14 Plus",
			gambar: "../img/iphone/img3.png",
			desc: "Chipset : Apple A15<br>Ram : 6GB/512GB<br>Battery : 4323 mAh",
			harga: "Rp.16.999.000",
		},
		{
			name: "Apple iPhone 14",
			gambar: "../img/iphone/img4.png",
			desc: "Chipset : Apple A15<br>Ram : 6GB/512GB<br>Battery : 3729 mAh",
			harga: "Rp.14.999.000",
		},
		{
			name: "Apple iPhone 14 Pro Max",
			gambar: "../img/iphone/img1.png",
			desc: "Chipset : Apple A16<br>Ram : 6GB/1TB<br>Battery : 4323 mAh",
			harga: "Rp.20.999.000",
		},
		{
			name: "Apple iPhone 14 Pro",
			gambar: "../img/iphone/img2.png",
			desc: "Chipset : Apple A16<br>Ram : 6GB/1TB<br>Battery : 3200 mAh",
			harga: "Rp.18.999.000",
		},
		{
			name: "Apple iPhone 14 Plus",
			gambar: "../img/iphone/img3.png",
			desc: "Chipset : Apple A15<br>Ram : 6GB/512GB<br>Battery : 4323 mAh",
			harga: "Rp.16.999.000",
		},
		{
			name: "Apple iPhone 14",
			gambar: "../img/iphone/img4.png",
			desc: "Chipset : Apple A15<br>Ram : 6GB/512GB<br>Battery : 3729 mAh",
			harga: "Rp.14.999.000",
		},
	]

	let newKonten = "";
	products.forEach((product) => {
		newKonten += `
		<div class="card">
			<h2>${product.name}</h2>
			<hr>
			<div class="desc">
				<img src="${product.gambar}">
				<p>${product.desc}</p>
			</div>
			<hr>
			<h3>${product.harga}</h3>
        </div>
		`
	})
	parent.innerHTML = newKonten;
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Kemana bang? :(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});