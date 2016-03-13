// add videos in pairs
var vid_links = [[{link:"9h2L2bBF4RU", name: "Jane Maas", year: "2015"}, {link: "2sCjFSUn9-E", name: "Christopher Dunne", year: "2015"}], [{link: "6pD-Lu_A_DM", name: "Gregory Wolf", year: "2015"}, {link: "hC2wegjCX7I", name: "Joseph Tranquillo", year: "2015"}], [{link: "O2HK4HoFepY", name: "Carmen Gillespie", year: "2015"}]];


$('.bottom-nav').affix({
  offset: {
    top: $('.bottom-nav').height()
  }
});

$(document).ready(function() {
  $("#team > .row").niceScroll();
});

var scrolled = false;
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if ($(this)[0].hasAttribute("data-toggle")) {
      console.log("skip");
      return;
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(".biolink").click(function() {
    var bio = $(this).parent().children().first().attr("data-bio");
    var name = $(this).parent().children()[1].innerText;
    var img = $(this).parent().children().first().attr("src");
    console.log(bio);
    console.log(name);
    console.log(img);
    $(".modal-body img").attr("src", img);
    $(".modal-body img").attr("alt", name);
    $(".modal-body h2").text(name);
    $(".modal-body #biography-text").html(bio);
    $("#myModal").modal();
  });


  var current_video = 0;
  var width = $("#vidbox1").width();

  function setVideos() {
    $(".vidinfo").html("");
    for (var i = 0; i < vid_links[current_video].length; i++) {
      $("#vidbox" + (i+1)).html('<iframe width="' + width + '" height="' + width/1.77 + '" src="https://www.youtube.com/embed/' + vid_links[current_video][i]["link"] + '" frameborder="0" allowfullscreen></iframe>');
      $("#speaker" + (i+1)).html(vid_links[current_video][i]["name"]);
      $("#speakeryear" + (i+1)).html(vid_links[current_video][i]["year"]);
    }
  }
  setVideos();

  $(".videobutton").on('click', function() {
    var button_id = $(this).attr("id");
    if (button_id == "videoright") {
      current_video++;
      if (current_video == vid_links.length) {
        current_video = 0;
      }
    }
    else {
      current_video--;
      if (current_video < 0) {
        current_video = vid_links.length - 1;
      }
    }
    setVideos();
  });

  // tedx is color:#FF2B06  R: 255 G: 43 B: 6
  // bucknell is color:#f29900  R: 242 G: 153 B: 0
  // university is color:#0068f2  R: 0 G: 104 B: 242
  // var ct = [255, 43, 6];
  // var diffBu = [13, -110, 6];
  // var cbu = [242, 153, 0];
  // var diffU = [255, -61, -236];
  // var cu = [0, 104, 242];

  var stoppoint;
  var isstopped;

  var ct = [255, 43, 6];
  var diffBu = [0, -212, -249];
  var cbu = [255, 255, 255];
  var diffU = [0, -212, -249];
  var cu = [255, 255, 255];

  // window.setInterval(function() {
  //   // get scroll distance
  //   var distance = $(window).scrollTop();
  //
  //   // get size of one screenful
  //   var height = $("#welcome").height() - 50;
  //
  //   // skip if past welcome
  //   if (distance > height) {
  //     return;
  //   }
  //
  //   // get distance to bottom
  //   var diff = height - distance;
  //   // calculate offset limit
  //   var offset = distance*.7;
  //   if (offset > diff && isstopped) {
  //     offset = stoppoint;
  //   }
  //   else if (offset > diff) {
  //     stoppoint = offset;
  //     isstopped = true;
  //   }
  //   else {
  //     isstopped = false;
  //   }
  //
  //   var percentCompleted = Math.pow(offset/diff, .4);
  //   if (percentCompleted > 1) {
  //     percentCompleted = 1;
  //   }
  //   var percentRemaining = 1 - percentCompleted;
  //
  //   var newBu = [0,0,0];
  //   newBu[0] = Math.ceil(percentRemaining * diffBu[0] + cbu[0]);
  //   newBu[1] = Math.ceil(percentRemaining * diffBu[1] + cbu[1]);
  //   newBu[2] = Math.ceil(percentRemaining * diffBu[2] + cbu[2]);
  //   var newU = [0,0,0];
  //   newU[0] = Math.ceil(percentRemaining * diffU[0] + cu[0]);
  //   newU[1] = Math.ceil(percentRemaining * diffU[1] + cu[1]);
  //   newU[2] = Math.ceil(percentRemaining * diffU[2] + cu[2]);
  //
  //   $(".bucknell1").css("color", "rgb(" + newBu[0] + "," + newBu[1] + "," + newBu[2] + " )");
  //   $(".bucknell2").css("color", "rgb(" + newU[0] + "," + newU[1] + "," + newU[2] + " )");
  //
  //   // change opacity
  //   $('.topopac').css({'opacity': Math.pow((0.974003746*diff/height),4)});
  //
  //   // shift title text down
  //   $('.titleBlock').css('margin-top', offset);
  //
  //   var newSize = 55 + (percentCompleted)*10;
  //
  //   $(".mainTitle").css('font-size', newSize + 'pt');
  //
  // // timeout interval
  // }, 5);
});
