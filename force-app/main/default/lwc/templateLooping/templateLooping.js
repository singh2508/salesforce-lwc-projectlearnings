import { LightningElement,track } from 'lwc';

export default class TemplateLooping extends LightningElement {
    newCourseName;
   @track course=["Admin","Apex","LWC","Aura"];// Array

   students=[          // object Array
    {
        RollNo:62,
        Name:"Prashant Singh",
        Average:97
    },
    {
        RollNo:63,
        Name:"Shivraj",
        Average:98
    },
    {
        RollNo:64,
        Name:"Anant",
        Average:98
    }

   ]             

    handleCourseChange(event){
        this.newCourseName=event.target.value;
        console.log(this.newCourseName);

    }
    handleClickCourse(event){
        this.course.push(this.newCourseName);
        console.log(JSON.stringify(this.course));

    }
}