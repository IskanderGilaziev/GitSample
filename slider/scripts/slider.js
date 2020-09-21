
//=======================================================
// init input label
let firstInput = document.getElementById("one");
let secondInput = document.getElementById("two");
let thirdInput = document.getElementById("three");

const inputsList = [firstInput, secondInput, thirdInput];

//=======================================================
// init navigation item
let checkedRoom = document.querySelectorAll(".slider-navigation__item");

//=======================================================
// init arrows
let leftArrow = document.querySelector(".arrow-left");
let rightArrow = document.querySelector(".arrow-right");


//=======================================================
// init image functions

let image = document.querySelector(".slider-image");

const rostovAdmiralImg = () => {
    image.style.backgroundImage = `url(images/release_wildest/chairs.png)`;
}

const sochiThivesImg = () => {
    image.style.backgroundImage = `url(images/release_wildest/sochi.png)`;
}

const rostovPatrioticImg= () => {
    image.style.backgroundImage = `url(images/release_wildest/rostov_patriotic.png)`;
}

const callImage = [rostovAdmiralImg, sochiThivesImg, rostovPatrioticImg];

//=======================================================
// init room info

const sliderRoomInfo = document.querySelectorAll(".slider-room-info__item");

const RostovAdmiralInfo = {
    city: "Rostov-on-Don <br> LCD admiral",
    area: "81 m2",
    repairTime: "3.5 months",
    repairCoast: "Upon request"
}

const SochiThivesInfo = {
    city: "Sochi <br> Thives",
    area: "105 m2",
    repairTime: "4 months",
    repairCoast: "Upon request"
}

const RostovPatrioticInfo = {
    city: "Rostov-on-Don <br> Patriotic",
    area: "93 m2",
    repairTime: "3 months",
    repairCoast: "Upon request"
}

const roomInfo = [RostovAdmiralInfo, SochiThivesInfo, RostovPatrioticInfo];

let sliderStep = {
    nextStep: 0,
    lastStepCount: 0,
    isInit: false
}

let sliderTypeButtons = {
    LEFT: "left",
    RIGHT: "right"
}

const setLastStep = (countState) => {
    sliderStep.lastStepCount = countState;
}

const createSliderEffect = (countStep, isChecked) => {
    inputsList[countStep].checked = isChecked;
    if (isChecked) {
        createSliderHover(countStep);
        callImage[countStep]();
        showRoomInfo(countStep);
    } else {
        removeSliderHover(countStep);
    }
}

const createSliderHover = (count) => {
    checkedRoom[count].classList.add('elem-hover');
}

const removeSliderHover = (count) => {
    checkedRoom[count].classList.remove('elem-hover');
}

const showEffectByNextStep = (sliderTypeButton) => {
    createSliderEffect(sliderStep.nextStep, false);
    setLastStep(sliderStep.nextStep);
    if (sliderTypeButtons.LEFT === sliderTypeButton) {
        --sliderStep.nextStep;
    } else {
        ++sliderStep.nextStep;
    }
    createSliderEffect(sliderStep.nextStep, true);
}

const initShowEffect = (sliderTypeButton) => {
    setLastStep(sliderStep.nextStep);
    if (sliderTypeButtons.LEFT === sliderTypeButton) {
        sliderStep.nextStep = checkedRoom.length - 1;
    } else {
        sliderStep.nextStep = 0;
    }
    createSliderEffect(sliderStep.nextStep, true);
    createSliderEffect(sliderStep.lastStepCount, false);
    sliderStep.isInit = true;
}

const showRoomInfo = (count) => {
    const room = roomInfo[count];
    sliderRoomInfo[0].lastElementChild.innerHTML = room.city;
    sliderRoomInfo[1].lastElementChild.innerHTML = room.area;
    sliderRoomInfo[2].lastElementChild.innerHTML = room.repairTime;
    sliderRoomInfo[3].lastElementChild.innerHTML = room.repairCoast;
}

const initFirstElementHoverEffect = () => {
    if (!sliderStep.isInit) {
        createSliderHover(0);
    }
}

leftArrow.addEventListener('click', (event) => {
    event.preventDefault();
    if (sliderStep.nextStep < 1) {
        initShowEffect(sliderTypeButtons.LEFT);
    } else {
       showEffectByNextStep(sliderTypeButtons.LEFT);
    }
});

rightArrow.addEventListener('click', (event) => {
    event.preventDefault();
    if (sliderStep.nextStep === (checkedRoom.length - 1)) {
        initShowEffect(sliderTypeButtons.RIGHT);
    } else {
       showEffectByNextStep(sliderTypeButtons.RIGHT);
    }
});

initFirstElementHoverEffect();

