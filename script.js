const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;
  const bmi = weight / (height * height);

  if (isNaN(bmi)) {
    result.textContent = 'Please enter first';
    return;
  }

  result.textContent = `Your BMI is ${bmi.toFixed(1)}`;
});
