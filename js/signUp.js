// 생년월일 select  ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
    $(document).ready(function(){            
      var now = new Date();
      var year = now.getFullYear();
      var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1); 
      var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());           
      //년도 selectbox만들기               
      for(var i = 1922 ; i <= year ; i++) {
          $('#year').append('<option value="' + i + '">' + i + '년</option>');    
      }
  
      // 월별 selectbox 만들기            
      for(var i=1; i <= 12; i++) {
          var mm = i > 9 ? i : "0"+i ;            
          $('#month').append('<option value="' + mm + '">' + mm + '월</option>');    
      }
      
      // 일별 selectbox 만들기
      for(var i=1; i <= 31; i++) {
          var dd = i > 9 ? i : "0"+i ;            
          $('#day').append('<option value="' + dd + '">' + dd+ '일</option>');    
      }
      $("#year  > option[value="+year+"]").attr("selected", "true");        
      $("#month  > option[value="+mon+"]").attr("selected", "true");    
      $("#day  > option[value="+day+"]").attr("selected", "true");       
  })

  // ID 길이 체크
function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
      object.value = object.value.slice(0, object.maxLength);
  }
}
let inputDataCheck = (id) => {
    if (id) {            
        $("#" + id).removeClass("is-invalid");
    }
}

// ID 중복확인 구현해야함!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function dupChk(){
 
//   if($("#id").val() == ""){
//       $("#id").addClass("is-invalid");
//       $("#id").focus();
//       return;}}


  //submit 눌렀을때 signUpInd_submit 함수 실행❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
  function signUpInd_submit(){
// $("#btn").on("click", function validate1(){
  
//   $(function validate1() {
//     let vali = /^[a-zA-Z0-9]{4,12}$/ // 아이디가 적합한지 검사할 정규식
//     let vali2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ //비밀번호 정규식
//     // var vali3 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일이 적합한지 검사할 정규식

//   if(!check(vali, idCom,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력해주세요.")){
//     return false;
//   }
//   if(!check(vali2,pwCom,"비밀번호는 최소 8자이상의 문자, 숫자, 특수문자($@$!%*#?&)를 포함해야 합니다.")){
//     return false;
//   }


    if($("#id").val() == ""){
        $("#id").addClass("is-invalid");
        $("#id").focus();
        return;
    }
    if($("#domain").val() == ""){
      $("#domain").addClass("is-invalid");
      $("#domain").focus();
      return;
  }
    if($("#pw").val() == ""){
      $("#pw").addClass("is-invalid");
      $("#pw").focus();
      return;
  }
  if($("#cfpw").val() == ""){
    $("#cfpw").addClass("is-invalid");
    $("#cfpw").focus();
    return;
}
if($("#name").val() == ""){
  $("#name").addClass("is-invalid");
  $("#name").focus();
  return;
}
if($("#year").val() == ""){
  $("#year").addClass("is-invalid");
  $("#year").focus();
  return;
}

if($("#month").val() == ""){
  $("#month").addClass("is-invalid");
  $("#month").focus();
  return;
}

if($("#day").val() == ""){
  $("#day").addClass("is-invalid");
  $("#day").focus();
  return;
}
if($("#email").val() == ""){
  $("#email").addClass("is-invalid");
  $("#email").focus();
  return;
}
if($("#phoneInd1").val() == ""){
  $("#phoneInd1").addClass("is-invalid");
  $("#phoneInd1").focus();
  return;
}
if($("phoneInd2").val() == ""){
  $("#phoneInd2").addClass("is-invalid");
  $("#phoneInd2").focus();
  return;
}
if($("#post1").val() == ""){
  $("#post1").addClass("is-invalid");
  $("#post1").focus();
  return;
}
if($("#address1").val() == ""){
  $("#address1").addClass("is-invalid");
  $("#address1").focus();
  return;
}
if($("#address2").val() == ""){
  $("#address2").addClass("is-invalid");
  $("#address2").focus();
  return;
}

alert("Welcome🍰");
 location.href="main.html";

  }