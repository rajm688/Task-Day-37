// Entering  Mongo DB shell
mongo

//Listing All DataBases
show dbs
//creating a new DataBase
use taskDay37

//Inserting Students Collections
db.Students.insertMany([
  {
    studentName: "Rajkumar",
    phoneNo: 9994055641,
    EMail: "raj@gmail.com",
    Qualification :"B. E"
  },
  {
    studentName: "Soundar",
    phoneNo: 9845381723,
    EMail: "Soundar@gmail.com",
    Qualification :"B SC"

  },
  {
    studentName: "Sudhan",
    phoneNo: 9895343627,
    EMail: "Sudhan@gmail.com",
    Qualification :"MBA"

  },
  {
    studentName: "sharmi",
    phoneNo: 9884453245,
    EMail: "sharmi@gmail.com",
    Qualification :"B Ed"
  },
]);

//Listing Entered Documents
 db.Students.find().pretty() //Pretty for ordering data in easy to read format
{
        "_id" : ObjectId("61ed311d77c92132ed67368b"),
        "studentName" : "Rajkumar",
        "phoneNo" : 9994055641,
        "EMail" : "raj@gmail.com",
        "Qualification" : "B. E"
}
{
        "_id" : ObjectId("61ed311d77c92132ed67368c"),
        "studentName" : "Soundar",
        "phoneNo" : 9845381723,
        "EMail" : "Soundar@gmail.com",
        "Qualification" : "B SC"
}
{
        "_id" : ObjectId("61ed311d77c92132ed67368d"),
        "studentName" : "Sudhan",
        "phoneNo" : 9895343627,
        "EMail" : "Sudhan@gmail.com",
        "Qualification" : "MBA"
}
{
        "_id" : ObjectId("61ed311d77c92132ed67368e"),
        "studentName" : "sharmi",
        "phoneNo" : 9884453245,
        "EMail" : "sharmi@gmail.com",
        "Qualification" : "B Ed"
}
//creating another Collection for storing Batch Datas
db.Batch.insertMany([
    {
      BatchName: "B29WD",
      Course:"MERN Stack",
      StartingDate : "12-11-2020",
      Coordinator : "Divya",
      Language :"Tamil",
      NoOfStudents: 30,
    },
    {
        BatchName: "B29WE",
        Course:"MERN Stack",
        StartingDate : "12-11-2020",
        Coordinator : "Arun",
        Language :"English",
        NoOfStudents: 35,
      },
      {
        BatchName: "B30WD",
        Course:"Ethical Hacking",
        StartingDate : "20-05-2020",
        Coordinator : "manoj",
        Language :"English",
        NoOfStudents: 10,
      },
      {
        BatchName: "B28WD",
        Course:"Dats Science",
        StartingDate : "19-07-2020",
        Coordinator : "Mohan",
        Language :"English",
        NoOfStudents: 30,
      },
  ])
//listing all the collections in DB
> show collections
Batch
Students//here we have two collections
> db.Batch.find().pretty()//listing entered documents in Batch collections
{
        "_id" : ObjectId("61ed345eaeb13637622e53a3"),
        "BatchName" : "B29WD",
        "Course" : "MERN Stack",
        "StartingDate" : "12-11-2020",
        "Coordinator" : "Divya",
        "Language" : "Tamil",
        "NoOfStudents" : 30
}
{
        "_id" : ObjectId("61ed345eaeb13637622e53a4"),
        "BatchName" : "B29WE",
        "Course" : "MERN Stack",
        "StartingDate" : "12-11-2020",
        "Coordinator" : "Arun",
        "Language" : "English",
        "NoOfStudents" : 35
}
{
        "_id" : ObjectId("61ed345eaeb13637622e53a5"),
        "BatchName" : "B30WD",
        "Course" : "Ethical Hacking",
        "StartingDate" : "20-05-2020",
        "Coordinator" : "manoj",
        "Language" : "English",
        "NoOfStudents" : 10
}
{
        "_id" : ObjectId("61ed345eaeb13637622e53a6"),
        "BatchName" : "B28WD",
        "Course" : "Dats Science",
        "StartingDate" : "19-07-2020",
        "Coordinator" : "Mohan",
        "Language" : "English",
        "NoOfStudents" : 30
}
//CFreating new document named Task and Entering Data
db.Task.insertMany([
    {
        Topic:"HTML",
        TaskDate:"29-07-2020",
        LastDayOfSubmition:"5-08-2020",
        NoOfStudentsSubmitted:6,
        Remaining:10
    },
    {
        Topic:"CSS",
        TaskDate:"30-07-2020",
        LastDayOfSubmition:"10-08-2020",
        NoOfStudentsSubmitted:7,
        Remaining:9
    },
    {
        Topic:"BootStrap",
        TaskDate:"01-08-2020",
        LastDayOfSubmition:"6-09-2020",
        NoOfStudentsSubmitted:1,
        Remaining:15
    },
    {
        Topic:"React",
        TaskDate:"3-078-2020",
        LastDayOfSubmition:"12-09-2020",
        NoOfStudentsSubmitted:5,
        Remaining:11
    },
    {
        Topic:"SQL",
        TaskDate:"05-09-2020",
        LastDayOfSubmition:"15-09-2020",
        NoOfStudentsSubmitted:3,
        Remaining:13
    }
]);
//listing all data in Task Document
> db.Task.find({}).pretty()
{       "_id" : ObjectId("61ed3598aeb13637622e53a7"),        
        "Topic" : "HTML",        
        "TaskDate" : "29-07-2020",
        "LastDayOfSubmition" : "5-08-2020",
        "NoOfStudentsSubmitted" : 6,
        "Remaining" : 10
}
{
        "_id" : ObjectId("61ed3598aeb13637622e53a8"),
        "Topic" : "CSS",
        "TaskDate" : "30-07-2020",
        "LastDayOfSubmition" : "10-08-2020",
        "NoOfStudentsSubmitted" : 7,
        "Remaining" : 9
}
{
        "_id" : ObjectId("61ed3598aeb13637622e53a9"),
        "Topic" : "BootStrap",
        "TaskDate" : "01-08-2020",
        "LastDayOfSubmition" : "6-09-2020",
        "NoOfStudentsSubmitted" : 1,
        "Remaining" : 15
}
{
        "_id" : ObjectId("61ed3598aeb13637622e53aa"),
        "Topic" : "React",
        "TaskDate" : "3-078-2020",
        "LastDayOfSubmition" : "12-09-2020",
        "NoOfStudentsSubmitted" : 5,
        "Remaining" : 11
}
{
        "_id" : ObjectId("61ed3598aeb13637622e53ab"),
        "Topic" : "SQL",
        "TaskDate" : "05-09-2020",
        "LastDayOfSubmition" : "15-09-2020",
        "NoOfStudentsSubmitted" : 3,
        "Remaining" : 13
}

//Creating a new document for storing Mentors data
db.Mentors.insertMany([
    {
        Name:"Ragav",
        Field:"MERN Stack",
        Language:"English and Tamil",
        Age:"27"
    },
    {
        Name:"Lavish",
        Field:"Front End",
        Language:"English",
        Age:"25"
    },
    {
        Name:"Ravi",
        Field:"Ethical Hacking",
        Language:"Tamil",
        Age:"26"
    },
    {
        Name:"Mohan",
        Field:"Back End",
        Language:"English and Tamil",
        Age:"28"
    },
    {
        Name:"Soundar",
        Field:"MERN Stack",
        Language:"English and Tamil",
        Age:"30"
    }
])
> show dbs// to list all the databases in mongoDB
FirstDB    0.000GB
admin      0.000GB
config     0.000GB
crm        0.000GB
local      0.000GB
orders     0.000GB
taskDay37  0.000GB//listed are the avilable databases in my MongoDb
> use taskDay37 // accessing the required database
switched to db taskDay37 // confermation message
> show collections // listing all collections in databse
Batch
Mentors
Students
Task// listed are the newly created collections in taskDay37 databases
>