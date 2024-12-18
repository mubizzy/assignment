//**************Task 1: Voting Eligibility with If-Else***************************//
function checkVotingEligibility(age: number): void {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

// Example usage
checkVotingEligibility(20); // Outputs: Eligible to vote
checkVotingEligibility(16); // Outputs: Not eligible to vote

//**********************Task 2: Day of Week with Switch-Case****************************//
function getDayOfWeek(day: number): void {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
  }
}

// Example usage
getDayOfWeek(3); // Outputs: Wednesday
getDayOfWeek(8); // Outputs: Invalid day

//*************************Task 3: Ternary Operator for Student Pass/Fail****************//
function checkStudentStatus(score: number): void {
  const result = score >= 50 ? "Passed" : "Failed";
  console.log(result);
}

// Example usage
checkStudentStatus(75); // Outputs: Passed
checkStudentStatus(40); // Outputs: Failed

//****************************** Task 4: Greeting with Type Guards********************//
function greet(person: string | null): void {
  if (person !== null) {
    console.log(`Hello, ${person}`);
  } else {
    console.log("No name provided");
  }
}

// Example usage
greet("Alice"); // Outputs: Hello, Alice
greet(null); // Outputs: No name provided
