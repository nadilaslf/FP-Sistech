const cardsWrapper = document.querySelector('.cards-wrapper');

function scrollLeft() {
    cardsWrapper.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    cardsWrapper.scrollBy({ left: 300, behavior: 'smooth' });
}

document.getElementById('prevBtn').addEventListener('click', scrollLeft);
document.getElementById('nextBtn').addEventListener('click', scrollRight);

const carouselInner = document.querySelector('.carousel-inner');

function scrollLeft() {
    carouselInner.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    carouselInner.scrollBy({ left: 300, behavior: 'smooth' });
}

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-name')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

let currentIndex = 0;

const cards_wrapper = document.querySelector('.cards-wrapper');
const items = document.querySelectorAll('.card');
const totalItems = items.length;

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 300}px)`;
}

const data = "https://private-c7b41-upgrad.apiary-mock.com/questions";
const listBuku = document.querySelector('.carousel-inner-perpustakaan');
const listFitur = document.querySelector('.cards-wrapper-fitur');
const listKelas = document.querySelector('.carousel-inner-kelas');
const listKuis = document.querySelector('.carousel-inner-kuis');
const listUlasan = document.querySelector('.carousel-inner-ulasan');

const getListBuku = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.data);
            
            listBuku.innerHTML = "";
            let Buku = responseJson.data;
            Buku.forEach(item => {
                listBuku.innerHTML += `
                
                    <div class="carousel-item-bacaan">
                        <img style="padding: 35px;" src="${item.img}" alt="Kalkulus">
                        <div class="carousel-caption">
                            <p class="bacaan-type">${item.desc}</p>
                            <p>${item.title}</p>
                        </div>
                    </div>
                
            
                
                `
            });
        }).catch(error => {
            console.error(error);
        })
}

const getListFitur = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.fitur);

            listFitur.innerHTML = "";
            let fitur = responseJson.fitur;
            fitur.forEach(Fitur => {
                listFitur.innerHTML += `
                
            <div class="card">
                <div class="header-card">
                    <h3>${Fitur.title}</h3>
                    <img src="${Fitur.arrow}" alt="Arrow">
                </div>
                <p>${Fitur.desc}</p>
                <img src="${Fitur.img}" alt="Kelas">
            </div>
        
                `
            });
        }).catch(error => {
            console.error(error);
        })
}

const getListKelas = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.kelas);

            listKelas.innerHTML = "";
            let kelas = responseJson.kelas;
            kelas.forEach(Kelas => {
                listKelas.innerHTML += `
                
                    <div class="carousel-item-kelas">
                        <img style="padding: 10px;" src="${Kelas.img}" alt="Kalkulus 2">
                        <div class="carousel-caption">
                            <p>${Kelas.title}</p>
                        </div>
                    </div>

                   
                `
            });
        }).catch(error => {
            console.error(error);
        })
}

const getListKuis = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.kuis);

            listKuis.innerHTML = "";
            let kuis = responseJson.kuis;
            kuis.forEach(Kuis => {
                listKuis.innerHTML += `
                <div class="carousel-item-bacaan">
                            <img style="padding: 35px;" src="${Kuis.img}" alt="Kalkulus">
                            <div class="carousel-caption">
                                <p class="bacaan-type">${Kuis.desc}</p>
                                <p class="bacaan-type">${Kuis.matkul}</p>
                                <p>${Kuis.title}</p>
                            </div>
                        </div>
                `
            });
        }).catch(error => {
            console.error(error);
        })
}

const getListUlasan = () => {
    fetch(data)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson.ulasan);

            listUlasan.innerHTML = "";
            let ulasan = responseJson.ulasan;
            ulasan.forEach(Ulasan => {
                const ulasanItem = document.createElement('div');
                ulasanItem.classList.add('carousel-item-ulasan');
                ulasanItem.innerHTML = `
                
                
                            
                     <p class="ulasan">${Ulasan.ulasan}</p>
                        <div class="carousel-caption-ulasan">
                            <p class="bacaan-type">${Ulasan.univ} </p>
                            <p>${Ulasan.nama}</p>
                        </div>
              

                
                `;
                listUlasan.appendChild(ulasanItem);
            });
        }).catch(error => {
            console.error(error);
        })
}

document.addEventListener('DOMContentLoaded', () => {
    getListBuku();
    getListFitur();
    getListKelas();
    getListKuis();
    getListUlasan();
});

// page kelas
// Fungsi untuk menampilkan halaman berdasarkan parameter
function showPage(page) {
    // Hasilkan ID halaman yang sesuai
    const pageId = `page${page}`;
    
    // Ambil semua elemen konten kelas dan tombol pagination
    const pages = document.querySelectorAll('.kelas-container');
    const buttons = document.querySelectorAll('.pagination-btn');

    // Sembunyikan semua halaman dan hapus kelas aktif dari semua tombol
    pages.forEach(p => p.style.display = 'none');
    buttons.forEach(button => button.classList.remove('active'));

    // Tampilkan halaman yang sesuai dan tambahkan kelas aktif pada tombol pagination
    document.getElementById(pageId).style.display = 'flex';
    buttons[page - 1].classList.add('active');
}

// Fungsi untuk menampilkan konten berdasarkan kategori
function showContent(content) {
    const allPage = document.getElementById('allPage');
    const newPage = document.getElementById('newPage');
    const upcomingPage = document.getElementById('upcomingPage');
    
    allPage.style.display = 'none';
    newPage.style.display = 'none';
    upcomingPage.style.display = 'none';

    if (content === 'all') {
        allPage.style.display = 'block';
        document.getElementById('allLink').classList.add('active');
        document.getElementById('newLink').classList.remove('active');
        document.getElementById('upcomingLink').classList.remove('active');
    } else if (content === 'new') {
        newPage.style.display = 'block';
        document.getElementById('allLink').classList.remove('active');
        document.getElementById('newLink').classList.add('active');
        document.getElementById('upcomingLink').classList.remove('active');
    } else if (content === 'upcoming') {
        upcomingPage.style.display = 'block';
        document.getElementById('allLink').classList.remove('active');
        document.getElementById('newLink').classList.remove('active');
        document.getElementById('upcomingLink').classList.add('active');
    }
}

// Pastikan halaman pertama aktif pada awalnya
document.addEventListener('DOMContentLoaded', () => showPage(1));


