import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
// name:string=`CodeMind`;
serverID:number=37;
serverStatus:string=`Online`;
allowNewServer=false;
imgUrl="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
  serverCreationStatus:string=`server is not created`;
serverName:string=`Codemind.com`;

constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 5000);
   }
getServerStatus(){
  return this.serverStatus;
}
onServerCreation(){
this.serverCreationStatus=`Server created`;
}
  ngOnInit() {
  }

}
