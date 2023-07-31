const magicianss:string[]=["Rock","Harry","Brook","Chris"];
function thegreat(magicianss: string[]): void{
    for(let i=0;i<magicianss.length;i++){
         const magii=magicianss[i];
         console.log("The Great "+magii);
    }
}
function show_magicianss(magicianss: string[]): void{
    for(let i=0;i<magicianss.length;i++){
         const magi=magicianss[i];
         console.log(magi);
    }
    
}
thegreat(magicianss);