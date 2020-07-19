'use strict';
function testByIlya() {
    let result=[];
    let question1=document.getElementsByName('q1');
    for (let answer of question1){
        if (answer.value==='1024' && answer.checked)result.push(true);
    }
    let question2=document.getElementsByName('q2');
    for (let answer of question2){
        if (answer.value==='8' && answer.checked)result.push(true);
    }
    let question3=document.getElementsByName('q3');
    for (let answer of question3){
        if (answer.value==='Саня' && answer.checked)result.push(true);
    }
    result=result.reduce((prev,item)=>{
        return item?prev+1:prev;
    },0);
    let percent=`${(result/3)*100} %`;
    let area=document.getElementById('results');
    area.innerHTML=`Your mark is ${percent}`;
}
function fruitSelect() {
    let fruit=document.getElementById('selectFruit').selectedIndex;
    let nameFruit=document.getElementById('selectFruit').options;
    alert(`You change ${nameFruit[fruit].text}`);
}
function enterFruitImage() {
    let fruit=document.getElementById('selectFruit').selectedIndex;
    let nameFruit=document.getElementById('selectFruit').options;
    let area=document.getElementById('imageArea');
    area.innerHTML='<img src="" id="image">';
    let image=document.getElementById('image');
    image.src=`resourse/${nameFruit[fruit].text}.jpg`;
}
function inputRange() {
    let range=document.getElementById('range').valueAsNumber;

    let p=document.getElementById('one');
    p.innerHTML=range;

    let block=document.getElementById('test');
    block.style.width=range*13.6+'px';
}
