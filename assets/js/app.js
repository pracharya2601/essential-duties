

var Config = {
    apiKey: "AIzaSyCzl7gPXLH1y22Jot8jlEdKo2uqBHJJUl0",
    authDomain: "first-project-07-30-019.firebaseapp.com",
    databaseURL: "https://first-project-07-30-019.firebaseio.com",
    projectId: "first-project-07-30-019",
    storageBucket: "",
    messagingSenderId: "607289516969",
    appId: "1:607289516969:web:24f3c9cfccfe9132"
  };
  
    // Initialize Firebase
    firebase.initializeApp(Config)
    const database = firebase.database()

  //TODO APP JA FILE STARTER>>>>>>>>>>>>>>>>>>
  
  $(".txtb").on("keyup",function(e){
    //13  means enter button
    if(e.keyCode == 13 && $(".txtb").val() != "")
    {
      var task = $("<div class='task'></div>").text($(".txtb").val());
      var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          p.remove();
        });
      });
      
      var check = $("<i class='fas fa-check'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          $(".taskList").append(p);
          p.fadeIn();
        });
        $(this).remove();
      });
  
      task.append(del,check);
      $(".taskList").append(task);
        //to clear the input
      $(".txtb").val("");
    }
  });
  
  //FOR SOME REASON ^^^^^^^^ CODE DOESNOT WORK
  
  //TODO APP JS FILE
  
  
  // books jsava script start from here
  
  
  $('#btn-submit').on('click', function () {
    event.preventDefault();
    var userBook = $('#my-todo-list').val();
    firebase.database().ref().push({
    userBookSearch: userBook
  }); 
  
  });
      
  
  
  $('#btn-submit').on('click', function () {
    event.preventDefault();
  
    var b = $('#my-todo-list').val();
  
    $("form").trigger("reset");
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + b + "&printType=books&apikey=AIzaSyBFsAbl7Z9P4eT_OByho1CTTXI3CbxjOrs";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
        for (var i = 0; i < 4; i++) {
            var bookObs = response.items[i].volumeInfo;
            var c = $('<h2>').text('Title: ' + bookObs.title);
            var au = $('<h4>').text('Author: ' + bookObs.authors);
            var summary = $('<p>').text('Summary: ' + bookObs.description);
            var l = $('<a>').text('Search Online:' + bookObs.previewLink).attr('href',bookObs.previewLink).attr('target', '_blank');
            var img = $('<img height="200px" width="140px">');
            img.attr('src', bookObs.imageLinks.thumbnail).attr('href',bookObs.previewLink);
  
            var dBtn = $(`<a class="btn-link" target="_blank"><button> Buy a Ticket </button></a>`).text("Buy a Book");
            dBtn.attr("href", bookObs.previewLink);
  
            var res = $('<div class="res-book">').append(c, au, summary, img, dBtn);
            $('#bookTitle').prepend(res);
        }
    })
  })
  
  
  //............................
  
  
  // news javascript file
  
  // push into the database 
  $('#btn-submitN').on('click', function () {
    event.preventDefault();
    var v = $('#search_term').val();
    firebase.database().ref().push({
    usernews: v
  }); 
  
  });
  
  // onclickevents for news
  $('#btn-submitN').on('click', function () {
    event.preventDefault();
  
    var v = $('#search_term').val();
  
    $("form").trigger("reset");
    8
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + v + "&api-key=pqTAhnco7pVR9FUqC09qgrNtbfwV1CZH";
  
    $.ajax({
  
      url: queryURL,
      method: "GET"
  
    }).then(function (response) {
      console.log(response);
  
  
      for (var i = 0; i < 7; i++) {
        console.log(response);
  
        var p = $('<h5>').text('Title: ' + response.response.docs[i].headline.main);
        var img = $('<img height="200px" width="290px">');
        img.attr('src', 'https://static01.nyt.com/' + response.response.docs[i].multimedia[0].url);
        var c = $('<p class="des-item">').text(response.response.docs[i].snippet);
  
        var dBtn = $(`<a class="btn-link" target="_blank"><button> For more Go to link </button></a>`).text("For more Go to link");
        dBtn.attr("href", response.response.docs[i].web_url);
  
        var newsList = $('<div class="res-news">').append(p, img, c, dBtn);
        $('#searchNews').prepend(newsList);
      }
  
    })
  });
  //.....................................
  
  
  // events javascript from here
  
  $('#btn-submitE').on('click', function () {
    event.preventDefault();
    var e = $('#search_events').val();
    firebase.database().ref().push({
    userEvents: e
  }); 
  
  });
  
  $('#btn-submitE').on('click', function () {
      event.preventDefault();
      $("form").trigger("reset");
      var e = $('#search_events').val();
      var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?&keyword=" + e + "&apikey=BnIV3w1sOWnMwpB1TzcGSJK7FDnDvCF7&limit=3"

      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function (response) {
          console.log(response)
          for (var i = 0; i < 5; i++) {
              var t = $('<h2>').text( response._embedded.events[i].name);
              var img = $('<img height="200px" width="290px">');
              img.attr('src', response._embedded.events[i].images[i].url);
              var dBtn = $(`<a class="btn-link" target="_blank"><button> Buy a Ticket </button></a>`).text("Buy a Ticket");
              dBtn.attr("href", response._embedded.events[i].url);

              var evRes = $('<div class="res-event">').append(t, img, dBtn);
              $('#eventTitle').prepend(evRes);
          }
      })
  })

