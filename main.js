$(document).ready(function(){
  $('#arrow').click(function(){
    $('html,body').animate({'scrollTop':'0px'},500);
  });
});

  /*아코디언*/
  $( function() {
    $( "#accordion" ).accordion();
  } );


  $(document).ready(function(){
    $(".box2 > li").mouseenter(function(){
      $(this).find(".caption").fadeIn(300);
    });
  
    $(".box2 > li").mouseleave(function(){
      $(".caption").fadeOut(300);
    });
  });


  /*모달창 스크립트*/
  $(document).ready(function(){
    $(".box2 li img").click(function(){
      let imgurl = $(this).attr("src");
      console.log(imgurl);


      let modal = `
      <div class="modal">
        <img src=${imgurl} alt="">
        <i class="fas fa-close"><i>
        </div>
      `;    

      $("body").append(modal);

      $(".modal i.fa-close").click(function(){
        $(".modal").hide();
      });
    }); 
  });


   $(document).ready(function(){
    let n;
    $(".box2 li img").click(function(){

      n = $(this).parent().index()+1;

      let imgurl = $(this).attr("src");
      console.log(imgurl);

      let modal = `
      <div class="modal">
        <img src=${imgurl} alt="">
        <i class="fas fa-close"></i>
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-angle-left"></i>
        </div>
      `;    

      $("body").append(modal);
      
      $('i.fa-angle-left').click(function(){
        if(n == 1){
          n=6;
        }else{
          n--;
        }
        console.log(n); //4,3,2,1,4........
        $('.modal img').attr('src','./images/'+n+'.avif').css('opacity','0').animate({'opacity':'1'}, 500);
      });


      $('i.fa-angle-right').click(function(){
        
        if(n == 6){
          n=1;
        }else{
          n++;
        }
        console.log(n); //1, 2, 3, 4, 1.........
        $('.modal img').attr('src','./images/'+n+'.avif').css('opacity','0').animate({'opacity':'1'}, 500);
      });

      $(".modal i.fa-close").click(function(){
        $(".modal").hide();
      });
    }); 
  });


  $(document).ready(function(){


    //1. 변수선언 
    let mLeft = -300;
    

    //2. 자동으로 움직이는 함수
    function moveLeft(){
      $('.banner ul').css('margin-left',mLeft);
      mLeft -= 2; //-355, -357, -359, -361...........
      console.log(mLeft);

      //만약에 ul태그의 위치값이 ??일 때 왼쪽 첫번째 il태그를 오른쪽 6번 목록의 뒤로 자리를 배치한다.
      if(mLeft==-1000){
        $('.banner ul li:first-child').insertAfter('.banner ul li:last-child');
      }else if(mLeft==-1000){
        mLeft=-300;
      }
    };

      let Timer = setInterval(moveLeft, 0.2);
      //배너에 마우스 오버시 시간을 제거하여 멈추게 하고, 다시 마우스 아웃시 시간을 생성하여 움직이게 한다.
      $('.banner ul').hover(function(){
        clearInterval(Timer);
      },function(){
        clearInterval(Timer);
        Timer = setInterval(moveLeft, 10);
      });

    
    });
