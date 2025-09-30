const inputs = document.querySelectorAll(".code-input");
      let currentIndex = 0;

      // Focus on the first input
      inputs[0].focus();

      inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
          const value = e.target.value;
          if (value.length === 1 && /[0-9]/.test(value)) {
            // Move to next input if current is filled
            if (index < inputs.length - 1) {
              inputs[index + 1].focus();
              currentIndex = index + 1;
            }
          } else {
            e.target.value = ""; // Clear if not a number
          }
        });

        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" || e.key === "Delete") {
            if (input.value === "" && index > 0) {
              // Move to previous input if current is empty
              inputs[index - 1].focus();
              inputs[index - 1].value = "";
              currentIndex = index - 1;
            } else if (e.repeat) {
              // Handle long press of backspace
              let prevIndex = index;
              while (
                prevIndex >= 0 &&
                (inputs[prevIndex].value === "" || e.repeat)
              ) {
                inputs[prevIndex].value = "";
                if (prevIndex > 0) {
                  inputs[prevIndex - 1].focus();
                  prevIndex--;
                } else {
                  break;
                }
              }
              currentIndex = prevIndex;
            } else {
              input.value = ""; // Clear current input
            }
          }
        });

        // Prevent manual cursor movement to maintain flow
        input.addEventListener("keydown", (e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
          }
        });
      });

      // Submit form when all inputs are filled
      document.querySelector("form").addEventListener("submit", (e) => {
        const allFilled = Array.from(inputs).every(
          (input) => input.value.length === 1 && /[0-9]/.test(input.value)
        );
        if (!allFilled) {
          e.preventDefault();
          // alert("Please fill all fields with numbers only.");
        } else {
          const secretCode = Array.from(inputs)
            .map((input) => input.value)
            .join("");
          const hiddenInput = document.createElement("input");
          hiddenInput.type = "hidden";
          hiddenInput.name = "secret_code";
          hiddenInput.value = secretCode;
          e.target.appendChild(hiddenInput);
        }
      });