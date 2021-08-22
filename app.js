(() => {

    /* Global Variables */
    let bmiPosts = document.getElementById("bmiposts");
    let calcula = document.getElementById("calcula");
    document.getElementById('bmiposts').style.display = 'none'; // display this elemnt to hide it 

   let formss = document.getElementById("formss");
   const form = document.getElementById("bmi");
   const heightValue = document.getElementById("heightValue");
   const weightValue = document.getElementById("weightValue");
 
//    addEventListener to the form to submin 
   form.addEventListener("submit", onSubmit, false);  
   function onSubmit(e) {
     e.preventDefault();
     let [weight, height] = getBodyParams();
     if(!isNaN(calculateBMI(weight, height))){
     const bmi = calculateBMI(weight, height);
     const msg = analyzeResult(bmi);
     displayResult(bmi, msg);
 
   }
   }
    // function to get value from the input 
   function getBodyParams() {
     const $weightInput = form.querySelector("input[name=weight]");// input height
     const $heightInput = form.querySelector("input[name=height]"); // input height
      // return 
     return [$weightInput, $heightInput].map($input =>
       getInput($input)
     );
   }
   
   function getInput($input) {
     if ($input.value) {
       if (!!+$input.value) {
         return +$input.value;
       }
     }
   }
 
 
   
   function calculateBMI(weight, height) {
     if (weight && height) {        
       return (weight / (height / 100 * height / 100)).toFixed(1);
 
     } // if the user click on the submit button without fill the fields will show the alert message
       else {
       calcula.innerHTML = `<p>من فضلك، املأ جميع الحقول واستخدم الأرقام فقط*</p>`;       
   }
     }
 
   // function to show result with numbers and tips 
   function analyzeResult(bmi) {
   document.getElementById('calcula').style.display = 'none';
    const articals = form.querySelector(".articals");
 
     let healthMessage = '';
     // if the resulte less than 18.5 then "its underweight" show this tips and result 
     if (bmi < 18.5) {
       healthMessage = "وزن ناقص";
       articals.innerHTML =` <h3 class ="tips"> نصائح شخصية </h3>
       <p>ماذا</p>`;
     }  // if the resulte bettwen 18.5 to 25 "healthy weight" show this tips and result 
      else if (bmi > 18.5 && bmi < 25) {
       healthMessage = "وزن صحى ومثالى";
       articals.innerHTML =` <h3 class ="tips"> نصائح شخصية </h3>
       <p>ماذا</p>`;
     } 
     // if the resulte bettwen 25 to 30 show this tips and result 
     else if (bmi > 25 && bmi < 30 ) {
       healthMessage = "وزن زائد";
              articals.innerHTML =` <h3 class ="tips"> نصائح شخصية </h3>
         <p>ماذا لو كان بإمكانك تناول الكعك و فقدان الوزن؟ يعدك النظام الغذائي الذي يسمى سيكو (CICO)؛ اختصار لمصطلح "السعرات الحرارية الداخلة، السعرات الحرارية الخارجة" بذلك.</p>
     `;
     } // if not show this tips 
     else {
       healthMessage = "سمنه";
         articals.innerHTML =` <h3 class ="tips"> نصائح شخصية </h3>
         <p>ماذا لو كان بإمكانك تناول الكعك و فقدان الوزن؟ يعدك النظام الغذائي الذي يسمى سيكو (CICO)؛ اختصار لمصطلح "السعرات الحرارية الداخلة، السعرات الحرارية الخارجة" بذلك.</p>
         <p>مبدأ النظام الغذائي واضح جدًا: تناول كل ما تريد بما في ذلك من وجبات سريعة وأنقص وزنك طالما تحرق سعرات حرارية أكثر مما تستهلك كل يوم.</p>
         <p>لأنه بإمكانك تناول كل ما تريد و أي شئ تريد،حيث أنه كل ما يهم هو مجموع السعرات الحرارية، لا يوافق خبراء التغذية على هذه الحمية.</p>
            `;
 
     }
     
     return healthMessage;
   }  
   
   // function to show the resulte with table
   function displayResult(bmi, msg) {
     const result = form.querySelector(".result");
     const health = form.querySelector(".health");
     document.getElementById('bmiposts').style.display = 'block';
           document.getElementById('formss').style.display = 'none';
     result.innerHTML = `كتلة الجسم <span> ${bmi} كجم </span> (${msg} )`;
     health.innerHTML = `<h3>نتائج القياسات الشخصية</h3>
     <table>
   <tbody>
     <tr>
       <td>مؤشر كتلة الجسم الحالى</td>     
       <td>${bmi} كجم/م<sup>2</sup></td>
     </tr>
         <tr>
       <td>معدل مؤشر كتلة الجسم الصحي</td>
       
       <td>18.5 كجم/م2 - 25 كجم/م2</td>
     </tr>
         <tr>
       <td>الوضع الصحى</td>      
       <td>${msg}</td>
     </tr>
   <tr>
       <td>يفضل أن يكون وزنك بين
 </td>     
       <td>  ${heightValue.value  - 110} كجم  - ${heightValue.value  - 100} كجم</td>
     </tr>
 
   </tbody>
 </table>`;
 
   }
 
 })();
 
 
