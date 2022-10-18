{
                // Rotation Module

                
                // Creating Variables for the Html
    var mainRotate = document.querySelector('.con5 .parent1 .child1')
    var innerCircle = document.querySelector('.circle')
    var rotateCircle = document.querySelectorAll('.round')
    var buttonUp = document.querySelector('.arrow1')
    var buttonDown = document.querySelector('.arrow2')
    var img = document.querySelectorAll('.child1 img')
    var box1 = document.querySelectorAll('.box1 .b1')
    var box2 = document.querySelectorAll('.box1 .b2')
    var box3 = document.querySelectorAll('.box2 .b1')
    var box4 = document.querySelectorAll('.box2 .b2')
            // Creating the circle display
    var mainText = document.querySelector('.head3')
    var text1 = document.querySelector('.head3 .text1')
    var text2 = document.querySelector('.head3 .text2')
    var text3 = document.querySelector('.head3 .text3')
    var text4 = document.querySelector('.head3 .text4')
    var head1 = document.querySelector('.head2 .resp')
    var head2 = document.querySelector('.head2 .flag')
    var head3 = document.querySelector('.head2 .eight')
    var head4 = document.querySelector('.head2 .book')
    var texrIterator = 0

            // Nav Display variable
    var p1 = document.querySelectorAll('.p1')  
    var navDisplay = document.querySelector('.floatingDiv')

            //Image change variable
    var slideImg = document.querySelector('.slideImg')
    var loader = document.querySelector('.loader')
    var textChange = document.querySelector('.textChange')
    var loading = 5
  
    var nextPage = ['images/woman.jpg','images/Frans_Rosen.jpg']
    var neaxText = [`Pete Yaworski <small>@Yaworski</small>`,`Frans Rosen <small>@Rosen</small>`]
    var countImg = -1


                //Nav Display
        p1.forEach((e)=>{
            e.addEventListener('mouseenter',()=>{
                navDisplay.style.opacity = '100%'
                navDisplay.style.display = 'block'
                navDisplay.style.display = 'flex'

            })
            e.addEventListener('mouseleave',()=>{
                    navDisplay.style.opacity = '0%'
                })
                navDisplay.addEventListener('mouseenter',()=>{
                    navDisplay.style.opacity = '100%'
                    navDisplay.style.display = 'block'
                    navDisplay.style.display = 'flex'
                })
                navDisplay.addEventListener('mouseleave',()=>{
                    navDisplay.style.opacity = '0%'
                    navDisplay.style.display = 'none'
                   
                })
             
            
        })
  
    
    // Loader function
    setInterval(() => {  
        if (loading == 395) {
            countImg++
            loading = 0    
            if (countImg ==2 ) {
                countImg = 0
            }
            // console.log(countImg)
            slideImg.src = nextPage[countImg]
            textChange.innerHTML = neaxText[countImg]
           
           
        }
        loader.style.width = loading +  'px'
        loading += 5
    




    }, 100);


    // Box Array
    var arrayOfBoxes = [box4, box3 ,box1, box2]

    // Rotaion Iteration
    var degreeup = 0

    // img Rotation Iteration
    var imgdeg = 45

    // Box iteration
    var boxCountDown = 0

    // Make the first container spin
    const runing = setTimeout(run,100)
    window.addEventListener('click',(e)=>{
        if (e.path[0].className === 'fa fa-angle-up') {
            clearTimeout(runing)
            arrayOfBoxes[3][0].style.transform = 'scale(1)'
            arrayOfBoxes[3][0].style.backgroundColor = '#F0F0F0'
            arrayOfBoxes[3][0].style.zIndex = '0'
            head1.style.borderBottom = 'none'

        }
    })
    function run() {
        let img = arrayOfBoxes[3][0].childNodes[1]
        let border = arrayOfBoxes[3][0];
        border.style.border = '1px solid black';
        border.style.opacity = '100%';
        img.style.transform = 'rotate(-45deg)';
        img.src = 'images/response_animated.gif';
        arrayOfBoxes[3][0].style.transform = 'scale(1.3)'
        arrayOfBoxes[3][0].style.backgroundColor = 'white'
        arrayOfBoxes[3][0].style.zIndex = '1'
        border.style.opacity = '100%';
        head1.style.borderBottom = '5px solid #EC1075'
    
    }

    // The rotation of the image
    function rotate(e) {
        e.style.transform = 'rotate('+ imgdeg +'deg)';
        e.style.transition = 'ease-in-out 0.2s';
    }

    // The rotaion of the container
    function MainrotateUp() {
        
        if (boxCountDown === 1 ) {
            arrayOfBoxes[0][0].style.transform = 'scale(1.0)';   
            arrayOfBoxes[0][0].style.backgroundColor = '#F0F0F0';
            arrayOfBoxes[0][0].style.zIndex = '0';
            let img = arrayOfBoxes[1][0].childNodes[1];
            let border = arrayOfBoxes[1][0];
            img.src = 'images/bounty_animated.gif';
            img.style.width = '210px'
            border.style.border = '1px solid black';
            border.style.opacity = '100%';
            texrIterator = 200
            mainText.style.transform = 'translateX('+-texrIterator+'%)'
            head3.style.borderBottom = '5px solid #EC1075'
            


        }else{
            let img = arrayOfBoxes[1][0].childNodes[1];
            let border = arrayOfBoxes[1][0];
            img.src = 'images/bounty_static.png';
            border.style.border = ' 1px solid #CCCCCC';
            border.style.opacity = '50%';
            head3.style.borderBottom = 'none'


    
        }
        if (boxCountDown === 2 ) {
            arrayOfBoxes[1][0].style.transform = 'scale(1.0)'   
            arrayOfBoxes[1][0].style.backgroundColor = '#F0F0F0'
            arrayOfBoxes[1][0].style.zIndex = '0'
            let img = arrayOfBoxes[2][0].childNodes[1]
            let border = arrayOfBoxes[2][0];
            border.style.border = '1px solid black';
            border.style.opacity = '100%';
            img.src = 'images/hanshake.gif';
            img.style.width = '220px'    
            texrIterator = 300
            mainText.style.transform = 'translateX('+-texrIterator+'%)'  
            head4.style.borderBottom = '5px solid #EC1075'

            
        } else{
            let img = arrayOfBoxes[2][0].childNodes[1]
            let border = arrayOfBoxes[2][0];
            border.style.border = ' 1px solid #CCCCCC';
            img.src = 'images/services_static.png';
            img.style.width = '190px'
            border.style.opacity = '50%';
            head4.style.borderBottom = 'none'

       

    
        }
        if (boxCountDown === 3 ) {
            arrayOfBoxes[2][0].style.transform = 'scale(1.0)'   
            arrayOfBoxes[2][0].style.backgroundColor = '#F0F0F0'
            arrayOfBoxes[2][0].style.zIndex = '0'
            let img = arrayOfBoxes[3][0].childNodes[1]
            let border = arrayOfBoxes[3][0];
            border.style.border = '1px solid black';
            border.style.opacity = '100%';
            img.src = 'images/response_animated.gif';
            if (texrIterator === 300) {
                texrIterator = 0
            mainText.style.transform = 'translateX('+-texrIterator+'%)'
            head1.style.borderBottom = '5px solid #EC1075'


            }
        }else{
            let img = arrayOfBoxes[3][0].childNodes[1]
            let border = arrayOfBoxes[3][0];
            border.style.border = ' 1px solid #CCCCCC'
            img.src = 'images/books(1).png';
            border.style.opacity = '50%';
            head1.style.borderBottom = 'none'


        } 
        if (boxCountDown === 4 ) {
            arrayOfBoxes[3][0].style.transform = 'scale(1.0)'   
            arrayOfBoxes[3][0].style.backgroundColor = '#F0F0F0'
            arrayOfBoxes[3][0].style.zIndex = '0'
            boxCountDown = 0
      
            
       
        }
        if (boxCountDown === 0) {
            let img = arrayOfBoxes[0][0].childNodes[1]
            let border = arrayOfBoxes[0][0];
            border.style.border = '1px solid black';
            border.style.opacity = '100%';
            img.src = 'images/pentest_animated.gif';
            img.style.width = '220px'
            texrIterator = 100
            mainText.style.transform = 'translateX('+-texrIterator+'%)'
            head2.style.borderBottom = '5px solid #EC1075'

        }else{
            let img = arrayOfBoxes[0][0].childNodes[1]
            let border = arrayOfBoxes[0][0];
            img.src = 'images/pentest_static.png';
            border.style.border = ' 1px solid #CCCCCC';
            border.style.opacity = '50%';
            head2.style.borderBottom = 'none'


    
        }
      
            arrayOfBoxes[boxCountDown][0].style.transform = 'scale(1.3)'
            arrayOfBoxes[boxCountDown][0].style.backgroundColor = 'white'
            arrayOfBoxes[boxCountDown][0].style.zIndex = '1'
            arrayOfBoxes[boxCountDown][0].style.transition = '500ms'
    
            boxCountDown++
    
    }
    
    // The rotation button navigation
    function RotateDiv() {
        window.addEventListener('click',(e)=>{
         
            if (e.path[0].className === 'fa fa-angle-up') {
                degreeup - 45
                degreeup-=45
                if (degreeup % -90 === 0) {
                    degreeup -= 45
                }
                mainRotate.style.transform = 'rotate('+degreeup+'deg)'
                mainRotate.style.transition = 'ease-in-out 0.3s'
                setTimeout(()=>{
                            img.forEach(rotate)
                            imgdeg += 90
                        },100)   
                        MainrotateUp()
                    


            }
              
          
        })
    }
 
    RotateDiv()







}
