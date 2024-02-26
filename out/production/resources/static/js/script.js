function showCategory(category) {
    //카테고리 숨기기
    var categoryInfos = document.querySelectorAll('.category-info');
    categoryInfos.forEach(function (info) {
        info.classList.remove('active');
    });

    //카테고리 표시
    var selectedCategory = document.getElementById(category);
    selectedCategory.classList.add('active');
}

function refreshPage() {
    location.reload();
}


window.addEventListener('DOMContentLoaded', () => {
    // overviewContent 요소 가져오기
    const overviewContent = document.querySelector('#Overview .font-NotoSansKR');

    // overview.txt 파일 가져오기
    fetch('js/overview.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })

        //텍스트 문장을 가시성 좋게
        .then(data => {
            const overviewContent = document.getElementById('overviewContent');
            data.split('\n').forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph.trim(); // 문단 양쪽 공백 제거
                overviewContent.appendChild(p);
            });
        })

        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(" + ((i - slideIndex + 1) * 100) + "%)";
    }
}
