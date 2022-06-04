const petName = prompt("نوع پت خود را وارد کنید  : ");
const petAge = prompt("سن پت خود را وارد کنید   : ");
function petFoodDog(petName, petAge) {
  if (petName == "dog" && petAge <= 9) {
    console.log("غذای مورد نیاز برای سگ شما شیر مخصوص سگ می باشد.:)");
  }
  if (petName == "dog" && petAge >= 10 && petAge <= 20) {
    console.log(
      "سگ شما در این سن از غذای مخصوص به سگ و شیرینی جایزه می تواند استفاده کند"
    );
  }
  if (petName == "dog" && petAge >= 21) {
    console.log(
      "سگ شما در این سن از غذای مخصوص به سگ و شیرینی جایزه و استخون مرغ و غیر ه  می تواند استفاده کند"
    );
  }
  // else  {
  //   console.log("اطلاعات وارد شده معتبر نمی باشد");
  //   }
  return;
}
function petFoodcat(petName, petAge) {
  if (petName == "cat" && petAge <= 9) {
    console.log("غذای مورد نیاز برای گربه شما شیر مخصوص گربه می باشد.:)");
  }
  if (petName == "cat" && petAge >= 10 && petAge <= 20) {
    console.log(
      "گربه شما در این سن از غذای مخصوص به گربه و شیرینی جایزه می تواند استفاده کند"
    );
  }
  if (petName == "cat" && petAge >= 21) {
    console.log(
      "گربه شما در این سن از غذای مخصوص به گربه و تن ماهی  می تواند استفاده کند"
    );
  }
  // else  {
  //   console.log("اطلاعات وارد شده معتبر نمی باشد");
  //   }
  return;
}

const returnDog = petFoodDog(petName, petAge);
const returnCat = petFoodcat(petName,petAge);

