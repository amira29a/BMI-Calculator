(() => {

    let bmiPosts = document.getElementById("bmiposts");
    let calcula = document.getElementById("calcula");
    document.getElementById('bmiposts').style.display = 'none';
 
 
   let formss = document.getElementById("formss");
   const form = document.getElementById("bmi");
   const heightValue = document.getElementById("heightValue");
   const weightValue = document.getElementById("weightValue");
 
 
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
 
   function getBodyParams() {
     const $weightInput = form.querySelector("input[name=weight]");
     const $heightInput = form.querySelector("input[name=height]");
     
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
 
     }
       else {
       calcula.innerHTML = `<p>من فضلك، املأ جميع الحقول واستخدم الأرقام فقط*</p>`;       
   }
      }
 
 
   function analyzeResult(bmi) {
   document.getElementById('calcula').style.display = 'none';
    const articals = form.querySelector(".articals");
 
     let healthMessage = '';
     if (bmi < 18.5) {
       healthMessage = "وزن ناقص";
     } else if (bmi > 18.5 && bmi < 25) {
       healthMessage = "وزن صحى ومثالى";
     } 
     else if (bmi > 25 && bmi < 30 ) {
       healthMessage = "وزن زائد";
              articals.innerHTML =` <h3 class ="tips"> نصائح شخصية </h3>
         <p>ماذا لو كان بإمكانك تناول الكعك و فقدان الوزن؟ يعدك النظام الغذائي الذي يسمى سيكو (CICO)؛ اختصار لمصطلح "السعرات الحرارية الداخلة، السعرات الحرارية الخارجة" بذلك.</p>
     `;
     }
     else {
       healthMessage = "سمنه";
         articals.innerHTML =` <h3 class ="tips"> نصائح شخصية </h3>
         <p>ماذا لو كان بإمكانك تناول الكعك و فقدان الوزن؟ يعدك النظام الغذائي الذي يسمى سيكو (CICO)؛ اختصار لمصطلح "السعرات الحرارية الداخلة، السعرات الحرارية الخارجة" بذلك.</p>
         <p>مبدأ النظام الغذائي واضح جدًا: تناول كل ما تريد بما في ذلك من وجبات سريعة وأنقص وزنك طالما تحرق سعرات حرارية أكثر مما تستهلك كل يوم.</p>
         <p>لأنه بإمكانك تناول كل ما تريد و أي شئ تريد،حيث أنه كل ما يهم هو مجموع السعرات الحرارية، لا يوافق خبراء التغذية على هذه الحمية.</p>
         <p>الصحة ليست عبارة عن مجرد فقدان الوزن وحده. عليك النظر إلى الحزمة بأكملها، قد تفقد الوزن فعلا من خلال اتباعك لهذا النظام الغذائي و لكن هناك جانب سلبي وهو نقص المغذيات أو حتى سوء التغذية.</p>
         <p>يشير خبراء التغذية إلى أهمية تناول الأطعمة الصحية مثل البروكلي، جوز البيكان، التوت، المعكرونة وزيت الزيتون، بدلا من اتباع نظام غذائي مجنون.</p>
         <p>يشير خبراء التغذية إلى أن أفضل حل لفقدان الوزن هو من خلال المزج بين الأكل الصحي و ممارسة الرياضة. قم بتخفيض كمية السعرات الحرارية عن طريق تقليل كمية و حجم الوجبة، بالإضافة إلى ممارسة الرياضة بانتظام بما لا يقل عن خمسة إلى ستة أيام في الأسبوع.</p>
         <p>لإنقاص الوزن عن طريق ممارسة الرياضة قم بممارسة تمارين القلب والأوعية الدموية -مثل المشي بسرعة أو الجري و ركوب الدراجات والسباحة – وتمارين المقاومة.</p>
            
     `;
 
     }
     
     return healthMessage;
   }
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
 
 