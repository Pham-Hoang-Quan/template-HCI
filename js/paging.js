const product = [
    { id: 1, giamgia: "10%", image: "img/product01.jpg", phanloai: "khoan mini", ten: "Máy khoan xoay Bosch GBM 13 RE", price: "1.460.000đ " , giagoc:"1.850.000đ"},
    { id: 2, giamgia: "NEW", image: "./img/product02.jpg", phanloai: "Khoan bàn", ten: "Máy khoan bàn Hồng Ký HK-KDC800", price: "4.550.000đ " , giagoc:""},
    { id: 3, giamgia: "NEW", image: "./img/product03.jpg", phanloai: "Khoan bê tông", ten: "Máy khoan bê tông Gomes GB-2603P", price:"1.150.000đ ", giagoc:"" },
    { id: 4, giamgia: "-13%", image: "./img/product05.jpg", phanloai: "Khoan bê tông", ten: "Máy khoan bê tông FEG EG-560 (1.500W)", price:"1.650.000đ ", giagoc:"1.900.000đ" },
    { id: 5, giamgia: "NEW", image: "./img/product06.jpg", phanloai: "Khoan động lực", ten: "Máy khoan động lực Bosch GSB 13 RE", price:"2.250.000đ", giagoc:"" },
    { id: 6, giamgia: "-22%", image: "./img/product07.jpg", phanloai: "khoan mini", ten: "Máy khoan tốc độ cao Maktec MT605", price: "690.000đ ", giagoc:"890.000đ"   },
    { id: 7, giamgia: "-18%", image: "./img/product08.jpg", phanloai: "khoan mini", ten: "Máy khoan Bosch GBM 320", price: "699.000đ ", giagoc:"850.000đ" },
    { id: 8, giamgia: "NEW", image: "./img/product09.jpg", phanloai: "Khoan bàn", ten: "Máy khoan phay phi 16 WDDM ZX7016", price: "18.000.000đ " , giagoc:"" },
    { id: 9, giamgia: "-19%", image: "./img/product10.jpg", phanloai: "khoan mini", ten: "Máy khoan tốc độ cao Maktec MT652",price: "650.000đ ", giagoc:"800.000đ" },
    { id: 10, giamgia: "-17%", image: "./img/product11.jpg", phanloai: "Khoan động lực", ten: "Máy khoan động lực Bosch GSB 550 - 06011A15K7", price: "1.450.000đ ", giagoc:"1.750.000đ" },
    { id: 11, giamgia: "-18%", image: "./img/product12.jpg", phanloai: "Khoan động lực", ten: "Máy khoan động lực Bosch GSB 16 RE", price: "1.590.000đ ", giagoc:"1.950.000đ" },
    { id: 12, giamgia: "NEW", image: "./img/product13.jpg", phanloai: "Khoan bê tông", ten: "Máy khoan bê tông Ken 2826GB", price: "1.700.000đ " , giagoc:""},
    { id: 13, giamgia: "NEW", image: "./img/product14.jpg", phanloai: "Khoan bàn", ten: "Máy khoan bàn 13mm Hồng Ký KD600", price: "2.590.000đ " , giagoc:"" },
    { id: 14, giamgia: "NEW", image: "./img/product15.jpg", phanloai: "Khoan động lực", ten: "Máy khoan động lực Bosch GSB 550", price: "1.200.000đ " , giagoc:"" },
    { id: 15, giamgia: "-16%", image: "./img/product16.jpg", phanloai: "khoan mini", ten: "Máy khoan 10mm Makita M0601B", price: "710.000đ " , giagoc:"850.000đ" },
    { id: 16, giamgia: "-14%", image: "./img/product17.jpg", phanloai: "khoan mini", ten: "Máy khoan bắn vít Benyu BY6113", price: "590.000đ " , giagoc:"690.000đ"},
    { id: 17, giamgia: "NEW", image: "./img/product18.jpg", phanloai: "Khoan động lực", ten: "Máy khoan động lực Bosch GSB 13 RE", price: "1.390.000đ " , giagoc:"" },
    { id: 18, giamgia: "-29%", image: "./img/product19.jpg", phanloai: "Khoan bê tông", ten: "Máy khoan bê tông Ken 2826BS", price: "1.380.000đ " , giagoc:"1.950.000đ" },
    { id: 19, giamgia: "-08%", image: "./img/product20.jpg", phanloai: "Khoan bê tông", ten: "Máy khoan bê tông 26mm FEG EG-2601 SRE", price: "1.190.000đ " , giagoc:"1.300.000đ" },
    { id: 20, giamgia: "-10%", image: "./img/product04.jpg", phanloai: "Khoan bàn", ten: "Máy khoan bàn Tiến Đạt K1M1/2HP 1/2HP-1m",price: "6.500.000đ " , giagoc:"7.200.000đ"},
    { id: 21, giamgia: "10%", image: "./img/product20.jpg", phanloai: "khoan mini", ten: "may khoan", price: 14600000 },
    { id: 22, giamgia: "10%", image: "./img/product20.jpg", phanloai: "khoan mini", ten: "may khoan", price: 14600000 },
    { id: 23, giamgia: "10%", image: "./img/product15.jpg", phanloai: "khoan mini", ten: "may khoan", price: 14600000 },
    { id: 24, giamgia: "10%", image: "./img/product02.jpg", phanloai: "khoan mini", ten: "may khoan", price: 14600000 },
]
let perPage = 8;
let currentPage = 1;
let star = 0;
let end = perPage;

const totalPages = product.length / perPage;

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

function getCurrentPage(currentPage){
    star = (currentPage -1)*perPage;
    end = currentPage * perPage;

}

function reanderProduct() {
    html = '';
    const content = product.map((item, index) => {

        if (index >= star && index < end) {


            html += ' <div class="col-md-4 col-xs-6" >'

            html += '<div class="product">';
            html += '<div class="product-img">';
           
            html += '<img src='+ item.image+'>';
         
            html += '<div class="product-label">';
            
            html += '<span class="sale">' + item.giamgia;
            html += '</span>';
            html += '</div>';
            html += '</div>';
            html += '<div class="product-body">';
            html += '<p class="product-category">' + item.phanloai;
            html += '</p>';
            html += '<h3 class="product-name">' + item.ten + '</h3>';
    
            html += '<h4 class="product-price">' + item.price;
            html += '<del class="product-old-price">' + item.giagoc + '</del>';
            html += '</h4>';
            html += ' <div class="product-rating">';
            html += '<i class="fa fa-star">';
            html += '</i>';
            html += '<i class="fa fa-star">';
            html += '</i>';
            html += '<i class="fa fa-star">';
            html += '</i>';
            html += '<i class="fa fa-star">';
            html += '</i>';
            html += '<i class="fa fa-star">';
            html += '</i>';
            html += '</div>';
            html += ' <div class="product-btns">';
            html += '<button class="add-to-wishlist">' + '<i class="fa fa-heart-o">'+ '</i>' + '<span class="tooltipp">' + 'Thích' + '</span>' + '</button>';
            html += '<button class="add-to-compare">'+'<i class="fa fa-exchange">'+'</i>'+'<span class="tooltipp">'+ 'so sách' + '</span>' + '</button>';
            html += ' <button class="quick-view"><a href="product.html" class=""> <i class="fa fa-eye"></i><span class="tooltipp">xem</span></a></button>';
            html += '</div>';
            html += '</div>';
            html += '<div class="add-to-cart">';
            html += '<button class="add-to-cart-btn">' + '<i class="fa fa-shopping-cart">' + '</i>' + 'Thêm vào giỏ hàng' + '</button>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';



            return html;
        
        }

    })
    document.getElementById('product').innerHTML = html;

}
reanderProduct();
renderListPage();

function renderListPage(){
    let html = '';
    html += `<li class="active"><a>${1}</a></li>`;
for (let i = 2; i <= totalPages; i++){
   html += `<li><a>${i}</a></li>`;
 
}


    document.getElementById('number-page').innerHTML = html;
}

function changPage(){
    const currentPages = document.querySelectorAll('.number-page li');
    console.log(currentPages);
    for(let i = 0 ; i < currentPages.length ; i++ ){
        currentPages[i].addEventListener('click', () =>{
           let value = i +1;
           console.log(value);
        currentPage = value;
        $('.number-page li') .removeClass('active');
        currentPages[i].classList.add('active');
        getCurrentPage(currentPage);
        reanderProduct();
        
        })
    }

}
changPage();


btnNext.addEventListener('click', () =>{
    currentPage++;
    
    if(currentPage > totalPages){
        currentPage = totalPages;
    }
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage-1})`).addClass('active');


   getCurrentPage(currentPage);

    reanderProduct();
})

btnPrev.addEventListener('click', () =>{
    currentPage--;
    
    if(currentPage <= 1){
        currentPage = 1;
    }
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage-1})`).addClass('active');

    getCurrentPage(currentPage);


    reanderProduct();
})


