#! /usr/bin/env node
import inquirer from 'inquirer';
// Student Management System
class studentInfo {
    Id;
    Name;
    courseEnrolled;
    courseFee;
    constructor(Id, Name, courseEnrolled, courseFee) {
        this.Id = Id;
        this.Name = Name;
        this.courseEnrolled = courseEnrolled;
        this.courseFee = courseFee;
    }
}
;
// variables
let RandomId = 45662;
let studentId = "";
let QuitConfirmation = true;
let studentData = [];
let CoursesFee = 0;
//  use do while loop
do {
    // use inquirer to show list
    let input = await inquirer.prompt({
        type: "list",
        name: "recieve",
        message: "Select a option",
        choices: ["Enroll a student", "Show student status", "Quit"],
    });
    //  use if condition for a choice
    if (input.recieve === "Enroll a student") {
        let enroll = await inquirer.prompt({
            type: "input",
            name: "recieve",
            message: "Enter your name",
        });
        let studentNametrimmed = enroll.recieve.trim().toLowerCase();
        let studentNamecheck = studentData.map(check => check.Name);
        if (studentNamecheck.includes(studentNametrimmed) === false) {
            if (studentNametrimmed !== "") {
                RandomId++;
                studentId = "ST8F" + RandomId;
                console.log(`\nWelcome ${studentNametrimmed}` + "!");
                console.log("\n\t Your account has been created\n");
                let courseChoice = await inquirer.prompt({
                    type: "list",
                    name: "recieve",
                    message: "Select a course",
                    choices: ["Programming", "Graphic Designing", "Digital Marketing"]
                });
                let courseConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "recieve",
                    message: "Do you want to enroll in this course"
                });
                switch (courseChoice.recieve) {
                    case "Programming":
                        CoursesFee = 4500;
                        break;
                    case "Graphic Designing":
                        CoursesFee = 5000;
                        break;
                    case "Digital Marketing":
                        CoursesFee = 2500;
                        break;
                }
                if (courseConfirm.recieve === true) {
                    console.log("\n\t You has been enrolled in this course");
                    let EnrolledStudent = new studentInfo(studentId, studentNametrimmed, [courseChoice.recieve], CoursesFee);
                    studentData.push(EnrolledStudent);
                }
                else
                    (console.log("\n\tOk! Think about it "));
            }
            else
                (console.log("\n Please enter a valid name"));
        }
        else
            (console.log("\n This name is already registered"));
    }
    else if (input.recieve === "Show student status") {
        if (studentData.length !== 0) {
            let studentEnrolleddata = studentData.map(data => data.Name);
            let StudentName = await inquirer.prompt({
                type: "list",
                name: "recieve",
                message: "Select a name",
                choices: studentEnrolleddata,
            });
            let showStatus = studentData.find(status => status.Name === StudentName.recieve);
            console.log("Student Information ");
            console.log(showStatus);
            console.log("\n");
        }
        else
            (console.log("\n No record to show\n"));
    }
    else if (input.recieve === "Quit") {
        let quitconfirm = await inquirer.prompt({
            type: "confirm",
            name: "recieve",
            message: "\n Are you want to quit? "
        });
        if (quitconfirm.recieve === true) {
            QuitConfirmation = false;
            console.log("\n Quit...");
        }
        else
            (console.log("\n Continue..."));
    }
} while (QuitConfirmation);
