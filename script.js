// Triangle Area Calculation
function triangleArea(){
    const base = document.getElementById('tri-base');
    const baseValue = base.value ;
    const basefinal = parseFloat(baseValue);

    const hight = document.getElementById('tri-hight');
    const hightValue = hight.value ;
    const hightFinal = parseFloat(hightValue);

    const triAreaResult = 0.5 * (basefinal * hightFinal)
    // console.log(triAreaResult)

    const spanArea = document.getElementById("show-area");
    spanArea.innerText = triAreaResult;


}
// Rectangle Area calculation
function rectAngleArea(){
    const width = document.getElementById('rect-width');
    const widthValue = width.value;
    const widthFinal = parseFloat(widthValue);

    const hight = document.getElementById('rect-hight');
    const hightValue = hight.value;
    const hightFinal = parseFloat(hightValue);

    const rectArea = widthFinal * hightFinal;

    const showRectArea = document.getElementById('rect-show-area');
    showRectArea.innerText = rectArea;

}
//  Parallelogram Area Calculation
function parallelogramAngleArea(){
    const width = document.getElementById('poly-base');
    const widthValue = width.value;
    const widthFinal = parseFloat(widthValue);

    const hight = document.getElementById('poly-hight');
    const hightValue = hight.value;
    const hightFinal = parseFloat(hightValue);

    const rectArea = widthFinal * hightFinal;

    const showRectArea = document.getElementById('poly-show-area');
    showRectArea.innerText = rectArea;

}