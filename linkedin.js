var elem1=document.querySelector("#forward1")
var container8=document.querySelector(".main-container8")

var elem2;
var pressed=false


elem1.addEventListener("mouseover",function  myFunction(){
  container8.innerHTML=
  `
    
  <div>
    <span id="backward1" class="material-symbols-outlined">
      arrow_back_ios
    </span>
  </div>

  <div class="Let-the-right">
    <p class="let">
      Conversations today could lead <br />to opportunity tomorrow
    </p>
    <br />
    <p class="with-the">
      Sending messages to people you know is <br />a great way to strengthen
      relationships as <br />
      you take the next step in your career.
    </p>
  </div>
  <div>
    <img class="img2" src="images/linkedinimg7.png" alt="" />
  </div>
  <div>
    <span id="forward2" class="material-symbols-outlined">
      arrow_forward_ios
    </span>
  </div>
 `
  pressed=true
  elem2=document.querySelector('#backward1');
  if(pressed){
    elem2.onmouseover=function f(){
      container8.innerHTML=`

      <div class="Let-the-right">
      <p class="let">Let the right people know <br />you’re open to work</p>
      <br />
      <p class="with-the">
        With the Open To Work feature, you can <br />
        privately tell recruiters or publicly share <br />with the LinkedIn
        community that you are <br />
        looking for new job opportunities.
      </p>
    </div>
    <div>
      <img class="img2" src="images/linkedinimg2.png" alt="" />
    </div>

    <div>
      <span id="forward1" class="material-symbols-outlined">
        arrow_forward_ios
      </span>
    </div>
  `
  
    }  
    pressed=false;
  }

})