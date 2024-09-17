document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    const birthDate = new Date(year, month, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
    }

    const resultDiv = document.getElementById('result');
    
    if (isNaN(age) || age < 0) {
    resultDiv.textContent = "Please enter a valid date of birth.";
    } else {
    resultDiv.textContent = `You are ${age} years old.`;
    }
});
