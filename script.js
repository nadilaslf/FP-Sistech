const cardsWrapper = document.querySelector('.cards-wrapper');

function scrollLeft() {
    cardsWrapper.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    cardsWrapper.scrollBy({ left: 300, behavior: 'smooth' });
}

// const cardsWrapper = document.querySelector('.cards-wrapper');

//         function scrollLeft() {
//             cardsWrapper.scrollBy({ left: -300, behavior: 'smooth' });
//         }

//         function scrollRight() {
//             cardsWrapper.scrollBy({ left: 300, behavior: 'smooth' });
//         }

        document.getElementById('prevBtn').addEventListener('click', scrollLeft);
        document.getElementById('nextBtn').addEventListener('click', scrollRight);

const carouselInner = document.querySelector('.carousel-inner');

function scrollLeft() {
    carouselInner.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    carouselInner.scrollBy({ left: 300, behavior: 'smooth' });
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


// let currentIndex = 0;

// function updateCarousel() {
//     const carouselInner = document.querySelectorAll('.carousel-inner');
//     carouselInner.forEach(inner => {
//         inner.style.transform = `translateX(-${currentIndex * 220}px)`;
//     });
// }

// function prevSlide() {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//     }
// }

// function nextSlide() {
//     const totalItems = document.querySelectorAll('.carousel-item').length;
//     if (currentIndex < totalItems - 1) {
//         currentIndex++;
//         updateCarousel();
//     }
// }


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

            // if (!responseJson.fitur) {
            //     console.error('fitur data not found in response');
            //     return;
            // }

            listFitur.innerHTML = "";
            let fitur = responseJson.fitur;
            fitur.forEach(Fitur => {
                listFitur.innerHTML += `
                
            <div class="card">
                <h3>${Fitur.title}</h3>
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

            // if (!responseJson.fitur) {
            //     console.error('fitur data not found in response');
            //     return;
            // }

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

            // if (!responseJson.fitur) {
            //     console.error('fitur data not found in response');
            //     return;
            // }

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

// const getListKuis = () => {
//     fetch(data)
//         .then(response => {
//             return response.json();
//         }).then(responseJson => {
//             console.log(responseJson.kuis);

//             // if (!responseJson.fitur) {
//             //     console.error('fitur data not found in response');
//             //     return;
//             // }

//             // listKuis.innerHTML = "";
//             let kuis = responseJson.kuis;
//             kuis.forEach(Kuis => {
//                 listKuis.innerHTML += `
//                     <div class="carousel-inner cards-wrapper">
//                         <div class="carousel-item-bacaan">
//                             <img style="padding: 35px;" src="${Kuis.img}" alt="Kalkulus">
//                             <div class="carousel-caption">
//                                 <p class="bacaan-type">${Kuis.desc}</p>
//                                 <p class="bacaan-type">${Kuis.matkul}</p>
//                                 <p>${Kuis.title}</p>
//                             </div>
//                         </div>
//                     </div>
               
//                 `
//             });
//         }).catch(error => {
//             console.error(error);
//         })
// }

// const getListUlasan = () => {
//     fetch(data)
//         .then(response => {
//             return response.json();
//         }).then(responseJson => {
//             console.log(responseJson.ulasan);

//             // if (!responseJson.fitur) {
//             //     console.error('fitur data not found in response');
//             //     return;
//             // }

//             // listKuis.innerHTML = "";
//             let ulasan = responseJson.ulasan;
//             ulasan.forEach(Ulasan => {
//                 listUlasan.innerHTML += `
//                     <div class="carousel-item-ulasan">
                    
//                              <p class="ulasan">${Ulasan.ulasan}</p>
//                             <div class="carousel-caption-ulasan">
//                                 <p class="bacaan-type">${Ulasan.univ} </p>
//                                 <p>${Ulasan.nama}</p>
//                             </div>
//                         </div>
               
//                 `
//             });
//         }).catch(error => {
//             console.error(error);
//         })
// }

const getListUlasan = () => {
    fetch(data)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson.ulasan);

            // if (!responseJson.fitur) {
            //     console.error('fitur data not found in response');
            //     return;
            // }

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



// const showListBuku = Buku => {
//     listBuku.innerHTML = "";
//     // let Buku = responseJson.data;
//     Buku.forEach(item => {
//         listBuku.innerHTML += `
//         <div class="carousel-inner cards-wrapper">
//             <div class="carousel-item-bacaan">
//                 <img style="padding: 35px;" src="assets/bacaan-kalkulus.jpg" alt="Kalkulus">
//                 <div class="carousel-caption">
//                     <p class="bacaan-type">${item.desc}</p>
//                     <p>${item.title}</p>
//                 </div>
//             </div>
        
    
//         </div>
//         `
//     });
// }

// const showListBuku

document.addEventListener('DOMContentLoaded', () => {
    getListBuku();
    getListFitur();
    getListKelas();
    getListKuis();
    getListUlasan();
});