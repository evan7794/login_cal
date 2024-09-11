function appendValue(value) {
  const resultField = document.getElementById("result");

  // Prevent any action when "Error" is displayed
  if (resultField.value === "Error") return;

  const currentValue = resultField.value;

  // If the current value is "0" and the new value is an operator, keep the zero
  if (currentValue === "0" && (value === "+" || value === "-" || value === "×" || value === "÷")) {
    resultField.value = "0" + value;
  } else if (currentValue === "0" && value !== ".") {
    resultField.value = value;
  } else {
    resultField.value += value;
  }
}

function clearResult() {
  const resultField = document.getElementById("result");

  // Reset to initial state
  resultField.value = "0";
  resultField.style.color = ""; // Reset text color to default
}

function calculateResult() {
  const resultField = document.getElementById("result");

  // Prevent any action when "Error" is displayed
  if (resultField.value === "Error") return;

  // Replace symbols for JavaScript evaluation
  const expression = resultField.value.replace("×", "*").replace("÷", "/").replace("−", "-");

  try {
    // Evaluate the expression safely
    const result = eval(expression);

    // Display result if it's a finite number
    if (isFinite(result)) {
      resultField.value = result;
      resultField.style.color = ""; // Reset text color to default
    } else {
      throw new Error("Invalid calculation");
    }
  } catch (error) {
    displayError(resultField);
  }
}

function deleteLast() {
  const resultField = document.getElementById("result");

  // Prevent any action when "Error" is displayed
  if (resultField.value === "Error") return;

  // Remove the last character or reset to "0" if empty
  resultField.value = resultField.value.slice(0, -1) || "0";
}

function calculatePercentage() {
  const resultField = document.getElementById("result");

  // Prevent any action when "Error" is displayed
  if (resultField.value === "Error") return;

  const expression = resultField.value.replace("×", "*").replace("÷", "/").replace("−", "-");

  try {
    // Calculate percentage
    const result = eval(expression) / 100;

    // Display result if it's a finite number
    if (isFinite(result)) {
      resultField.value = result;
      resultField.style.color = ""; // Reset text color to default
    } else {
      throw new Error("Invalid calculation");
    }
  } catch (error) {
    displayError(resultField);
  }
}

function toggleSign() {
  const resultField = document.getElementById("result");

  // Prevent any action when "Error" is displayed
  if (resultField.value === "Error") return;

  const currentValue = resultField.value;

  // Toggle sign
  if (currentValue.startsWith('-')) {
    resultField.value = currentValue.substring(1);
  } else {
    resultField.value = `-${currentValue}`;
  }
}

function displayError(resultField) {
  resultField.value = "Error";
  resultField.style.color = "red"; // Set text color to red when there is an error

  // Reset to "0" after 5 seconds
  setTimeout(() => {
    resultField.value = "0";
    resultField.style.color = ""; // Reset text color to default after clearing the error
  }, 5000);
}
