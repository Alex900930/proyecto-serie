import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Personaje } from '../interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

    personajes: Personaje[]| undefined;
    personajeCopied: Personaje[] | undefined; 
  constructor(public http: HttpClient) { 
    this.getData();
  }

  async getData(){
      await this.http.get<any>(
        environment.apiUrl + "/characters")
        .subscribe((res)=>{
         this.personajes = res.map(({char_id, name, nickname, img, status, occupation}:Personaje)=>{
          return{
            char_id: char_id,
            name: name,
            nickname: nickname,
            img: img,
            status: status,
            occupation:occupation,
          }
         });
         this.personajeCopied = this.personajes;
        })
  }
  

  filter(e: any){
    const search = e.target.value;
    this.personajes = this.personajeCopied?.filter((personaje: Personaje)=>{
      return personaje.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
