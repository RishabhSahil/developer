document.getElementById('frmsearch').onsubmit = function() {
    query = document.getElementById('textSearch').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        return false
    }

    else{
        window.location = 'search.html?q=' + query
        return false;

    }

}

function wikipediasearch(){
    query = document.getElementById('textSearch').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://wikipedia.org'
        return false;
    }
    else{
        window.location = 'https://en.wikipedia.org/wiki/' + query
        return false;

    }


}    

function wikipediasearchq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://wikipedia.org'
        return false;
    }
    else{
        window.location = 'https://en.wikipedia.org/wiki/' + query
        return false;

    }
}    

function mapsearch(){
    query = document.getElementById('textSearch').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://www.google.com/maps'
        return false;
    }
    else{
        window.location = 'https://www.google.com/maps/place/' + query
        return false;

    }
} 

function youtubesearch(){
    query = document.getElementById('textSearch').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://www.youtube.com'
        return false;
    }
    else{
        window.location = 'https://www.youtube.com/results?search_query=' + query
        return false;

    }
} 

function songjio(){
    query = document.getElementById('textSearch').value;
    if(query==false){
            // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://gaana.com/'
        return false;
    }
    else{
        window.location = 'https://gaana.com/search/' + query
        return false;

    }
} 


function mapsearchq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://www.google.com/maps'
        return false;
    }
    else{
        window.location = 'https://www.google.com/maps/place/' + query
        return false;

    }
} 

function youtubesearchq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
        // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://www.youtube.com'
        return false;
    }
    else{
        window.location = 'https://www.youtube.com/results?search_query=' + query
        return false;

    }
} 

function songjioq(){
    query = document.getElementById('gsc-i-id1').value;
    if(query==false){
            // alert("Please Enter Your Query")
        console.log("please enter your query");
        window.location = 'https://gaana.com/'
        return false;
    }
    else{
        window.location = 'https://gaana.com/search/' + query
        return false;

    }
} 
