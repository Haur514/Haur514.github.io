window.addEventListener('load',function(){
    let targetImg: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("blog-img") as HTMLCollectionOf<HTMLElement>;
    console.log(targetImg.length);
    for(let i = 0;i < targetImg.length;i++){
        targetImg[i].style.width = getBlogImgWidth();
    }
});

let getBlogImgWidth = (): string => {
    let container = document.getElementById("blog-container")!;
    let container_style = window.getComputedStyle(container);
    return String(parseInt(container_style.width)/4*3)+'px';
};