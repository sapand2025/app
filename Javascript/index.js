

  function clickSideBar(){
    let nav=document.getElementById("navbar");
    if(nav.style.visibility=="visible"){
    nav.style.visibility="hidden";
 
    }else {
      nav.style.visibility="visible";
      nav.style.display="flex";
    }
  }

    function handleSubmit(event) {
    event.preventDefault();
    event.target.blur();
  }