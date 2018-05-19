// let animateProps = {height:'20px'};
// let animateOptions = {
//   duration:200,
//   easing:'linear'
// };

$(() => {
    console.log('script works');


    $('.n span:nth-child(1)').animate({height:'20px'}, 100, (() => {
      $('.n span:nth-child(2)').animate({height:'20px'}, 100, (() => {
        $('.n span:nth-child(3)').animate({height:'20px'}, 100, (() => {
          $('.o span:nth-child(1)').animate({height:'20px'}, 100, (() => {
            $('.o span:nth-child(2)').animate({height:'20px'}, 100, (() => {
              $('.o span:nth-child(3)').animate({height:'20px'}, 100, (() => {
                $('.o span:nth-child(4)').animate({height:'20px'}, 100, (() => {
                  $('.d span:nth-child(2)').animate({height:'20px'}, 100, (() => {
                    $('.d span:nth-child(1)').animate({height:'20px'}, 100, (() => {
                      $('.d span:nth-child(4)').animate({height:'20px'}, 100, (() => {
                        $('.d span:nth-child(3)').animate({height:'40px'}, 100, (() => {
                          $('.e span:nth-child(5)').animate({height:'20px'}, 100, (() => {
                            $('.e span:nth-child(3)').animate({height:'10px'}, 100, (() => {
                              $('.e span:nth-child(4)').animate({height:'20px'}, 100, (() => {
                                $('.e span:nth-child(1)').animate({height:'20px'}, 100, (() => {
                                  $('.e span:nth-child(2)').animate({height:'20px'}, 100, (() => {
                                    $('.dash-bg').animate({width:'96px'}, 500);
                                  }));
                                }));
                              }));
                            }));
                          }));
                        }));
                      }));
                    }));
                  }));
                }));
              }));
            }));
          }));
        }));
      }));
    }));
});
