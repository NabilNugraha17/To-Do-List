const inputBox = document.getElementById("input-box"); // Mendapatkan elemen dengan id "input-box"
const listContainer = document.getElementById("list-container"); // Mendapatkan elemen dengan id "list-container"

console.log(listContainer); // Menampilkan elemen listContainer di konsol

document.getElementById("add-btn").addEventListener("click", addTask); // Menambahkan event listener untuk klik tombol "add-btn" yang memanggil fungsi addTask
addEventListener("keydown", (e) => { // Menambahkan event listener untuk mendeteksi tombol keyboard yang ditekan
    if(e.key == "Enter") // Jika tombol yang ditekan adalah "Enter"
        addTask(); // Panggil fungsi addTask
});

function addTask() {
    if(inputBox.value == ""){ // Memeriksa apakah inputBox kosong
        alert("isi dulu bang !"); // Jika kosong, tampilkan pesan alert
    } else {
        let li = document.createElement("li"); // Membuat elemen <li> baru
        li.innerHTML = inputBox.value; // Mengisi <li> dengan nilai dari inputBox
        let span = document.createElement("span"); // Membuat elemen <span> baru
        span.innerHTML = "<i class='fa-solid fa-trash'></i>"; // Mengisi <span> dengan ikon tempat sampah
        li.appendChild(span); // Menambahkan <span> ke dalam <li>
        listContainer.appendChild(li); // Menambahkan <li> ke dalam listContainer
    }

    inputBox.value = ""; // Mengosongkan inputBox setelah tugas ditambahkan
    saveData(); // Menyimpan data ke localStorage
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Menyimpan isi listContainer ke localStorage dengan kunci "data"
}

listContainer.addEventListener("click", (e) => { // Menambahkan event listener untuk klik pada listContainer
    if(e.target.tagName.toUpperCase() === "LI"){ // Jika elemen yang diklik adalah <li>
        e.target.classList.toggle("checked"); // Menambahkan/menghapus class "checked" untuk menandai tugas selesai
        saveData(); // Menyimpan perubahan ke localStorage
    } else if(e.target.tagName.toUpperCase() === "SPAN") { // Jika elemen yang diklik adalah <span>
        e.target.parentElement.remove(); // Menghapus elemen <li> induknya
        saveData(); // Menyimpan perubahan ke localStorage
    }
});

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Mengambil data dari localStorage dan menampilkannya di listContainer
}

showTask(); // Memanggil showTask untuk menampilkan tugas yang tersimpan saat halaman dimuat
