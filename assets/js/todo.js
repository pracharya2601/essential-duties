// js for todo app
    
var Config = {
    apiKey: "AIzaSyCzl7gPXLH1y22Jot8jlEdKo2uqBHJJUl0",
    authDomain: "first-project-07-30-019.firebaseapp.com",
    databaseURL: "https://first-project-07-30-019.firebaseio.com",
    projectId: "first-project-07-30-019",
    storageBucket: "",
    messagingSenderId: "607289516969",
    appId: "1:607289516969:web:01d0ce68b546b5af"
  };
  firebase.initializeApp(Config)
  const db = firebase.database()

$('#btn-submit').on('click', function(){


    const search_news = $('#todo-list').val();
    // todo_month = $('#todo-month').val().trim();
    // todo_day = $('#todo-day').val().trim();
    // todo_year =$('#todo-year').val().trim();
    const todo_address = $('#todo-address').val();

db.ref().push({
    todoList : 'todo-list',
    // todoMonth: 'todo-address',
    // todoDay : 'todo-day',
    // todoYear: 'todo-year',
    todoAddress : 'todo-address'

});

db.ref().on("child_added", function(snapshot) {
    
    data = snapshot.val()
    caonsole.log(data)
    $('#todo-container').append(`<p>${data.todoList}</p>`+`<p>${data.todoAddress}</p>`)
    
    
    
    // $('#todo-container').empty();


    // var data = snapshot.val();
    // for (var key in data){
    //     var value = data[key];
    //     var p = $('<p>').text(key + " : " + value.todoList + ":" + value.todoMonth + ":" + value.todoDay + ":" +value.todoYear + ":" + value.todoaddress)
    //     $('<div>').append(p);
    //     $('#todo-container').append(your-todo-list);
    // }

    
});

});
// +`<p>${data.todoMonth}</p>`+`<p>${data.todoDay}</p>`+`<p>${data.todoYear}</p>`