


function loadAssignment(htmlFilePath) {
    // iframe 요소 가져오기
    var iframe = document.getElementById('iframe-container');

    // iframe에 HTML 파일 로드
    iframe.src = htmlFilePath;

     iframe.onload = function () {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };

}
document.addEventListener("DOMContentLoaded", function () {
    // 페이지 로드 시 초기화
    showPortfolio(1);
});

function showPortfolio(pageNumber) {
    // 숨겨진 모든 포트폴리오 섹션을 숨김
    document.querySelectorAll('#portfolio > .container-fluid').forEach(function (section) {
        section.style.display = 'none';
    });

    // 모든 페이지 버튼에서 'active' 클래스 제거
    document.querySelectorAll('.pagination .page-item').forEach(function (pageItem) {
        pageItem.classList.remove('active');
    });

    // 클릭한 페이지에 해당하는 포트폴리오 섹션을 표시
    var portfolioId = pageNumber.toString();
    document.getElementById(portfolioId).style.display = 'block';

    // 클릭한 페이지 버튼에 'active' 클래스 추가
    document.querySelector('.pagination li:nth-child(' + (pageNumber + 1) + ')').classList.add('active');

    // 페이지가 위로 올라가지 않도록 방지
    event.preventDefault();
    return false;
}

