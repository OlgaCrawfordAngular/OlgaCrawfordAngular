import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  length=0;
  
  

  onChangeLength(event: Event){
    
    const target = event.target as HTMLInputElement;
const parsedValue = parseInt(target.value);
console.log(this.length);
         if (!isNaN(parsedValue)) {
           this.length=parsedValue;
         }

  }

  

  onChangeUseLetters()
  {this.includeLetters=!this.includeLetters;}

  onChangeUseNumbers()
  {this.includeNumbers=!this.includeNumbers;}

  onChangeUseSymbols()
  {this.includeSymbols=!this.includeSymbols;}

  


  onButtonClick(){
    console.log('')
    const numbers="1234567890";
    const letters="abcdefghijklmnopqrstuvwxyz";
    const symbols="!@£$%^&*";
    let validChars='';

    if(this.includeNumbers){
      validChars+=numbers;
    };

    if(this.includeLetters){
      validChars+=letters;
    }

    if(this.includeSymbols){
      validChars+=symbols;
    }
   let generatedPassword="";
   for(let i=0; i<this.length; i++)
  { const index=Math.floor(Math.random()*validChars.length);
  generatedPassword+=validChars[index]}
    this.password=generatedPassword;
   /* { const index=Math.floor(Math.random()*validChars.length);
      this.password+=validChars[index]} will work as well*/ 
        
  };

}
