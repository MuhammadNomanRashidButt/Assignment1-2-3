const magicians:string[]=["Rock","Harry","Brook","Chris"];
function show_magicians(magicians: string[]): void{
    for(let i=0;i<magicians.length;i++){
         const magi=magicians[i];
         console.log(magi);
    }
    
}
show_magicians(magicians);