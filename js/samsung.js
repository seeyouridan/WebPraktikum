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
			name: "Samsung Galaxy A14 5G",
			gambar: "../img/samsung/img1.png",
			desc: "OS : Android 13<br>Ram : 6GB/128GB<br>Battery : 5000mAh",
			harga: "Rp.2.825.000",
		},
		{
			name: "Samsung Galaxy A73 5G",
			gambar: "../img/samsung/img2.png",
			desc: "OS : Android 12<br>Ram : 8GB/256GB<br>Battery : 5000mAh",
			harga: "Rp.5.679.999",
		},
		{
			name: "Samsung Galaxy A23 5G",
			gambar: "../img/samsung/img3.png",
			desc: "OS : Android 12<br>Ram : 8GB/256GB<br>Battery : 5000mAh",
			harga: "Rp.3.540.000",
		},
		{
			name: "Samsung Galaxy A04s",
			gambar: "../img/samsung/img4.png",
			desc: "OS : Android 12<br>Ram : 4GB/64GB<br>Battery : 5000mAh",
			harga: "Rp.1.825.000",
		},
		{
			name: "Samsung Galaxy A14 5G",
			gambar: "../img/samsung/img1.png",
			desc: "OS : Android 13<br>Ram : 6GB/128GB<br>Battery : 5000mAh",
			harga: "Rp.2.825.000",
		},
		{
			name: "Samsung Galaxy A73 5G",
			gambar: "../img/samsung/img2.png",
			desc: "OS : Android 12<br>Ram : 8GB/256GB<br>Battery : 5000mAh",
			harga: "Rp.5.679.999",
		},
		{
			name: "Samsung Galaxy A23 5G",
			gambar: "../img/samsung/img3.png",
			desc: "OS : Android 12<br>Ram : 8GB/256GB<br>Battery : 5000mAh",
			harga: "Rp.3.540.000",
		},
		{
			name: "Samsung Galaxy A04s",
			gambar: "../img/samsung/img4.png",
			desc: "OS : Android 12<br>Ram : 4GB/64GB<br>Battery : 5000mAh",
			harga: "Rp.1.825.000",
		},
		{
			name: "Samsung Galaxy A14 5G",
			gambar: "../img/samsung/img1.png",
			desc: "OS : Android 13<br>Ram : 6GB/128GB<br>Battery : 5000mAh",
			harga: "Rp.2.825.000",
		},
		{
			name: "Samsung Galaxy A73 5G",
			gambar: "../img/samsung/img2.png",
			desc: "OS : Android 12<br>Ram : 8GB/256GB<br>Battery : 5000mAh",
			harga: "Rp.5.679.999",
		},
		{
			name: "Samsung Galaxy A23 5G",
			gambar: "../img/samsung/img3.png",
			desc: "OS : Android 12<br>Ram : 8GB/256GB<br>Battery : 5000mAh",
			harga: "Rp.3.540.000",
		},
		{
			name: "Samsung Galaxy A04s",
			gambar: "../img/samsung/img4.png",
			desc: "OS : Android 12<br>Ram : 4GB/64GB<br>Battery : 5000mAh",
			harga: "Rp.1.825.000",
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