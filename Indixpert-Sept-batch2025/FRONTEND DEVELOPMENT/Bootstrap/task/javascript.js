const users = [
  {
    id: 101,
    name: "alex JOHNSON",
    dob: "1992-06-15",
    salary: "55000",
    skills: ["html", "css", "javascript"]
  },
  {
    id: 102,
    name: " maria  smith",
    dob: "1988-11-03",
    salary: "72000",
    skills: ["react", "node", "css"]
  },
  {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "48000",
    skills: ["vue", "javascript", "html"]
  }
];


function processData(users) { 
  // TASK 1: String Operations
  let formattedNames = [];
  for (let i = 0; i < users.length; i++) {
    let cleanName = users[i].name.trim();
    cleanName = cleanName.toLowerCase();
    let words = cleanName.split(" ");

    let titleCaseName = "";
    for (let j = 0; j < words.length; j++) {
      if (words[j] !== "") { 
        let firstLetter = words[j][0].toUpperCase();
        let restOfWord = words[j].slice(1);
        titleCaseName = titleCaseName + firstLetter + restOfWord + " ";
      }
    }
    formattedNames.push(titleCaseName.trim());
  }
  
  // TASK 2: Array Operations
  let allSkills = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].skills.length; j++) {
      allSkills.push(users[i].skills[j]);
    }
  }
  let uniqueSkills = [];
  for (let i = 0; i < allSkills.length; i++) {
  
    if (uniqueSkills.indexOf(allSkills[i]) === -1) {
      uniqueSkills.push(allSkills[i]);
    }
  }
  uniqueSkills.sort();

  let jsCount = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].skills.indexOf("javascript") !== -1) {
      jsCount++;
    }
  }

  // TASK 3: Number Operations

  let salaries = [];
  for (let i = 0; i < users.length; i++) {
    salaries.push(Number(users[i].salary));
  }
  let total = 0;
  for (let i = 0; i < salaries.length; i++) {
    total = total + salaries[i];
  }
  let averageSalary = Math.round(total / salaries.length);
  let highestSalary = salaries[0];
  for (let i = 1; i < salaries.length; i++) {
    if (salaries[i] > highestSalary) {
      highestSalary = salaries[i];
    }
  }
  let lowestSalary = salaries[0];
  for (let i = 1; i < salaries.length; i++) {
    if (salaries[i] < lowestSalary) {
      lowestSalary = salaries[i];
    }
  }
  let salaryStats = {
    average: averageSalary,
    highest: highestSalary,
    lowest: lowestSalary
  };

  // TASK 4: Date Operations

  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();
  let oldestUser = { name: "", age: 0 };
  for (let i = 0; i < users.length; i++) {
    let parts = users[i].dob.split("-");
    let birthYear  = Number(parts[0]);
    let birthMonth = Number(parts[1]);
    let birthDay   = Number(parts[2]);

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth) {
      age = age - 1;
    } else if (currentMonth === birthMonth && currentDay < birthDay) {
      age = age - 1;
    }
  
    if (age > oldestUser.age) {
      oldestUser.name = formattedNames[i];
      oldestUser.age  = age;
    }
  }

  return {
    formattedNames: formattedNames,
    uniqueSkills: uniqueSkills,
    jsCount: jsCount,
    salaryStats: salaryStats,
    oldestUser: oldestUser
  };
}


let result = processData(users);

console.log("Formatted Names:", result.formattedNames);
console.log("Unique Skills (sorted):", result.uniqueSkills);
console.log("Users who know JavaScript:", result.jsCount);
console.log("Salary Stats:", result.salaryStats);
console.log("Oldest User:", result.oldestUser);