const Darkcolor = {
BC:"black",
textC:"white",

}
const Light={
    BC:"white",
    textC:"black",
}

export default function Darkfile(dark,name) {
    
    if(dark==true){
        return Darkcolor[name];
    }
    else{
        return Light[name];
    }

}