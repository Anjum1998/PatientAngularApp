import { Component } from '@angular/core';

@Component({
  selector: '"app-add-patient"',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
name=""
id=""
address=""
contact=""
doa=""
image=""
dname=""

readValue=()=>
{
  let data:any={"name":this.name,"id":this.id,"address":this.address,"contact":this.contact,"doa":this.doa,"image":this.image,
  "dname":this.dname}
  console.log(data)
}
}
