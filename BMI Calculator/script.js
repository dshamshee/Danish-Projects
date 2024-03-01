const button = document.querySelector('button')


button.addEventListener( 'click', (e)=>{
  e.preventDefault();
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;  
  const result = document.querySelector('#results')
  if(height === '' || height <= 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
  }else if(weight === '' || weight <= 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
  }else {
    const bmi = ( weight /( (height*height) / 10000) ).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`; 
    if(bmi < 18.6){
      result.style.display = "flex";
      result.style.flexDirection = "column";
      const newspan = document.createElement('span');
      newspan.textContent = "Under Weight";
      result.appendChild(newspan);
    }
    if(bmi > 18.6 && bmi < 24.9){
      result.style.display = "flex";
      result.style.flexDirection = "column";
      const newspan = document.createElement('span');
      newspan.textContent = "Normal Range";
      result.appendChild(newspan);
    }
    if(bmi > 24.9){
      result.style.display = "flex";
      result.style.flexDirection = "column";
      const newspan = document.createElement('span');
      newspan.textContent = "OverWeight";
      result.appendChild(newspan);
    }
  };
} );