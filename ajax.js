//   Ajax is Asynchronous JavaScript
//   http headers methods are: 
//      1)GET
//      2)POST
//      3)Delete
//      4) PUT
    


//fetch data from a file 
class getAjaxData{
    constructor(){
        this.getAjaxResponse();
    }

    getAjaxResponse(){
        $.ajax({
            url:"ajaxText.txt",
            type:"GET",
            dataType:"text",
            success:this.getData,
            error:this.errorFunction,
        })
    }

    getData(data,textStatus){
        // if(textStatus){
        //     document.getElementById("ajaxResponse").innerHTML = data;
        // }
        document.getElementById("ajaxResponse").innerHTML = data;
    }

    errorFunction(xhr, textStatus, err){
        document.getElementById("ajaxResponse").innerHTML = `There is an error ${xhr.status} | ${err}`;
    }
    

}
// let obj1 =  new  getAjaxData;


function getDataApi(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:"GET",
        dataType:"json",
        success:function(data){
            console.log(data)
            let parent = document.getElementById("ajaxApiData");
          for(let i = 0 ; i<data.length;i++){
              console.log(data[i].id);
            
           
          }
          
        },
        error:function(err){ 
            document.getElementById("ajaxApiData").innerHTML = err;
        }

    })
}
// getDataApi();

let name1 = "sumeet shinde";

function postData(){
    $.ajax({
        url:"http://127.0.0.1:5500/Post.txt",
        method:"POST",
        data: "abc",
        success:function(response){
            alert(response);
        },
        error:function(err){
            console.log(err);
        }

    })
}
postData();