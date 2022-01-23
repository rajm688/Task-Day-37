Create Table Students(
SNo integer primary Key,
StudentName Text,
Phoneno integer,
Email Text,
Qualification Text)

insert into Students (SNo,StudentName,Phoneno,Email,Qualification) values
(1,"Rajkumar",9994055641,"raj@gmail.com","B. E"),
(2,"Soundar", 9845381723,"Soundar@gmail.com","B SC"),
(3,"Sudhan",9895343627,"Sudhan@gmail.com","MBA"),
(4,"sharmi",9884453245,"sharmi@gmail.com","B Ed"),
(5,"gopal",9884463245,"gopal@gmail.com","M tech")

Create Table Batch(
SNo integer primary Key,
BatchName Text,
Course Text,
StartingDate DATE,
Coordinator Text,
Language Text,
NoOfStudents integer)


insert into Batch (SNo,BatchName,Course,StartingDate,Coordinator,Language,NoOfStudents) values 
(1,"B29WD","MERN Stack",2020-10-11,"Divya","Tamil",30),
(2,"B29WE","MERN Stack",2020-10-11,"Divya","Tamil",30),
(3,"B30WD","Ethical Hacking",2020-10-11,"Divya","Tamil",30),
(4,"B31WD","MERN Stack",2020-10-11,"Divya","Tamil",30),
(5,"B31WE","MERN Stack",2020-10-11,"Divya","Tamil",30)

Create Table Task(
Topic Text,
TaskDate Date,
LastDayOfSubmition DATE,
NoOfStudentsSubmitted integer,
Remaining integer)


insert into Task (Topic, TaskDate,LastDayOfSubmition,NoOfStudentsSubmitted,Remaining) values
("HTML", 2020-10-11,2020-10-22,6,10),
("CSS",2020-10-12,2020-10-23, 7,9),
("BootStrap",2020-10-13,2020-10-23,1,15),
("React",2020-10-14,2020-10-24,5,11),
("SQL",2020-10-15,2020-10-25,3,13)

Create Table Mentors(
SNo integer primary Key,
Name Text,
Field text,
Language Text,
Age integer)

insert into Mentors (SNo,Name,Field,Language,Age) values 
(1,"Ragav","MERN Stack","English and Tamil",27),
(2,"Lavish","Front End","English",25),
(3,"Ravi","Ethical Hacking","Tamil",27),
(4,"Mohan","Back End","English and Tamil",28),
(5,"Soundar","MERN Stack","English and Tamil",30)