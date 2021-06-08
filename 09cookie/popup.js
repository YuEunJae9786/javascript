/* 쿠키생성 */
function createCookie(name, value){

    // 쿠키이름, 쿠키값 만료시간
    var date = new Date();
    date.setDate( date.getDate() + 1);
    
    var cookie = "";
    cookie += name + "=" + value + ";";
    cookie += "expires=" + date;

    document.cookie = cookie;
}

// 쿠키확인
function getCookie(name){

    var cookies = document.cookie.split(";"); // 분리해서 저장
            
    for(var i in cookies){
        if(cookies[i].indexOf(name) != -1 ){ // name을 가지고 있는 쿠키를 find
            return cookies[i].replace(" ", "").replace(name+"=", ""); // 쿠키값리턴
        } 
    }

}