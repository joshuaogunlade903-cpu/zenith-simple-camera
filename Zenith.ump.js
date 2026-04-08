const Zenith=(function (){
const Empty=()=>{}
const APP = {
  sections: {},
  extensions: {
    styler: [
      ["css-body",
        `/* Stale */
        *{
        margin: 0;
        padding: 0;
        }
        .row{
        display: flex;
        justify-content: space-evenly;
        padding: 1rem;
        max-width: 100%;
        }
        active:act-bcolor-white{
          background-color:white;
        }
        active:act-bcolor-black{
          background-color:black;
        }
        active:act-bcolor-red{
          background-color:red;
        }
        active:act-bcolor-green{
          background-color:green;
        }
        active:act-bcolor-blue{
          background-color:blue;
        }
        active:act-color-blue{
          color:blue;
        }
        active:act-color-white{
          color:blue;
        }
        active:act-color-red{
          color:red;
        }
        active:act-color-green{
          color:green;
        }
        active:act-color-black{
          color:black;
        }
        .row-out{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        max-width: 100%;
        }
        .row-col{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        max-width: 100%;
        }
        .col{
        padding: 1rem;
        }
        .width-1{
        width: 5rem;
        }
        .width-2{
        width: 10rem;
        }
        .width-3{
        width: 15rem;
        }
        .width-4{
        width: 20rem;
        }
        .width-5{
        width: 25rem;
        }
        .width-6{
        width: 30rem;
        }
        .width-7{
        width: 35rem;
        }
        .width-8{
        width: 40rem;
        }
        .width-9{
        width: 45rem;
        }
        .width-10{
        width: 50rem;
        }
        .height-1{
        height: 5rem;
        }
        .height-2{
        height: 10rem;
        }
        .height-3{
        height: 15rem;
        }
        .height-4{
        height: 20rem;
        }
        .height-5{
        height: 25rem;
        }
        .height-6{
        height: 30rem;
        }
        .height-7{
        height: 35rem;
        }
        .height-8{
        height: 40rem;
        }
        .height-9{
        height: 45rem;
        }
        .height-10{
        height: 50rem;
        }
        .box-1{
        width: 5rem;
        height: 5rem;
        }
        .box-2{
        width: 10rem;
        height: 10rem;
        }
        .box-3{
        width: 15rem;
        height: 15rem;
        }
        .box-4{
        width: 20rem;
        height: 20rem;
        }
        .box-5{
        width: 25rem;
        height: 25rem;
        }
        .nav{
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        }
        .card{
        display: flex;
        flex-direction: column;
        width: 150px;
        height: 150px;
        font-family: Arial, Helvetica, sans-serif;
        border: 1px solid black;
        overflow: hidden;
        padding: 0px;
        }
        .card img{
        width: 170px;
        height: 100px;
        transition: width 1s ease linear;
        transition: height 1s ease linear;
        }
        .card .img{
        width: 170px;
        height: 100px;
        overflow: hidden;
        transition: width 1s ease linear;
        transition: height 1s ease linear;
        }
        .overlay{
        background:linear-gradient(to bottom,black,rgb(0,0,0,50%));
        }
        .card img:hover{
        width: 190px;
        position: relative;
        top: -10px;
        left: -10px;
        height: 120px;
        }
        .card h1,.card h2,.card h3,.card h4,.card h5,.card h6,.card p{
        padding: 10px;
        width: 130px;
        background-color: black;
        color: white;
        height: 30px;
        top: 100px;
        text-align: center;
        }
        .nav-logo{
        cursor: pointer;
        text-align: start;
        display: flex;
        }
        .nav-links{
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        }
        .nav-end{
        cursor: pointer;
        width: 10vw;
        padding: 5px 20px;
        cursor: pointer;
        text-align: end;
        }
        .btn{
        min-width: 60px;
        min-height: 30px;
        padding: 10px 20px;
        border: 1px solid black;
        border-radius: 3px;
        cursor: pointer;
        text-align: center;
        }
        .btn:hover{
        box-shadow: 0 0 2px black;
        }
        .btn:active{
        box-shadow: 2px 2px 4px black;
        }
        .search{
        border: none;
        outline: none;
        }
        .search-padding{
        padding-left: 10px;
        }
        .search-head{
        visibility: inherit;
        }
        .search-item{
        display: block;
        }
        .fade-in {
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }

        .fade-in.show {
        opacity: 1;
        transform: translateY(0);
        }
        .fade-in-bottom-1 {
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }

        .fade-in-bottom-1.show {
        opacity: 1;
        transform: translateY(0);
        }
        .fade-in-bottom-2 {
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 2s ease-out, transform 2s ease-out;
        }

        .fade-in-bottom-2.show {
        opacity: 1;
        transform: translateY(0);
        }
        .fade-in-bottom-3 {
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 3s ease-out, transform 3s ease-out;
        }

        .fade-in-bottom-3.show {
        opacity: 1;
        transform: translateY(0);
        }
        .fade-in-top-1.show{
        opacity: 0;
        transform: translateY(100px);
        }
        .fade-in-top-2.show{
        opacity: 0;
        transform: translateY(100px);
        }
        .fade-in-top-3.show{
        opacity: 0;
        transform: translateY(100px);
        }
        .fade-in-top-1 {
        opacity: 0;
        transform: translateY(-100px);
        transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }

        .fade-in-top-1.show {
        opacity: 1;
        transform: translateY(0);
        }
        .fade-in-top-2 {
        opacity: 0;
        transform: translateY(-100px);
        transition: opacity 2s ease-out, transform 2s ease-out;
        }

        .fade-in-top-2.show {
        opacity: 1;
        transform: translateY(0);
        }
        .fade-in-top-3 {
        opacity: 0;
        transform: translateY(-100px);
        transition: opacity 3s ease-out, transform 3s ease-out;
        }

        .fade-in-top-3.show {
        opacity: 1;
        transform: translateY(0);
        }
        .fade-in-left-1 {
        opacity: 0;
        transform: translateX(-100px);
        transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }

        .fade-in-left-1.show {
        opacity: 1;
        transform: translateX(0);
        }
        .fade-in-left-2 {
        opacity: 0;
        transform: translateX(-100px);
        transition: opacity 2s ease-out, transform 2s ease-out;
        }

        .fade-in-left-2.show {
        opacity: 1;
        transform: translateX(0);
        }
        .fade-in-left-3 {
        opacity: 0;
        transform: translateX(-100px);
        transition: opacity 3s ease-out, transform 3s ease-out;
        }

        .fade-in-left-3.show {
        opacity: 1;
        transform: translateX(0);
        }
        .fade-in-right-1 {
        opacity: 0;
        transform: translateX(100px);
        transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }

        .fade-in-right-1.show {
        opacity: 1;
        transform: translateX(0);
        }
        .fade-in-right-2 {
        opacity: 0;
        transform: translateX(100px);
        transition: opacity 2s ease-out, transform 2s ease-out;
        }

        .fade-in-right-2.show {
        opacity: 1;
        transform: translateX(0);
        }
        .fade-in-right-3 {
        opacity: 0;
        transform: translateX(100px);
        transition: opacity 3s ease-out, transform 3s ease-out;
        }

        .fade-in-right-3.show {
        opacity: 1;
        transform: translateX(0);
        }
        .base{
        max-width: 100%;
        }
        .tra{
        transition: background-color 0.2s ease, color 0.2s ease, text-decoration 0.2s ease, box-shadow 0.2s ease;
        }
        .tra-easein-1{
        transition: background-color 0.5s ease-in, color 0.5s ease-in, text-decoration 0.5s ease-in, box-shadow 0.5s ease-in;
        }
        .tra-easein-2{
        transition: background-color 1s ease-in, color 1s ease-in, text-decoration 1s ease-in, box-shadow 1s ease-in;
        }
        .tra-easein-3{
        transition: background-color 1.5s ease-in, color 1.5s ease-in, text-decoration 1.5s ease-in, box-shadow 1.5s ease-in;
        }
        .tra-easeout-1{
        transition: background-color 0.5s ease-out, color 0.5s ease-out, text-decoration 0.5s ease-out, box-shadow 0.5s ease-out;
        }
        .tra-easeout-2{
        transition: background-color 1s ease-out, color 1s ease-out, text-decoration 1s ease-out, box-shadow 1s ease-out;
        }
        .tra-easeout-3{
        transition: background-color 1.5s ease-out, color 1.5s ease-out, text-decoration 1.5s ease-out, box-shadow 1.5s ease-out;
        }


        /* Basic */


        .dis-flex{
        display: flex;
        }
        .dis-block{
        display: block;
        }
        .dis-content{
        display: contents;
        }
        .dis-inline{
        display: inline;
        }
        .dis-grid{
        display: grid;
        }
        .link{
        cursor: pointer;
        font-weight: bold;
        transition: text-decoration 2s ease-in;
        }
        .link:hover{
        text-decoration: underline;
        }
        .text-align-center{
        text-align: center;
        }
        .text-align-start{
        text-align: start;
        }
        .text-align-end{
        text-align: end;
        }
        .text-decoration-dashed{
        text-decoration: dashed;
        }
        .text-decoration-dotted{
        text-decoration: dotted;
        }
        .text-decoration-double{
        text-decoration: double;
        }
        .text-decoration-through{
        text-decoration: line-through;
        }
        .text-decoration-underline{
        text-decoration: underline;
        }
        .text-size-1{
        font-size: smaller;
        }
        .text-size-2{
        font-size: small;
        }
        .text-size-3{
        font-size: medium;
        }
        .text-size-4{
        font-size: large;
        }
        .text-size-5{
        font-size: x-large;
        }
        .text-size-6{
        font-size: xx-large;
        }
        .text-size-7{
        font-size: 40px;
        }
        .text-size-8{
        font-size: 50px;
        }
        .text-size-9{
        font-size: 60px;
        }
        .text-size-10{
        font-size: 70px;
        }
        .text-size-11{
        font-size: 80px;
        }
        .text-size-12{
        font-size: 90px;
        }
        .hov-color-black:hover{
        color: black;
        }
        .hov-color-white:hover{
        color: white;
        }
        .hov-color-green:hover{
        color: rgb(12, 172, 12);
        }
        .hov-color-blue:hover{
        color: rgb(5, 5, 53);
        }
        .hov-color-red:hover{
        color: red;
        }
        .hov-color-gray:hover{
        color: rgb(196, 196, 196);
        }
        .hov-color-brown:hover{
        color: rgb(39, 5, 5);
        }
        .hov-bcolor-black:hover{
        background-color: black;
        }
        .hov-bcolor-white:hover{
        background-color: white;
        }
        .hov-bcolor-green:hover{
        background-color: rgb(12, 172, 12);
        }
        .hov-bcolor-blue:hover{
        background-color: rgb(5, 5, 53);
        }
        .hov-bcolor-red:hover{
        background-color: red;
        }
        .hov-bcolor-gray:hover{
        background-color: rgb(196, 196, 196);
        }
        .hov-bcolor-brown:hover{
        background-color: rgb(39, 5, 5);
        }
        .hov-border-black:hover{
        border-color: black;
        }
        .hov-border-white:hover{
        border-color: white;
        }
        .hov-border-green:hover{
        border-color: rgb(12, 172, 12);
        }
        .hov-border-blue:hover{
        border-color: rgb(5, 5, 53);
        }
        .hov-border-red:hover{
        border-color: red;
        }
        .hov-border-gray:hover{
        border-color: rgb(196, 196, 196);
        }
        .hov-border-brown:hover{
        border-color: rgb(39, 5, 5);
        }
        .box-shadow-1{
        box-shadow: 0 0 1rem;
        }
        .box-shadow-2{
        box-shadow: 0 0 2rem;
        }
        .box-shadow-3{
        box-shadow: 0 0 3rem;
        }
        .box-shadow-4{
        box-shadow: 0 0 4rem;
        }
        .box-shadow-5{
        box-shadow: 0 0 5rem;
        }
        .hov-box-shadow-1:hover{
        box-shadow: 0 0 1rem;
        }
        .hov-box-shadow-2:hover{
        box-shadow: 0 0 2rem;
        }
        .hov-box-shadow-3:hover{
        box-shadow: 0 0 3rem;
        }
        .hov-box-shadow-4:hover{
        box-shadow: 0 0 4rem;
        }
        .hov-box-shadow-5:hover{
        box-shadow: 0 0 5rem;
        }
        .hov-text-decoration-underline:hover{
        text-decoration: underline;
        }
        .hov-text-decoration-dashed:hover{
        text-decoration: dashed;
        }
        .hov-text-decoration-dotted:hover{
        text-decoration: dotted;
        }
        .hov-text-decoration-through:hover{
        text-decoration: line-through;
        }
        .cur-pointer{
        cursor: pointer;
        }
        .cur-help{
        cursor: help;
        }
        .cur-crosshair{
        cursor: crosshair;
        }
        .cur-move{
        cursor: move;
        }
        .cur-menu{
        cursor: context-menu;
        }
        .m-height-1{
        height: 10px;
        }
        .m-height-2{
        height: 20px;
        }
        .m-height-3{
        height: 30px;
        }
        .m-height-4{
        height: 40px;
        }
        .m-height-5{
        height: 50px;
        }
        .m-height-6{
        height: 60px;
        }
        .m-height-7{
        height: 70px;
        }
        .m-width-1{
        width: 10px;
        }
        .m-width-2{
        width: 20px;
        }
        .m-width-3{
        width: 30px;
        }
        .m-width-4{
        width: 40px;
        }
        .m-width-5{
        width: 50px;
        }
        .m-width-6{
        width: 60px;
        }
        .m-width-7{
        width: 70px;
        }
        .min-width-1{
        min-width: 1rem;
        }
        .min-width-2{
        min-width: 2rem;
        }
        .min-width-3{
        min-width: 3rem;
        }
        .min-width-4{
        min-width: 4rem;
        }
        .min-width-5{
        min-width: 5rem;
        }
        .max-width-1{
        max-width: 1rem;
        }
        .max-width-2{
        max-width: 2rem;
        }
        .max-width-3{
        max-width: 3rem;
        }
        .max-width-4{
        max-width: 4rem;
        }
        .max-width-5{
        max-width: 5rem;
        }
        .float-left{
        float: left;
        }
        .float-right{
        float: right;
        }
        .float-inline-start{
        float: inline-start;
        }
        .float-inline-end{
        float: inline-end;
        }
        .color-black{
        color: black;
        }
        .color-white{
        color: white;
        }
        .color-red{
        color: rgb(235, 31, 31);
        }
        .color-brown{
        color: rgb(53, 11, 11);
        }
        .color-yellow{
        color: rgb(248, 248, 123);
        }
        .color-green{
        color: #06f806;
        }
        .color-blue{
        color: rgb(5, 5, 53);
        }
        .color-gray{
        color: rgb(196, 196, 196);
        }
        .color-special{
        color: rgb(54, 4, 4);
        }
        .color-none{
        color:transparent;
        }
        .bcolor-special{
        background-color: rgb(54, 4, 4);
        }
        .bcolor-gray{
        background-color: rgb(196, 196, 196);
        }
        .bcolor-black{
        background-color: black;
        }
        .bcolor-white{
        background-color: white;
        }
        .bcolor-red{
        background-color: red;
        }
        .bcolor-brown{
        background-color: rgb(39, 5, 5);
        }
        .bcolor-yellow{
        background-color: rgb(88, 88, 6);
        }
        .bcolor-green{
        background-color: rgb(1, 54, 1);
        }
        .bcolor-blue{
        background-color: rgb(5, 5, 53);
        }
        .bcolor-none{
        background-color: transparent;
        }

        .pos-relative{
        position: relative;
        }
        .pos-absolute{
        position: absolute;
        }
        .pos-fixed{
        position: fixed;
        }
        .pos-static{
        position: static;
        }
        .pos-sticky{
        position: sticky;
        }
        .pos-default{
        position: initial;
        }
        .pos-left-1{
        left: 1rem;
        }
        .pos-left-2{
        left: 2rem;
        }
        .pos-left-3{
        left: 3rem;
        }
        .pos-left-4{
        left: 4rem;
        }
        .pos-left-5{
        left: 5rem;
        }
        .pos-right-1{
        right: 1rem;
        }
        .pos-right-2{
        right: 2rem;
        }
        .pos-right-3{
        right: 3rem;
        }
        .pos-right-4{
        right: 4rem;
        }
        .pos-right-5{
        right: 5em;
        }
        .pos-top-1{
        top: 1rem;
        }
        .pos-top-2{
        top: 2rem;
        }
        .pos-top-3{
        top: 3rem;
        }
        .pos-top-4{
        top: 4rem;
        }
        .pos-top-5{
        top: 5em;
        }
        .pos-bottom-1{
        bottom: 1rem;
        }
        .pos-bottom-2{
        bottom: 2rem;
        }
        .pos-bottom-3{
        bottom: 3rem;
        }
        .pos-bottom-4{
        bottom: 4rem;
        }
        .pos-bottom-5{
        bottom: 5rem;
        }
        .pad-0{
        padding: 0rem;
        }
        .pad-1{
        padding: 1rem;
        }
        .pad-2{
        padding: 2rem;
        }
        .pad-3{
        padding: 3rem;
        }
        .pad-4{
        padding: 4rem;
        }
        .pad-5{
        padding: 5rem;
        }
        .pab-1{
        padding-bottom: 1rem;
        }
        .pab-2{
        padding-bottom: 2rem;
        }
        .pab-3{
        padding-bottom: 3rem;
        }
        .pab-4{
        padding-bottom: 4rem;
        }
        .pab-5{
        padding-bottom: 5rem;
        }
        .pat-1{
        padding-top: 1rem;
        }
        .pat-2{
        padding-top: 2rem;
        }
        .pat-3{
        padding-top: 3rem;
        }
        .pat-4{
        padding-top: 4rem;
        }
        .pat-5{
        padding-top: 5rem;
        }
        .pal-1{
        padding-left: 1rem;
        }
        .pal-2{
        padding-left: 2rem;
        }
        .pal-3{
        padding-left: 3rem;
        }
        .pal-4{
        padding-left: 4rem;
        }
        .pal-5{
        padding-left: 5rem;
        }
        .par-1{
        padding-right: 1rem;
        }
        .par-2{
        padding-right: 2rem;
        }
        .par-3{
        padding-right: 3rem;
        }
        .par-4{
        padding-right: 4rem;
        }
        .par-5{
        padding-right: 5rem;
        }
        .mar-0{
        margin: 0rem;
        }
        .mar-1{
        margin: 1rem;
        }
        .mar-1{
        margin: 1rem;
        }
        .mar-2{
        margin: 2rem;
        }
        .mar-3{
        margin: 3rem;
        }
        .mar-4{
        margin: 4rem;
        }
        .mar-5{
        margin: 5rem;
        }
        .mab-1{
        margin-bottom: 1rem;
        }
        .mab-2{
        margin-bottom: 2rem;
        }
        .mab-3{
        margin-bottom: 3rem;
        }
        .mab-4{
        margin-bottom: 4rem;
        }
        .mab-5{
        margin-bottom: 5rem;
        }
        .mat-1{
        margin-top: 1rem;
        }
        .mat-2{
        margin-top: 2rem;
        }
        .mat-3{
        margin-top: 3rem;
        }
        .mat-4{
        margin-top: 4rem;
        }
        .mat-5{
        margin-top: 5rem;
        }
        .mari-1{
        margin-right: 1rem;
        }
        .mari-2{
        margin-right: 2rem;
        }
        .mari-3{
        margin-right: 3rem;
        }
        .mari-4{
        margin-right: 4rem;
        }
        .mari-5{
        margin-right: 5rem;
        }
        .mal-1{
        margin-left: 1rem;
        }
        .mal-2{
        margin-left: 2rem;
        }
        .mal-3{
        margin-left: 3rem;
        }
        .mal-4{
        margin-left: 4rem;
        }
        .mal-5{
        margin-left: 5rem;
        }
        .bor-color-black{
        border: 1px solid black;
        }
        .bor-color-gray{
        border: 1px solid rgb(196, 196, 196);
        }
        .bor-color-brown{
        border: 1px solid rgb(39, 5, 5);
        }
        .bor-color-green{
        border: 1px solid #06f806;
        }
        .bor-color-white{
        border: 1px solid white;
        }
        .bor-color-blue{
        border: 1px solid rgb(5, 5, 53);
        }
        .bor-color-red{
        border: 1px solid red;
        }
        .bor-rad-1{
        border-radius: 0.5rem;
        }
        .bor-rad-2{
        border-radius: 1rem;
        }
        .bor-rad-3{
        border-radius: 1.5rem;
        }
        .bor-rad-4{
        border-radius: 4rem;
        }
        .bor-rad-5{
        border-radius: 5rem;
        }
        .bor-rad-half{
        border-radius: 50%;
        }
        .container{
        max-width: 100%;
        }`],
      ["script-body",
        `const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
        }
        });
        });
        document.querySelectorAll('.fade-in, .fade-in-bottom-1, .fade-in-bottom-2, .fade-in-bottom-3, .fade-in-top-1, .fade-in-top-2, .fade-in-top-3, .fade-in-left-1, .fade-in-left-2, .fade-in-left-3, .fade-in-right-1, .fade-in-right-2, .fade-in-right-3').forEach(el => observer.observe(el));
        NAMEVSCOLOR__INROOOT={}
        class color extends HTMLElement{
        static get observedAttributes(){return ['name','color']}
        constructor(){
        super();
        this.color='#FFFFFF';
        this.name='other';
        }
        attributeChangedCallback(v,o,n){
        if(v=='color'){
        this.color=n
        NAMEVSCOLOR__INROOOT[this.name]=this.color
        }
        if(v=='name'){
        this.name=n
        }
        }
        }
        customElements.define('new-color',color)
        Object.keys(NAMEVSCOLOR__INROOOT).forEach(v=>{
        let p=document.getElementsByClassName('color-'+v)
        for(i=0;i<p.length;i++){
        p[i].style.color=NAMEVSCOLOR__INROOOT[v];
        }
        p=document.getElementsByClassName('hov-color-'+v)
        p=document.getElementsByClassName('bcolor-'+v)
        for(i=0;i<p.length;i++){
        p[i].style.backgroundColor=NAMEVSCOLOR__INROOOT[v];
        }
        p=document.getElementsByClassName('bor-color-'+v)
        for(i=0;i<p.length;i++){
        p[i].style.border='1px solid '+NAMEVSCOLOR__INROOOT[v];
        }
        })
        try{
        let dp=document.querySelector('.search-head');
        dp.addEventListener('input',(e)=>{
        const value=dp.value;
        pv=document.querySelectorAll('.search-item');
        if (value==''){
        for(i=0;i<pv.length;i++){
        pv[i].style.display='block';
        }
        }
        if (value!=''){
        for(i=0;i<pv.length;i++){
        if(pv[i].ariaLabel.toLowerCase().includes(value.toLowerCase())){
        pv[i].style.display='block';
        }else{
        if(pv[i].style.display!='none'){pv[i].style.display='none'}
        }
        }
        }
        })
        }catch(e){};`]
    ]
  },
  loadExtension: function (name) {
    if (APP.extensions[name]) {
      APP.extensions[name].forEach(e => {
        const [type, content] = e;

        if (type === "css-url") {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = content;
          document.head.appendChild(link);
        } else if (type === "css-body") {
          const style = document.createElement("style");
          style.textContent = content;
          document.head.appendChild(style);
        } else if (type === "script-url") {
          const script = document.createElement("script");
          script.src = content;
          script.async = false;
          document.body.appendChild(script);
        } else if (type === "script-body") {
          const script = document.createElement("script");
          script.textContent = content;
          document.body.appendChild(script);
        } else if (type === "html") {
          const div = document.createElement("div");
          div.innerHTML = content;
          document.body.appendChild(div);
        }
      });
    } else {
      console.warn(`Extension "${name}" not found.`);
    }
  },

  addExtension: function (name, data) {
    APP.extensions[name] = data;
  },
  showSection: function (id) {
    Object.values(APP.sections).forEach(s => {
      s.style.display = "none"
    })
    APP.sections[id].style.display = "block"
  },
  currentSection: function () {
    var y = null
    Object.values(APP.sections).forEach(s => {
      if (s.style.display == "block") {
        y = s
      }
    })
    return y
  },
  vibrate: function (l) {
    if ('vibrate' in navigator) {
      navigator.vibrate(l)
      return true
    } else {
      console.warn("vibrate not allowed on this device")
      return false
    }
  },
  information: function (what) {
    if (what === "all") {
      return navigator.userAgent
    }
  },
  updateTextContent: function (id, text) {
    if (!document.getElementById(id).textContent == text) {
      this.document.getElementById(id).textContent = text
    }
  },
  updateSrc: function (id, src) {
    if (!document.getElementById(id).src == src) {
      this.document.getElementById(id).src = src
    }
  },
  updateInnerHTML: function (id, html) {
    if (!document.getElementById(id).innerHTML == html) {
      this.document.getElementById(id).innerHTML = html
    }
  },
  updateValue: function (id, value) {
    if (!document.getElementById(id).value == value) {
      this.document.getElementById(id).value = value
    }
  },
  id(id){
    return document.getElementById(id)
  },
  access: function (w, func, err = null) {
    if (w === "camera") {
      navigator.mediaDevices.getUserMedia({
        video: 'front', audio: true
      })
      .then(e => {
        func(e)
      })
      .catch(e => err(e))
    }
    if(typeof w === 'object'){
      navigator.mediaDevices.getUserMedia(w)
      .then(e => {
        func(e)
      })
      .catch(e => err(e))
    }
    if (w === "audio") {
      navigator.mediaDevices.getUserMedia({
        audio: true
      })
      .then(e => func(e))
      .catch(e => err(e))
    }
    if (w === "battery") {
      navigator.getBattery()
      .then(e => func(e))
      .catch(e => err(e))
    }
    if (w === "memory") {
      if (navigator.deviceMemory) {
        func(navigator.deviceMemory)
      } else {err(false)}
    }
    if (w === "cores") {
      if (navigator.hardwareConcurrency) {
        func(navigator.hardwareConcurrency)
      } else {err(false)}
    }
    if (w === "time") {
      func(new Date().toLocaleTimeString())
    }
    if (w === "date") {
      func(new Date().toISOString().split("T")[0])
    }
    if(w==="all-devices"){
      return navigator.mediaDevices.enumerateDevices
    }
  },
  memory(){return navigator.deviceMemory},
  cores(){return navigator.hardwareConcurency},
  time(){
    return new Date().toLocaleTimeString()
  },
  date(){
    return new Date().toISOString().split("T")[0]
  },
  _loads: [],
  loadLater: (id = "", setr = "()", val, time)=> {
    APP._loads.push({
      id, setr, val, time
    })
  },
  setup(){
    sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.style.display = "none"
      APP.sections[section.id] = section
    });},
  deltaTime: 0,
  reload(){
    window.location.reload()
  },
  permission(t="notification",suc=Empty,err=Empty){
    if(!("Notification" in window)){
      return err("not-in-window")
    }
    if(t==="notification"){
        Notification.requestPermission()
        .then(permission=>{
          if(permission=="granted"){
            suc(permission)
          }
        })
        .catch(error=>{
          err(error)
        })
    }else{console.log("comming soon")}
  },
  update: function () {
    APP._loads.forEach(e => {
      if (APP.deltaTime === e.time) {
        if (e.setr == "textContent") {
          document.getElementById(e.id).textContent = e.val
        } else if (e.setr == "value") {
          document.getElementById(e.id).value = e.val
        } else if (e.setr == "placeholder") {
          document.getElementById(e.id).placeholder = e.val
        } else if (e.setr == "src") {
          document.getElementById(e.id).src = e.val
        } else if (e.setr == "srcObject") {
          document.getElementById(e.id).srcObject = e.val
        } else if (e.setr == "()") {
          e.val(id, APP.deltaTime)
        } else {
          console.error("invalid Argument")
        }
      }
    })
    APP.deltaTime += 1
    requestAnimationFrame(APP.update)
  }
};
APP.update()
class lRRR extends HTMLElement {
  static get observedAttributes() {
    return ['_id', 'set', 'value', 'timeout']

  }
  constructor() {
    super();
    this._id = ""
    this.setr = "textContent"
    this.value = ""
  }
  attributeChangedCallback(v,
    o,
    n) {
    if (v == '_id') {
      this._id = n
    }
    if (v == 'set') {
      this.setr = n
    }
    if (v == "value") {
      this.value = n
    }
    if (v == 'timeout') {
      APP.loadLater(this._id, this.setr, this.value, Number(n))
    }
  }
}
customElements.define("set-timeout", lRRR)
const Emitter = {
  _: {},

  add(name) {
    if (!Emitter._[name]) {
      Emitter._[name] = [];
    }
  },

  on(name, listener) {
    if (Emitter._[name]) {
      Emitter._[name].push(listener);
    } else {
      console.warn(`Event "${name}" is not registered. Please call add("${name}") first.`);
    }
  },

  remove(name) {
    delete Emitter._[name];
  },

  off(name, listener) {
    if (Emitter._[name]) {
      Emitter._[name] = Emitter._[name].filter(l => l !== listener);
    } else {
      console.warn(`Event "${name}" is not registered. Cannot remove listener.`);
    }
  },

  emit(name, args) {
    if (Emitter._[name]) {
      Emitter._[name].forEach(e => {
        e(...args);
      });
    } else {
      console.warn(`Event "${name}" is not registered. Cannot call listeners.`);
    }
  }
};
class Thread {
  constructor(text = "") {
    this.content = text
    this.worker = null
    this.config = {
      JSON: true
    }
  }
  loadFromScript(id) {
    this.content = document.getElementById(id).textContent
  }
  loadFromText(text) {
    this.content = text
  }
  run() {
    let ob = URL.createObjectURL(new Blob([this.content], {
      type: "application/javascript"
    }))
    this.worker = new Worker(ob)
    this.worker.onmessage = e => {
      this.onMessage(e);
      URL.revokeObjectURL(ob);
    }
    this.worker.onerror = e => {
      this.onError(e);
      URL.revokeObjectURL(ob);
    }
    ob = null
  }
  send(msg, js = false) {
    if (js) {
      if (this.worker) {
        this.worker.postMessage(JSON.stringify(msg))
      }
    } else {
      if (this.worker) {
        this.worker.postMessage(msg)
      }
    }
  }
  onError() {}
  terminate() {
    this.worker.terminate()
    this.worker = null
  }
  onMessage(e) {}
}
const Threads = {
  _: {},
  create(name) {
    Threads._[name] = new Thread()
    return Threads._[name]
  },
  fetch(name) {
    return Threads._[name]
  },
  isOk() {
    return Object.value(Threads._).length < navigator.hardwareConcurency
  },
  remove(name) {
    Threads._[name].terminate()
    delete Threads._[name]
  },
  modules(){
    return ['threadhelp -> [$parse,$string,$post,$out]','reader -> $read','processes -> SubProcess','stream -> Stream','clock -> Clock']
  },
  script(s) {
    return s.replace("<e>", "self.onmessage = function(e) {").replace("</e>", "};").replace("import threadhelp", "const $parse=(tag)=>JSON.parse(tag),$string=(tag)=>JSON.stringify(tag),$post=(tag)=>self.postMessage(tag),$out=(s)=>$post($string(s));").replace('import reader',`
    function $read(type='text',blob=null,call=()=>{},err=()=>{}) {
    if(blob){
      let reader=new FileReader(blob)
      reader.onload=(e)=>{
        call(e.target.result)
      }
      reader.onerror=(e)=>{
        err(e)
      }
      if(type==='text')reader.readAsText(blob)
      else if(type==='url')reader.readAsDataURL(blob)
      else reader.readAsArrayBuffer(blob)
    }
  }
    `).replace('import processes',`
    class SubProcess{
  constructor(args=[],beg=null,loop=null,die=false){
    this.beg=beg
    this.loop=loop
    this.args=args
    this.data={}
    this.id=26
    this.die=die
    this.count=0
    this.state='idle'
  }
  updateCount(){
    this.count+=1
    if(this.die&&this.count>this.die){
      this.terminate()
    }
  }
  onStart(){}
  run(delay=2){
    this.beg(...this.args)
    this.onStart(...this.args)
    this.update()
    this.delay=delay
    this.state='working'
    Clock.register_loop(()=>this.update())
  }
  update(){
    this.updateCount()
    if (this.count%this.delay==0){
      try{
        this.loop(...this.args)
      }catch{}
    }
  }
  pause(){
    this.state='paused'
    Clock.remove_loop(()=>this.update())
  }
  terminate(){
    this.state='terminated'
    Clock.remove_loop(()=>this.update())
    this.beg=null
    this.loop=null
    this.args=null
  }
  config(a=[],b=null,l=null){
    this.beg=b
    this.loop=l
    this.args=a
    this.state='idle'
  }
}
    `).replace('import stream',`
    class Stream{
  constructor(o={binary:false,data:[]}){
    this.data=o.data||[]
    this.b=o.binary??false
    this.il=0
  }
  onPush(){}
  onConfirm(c){return true}
  chunk(i){
    return this.data[i]
  }
  push(chunk){
    if(this.onConfirm(chunk,this.il)){
      this.onPush(chunk,this.il)
      this.data[this.il]=chunk
      this.il+=1
      return true
    }
    return false
  }
  toIndex(chunk,i){
    if(this.onConfirm(chunk,i)){
      this.onPush(chunk,i)
      this.data[i]=chunk
      this.il+=1
      return true
    }
    return false
  }
  forEach(func){
    for(let i=0;i<this.data.length;i++){
      func(this.data[i],i)
    }
  }
  concat(del=" , "){
    return this.data.join(del)
  }
  splice(ind,binary=false){
    let s1=new Stream({binary})
    let s2=new Stream({binary})
    for(let v=0;v<ind;v++){
      s1.push(this.data[v])
    }
    for(let i=ind;i<this.data.length;i++){
      s2.push(this.data[i])
    }
    return [s1,s2]
  }
  async * [Symbol.asyncIterator]() {
  for (let i = 0; i < this.il; i++) {
    // Simulate async delay if needed, or just yield immediately
    yield this.data[i];
  }
}
}
    `).replace('import clock',`
    const Clock = {
  _: [],
  register_once(call, t = 1) {
    const b = setInterval((dt)=> {
      call(dt)
      clearInterval(b)
    }, t)
  },
  register_interval(call, t = 1) {
    const b = setInterval((dt)=> {
      call(dt)
    }, t)
    return b
  },
  remove_interval(id) {
    clearInterval(id)
  },
  register_loop(call) {
    Clock._.push(call)
  },
  remove_loop(call) {
    Clock._.forEach((e, i)=> {
      if (e == call) {
        Clock._.splice(i, 1)
      }
    })
  }
}
Clock.update = (dt)=> {
  Clock._.forEach(e => {
    e(dt)
  })
  requestAnimationFrame(Clock.update)
}
    `)
  }
}
class Writer{
  constructor(o={key:"default1234",config:"local"}){
    this.key=o.key||"default1234"
    this.type=o.config||"local"
    this.LOCALSTORAGE="local"
    this.SESSIONSTORAGE="session"
    this.INDEXDB="index"
    this._={}
    this._.delete=(k)=>{
      delete this._[k]
    }
    this._.add=(k,v)=>{
      this._[k]=v
    }
  }
  onEdit(){}
  onRead(){}
  config(t){
    this.type=t
  }
  get pen(){
    this.onRead(this._)
    return this._
  }
  set pen(i){
    this.onEdit(this._,i)
    this._=i
  }
  store(json=true){
    let str=json?JSON.stringify(this._):this._
    if(this.type==this.LOCALSTORAGE){
      localStorage.setItem(this.key,str)
    }else if(this.type==this.SESSIONSTORAGE){
      sessionStorage.setItem(this.key,str)
    }
  }
  recover(json=true){
    let p = ""
    if(this.type==this.LOCALSTORAGE){
      p=localStorage.getItem(this.key)
    }else if(this.type==this.SESSIONSTORAGE){
      p=sessionStorage.getItem(this.key)
    }
    this._=json?JSON.parse(p):p
    return this._
  }
}
class Stream{
  constructor(o={binary:false,data:[]}){
    this.data=o.data||[]
    this.b=o.binary??false
    this.il=0
  }
  onPush(){}
  onConfirm(c){return true}
  chunk(i){
    return this.data[i]
  }
  push(chunk){
    if(this.onConfirm(chunk,this.il)){
      this.onPush(chunk,this.il)
      this.data[this.il]=chunk
      this.il+=1
      return true
    }
    return false
  }
  toIndex(chunk,i){
    if(this.onConfirm(chunk,i)){
      this.onPush(chunk,i)
      this.data[i]=chunk
      this.il+=1
      return true
    }
    return false
  }
  forEach(func){
    for(let i=0;i<this.data.length;i++){
      func(this.data[i],i)
    }
  }
  concat(del=" , "){
    return this.data.join(del)
  }
  splice(ind,binary=false){
    let s1=new Stream({binary})
    let s2=new Stream({binary})
    for(let v=0;v<ind;v++){
      s1.push(this.data[v])
    }
    for(let i=ind;i<this.data.length;i++){
      s2.push(this.data[i])
    }
    return [s1,s2]
  }
  async *[Symbol.asyncIterator]() {
    for (let i = 0; i < this.il; i++) {
      // Simulate async delay if needed, or just yield immediately
      yield this.data[i];
    }
  }
}
class SubProcess{
  constructor(args=[],beg=null,loop=null,die=false){
    this.beg=beg
    this.loop=loop
    this.args=args
    this.data={}
    this.id=26
    this.die=die
    this.count=0
    this.state='idle'
  }
  updateCount(){
    this.count+=1
    if(this.die&&this.count>this.die){
      this.terminate()
    }
  }
  onStart(){}
  run(delay=2){
  this._boundUpdate = ()=>this.update()  // store the reference
  this.beg(...this.args)
  this.onStart(...this.args)
  this.update()
  this.delay=delay
  this.state='working'
  Clock.register_loop(this._boundUpdate)
}
pause(){
  this.state='paused'
  Clock.remove_loop(this._boundUpdate)  // same reference
}
terminate(){
  this.state='terminated'
  Clock.remove_loop(this._boundUpdate)  // same reference
  this.beg=null
  this.loop=null
  this.args=null
}
  update(){
    this.updateCount()
    if (this.count%this.delay==0){
      try{
        this.loop(...this.args)
      }catch{}
    }
  }
  config(a=[],b=null,l=null){
    this.beg=b
    this.loop=l
    this.args=a
    this.state='idle'
  }
}
const Process={
  _:{},
  create(id="17887"){
    id=String(id)
    let f=new SubProcess()
    f.id=id
    Process._[id]=f
    return Process._[id]
  },
  config(p,...b){
    p.config(...b)
  },
  terminate(id){
    Process._[id].terminate()
  },
  get pool(){return Process._},
  set pool(h){Process._=h}
}
const Clock = {
  _: [],
  register_once(call, t = 1) {
    const b = setInterval((dt)=> {
      call(dt)
      clearInterval(b)
    }, t)
  },
  register_interval(call, t = 1) {
    const b = setInterval((dt)=> {
      call(dt)
    }, t)
    return b
  },
  remove_interval(id) {
    clearInterval(id)
  },
  register_loop(call) {
    Clock._.push(call)
  },
  remove_loop(call) {
    Clock._.forEach((e, i)=> {
      if (e == call) {
        Clock._.splice(i, 1)
      }
    })
  }
}
Clock.update = (dt)=> {
  Clock._.forEach(e => {
    e(dt)
  })
  requestAnimationFrame(Clock.update)
}
requestAnimationFrame(Clock.update)
const BaseStore=({key="default1234",data={},type="local"}={})=>{
  if(type=="local"){
    Object.keys(data).forEach(e=>{
      localStorage.getItem(e)?null:localStorage.setItem(e,data[e])
    })
  }
  else if(type=="session"){
    Object.keys(data).forEach(e=>{
      sessionStorage.getItem(e)?null:sessionStorage.setItem(e,data[e])
    })
  }
}
class DOMElement{
  constructor(tagname,t={}){
    this.root=document.createElement(tagname)
    Object.entries(t).forEach(([key,val])=>{
      if(key=="textContent"){
        this.root.textContent=val
      }else if(key=="value"){
        this.root.value=val
      }else{
        this.root.setAttribute(key,val)
      }
    })
  }
  onMount(){}
  afterMount(){}
  onDisMount(){}
  afterDisMount(){}
  attrs(t={}){
     Object.entries(t).forEach(([key,val])=>{
      this.attr(key,val)
    })
    return this
  }
  animate(...m){
    this.root.zenithAnimate(...m)
  }
  rattrs(t=[]){
     t.forEach((key)=>{
      this.rattr(key)
    })
    return this
  }
  toggle(v){
    this.root.classList.toggle(v)
  }
  props(t={}){
     Object.entries(t).forEach(([key,val])=>{
        this.prop(key,val)
    })
    return this
  }
  rect(){
    return this.root.getBoundingClientRect()
  }
  style(){
    return this.root.style
  }
  on(e,func){
    this.root.addEventListener(e,func)
    return this
  }
  off(g,e){
    this.root.removeEventListener(g,e)
    return this
  }
  onUpdate(attr,v){}
  shouldUpdate(attr,v){this.onUpdate(attr,v);return true}
  set text(g){
    if(this.shouldUpdate("textContent",g)){
      this.root.textContent=g
    }
  }
  get text(){
    return this.root.textContent
  }
  set src(g){
    if(this.shouldUpdate("src",g)){
      this.root.src=g
    }
  }
  get src(){
    return this.root.src
  }
  set srcObject(g){
    if(this.shouldUpdate("srcObject",g)){
      this.root.srcObject=g
    }
  }
  get srcObject(){
    return this.root.srcObject
  }
  set value(g){
    if(this.shouldUpdate("value",g)){
      this.root.value=g
    }
  }
  get value(){
    return this.root.value
  }
  attr(g,h){
    if(this.shouldUpdate(g,h))this.root.setAttribute(g,h)
    return this
  }
  rattr(g){
    if(this.shouldUpdate('r-'+g,''))this.root.removeAttribute(g)
    return this
  }
  prop(g,h){
    if(this.shouldUpdate("css-"+g,h))this.root.style.setProperty(g,h)
    return this
  }
  getattr(g){
    return this.root.getAttribute(g)
  }
  getprop(g){
    return this.root.style.getPropertyValue(g)
  }
  addChild(g){
    g.onMount(this)
    this.root.appendChild(g.root)
    g.afterMount(this)
    return this
  }
  addChildRoot(g){
    this.root.appendChild(g)
    return this
  }
  addTo(g){
    this.onMount(g)
    g.root.appendChild(this.root)
    this.afterMount(g)
    return this
  }
  addToRoot(g){
    this.onMount()
    g.appendChild(this.root)
    this.afterMount()
    return this
  }
  visible(bool,p="block"){
    if (bool){
      this.root.style.display="none"
    }else{
      this.root.style.display=p
    }
  }
  isVisible(){
    if(this.root.style.display=="none"){
      return false
    }else{
      return true
    }
  }
  remove(){
    this.onDisMount()
    this.root.remove()
    this.afterDisMount()
    return this
  }
  child(i){
    return DOM.convert(this.root.children[i])
  }
  get childAmount(){
    return this.root.children.length
  }
  get ctx(){
    try{
      return this.root.getContext('2d')
    }catch{
      return false
    }
  }
  get gl(){
    try{
      return this.root.getContext('webgl')
    }catch{
      return false
    }
  }
  get gl2() {
    try {
      return this.root.getContext('webgl2')
    } catch {
      return false
    }
  }
}
const DOM={
  create(tagname="section",t={textContent:"",src:"",placeholder:"",id:"",className:"",value:"",name:""}){
    return new DOMElement(tagname,t)
  },
  createStyleHolder(styles=[]){
    return new Styles(styles)
  },
  createAttributeHolder(styles=[]){
    return new Attributes(styles)
  },
  head:null,
  body:null,
  title(name){
    let p=document.querySelector("title")
    if(p){
      p.textContent=name
    }else{
      const g=document.createElement("title")
      g.textContent=name
      document.head.appendChild(g)
    }
  },
  select(query){
    let t=new DOMElement("div")
    t.root=document.querySelector(query)
    if(t.root)return t
    else return false
  },
  selectAll(query=""){
    let dv=[]
    document.querySelectorAll(query).forEach(e=>{
      let t=new DOMElement("div")
      t.root=e
      dv.push(t)
    })
    return dv
  },
  convert(element){
    let t=new DOMElement()
    t.root=element
    return t
  },
  data:{}
}
DOM.body=new DOMElement("div")
DOM.body.root=document.body
DOM.head=new DOMElement("div")
DOM.head.root=document.head
class Styles{
  constructor(styles=[]){
    this.styles=styles
  }
  add(dom){
    this.styles.forEach(e=>{
      dom.prop(e[0],e[1])
    })
  }
}
class Attributes{
  constructor(attr=[]){
    this.attr=attr
  }
  add(dom){
    this.attr.forEach(e=>{
      dom.attr(e[0],e[1])
    })
  }
}
function setupEventHandlers(htmlString) {
  // Create a DOM parser
  const parser = new DOMParser();
  // Parse the HTML string into a document
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Select all elements
  const allElements = doc.querySelectorAll('*');
  
  const bindings = doc.querySelector('[@event]')
  bindings.forEach(e=>{
    let m=e.getAttribute('@event').split(':',1)
    if(m.length>1){
      e.setAttribute(m[0],'$f("'+m[1]+'")')
      e.removeAttribute('@event')
    }
  })

  allElements.forEach(el => {
    // Iterate over all attributes
    [...el.attributes].forEach(attr => {
      // If attribute name starts with 'on' (e.g., onclick, onmouseover)
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });
  });

  // Serialize the cleaned document back to HTML string
  return doc.body.innerHTML;
}
class Template extends DOMElement{
  constructor(d,g,code,extra=false,rem=true){
    super(d,g);
    this.code=code
    this.data=new Map()
    this.root.innerHTML=extra?this.eval(code):code;
    this.rem=rem
  }
  onLoad(){}
  afterLoad(){}
  afterRemove(){}
  onRemove(){}
  onMount(){}
  onDisMount(){}
  eval(code){
    const r=code.replaceAll("{{",'<span data-bind="').replaceAll('}}','"></span>').replaceAll('{%b{','<span ').replaceAll('}b%}','></span>').replaceAll('}b%}','</span>').replaceAll('?(','>').replaceAll(')?','<end').replaceAll('{%for{','<z-loop ').replaceAll('}for%}','></z-loop>').replaceAll('{%s{','<style>').replaceAll('}s%}',"</style>").replaceAll('{%c{','<pre>').replaceAll('}c%}','</pre>').replaceAll('{%d-i{','<div style="display:none;">').replaceAll('}d%}','</div>').replaceAll('{%d-b{','<div style="display:block;">').replaceAll('{%d-r{','<div class="row">').replaceAll('<end>','').replaceAll('<js>','<!--').replaceAll('</js>','-->')
    //console.log(r)
    return r
  }
  remove(){
    this.onRemove(this.data)
    this.root.remove()
    this.afterRemove(this.data)
  }
  runIn(dom){
    this.onLoad(dom,this.data)
    dom.addChild(this)
    this.afterLoad(dom,this.data)
  }
}
function captureFrame(element, settings = {}, callback) {
  if (!element || typeof callback !== 'function') throw new Error();
  const width = settings.width || (element.videoWidth || element.width);
  const height = settings.height || (element.videoHeight || element.height);
  if (!width || !height) throw new Error();
  const canvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(width, height) : (() => { let c = document.createElement('canvas'); c.width = width; c.height = height; return c; })();
  const ctx = canvas.getContext('2d');
  ctx.drawImage(element, 0, 0, width, height);
  const frame = ctx.getImageData(0, 0, width, height);
  return [frame.data,width,height]
}

class ForLoop extends HTMLElement{
  static get observedAttributes(){
    return ['replace','data','start','type']
  }
  constructor(){
    super()
    this.r='(i)'
    this.d='er'
    this.t='json'
  }
  attributeChangedCallback(v,o,n){
    if(v==='replace'){
      this.r=n
    }
    else if(v==='data'){
      this.d=n
    }
    else if(v==='start'){
      const p=this.innerHTML
      let fin=''
      let r=(this.t==='find'?$d(this.d):JSON.parse(this.d))
      r.forEach(e=>{
        fin+=p.replaceAll(this.r,e)
      })
      let finP=new Template()
      this.innerHTML=finP.eval(fin)
      if(this.hasAttribute('del')){
        this.parentNode.innerHTML=this.innerHTML
      }
      finP=null
    }else if(v==='type'){
      this.t=n
    }
  }
}
customElements.define('z-loop',ForLoop)

function rawDataToPNG(rawData, width, height, callback) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Create ImageData from raw RGBA data
  const imageData = new ImageData(new Uint8ClampedArray(rawData), width, height);
  ctx.putImageData(imageData, 0, 0);

  // Convert canvas to Blob (PNG)
  canvas.toBlob(blob => {
    callback(blob);
  }, 'image/png');
}
const ServiceWorker = {
  url: "",
  compile(suc=Empty,err=Empty) {
    const url=ServiceWorker.url
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(url)
          .then(registration => {
            suc(registration)
            navigator.serviceWorker.addEventListener('message', event => {
              ServiceWorker.onMessage(event)
            });
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
            err(error)
          });
    } else {
        console.warn('Service Workers are not supported in this browser.');
        err("not-in-browser")
    };
  },
  onMessage:Empty,
  send(message){
    navigator.serviceWorker.controller.postMessage(message)
  }
};
class Router{constructor(t={},e="hellodefault"){this.routes=t,this.id=e,this.runDestination=DOM.body,window.addEventListener("hashchange",(()=>{const t=window.location.hash.substring(1)||"default";Emitter.emit("hashchange",[t,this])})),Emitter.add("hashchange"),Emitter.add("routebreach"),Emitter.on("hashchange",this.handleRoute);this.routeTo('')}routeTo(t="default"){window.location.hash=t}handleRoute(t,e){let a=e.routes;"default"!==t&&(a[t]?(a[t].runIn(e.runDestination),Object.keys(a).forEach((e=>{e!==t&&a[e].remove()}))):Emitter.emit("routebreach",[t]))}};DOM.setupMeta=(e=[])=>{e.forEach((e=>{const t=document.createElement("meta");Object.entries(e).forEach((([e,i])=>{t.setAttribute(e,i)})),document.head.appendChild(t)}))},APP.BASICMETA={name:"viewport",content:"width=device-width, initial-scale=1.0"},APP.NOSCALEMETA={name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0"};
class InternalRouter{constructor(t={},e="hellodefault"){this.routes=t,this.id=e,this.runDestination=DOM.body;this.routeTo('')}routeTo(t="default"){this.handleRoute(t,this)}handleRoute(t,e){let a=e.routes;"default"!==t&&(a[t]?(a[t].runIn(e.runDestination),Object.keys(a).forEach((e=>{e!==t&&a[e].remove()}))):Emitter.emit("routebreach",[]))}};DOM.setupMeta=(e=[])=>{e.forEach((e=>{const t=document.createElement("meta");Object.entries(e).forEach((([e,i])=>{t.setAttribute(e,i)})),document.head.appendChild(t)}))},APP.BASICMETA={name:"viewport",content:"width=device-width, initial-scale=1.0"},APP.NOSCALEMETA={name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0"};
const RouteWrapper=({unmountAction=Empty,template=Template,mountAction=Empty,apiCheck=()=>true,breachAction=Empty,handleRemove=(t)=>{t.remove()}}={},handleAdd=(t,w)=>{t.runIn(w)})=>Object.freeze(
  {
    runIn(w){
      if(!apiCheck(template,w)) return breachAction()
      mountAction(template,w)
      handleAdd(template,w)
    },
    remove(){
      unmountAction(template)
      handleRemove(template)
    },
    root(){
      return template
    }
  }
)
const request = ({
  url = '/simple',
  body = '',
  header = 'json',
  methord = 'post'
} = {}) => {
  const xhr = new XMLHttpRequest();

  // Normalize method to uppercase
  const method = methord.toUpperCase();

  xhr.open(method, url, false); // false = synchronous request

  // Set headers based on 'header' parameter
  if (header === 'json') {
    xhr.setRequestHeader('Content-Type', 'application/json');
  } else if (header === 'text') {
    xhr.setRequestHeader('Content-Type', 'text/plain');
  } else {
    xhr.setRequestHeader('Content-Type', header);
  }

  // Prepare body
  let requestBody = body;
  if (header === 'json' && body && typeof body === 'object') {
    requestBody = JSON.stringify(body);
  }

  try {
    xhr.send(method === 'GET' || method === 'HEAD' ? null : requestBody);

    // Response text
    const text = xhr.responseText;

    // Try to parse JSON
    let data = null;
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = null;
    }
    let json=data
    
    let raw=xhr.response

    return ({ text, json, raw});
  } catch (error) {
    return ({error});
  }
};
const  Binary={
  create(s){
    return new ArrayBuffer(s)
  },
  fromArray(buf,list=[]){
    let u=new DataView(buf)
    list.forEach((e,i)=>{
    if(e!=null){
      if(e[0]==8)u.setUint8(i,e[1]);
      else if(e[0]==16)u.setUint8(i,e[1]);
      else if(e[0]==32)u.setUint8(i,e[1]);
      else if(e[0]==64)u.setBigUint64(i,e[1]);
      else console.warn("invalid size must be 8,16,32,64 this will not be added to buffer")
    }
    })
    u=null;
  },
  write(buf,list=[]){
    let u=new DataView(buf)
    list.forEach(e=>{
      if(e[1]==8)u.setUint8(e[0],e[2]);
      else if(e[1]==16)u.setUint8(e[0],e[2]);
      else if(e[1]==32)u.setUint8(e[0],e[2]);
      else if(e[1]==64)u.setBigUint64(e[0],e[2]);
      else console.warn("invalid size must be 8,16,32,64 this will not be added to buffer")
    })
    u=null;
  },
  read(buf,s,p){
    let n=new DataView(buf)
    if(s==8)return n.getUint8(p);
    else if(s==16)return n.getUint16(p);
    else if(s==32)return n.getUint32(p);
    else if(s==64)return n.getBigUint64(p);
    else console.warn("invalid size must be 8,16,32,64 this will not be added to buffer");
    n=null;
  },
  map(buf,func){
    let u=new DataView(buf)
    for(let i = 0;i<u.byteLength;i++){
      u.setUint8(i,func(u.getUint8(i),i))
    }
  },
  forEach(buf,func){
    let u=new DataView(buf)
    for(let i = 0;i<u.byteLength;i++){
      func(u.getUint8(i),i)
    }
  }
}
let buf=Binary.create(20)
Binary.fromArray(buf,[[8,230],[8,240],[8,0x46DA],null,null,[8,240]])//does not set null places just skips the index
//console.log(Binary.read(buf,8,2))
//console.log(new Uint8Array(buf))
//console.log(new TextEncoder().encode("aHello"))
const StorageTester={
  testLocal(){
        var allStrings = '';
        for(var key in window.localStorage){
            if(window.localStorage.hasOwnProperty(key)){
                allStrings += window.localStorage[key];
            }
        }
        return allStrings ? 3 + ((allStrings.length*16)/(8*1024)) + ' KB' : 'Empty (0 KB)';
  },
  testSession(){
    var allStrings = '';
        for(var key in window.sessionStorage){
            if(window.sessionStorage.hasOwnProperty(key)){
                allStrings += window.sessionStorage[key];
            }
        }
        return allStrings ? 3 + ((allStrings.length*16)/(8*1024)) + ' KB' : 'Empty (0 KB)';
  }
}
const FileManager=(function () {
  const handlers={
    pick:()=>{},
    error:()=>{},
    abort:()=>{},
    save:()=>{}
  }
  const root=document.createElement('input')
  root.onerror=()=>handlers.error()
  root.onchange=()=>handlers.pick()
  root.onabort=()=>handlers.abort()
  root.setAttribute('type','file')
  document.head.appendChild(root)
  
  const dispose=()=>{
    root.remove()
  }
  function getFile(accept=null,multiple=false){
    if (!root) {
      console.error('File input element not found');
      return;
    }
    
    if (accept) {
      root.setAttribute('accept', accept);
    } else {
      root.removeAttribute('accept');
    }
    
    if (multiple) {
      root.setAttribute('multiple', '');
    } else {
      root.removeAttribute('multiple');
    }
    
    root.value = '';
    root.click()
  }
  function saveFile(name,blob=Blob){
    let a = document.createElement('a')
    a.download=name
    const objURL=URL.createObjectURL(blob)
    a.href=objURL
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(objURL)
  }
  function currentFiles() {
    return root.files
  }
  function read(type='text',blob=null,call=()=>{},err=()=>{}) {
    if(blob){
      let reader=new FileReader(blob)
      reader.onload=(e)=>{
        call(e.target.result)
      }
      reader.onerror=(e)=>{
        err(e)
      }
      if(type==='text')reader.readAsText(blob)
      else if(type==='url')reader.readAsDataURL(blob)
      else reader.readAsArrayBuffer(blob)
    }
  }
  return Object.freeze({
    saveFile,
    getFile,
    handlers,
    currentFiles,
    read,
    dispose
  })
})
const DataBase = (function() {
  const data = new Map();
  
  const createStore = (tablename = '') => {
    if (tablename !== '') {
      if (!data.has(tablename)) {
        data.set(tablename, new Map());
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  
  const hasStore=(tablename)=>data.has(tablename)
  
  const deleteStore = (tablename) => {
    if (tablename !== '') data.has(tablename) && data.delete(tablename);
  };
  
  const putData = (tablename, key = '', v = {}) => {
    if (data.has(tablename) && key !== '') {
      data.get(tablename).set(key, v);
    }
  };
  
  const getData = (tablename, key = '') => {
    if (data.has(tablename) && key !== '') {
      return data.get(tablename).get(key);
    } else {
      return false;
    }
  };
  
  const serialize = async (func) => {
    return func();
  };
  
  const toJSON = () => {
    const res = {};
    data.forEach((value, key) => {
      res[key] = Object.fromEntries(value);
    });
    return JSON.stringify(res);
  };
  
  const fromJSON = (json) => {
    const obj = JSON.parse(json);
    Object.entries(obj).forEach(([key, value]) => {
      data.set(key, new Map(Object.entries(value)));
    });
  };
  const toBinary = () => {
    const json = toJSON();
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(json);
    return uint8Array;
  };
  
  const toBlob = () => {
    const json = toJSON();
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(json);
    return new Blob([uint8Array], { type: 'application/octet-stream' });
  };
  
  const fromBinary = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        fromJSON(reader.result);
        resolve();
      };
      reader.onerror = reject;
      reader.readAsText(blob);
    });
  };
  const queries={
    RANGEQUERY:'rgnq',
    INCLUDEQUERY:'smtgh',
    FULFILLQUERY:'fulgil'
  }
  const types={
    OBJECT:'obj'
  }
  const query=(tablename,{type=queries.RANGEQUERY,min=0,max=10,datatype=types.OBJECT,index='y',query='',querydata=''}={})=>{
    let reply=null
    if(data.has(tablename)){
      if(type==queries.RANGEQUERY){
        reply=[]
        if(datatype==types.OBJECT){
          data.get(tablename).entries().forEach(([v,k])=>{
            let y=k[query]
            if(y>min&&y<max){
              reply.push({key:v,value:k})
            }
          })
        }
      }
      else if(type==queries.INCLUDEQUERY){
        reply=[]
        if(datatype==types.OBJECT){
          data.get(tablename).entries().forEach(([v,k])=>{
            let y=k[query]
            if(y.includes(querydata)){
              reply.push({key:v,value:k})
            }
          })
        }
      }
      else if(type==queries.FULFILLQUERY){
        reply=[]
        if(datatype==types.OBJECT){
          data.get(tablename).entries().forEach(([v,k])=>{
            if(querydata(k)){
              reply.push({key:v,value:k})
            }
          })
        }
      }
      else{
        reply=null
      }
    }
    return reply
  }
  function openDB(dbname, storename) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbname);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storename)) {
          db.createObjectStore(storename);
        }
      };
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }
  
  // Store current data into IndexedDB
  async function storeInIndexDB(dbname, storename) {
    const db = await openDB(dbname, storename);
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storename, 'readwrite');
      const store = tx.objectStore(storename);
      const jsonData = toJSON(); // assumes toJSON() is in scope
      const putRequest = store.put(jsonData, 'data');
      putRequest.onsuccess = () => {
        resolve(true);
        db.close();
      };
      putRequest.onerror = (event) => {
        reject(event.target.error);
        db.close();
      };
    });
  }
  
  // Recover data from IndexedDB into memory
  async function recoverFromIndexDB(dbname, storename) {
    const db = await openDB(dbname, storename);
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storename, 'readonly');
      const store = tx.objectStore(storename);
      const getRequest = store.get('data');
      getRequest.onsuccess = (event) => {
        const jsonData = event.target.result;
        if (jsonData) {
          fromJSON(jsonData); // assumes fromJSON() is in scope
          resolve(true);
        } else {
          resolve(false);
        }
        db.close();
      };
      getRequest.onerror = (event) => {
        reject(event.target.error);
        db.close();
      };
    });
  }
  const getLenght=(tablename)=>{
    return data.get(tablename).size
  }
  const getKeys=(tablename)=>{
    return data.get(tablename).keys()
  }
  const getStoreNames=()=>{
    return data.keys()
  }
  return Object.freeze({
    getStoreNames,
    getKeys,
    getLenght,
    hasStore,
    queries,
    types,
    query,
    createStore,
    deleteStore,
    putData,
    getData,
    serialize,
    toJSON,
    fromJSON,
    toBinary,
    toBlob,
    fromBinary,
    storeInIndexDB,
    recoverFromIndexDB
  });
});
const Type=(() => {
    const templates={
      logerror:(v,error)=>{console.warn(error);return undefined},
      nologerror:(v,error)=>{return undefined},
      alerterror:(v,error)=>{alert(error);return undefined}
    }
    let onError=(v,error)=>{
      console.warn(error)
      return undefined
    }
    const config=(func)=>{
      onError=func
    }
    const int=(x)=>{
      if(Number.isInteger(x)&&typeof x ==='number'){
        return x
      }else{
        return onError(x,x+' is not an number')
      }
    }
    const float=(x)=>{
      if(Number.isFinite(x)&&typeof x ==='number'){
        return x
      }else{
        return onError(x,x+' is not an float')
      }
    }
    const num=(x)=>{
      if(typeof x ==='number'){
        return x
      }else{
        return onError(x,x+' is not an number')
      }
    }
    const str_num = (x) => {
      if (Number(x)) {
        return x
      } else {
        return onError(x, x + ' is not an string convertable number')
      }
    }
    const str = (x) => {
      if (typeof x==='string') {
        return x
      } else {
        return onError(x, x + ' is not a string')
      }
    }
    const array=(x)=>{
      if (Array.isArray(x)) {
        return x
      } else {
        return onError(x, x + ' is not a array')
      }
    }
    const obj=(x)=>{
      if (typeof x === 'object' && x !== null) {
        return x
      } else {
        return onError(x, x + ' is not a object')
      }
    }
    const ins=(x,b)=>{
      if (x instanceof b) {
        return x
      } else {
        return onError(x, x + ' is not an instance of '+ b)
      }
    }
    const json=(x)=>{
      y=null
      try{y=JSON.parse(x)}catch{}
      if (typeof x==='string'&&y) {
        return y
      } else {
        return onError(x, x + ' is not a json string')
      }
    }
    const reg=(val,reg)=>{
      if(reg.test(val)){
        return val
      }else {
        return onError(val, val + ' does not match regex '+reg)
      }
    }
    const has_attr=(val,array)=>{
      if(typeof val!=='object' || val===null) return onError(val,'object might be null or not an object')
      let h=true
      array.forEach(e=>{
        if(!val.hasOwnProperty(e)) h=false
      })
      if(h){
        return val
      }
      else{
        return onError(val,'object does not contain this properties')
      }
    }
    const array_check=(array,func)=>{
      let f=true
      array.forEach(e=>{
        if(!func(e)){
          f=false
        }
      })
      if(f){
        return array
      }else{
        return onError(array,'array does not satisfy request')
      }
    }
    return Object.freeze({
      templates,int,float,num,str_num,str,array,obj,ins,json,reg,config,has_attr,array_check
    })
})();
const Flex=(function () {
  async function $serialize(func) {
    return func()
  }
  async function $halt(func,func2) {
    t=await func()
    func2()
  }
  function $delay_sync(func,time=1000){
    const a=setInterval(()=>{func();clearInterval(a)},time)
  }
  async function $delay_async(func,time=1000){
    const a=setInterval(()=>{func();clearInterval(a)},time)
  }
  function $pause_sync(ms=1000){
    rec=Date.now()
    while(Date.now()-rec<ms){}
  }
  async function $pause_async(ms=1000){
    rec=Date.now()
    while(Date.now()-rec<ms){}
  }
  function $empty_sync() {}
  async function $empty_async(){}
  return Object.freeze({$pause_sync,$serialize,$halt,$pause_async,$empty_sync,$empty_async,$delay_sync,$delay_async})
})();
const BindingManager = (function() {
  // Your existing State class (or import it if external)
  const State = (function() {
    class State {
      constructor(ref, access = 'text') {
        this.ref = ref;
        this.access = access;
        this._l = [];
        
        if (
          this.access === 'value' &&
          (this.ref.root instanceof HTMLInputElement || this.ref.root instanceof HTMLTextAreaElement)
        ) {
          this.ref.on('input', () => {
            this._l.forEach((callback) => callback(this.ref.value));
          });
        } else if (this.access === 'value' && this.ref.root instanceof HTMLSelectElement) {
          this.ref.on('change', () => {
            this._l.forEach((callback) => callback(this.ref.value));
          });
        }
      }
      
      get value() {
        if (this.access === 'text') return this.ref.text;
        else if (this.access === 'value') return this.ref.value;
        else if (this.access === 'src') return this.ref.src;
        return undefined;
      }
      
      set value(v) {
        if (this.access === 'text') this.ref.text = v;
        else if (this.access === 'value') this.ref.value = v;
        else if (this.access === 'src') this.ref.src = v;
        this._l.forEach((e) => e(v));
      }
      
      callOnChange(func) {
        this._l.push(func);
      }
      
      removeCallOnChange(func) {
        this._l = this._l.filter((e) => e !== func);
      }
    }
    
    const bind = (element, type = 'text') => {
      let state = new State(element, type);
      return state;
    };
    
    return Object.freeze({
      bind,
      StateClass: State, // Expose the class here
    });
  })();
  
  const states = {};
  
  function getAccessType(el) {
    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLSelectElement
    ) {
      return 'value';
    } else if (el instanceof HTMLImageElement) {
      return 'src';
    } else {
      return 'text';
    }
  }
  
  function init(root = document.body) {
    const elements = root.querySelectorAll('[data-bind]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-bind');
      const access = getAccessType(el);
      const state = State.bind(DOM.convert(el), access);
      states[key] = state;
    });
  }
  
  function get(key) {
    return states[key]?.value;
  }
  
  function set(key, value) {
    if (states[key]) {
      states[key].value = value;
    }
  }
  function remove(key) {
    delete states[key]
  }
  function subscribe(key, callback) {
    if (states[key]) {
      states[key].callOnChange(callback);
    }
  }
  function unsubscribe(key, callback) {
    if (states[key]) {
      states[key].removeCallOnChange(callback);
    }
  }
  return {
    init,
    get,
    set,
    remove,
    subscribe,
    delete(key){
      states[key].ref.root.removeAttribute('data-bind')
      delete states[key]
    },
    StateClass: State.StateClass,
    unsubscribe
  };
})();
const SetupBind=()=>{
  BindingManager.init()
}
const FormValidator = () => {
  // Private state for this specific validator instance
  let rules = {};

  const convert = (formdata) => Object.fromEntries(formdata.entries());

  return {
    // Constants for cleaner rule definitions
    convert,
    MIN: "minLength",
    MAX: "maxLength",
    IN: "mustInclude",
    NOTIN: "notInclude",
    EQ: "equal",
    NOTEQ: "notEqual",
    CUSTOM: 'custom',
    REGEX: 'regex',

    setRule(n, ruleArray) {
      rules[n] = ruleArray;
    },

    clearRules() {
      rules = {};
    },

    validate(data, log = false) {
      const errors = [];
      const inputData = data instanceof FormData ? convert(data) : data;

      Object.entries(rules).forEach(([key, ruleList]) => {
        if (key in inputData) {
          const val = inputData[key];
          
          ruleList.forEach(rule => {
            const [type, requirement, msg] = rule;
            let isInvalid = false;

            try {
              switch (type) {
                case "minLength": isInvalid = val.length < requirement; break;
                case "maxLength": isInvalid = val.length > requirement; break;
                case "equalLength": isInvalid = val.length != requirement; break;
                case "mustInclude": isInvalid = !String(val).includes(requirement); break;
                case "notInclude": isInvalid = String(val).includes(requirement); break;
                case "equal": isInvalid = val !== requirement; break;
                case "notEqual": isInvalid = val === requirement; break;
                case "regex": isInvalid = !requirement.test(val); break;
                case "custom": isInvalid = !requirement(val); break;
              }

              if (isInvalid) {
                const formattedMsg = msg
                  .replace("_n_", key)
                  .replace("_v_", String(requirement))
                  .replace("_s_", String(val));
                errors.push(formattedMsg);
              }
            } catch (e) {
              // Silently catch errors in custom functions or regex
            }
          });
        }
      });

      if (log) errors.forEach(e => console.log(`[Zenith Validator]: ${e}`));
      return errors;
    }
  };
};

const FormHandle=((obj,sh=true) => {
    const form=obj
    let handlers={
      reason:null,
      validate:Empty,
      error:Empty,
      ifValid:null
    }
    const handle=(e) => {
      e.preventDefault();
      if (handlers.validate(form,new FormData(form.root))) {
        handlers.ifValid = true
      } else {
        handlers.ifValid = false
      }
    }
    const dispose = () => {
      form.off('submit',handle)
    }
    const assemble=()=>{
      form.on('submit',handle)
    }
    if(sh)assemble();
    const send=(url,fd)=>{
      return fetch(url,{method:'POST',body:fd})
    }
    return Object.freeze({
      form,
      handlers,
      dispose,
      send
    })
});
const DefaultLoad=(id='def-load')=>{
  let template=new Template('div', {id}, `
  <style>
  #${id} ._mab_i{
    width:var(--w);
    height:var(--h);
    border:3px solid black;
    border-color:var(--bc);
    border-right-color:var(--brc);
    border-width:var(--bw);
    border-radius:var(--br);
    margin:auto;
    margin-top:var(--mt);
    display: flex;
    justify-content: center;
    align-items: center;
    background:var(--bbc);
    color:var(--cl);
    -size:var(--ts);
    font-family:var(--ff);
  }
  #${id} .spin{
    animation: spin_infinite 3s infinite;
    animation-duration: var (--ad);
  }
  #${id} .bounce{
    animation: bounce_infinite 3s infinite;
    animation-duration: var (--ad);
  }
  #${id} .pan{
    animation: pan_infinite 3s infinite;
    animation-duration: var (--ad);
  }
  @keyframes spin_infinite{
    0%{rotate:0deg;}
    100%{rotate:361deg;}
  }
  @keyframes bounce_infinite{
    0%{position:relative; rotate:0deg; top:0px;}
    50%{position:relative; rotate:361deg; top:60px;}
    100%{position:relative; rotate:0deg; top:0px;}
  }
  @keyframes pan_infinite{
    0%{position:relative; rotate:0deg; left:-60px;}
    50%{position:relative; rotate:361deg; left:60px;}
    100%{position:relative; rotate:0deg; left:-60px;}
  }
  </style>
  <div class='_mab_i'></div>
  `)
  template.props({ '--w': '50px', '--h': '50px', '--bc': 'gray', '--bw': '7px', '--br': '50%', '--brc': 'transparent', '--mt': '50%', '--bbc': 'transparent', '--ad': '2s', '--cl': 'gray', '--ts': 'large', '--ff': 'Impact' })
  template.setSize = (d) => {
    template.prop('--w', d)
    template.prop('--h', d)
    return template
  }
  template.setMarginTop = (d) => {
    template.prop('--mt', d)
    return template
  }
  template.setDuration = (d) => {
    template.prop('--ad', d)
    return template
  }
  template.setBorderColor = (d) => {
    template.prop('--bc', d)
    return template
  }
  template.setBorderRightColor = (d) => {
    template.prop('--brc', d)
    return template
  }
  template.setBackgroundColor = (d) => {
    template.prop('--bbc', d)
    return template
  }
  template.setBorderWidth = (d) => {
    template.prop('--bw', d)
    return template
  }
  template.setText = (t) => {
    DOM.select('._mab_i').text = t
    return template
  }
  template.setTextColor = (d) => {
    template.prop('--cl', d)
    return template
  }
  template.setFontSize = (d) => {
    template.prop('--ts', d)
    return template
  }
  template.setFontFamily = (d) => {
    template.prop('--ff', d)
    return template
  }
  template.setColor = (d) => {
    template.setTextColor(d)
    return template
  }
  template.setAnimation = (d) => {
    template.root.children[1].setAttribute('class', '_mab_i ' + d)
    return template
  }
  return template;
}
const Binding=(n,bind=true)=>{
  if(bind)SetupBind()
  return Object.freeze({
    set value(v){
      BindingManager.set(n,v)
    },
    get value(){
      return BindingManager.get(n)
    },
    subscribe(func){
      BindingManager.subscribe(n,func)
    },
    unsubscribe(func){
      BindingManager.unsubscribe(n,func)
    },
    clear(){
      BindingManager.remove(n)
    },
    delete() {
      BindingManager.delete(n)
    }
  })
}
APP.getAllMediaDevices=async()=>{
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();

    const audioInputs = devices.filter(device => device.kind === 'audioinput');
    const audioOutputs = devices.filter(device => device.kind === 'audiooutput');
    const videoInputs = devices.filter(device => device.kind === 'videoinput');
    return {
      audioInputs,
      audioOutputs,
      videoInputs
    };
  } catch (err) {
    console.error('Error enumerating devices:', err);
  }
}
const FileSystem = (() => {
  const codes = {
    SUCCESS: 100,
    FILE_EXISTS: 200,
    FOLDER_EXISTS: 201,
    FILE_NOT_EXISTS: 400,
    FOLDER_NOT_EXISTS: 401,
    ERROR: 500
  };

  const store = caches;

  // --- Folder Management ---
  const openFolder = async (name, res = Empty) => {
    const exists = await store.has(name);
    if (exists) {
      res(codes.FOLDER_EXISTS);
    } else {
      await store.open(name);
      res(codes.SUCCESS);
    }
  };

  const deleteFolder = async (name, res = Empty) => {
    const exists = await store.has(name);
    if (!exists) {
      res(codes.FOLDER_NOT_EXISTS);
    } else {
      const deleted = await store.delete(name);
      res(deleted ? codes.SUCCESS : codes.ERROR);
    }
  };

  const listFolders = async (res = Empty) => {
    try {
      const keys = await store.keys();
      res(keys); // Returns array of strings (cache names)
    } catch (e) {
      res(codes.ERROR);
    }
  };

  // --- File Management ---
  const openFile = async ({ folder = 'GLOBAL', filename = 'file' } = {}, res = Empty) => {
    try {
      const cache = await store.open(folder);
      const response = await cache.match(filename);
      if (response) {
        res(response); 
      } else {
        res(codes.FILE_NOT_EXISTS);
      }
    } catch (e) {
      res(codes.ERROR);
    }
  };

  const saveFile = async ({ folder = 'GLOBAL', filename = 'file', file = new Blob(), init = {} } = {}, res = Empty) => {
    try {
      const cache = await store.open(folder);
      const response = new Response(file, init);
      await cache.put(filename, response);
      res(codes.SUCCESS);
    } catch (e) {
      res(codes.ERROR,e);
    }
  };

  const deleteFile = async ({ folder = 'GLOBAL', filename = 'file' } = {}, res = Empty) => {
    try {
      const cache = await store.open(folder);
      const deleted = await cache.delete(filename);
      res(deleted ? codes.SUCCESS : codes.FILE_NOT_EXISTS);
    } catch (e) {
      res(codes.ERROR);
    }
  };

  const listFiles = async (folder = 'GLOBAL', res = Empty) => {
    try {
      const cache = await store.open(folder);
      const requests = await cache.keys();
      // Returns the filenames extracted from the Request URLs
      const filenames = requests.map(req => req.url.split('/').pop());
      res(filenames);
    } catch (e) {
      res(codes.ERROR);
    }
  };

  // --- Global Management ---
  const deleteAll = async (res = Empty) => {
    try {
      const keys = await store.keys();
      await Promise.all(keys.map(key => store.delete(key)));
      res(codes.SUCCESS);
    } catch (e) {
      res(codes.ERROR);
    }
  };

  return Object.freeze({
    codes,
    openFolder,
    deleteFolder,
    listFolders,
    openFile,
    saveFile,
    deleteFile,
    listFiles,
    deleteAll
  });
})();


const $fs = FileSystem;

const MsgBox=(id='msgbox')=>{
  const template=new Zenith.Template('dialog',{id},`
    <h2></h2>
    <h4></h4>
    <button>Close</button>
  `)
  template.child(0).props({'text-align':'center'})
  template.props({margin:'auto','max-width':'300px','width':'max-content','border-radius':'12px','border':'none','box-shadow':'3px 3px 4px black','outline':'none'})
  template.child(2).props({'float':'right',padding:'5px 10px','border-radius':'6px','border':'none','box-shadow':'0 0 4px black'}).on('click',()=>{
    template.root.close()
  })
  template.alert=(head,msg)=>{
    template.child(0).text=head
    template.child(1).text=msg
    template.root.showModal()
  }
  return template
}
const PopMsg=(id='popmsg')=>{
  const template=new Zenith.Template('div',{id},`
    <style>
      @keyframes Zup{
        0%{bottom:-20px;}
        100%{bottom:20px;}
      }
      @keyframes Zdown{
        0%{bottom:20px;}
        100%{bottom:-40px;}
      }
    </style>
    <div>Hello</div>
  `)
  template.onEnd=Empty
  template.props({position:'fixed','z-index':'999','bottom':'-20px','background':'rgb(20,20,20)',width:'max-content','text-align':'center','color':'white',padding:'10px 20px',left:'50%','border-radius':'50px',translate:'-50%','max-width':'80%'})
  template.close=()=>{
    template.prop('display','none')
  }
  template.msg=(msg,delay=2000)=>{
    template.prop('bottom','20px')
    template.prop('display','block')
    template.prop('animation','Zup 1s linear')
    template.child(1).text=msg
    Zenith.Clock.register_once(()=>template.close(),delay)
  }
  return template
}
const SideBar=(id='sidebar')=>{
  const template=new Zenith.Template('div',{id},`
    <style>
      @keyframes Zin{
        0%{right:-20px;}
        100%{right:20px;}
      }
      @keyframes Zout{
        0%{right:20px;}
        100%{right:-40px;}
      }
    </style>
  <div>
  <div>
`)
  template.props({'position':'fixed','top':'50%',right:'-40px',translate:'0px -50px'})
  template.add=(m)=>{
    const r=Zenith.DOM.create('h4',{textContent:m})
    template.child(1).addChild(r)
  }
  template.props({background:'rgb(20,20,20)',padding:'10px',color:'white','border-radius':'50px'})
  template.close=()=>{
    template.prop('animation','Zout 1s linear')
    template.prop('right','-40px')
  }
  template.open=()=>{
    template.prop('animation', 'Zin 1s linear')
    template.prop('right', '20px')
  }
  return template
}
const GlobalFunc=new Map()
const GlobalMap=new Map()
window.$d=(key)=>{
  return GlobalMap.get(key)
}
const $data=(key,data)=>{
  return GlobalMap.set(key,data)
}
const $data_remove=(key)=>{
  return GlobalMap.delete(key)
}
const $data_has=(key)=>{
  return GlobalMap.has(key)
}
window.$f=(key,...a)=>{
  if(!GlobalFunc.has(key))return false
  else GlobalFunc.get(key)(...a)
  return true
}
const $func=(key,func)=>{
  GlobalFunc.set(key,func)
}
const $func_remove=(key)=>{
  GlobalFunc.delete(key)
}
const $func_has = (key) => {
  GlobalFunc.has(key)
}
const SmartBinding = (n,k=true,bind=true) => {
  if(bind)SetupBind()
  return Object.freeze({
    set(t={}) {
      Object.entries(t).forEach(([n,v])=>{
        BindingManager.set(n, v)
      if(k)BindingManager.delete(n)
      })
    },
    delete(...m){
      m.forEach(e=>BindingManager.delete(e))
    }
  })
}

const Link=(() => {
    const a=DOM.create('a')
    a.addTo(DOM.head)
    const openPhone=({code='+234',number=''}={})=>{
      a.attr('href','tel:'+code+number)
      a.root.click()
    }
    const openWhatsApp=({username='',message=''}={})=>{
      a.attr('href',`https://wa.me/${encodeURI(username)}?text=${encodeURI(message)}`)
      a.root.click()
    }
    const openTiktok=({username=''}={})=>{
      a.attr('href','https://www.tiktok.com/'+encodeURI(username))
      a.root.click()
    }
    const openTelegram=({username=''}={})=>{
      a.attr('href','https://t.me/'+encodeURI(username))
      a.root.click()
    }
    const openFacebook=({username=''}={})=>{
      a.attr('href','https://m.me/'+encodeURI(username))
      a.root.click()
    }
    const openEmail=({email=''}={})=>{
      a.attr('href','mailto:'+email)
      a.root.click()
    }
    const open=(url)=>{
      a.attr('href', url)
      a.root.click()
    }
    return Object.freeze({
      openPhone,
      openWhatsApp,
      openEmail,
      openFacebook,
      openTelegram,
      openTiktok,
      open
    })
})();

let RouteData=new Map()
const setRouteData=(t={})=>{
  if (Object.entries(t)){
    RouteData=new Map(Object.entries(t))
  }
}
const getRouteData=()=>new Map(RouteData.entries())
class ZPdf extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    const objectEl = document.createElement('iframe');
    objectEl.src = this.getAttribute('src') || 'example.pdf';
    objectEl.style.cssText='width:100%; height:100%;'
    this.shadowRoot.appendChild(objectEl);
  }
  
  static get observedAttributes() {
    return ['src'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src' && this.shadowRoot) {
      const objectEl = this.shadowRoot.querySelector('iframe');
      if (objectEl) {
        objectEl.src = newValue;
      }
    }
  }
}
const Widgets={
  Button(t={}){
    return DOM.create('button',t)
  },
  Input(t={}){
    return DOM.create('input',t)
  },
  TextArea(t={}){
    return DOM.create('textarea',t)
  },
  Image(t={}){
    return DOM.create('img',t)
  },
  Sound(t={}){
    return DOM.create('audio',t)
  },
  Video(t={}){
    return DOM.create('video',t)
  },
  Iframe(t={}){
    return DOM.create('iframe',t)
  },
  Embed(t={}){
    return DOM.create('embed',t)
  },
  Dialog(t={}){
    return DOM.create('dialog',t)
  },
  External(t={}){
    return DOM.create('object',t)
  },
  Select(t = {}) {
    return DOM.create('select', t)
  },
  Option(t = {}) {
    return DOM.create('option', t)
  },
  DataList(t = {}) {
    return DOM.create('datalist', t)
  },
  Template(t = {},str=``) {
    return DOM.create('template', t,str)
  }
}
customElements.define('z-pdf', ZPdf);

class ZNative extends DOMElement {
  constructor(d, g, code, extra = false, rem = true) {
    super(d, g);
    this.code = code
    this.data = new Map()
    this.root.innerHTML =this.eval(code);
    this.rem = rem
  }
  onLoad() {}
  afterLoad() {}
  afterRemove() {}
  onRemove() {}
  onMount() {}
  onDisMount() {}
  eval(code) {
    let r = code.replaceAll("<Bind>", '<span data-bind="').replaceAll('</Bind>', '"></span>').replaceAll('<Inline', '<span ').replaceAll('</Inline>', '></span>').replaceAll('<Layout', '<div').replaceAll('</Layout', '</div').replaceAll('<BoxHLayout','<z-boxh').replaceAll('</BoxHLayout','</z-boxh').replaceAll('<BoxVLayout','<z-boxv').replaceAll('</BoxVLayout','</z-boxv').replaceAll('<GridLayout','<z-boxgrid').replaceAll('</GridLayout','</z-boxgrid').replaceAll('<StackLayout','<z-boxstack').replaceAll('</StackLayout','</z-boxstack').replaceAll('<Text>', '<pre>').replaceAll('</Text>', '</pre>').replaceAll('<Row', '<div class="row"').replaceAll('</Row','</div>').replaceAll('<TH','<h').replaceAll('</TH','</h').replaceAll('<TP','<p').replaceAll('</TP','</p')
    let b=[
      ['<PushButton','<button'],
      ['</PushButton','</button'],
      
      ['<Part','<section'],
      ['</Part','</section'],
      
      ['<SubmitButton','<button type="submit"'],
      ['</SubmitButton', '</button'],
      
      ['<CheckButton', '<input type="checkbox"'],
      ['</CheckButton', '<end'],
      
      ['<RadioButton', '<input type="radio"'],
      ['</RadioButton', '<end'],
      
      ['<ColorPicker', '<input type="color"'],
      ['</ColorPicker', '</button'],
      
      ['<Input','<input'],
      ['</Input','<end'],
      
      ['<TextArea','<textarea'],
      ['</TextArea','</textarea'],
      
      ['<Image', '<img'],
      ['</Image', '<end'],
      
      ['<Audio', '<audio controls><source'],
      ['</Audio', '<source></audio'],
      
      ['<Video', '<video controls><source'],
      ['</Video', '<source></video'],
      
      ['<Dialog', '<dialog'],
      ['</Dialog', '</dialog'],
      
      ['<WebView', '<iframe'],
      ['</WebView', '</iframe'],
      
      ['<PDF', '<z-pdf'],
      ['</PDF', '</z-pdf'],
      
      ['<Extern', '<object'],
      ['</Extern', '</object'],
      
      ['<Canvas', '<canvas'],
      ['</Canvas', '</canvas'],
      
      ['_z_','on'],
      
      ['<break>','<br>'],
      ['</break>','<end>'],
      
      ['<JS>','<!--'],
      ['</JS>','-->'],
      
      ['<StyleSheet>', '<style>'],
      ['</StyleSheet>', '</style>'],
      
      ['<For','<z-loop'],
      ['</For','</z-loop'],
      
      ['<end>','']
    ]
    for(let i=0;i<b.length;i++){
      r=r.replaceAll(b[i][0],b[i][1])
    }
    //console.log(r)
    return r
  }
  remove() {
    this.onRemove(this.data)
    this.root.remove()
    this.afterRemove(this.data)
  }
  runIn(dom) {
    this.onLoad(dom, this.data)
    dom.addChild(this)
    this.afterLoad(dom, this.data)
  }
}
const ZNativeFrom=(text)=>{
  let b=text.split('<Type>')[1]?.split('</Type>')[0]||'div'
  let j=text.split('<JS>')[1]?.split('</JS>')[0]||`null`
  let g=Widgets.Button()
  const bin=new ZNative(b,{},text)
  g.root.T=bin
  j=j.replace('import zext',`
  zext=(()=>Object.freeze({
    width:window.innerWidth,
    height:window.innerHeight,
    emit(...m){
      Z.Emitter.emit(...m)
    },
    def(...f){
      Z.$func(...f)
    },
    call(...f){
      Z.$f(...f)
    },
    anim(x,...m){
      x.animate(...m)
    },
    on(...m){
      Z.Emitter.on(...m)
    },
    data(...m){
      Z.$d(...m)
    },
    setdata(...m){
      Z.$data(...m)
    }
  }))()
  `)
  g.attr('onclick','const template=this.T;'+j)
  g.root.click()
  return bin
}
const ZNativeImport=(urls)=>{
  let gurl=urls+'.znt.n.xml'
  const {text}=request({url:gurl})
  return ZNativeFrom(text)
}
const TemplateImport=(urls)=>{
  let gurl=urls+'.znt.xml'
  const {text}=request({url:gurl})
  let b=text.split('<type>')[1]?.split('</type>')[0]||'div'
  let j=text.split('<js>')[1]?.split('</js>')[0]||`null`
  let g=Widgets.Button()
  const bin=new Template(b,{},text,true)
  g.root.T=bin
  g.attr('onclick','const template=this.T;'+j)
  g.root.click()
  return bin
}

const WebView=(t={})=>DOM.create('iframe',t)

const setGlobal=(t={})=>{
  window.Z=t
}

const CameraConfig=({audio=true,video=true,width=1280,height=750,facingMode='environment',frameRate=30,aspectRatio=16/9,torch=false,zoom=0,exposureCompensation=0.5}={})=>{
  return({
    video: {
      width,
      height,
      advanced: [
        {facingMode},
        {frameRate},
        {aspectRatio},
        {torch},
        {zoom},
        {exposureCompensation}
      ]
    }
    ,audio
  })
}
const FacingMode={
  BACK:'environment',
  FRONT:'user',
  FORWARD:'user'
}
const Camera=(({config=CameraConfig(),extra={},ready=Zenith.Empty}={}) => {
    let re=config,re2=extra
    let stream=null
    let onReady=ready
    let info=null
    const dispose=()=>{
      stream.getTracks().forEach(track => track.stop())
    }
    const apply=(v)=>{
      const track=stream.getTracks()[0]
      track.applyConstraints(v);
    }
    const torch=(v=true)=>{
      const track=stream.getTracks()[0]
      track.applyConstraints({advanced:[{torch:v}]});
    }
    const zoom=(v=2)=>{
      const track=stream.getTracks()[0]
      track.applyConstraints({advanced:[{zoom:v}]});
    }
    const exposureCompensation=(v=0.5)=>{
      const track=stream.getTracks()[0]
      track.applyConstraints({advanced:[{exposureCompensation:v}]});
    }
    const aspectRatio=(v=0.5)=>{
      const track=stream.getTracks()[0]
      track.applyConstraints({advanced:[{aspectRatio:v}]});
    }
    const facingMode=(v='user')=>{
      const track=stream.getTracks()[0]
      track.applyConstraints({advanced:[{facingMode:v}]});
    }
    const frameRate=(v=30)=>{
      const track=stream.getTracks()[0]
      track.applyConstraints({advanced:[{frameRate:v}]});
    }
    const reload=(kill=true)=>{
      navigator.mediaDevices.getUserMedia({ ...re, ...re2 }).then(e => {stream = e;onReady(stream)})
      //info=stream.getTracks()[0].getCapabilities()
      if(kill)dispose()
    }
    reload(false)
    const reconfig=(config,extra={})=>{
      re=config;
      re2=extra;
    }
    return Object.freeze({
      dispose,
      stream,
      torch,
      zoom,
      exposureCompensation,
      facingMode,
      aspectRatio,
      frameRate,
      apply,
      reconfig,
      reload,
      connect(v,start=true){
        if(!stream)return 'ERROR'
        v.srcObject=stream
        if(start)v.root?.play()
      },
      callOnReady(f){
        onReady=f
      }
    })
})
const VideoRecorder = (({ stream = null, onReady = () => {}, onData = () => {}, onStop = () => {} } = {}) => {
  let mediaRecorder = null;
  let recordedChunks = [];
  let activeStream = stream;
  
  const start = () => {
    if (!activeStream) {
      console.warn('No media stream available for recording.');
      return;
    }
    recordedChunks = [];
    mediaRecorder = new MediaRecorder(activeStream, { mimeType: 'video/webm; codecs=vp8,opus' });
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
        onData(event.data);
      }
    };
    
    mediaRecorder.onstart = () => {
      onReady();
    };
    
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      onStop(blob);
    };
    
    mediaRecorder.onerror = (event) => {
      console.error('MediaRecorder error:', event.error);
    };
    
    mediaRecorder.start();
  };
  
  const stop = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
  };
  
  const pause = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.pause();
    }
  };
  
  const resume = () => {
    if (mediaRecorder && mediaRecorder.state === 'paused') {
      mediaRecorder.resume();
    }
  };
  
  const setStream = (newStream) => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    activeStream = newStream;
  };
  
  const isRecording = () => mediaRecorder && mediaRecorder.state === 'recording';
  
  return Object.freeze({
    start,
    stop,
    pause,
    resume,
    setStream,
    isRecording,
    get data(){
      return recordedChunks
    },
    get blob(){
      return new Blob([recordedChunks],{type:'video/webp'})
    }
  });
});
const MicrophoneConfig=({sampleRate=44100,sampleSize=16,latency=0.01,echoCancellation=true,noiseSuppression=true,autoGainControl=false,channelCount=2}={})=>{
  return({audio:{
  echoCancellation,
  noiseSuppression,
  autoGainControl,
  channelCount,
  sampleRate,
  sampleSize,
  latency
  }})
}
const Microphone=(({config=MicrophoneConfig(),extra={},ready=Zenith.Empty}={}) => {
    let re=config,re2=extra
    let stream=null
    let onReady=ready
    const dispose=()=>{
      stream.getTracks().forEach(track => track.stop())
    }
    const reload=(kill=true)=>{
      navigator.mediaDevices.getUserMedia({ ...re, ...re2 }).then(e => {stream = e;onReady(stream)})
      if(kill)dispose()
    }
    reload(false)
    const reconfig=(config,extra={})=>{
      re=config;
      re2=extra;
    }
    return Object.freeze({
      dispose,
      stream,
      reconfig,
      reload,
      connect(v,start=true){
        if(!stream)return 'ERROR'
        v.srcObject=stream
        if(start)v.root?.play()
      },
      callOnReady(f){
        onReady=f
      }
    })
})
const AudioRecorder = (({ stream = null, onReady = () => {}, onData = () => {}, onStop = () => {} } = {}) => {
  let mediaRecorder = null;
  let recordedChunks = [];
  let activeStream = stream;
  
  const start = () => {
    if (!activeStream) {
      console.warn('No media stream available for recording.');
      return;
    }
    recordedChunks = [];
    mediaRecorder = new MediaRecorder(activeStream, { mimeType: 'video/webm; codecs=vp8,opus' });
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
        onData(event.data);
      }
    };
    
    mediaRecorder.onstart = () => {
      onReady();
    };
    
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      onStop(blob);
    };
    
    mediaRecorder.onerror = (event) => {
      console.error('MediaRecorder error:', event.error);
    };
    
    mediaRecorder.start();
  };
  
  const stop = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
  };
  
  const pause = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.pause();
    }
  };
  
  const resume = () => {
    if (mediaRecorder && mediaRecorder.state === 'paused') {
      mediaRecorder.resume();
    }
  };
  
  const setStream = (newStream) => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    activeStream = newStream;
  };
  
  const isRecording = () => mediaRecorder && mediaRecorder.state === 'recording';
  
  return Object.freeze({
    start,
    stop,
    pause,
    resume,
    setStream,
    isRecording,
    get data(){
      return recordedChunks
    },
    get blob(){
      return new Blob([recordedChunks],{type:'audio/webm'})
    }
  });
});
class BoxHLayout extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'justify', 'height', 'gap', 'align', 'spaceOut', 'spaceEvenly', 'fill', 'fillX', 'fillY'];
  }
  constructor() {
    super();
    this.style.display = 'flex';
    this.style.flexDirection = 'row';
  }
  connectedCallback() {
    BoxHLayout.observedAttributes.forEach(attr => {
      if (this.hasAttribute(attr)) {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr));
      }
    });
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'width':
        this.style.width = newValue || '';
        break;
      case 'height':
        this.style.height = newValue || '';
        break;
      case 'gap':
        this.style.gap = newValue || '';
        break;
      case 'align':
        this.style.alignItems = newValue || '';
        break;
      case 'justify':
        this.style.justifyContent = newValue || '';
        break;
      case 'spaceOut':
        if (this.hasAttribute('spaceOut')) this.style.justifyContent = 'space-between';
        else if (!this.hasAttribute('spaceEvenly')) this.style.justifyContent = '';
        break;
      case 'spaceEvenly':
        if (this.hasAttribute('spaceEvenly')) this.style.justifyContent = 'space-evenly';
        else if (!this.hasAttribute('spaceOut')) this.style.justifyContent = '';
        break;
      case 'fill':
        if (this.hasAttribute('fill')) {
          this.style.width = '100%';
          this.style.height = '100%';
        } else {
          this.style.width = '';
          this.style.height = '';
        }
        break;
      case 'fillX':
        if (this.hasAttribute('fillX')) this.style.width = '100%';
        else this.style.width = '';
        break;
      case 'fillY':
        if (this.hasAttribute('fillY')) this.style.height = '100%';
        else this.style.height = '';
        break;
    }
  }
}
customElements.define('z-boxh',BoxHLayout)
class BoxVLayout extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'justify', 'height', 'gap', 'align', 'spaceOut', 'spaceEvenly', 'fill', 'fillX', 'fillY'];
  }
  constructor() {
    super();
    this.style.display = 'flex';
    this.style.flexDirection = 'column'; // Vertical layout
  }
  connectedCallback() {
    BoxVLayout.observedAttributes.forEach(attr => {
      if (this.hasAttribute(attr)) {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr));
      }
    });
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'width':
        this.style.width = newValue || '';
        break;
      case 'height':
        this.style.height = newValue || '';
        break;
      case 'gap':
        this.style.gap = newValue || '';
        break;
      case 'align':
        this.style.alignItems = newValue || '';
        break;
      case 'justify':
        this.style.justifyContent = newValue || '';
        break;
      case 'spaceOut':
        if (this.hasAttribute('spaceOut')) this.style.justifyContent = 'space-between';
        else if (!this.hasAttribute('spaceEvenly')) this.style.justifyContent = '';
        break;
      case 'spaceEvenly':
        if (this.hasAttribute('spaceEvenly')) this.style.justifyContent = 'space-evenly';
        else if (!this.hasAttribute('spaceOut')) this.style.justifyContent = '';
        break;
      case 'fill':
        if (this.hasAttribute('fill')) {
          this.style.width = '100%';
          this.style.height = '100%';
        } else {
          this.style.width = '';
          this.style.height = '';
        }
        break;
      case 'fillX':
        if (this.hasAttribute('fillX')) this.style.width = '100%';
        else this.style.width = '';
        break;
      case 'fillY':
        if (this.hasAttribute('fillY')) this.style.height = '100%';
        else this.style.height = '';
        break;
    }
  }
}
customElements.define('z-boxv', BoxVLayout);
class BoxGridLayout extends HTMLElement {
  static get observedAttributes() {
    return ['columns', 'cellsize', 'gap', 'width', 'height', 'fill', 'fillx', 'filly'];
  }
  
  constructor() {
    super();
    this.style.display = 'grid';
    this.style.gridAutoRows = 'auto'; // default row height
  }
  
  connectedCallback() {
    BoxGridLayout.observedAttributes.forEach(attr => {
      if (this.hasAttribute(attr)) {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr));
      }
    });
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'columns':
        this._updateColumns(newValue);
        break;
      case 'cellsize':
        this._updateCellSize(newValue);
        break;
      case 'gap':
        this.style.gap = newValue || '';
        break;
      case 'width':
        this.style.width = newValue || '';
        break;
      case 'height':
        this.style.height = newValue || '';
        break;
      case 'fill':
        if (this.hasAttribute('fill')) {
          this.style.width = '100%';
          this.style.height = '100%';
        } else {
          this.style.width = '';
          this.style.height = '';
        }
        break;
      case 'fillx':
        if (this.hasAttribute('fillx')) this.style.width = '100%';
        else this.style.width = '';
        break;
      case 'filly':
        if (this.hasAttribute('filly')) this.style.height = '100%';
        else this.style.height = '';
        break;
    }
  }
  
  _updateColumns(value) {
    const columns = parseInt(value, 10);
    const cellSize = this.getAttribute('cellsize') || '150px';
    
    if (columns > 0) {
      // Fixed number of columns with fixed cell size
      this.style.gridTemplateColumns = `repeat(${columns}, ${cellSize})`;
    } else {
      // Auto-fit columns with min cell size and flexible max
      this.style.gridTemplateColumns = `repeat(auto-fit, minmax(${cellSize}, 1fr))`;
    }
  }
  
  _updateCellSize(value) {
    // Recalculate columns with new cell size
    this._updateColumns(this.getAttribute('columns') || '0');
  }
}

customElements.define('z-boxgrid', BoxGridLayout);
class BoxStackLayout extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height', 'gap', 'fill', 'fillx', 'filly', 'align', 'justify'];
  }
  
  constructor() {
    super();
    this.style.position = 'relative'; // parent relative for absolute children
    this._gap = '0px';
  }
  
  connectedCallback() {
    BoxStackLayout.observedAttributes.forEach(attr => {
      if (this.hasAttribute(attr)) {
        this.attributeChangedCallback(attr, null, this.getAttribute(attr));
      }
    });
    this._updateChildrenPositioning();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'width':
        this.style.width = newValue || '';
        break;
      case 'height':
        this.style.height = newValue || '';
        break;
      case 'gap':
        this._gap = newValue || '0px';
        this._updateChildrenPositioning();
        break;
      case 'fill':
        if (this.hasAttribute('fill')) {
          this.style.width = '100%';
          this.style.height = '100%';
        } else {
          this.style.width = '';
          this.style.height = '';
        }
        break;
      case 'fillx':
        if (this.hasAttribute('fillx')) this.style.width = '100%';
        else this.style.width = '';
        break;
      case 'filly':
        if (this.hasAttribute('filly')) this.style.height = '100%';
        else this.style.height = '';
        break;
      case 'align':
      case 'justify':
        // These can be used for alignment inside stacked children if needed
        break;
    }
  }
  
  _updateChildrenPositioning() {
    const children = Array.from(this.children);
    const gapValue = parseFloat(this._gap) || 0;
    
    children.forEach((child, index) => {
      child.style.position = 'absolute';
      child.style.top = `${index * gapValue}px`;
      child.style.left = `${index * gapValue}px`;
      child.style.width = `calc(100% - ${index * gapValue}px)`;
      child.style.height = `calc(100% - ${index * gapValue}px)`;
      child.style.boxSizing = 'border-box';
      child.style.pointerEvents = index === children.length - 1 ? 'auto' : 'none'; // only top item interactive
      child.style.zIndex = index; // stack order
    });
  }
}

customElements.define('z-boxstack', BoxStackLayout);

Element.prototype.zenithAnimate = function(keyframesCss, options = {}, onEnd) {
  // Generate a unique animation name
  const animationName = 'anim_' + Math.random().toString(36).substr(2, 9);

  // Create a style element to hold the keyframes
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';

  // Replace placeholder animation name in keyframes with unique name
  const keyframesWithUniqueName = keyframesCss.replace(/@keyframes\s+[\w-]+/, `@keyframes ${animationName}`);

  styleEl.textContent = keyframesWithUniqueName;
  document.head.appendChild(styleEl);

  // Prepare animation CSS properties
  const {
    duration = '1s',
    timingFunction = 'linear',
    delay = '0s',
    iterationCount = 1,
    direction = 'normal',
    fillMode = 'forwards',
    playState = 'running',
  } = options;

  // Apply animation to the element
  this.style.animationName = animationName;
  this.style.animationDuration = duration;
  this.style.animationTimingFunction = timingFunction;
  this.style.animationDelay = delay;
  this.style.animationIterationCount = iterationCount;
  this.style.animationDirection = direction;
  this.style.animationFillMode = fillMode;
  this.style.animationPlayState = playState;

  // Cleanup after animation ends and call onEnd callback if provided
  const cleanup = (event) => {
    if (event.animationName === animationName) {
      this.style.animationName = '';
      styleEl.remove();
      this.removeEventListener('animationend', cleanup);
      if (typeof onEnd === 'function') {
        onEnd.call(this, event);
      }
    }
  };

  this.addEventListener('animationend', cleanup);

  // Return the animation name for reference if needed
  return animationName;
};
class CNNumber {
  constructor(value = 0, { min = -Infinity, max = Infinity } = {}) {
    this._value = value;
    this.min = min;
    this.max = max;
    this._clamp();
  }

  _clamp() {
    if (this._value > this.max) this._value = this.max;
    if (this._value < this.min) this._value = this.min;
  }

  valueOf() {
    return this._value;
  }

  toString() {
    return String(this._value);
  }

  add(n) {
    this._value += n;
    this._clamp();
    return this; // for chaining
  }

  subtract(n) {
    this._value -= n;
    this._clamp();
    return this; // for chaining
  }

  // Support ++ operator by defining a setter for value
  set value(newValue) {
    this._value = newValue;
    this._clamp();
  }

  get value() {
    return this._value;
  }
}
class CNString{
  constructor(value='',{not=[],onNot=()=>''}={}){
    this.value=''
    this.update(value)
    this.not=not
    this.onNot=onNot
  }
  update(v){
    this.value=this.check(((typeof v === 'string')?v:''))
  }
  check(v){
    let has=false
    for(let i=0;i<this.not.lenght;i++){
      if(v.includes(this.not[i])){
        has=true
      }
    }
    if(has)this.value=onNot(this.value)
  }
  valueOf(){
    return this.value
  }
  toString(){
    return this.value
  }
}
const CN=Object.freeze({
  'Number':CNNumber,
  'String':CNString
})
const CString=(...m)=>new CNString(...m)
const CNumber=(...m)=>new CNNumber(...m)
return Object.freeze({
  Writer,Template,DOM,APP,Process,Threads,StorageTester,Clock,ServiceWorker,Binary,Stream,request,Router,Emitter,Thread,SubProcess,FileManager,DataBase,Type,Flex,BindingManager,SetupBind,Empty,FormValidator,FormHandle,DefaultLoad,Binding,FileSystem,$fs,MsgBox,PopMsg,SideBar,InternalRouter,$func,$func_remove,$func_has,$d,$data,$data_has,$data_remove,SmartBinding,$bind:Binding,RouteWrapper,setRouteData,getRouteData,Link,Widgets,ZNative,ZNativeImport,setGlobal,TemplateImport,CameraConfig,Camera,FacingMode,VideoRecorder,Microphone,MicrophoneConfig,AudioRecorder,CNumber,CString,CN,ZNativeFrom
})
})();