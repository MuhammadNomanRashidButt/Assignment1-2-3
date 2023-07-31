const magiciansss:string[]=["Rock","Harry","Brook","Chris"];
const great_name:string[]=magiciansss.slice();

function make_greattt(magiciansss:string[]) :void{
    for(let i=0;i<magiciansss.length;i++){
        const name=magiciansss[i];
        console.log("The Great "+name);
    }
}
function shows_magicians(magiciansss: string[]): void{
    for(let i=0;i<magiciansss.length;i++){
        const name=magiciansss[i];
        console.log(name);
    }

}
make_greattt(magiciansss);
console.log("---------------");
shows_magicians(magiciansss);