<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import alarmsData from '@/alarms.json'

const alarms = ref(alarmsData);
const hours = ref(19);
const minutes = ref(0);
const time = ref('12.00');
updateTime();
console.log('Alarms:', alarms);

function updateTime() {
  if (minutes.value <= 9 && hours.value <= 9) {
    time.value = `0${hours.value}.0${minutes.value}`;
  } else if (minutes.value > 9 && hours.value > 9) {
    time.value = `${hours.value}.${minutes.value}`;
  } else if (minutes.value <= 9 && hours.value > 9) {
    time.value = `${hours.value}.0${minutes.value}`;
  } else if (minutes.value > 9 && hours.value <= 9) {
    time.value = `0${hours.value}.${minutes.value}`;
  }
}

function hourDown() {
  hours.value = hours.value === 0 ? 23 : hours.value - 1;
  updateTime();
}
function hourUp() {
  hours.value = hours.value === 23 ? 0 : hours.value + 1;
  updateTime();
}
function minuteDown() {
  minutes.value = minutes.value === 0 ? 59 : minutes.value - 1;
  updateTime();
}
function minuteUp() {
  minutes.value = minutes.value === 59 ? 0 : minutes.value + 1;
  updateTime();
}

function addAlarm() {
  const newId = alarms.value.length + 1; 
  alarms.value.push({ 
    id: newId,
    time: time.value,
    wakeOn: false,
  });
}
</script>


<template>
  
  <div class="Iphone1415Pro1" style="width: 393px; height: 852px; position: relative; background: white">
    <div style="height: 600px; overflow-y: scroll;">
    <div v-for="(alarm, index) in alarms" :key="alarm.id" @click="toggleOnOff(index)" :style="{top: `${index * 197}px`, position: 'absolute', width: '393px', height: '197px'}">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">{{alarm.time}}</div>


    <div v-if="!alarm.wakeOn" class="AlarmOff" style="width: 393px; height: 197px; left: 0px; top: 0px; position: absolute">
      <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
    </div>
    <div v-else>
      <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #396AF1; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 322px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
    </div>
      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down" style="color:black; width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; "></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div> 
    </div>
    
  <!-- Insert code here! -->
<div class="Rectangle3" style="width: 394px; height: 853px; left: -1px; top: -1px; position: fixed; background: rgba(0, 0, 0, 0.37)"></div>
<div class="Rectangle9" style="width: 285px; height: 418px; left: 54px; top: 262px; position: fixed; background: white; border-radius: 20px"></div>
<div class="Group3" style="width: 285px; height: 298px; left: 54px; top: 238px; position: fixed;">
  <div class="Rectangle5" style="width: 285px; height: 98px; left: 0px; top: 0px; position: absolute; background: #396AF1; border-top-left-radius: 30px; border-top-right-radius: 30px"></div>
  <div class="00" style="left: 59px; top: 10px; position: absolute; color: white; font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">{{ time }}</div>
  <div class="Group2" style="width: 66px; height: 171px; left: 59px; top: 127px; position: absolute">
    <div class="Rectangle6" style="width: 66px; height: 171px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
    <div @click="hourUp" class="Rectangle7" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
    <div @click="hourDown" class="Rectangle8" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 105px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
    <i @click="hourUp" class="pi pi-angle-up" style="cursor:pointer; width: 1px; height: 0px; left: 26px; top: 27px; position: absolute; color:black;"></i>
    <i @click="hourDown" class="pi pi-angle-down" style="cursor:pointer; width: 1px; height: 0px; left: 25px; top: 134px; position: absolute; color:black;"></i>
  </div>
  <div class="Group1" style="width: 66px; height: 171px; left: 157px; top: 127px; position: absolute">
    <div class="Rectangle6" style="width: 66px; height: 171px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
    <div @click="minuteUp" class="Rectangle7" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
    <div @click="minuteDown" class="Rectangle8" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 105px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
    <i @click="minuteUp" class="pi pi-angle-up" style="cursor:pointer; width: 1px; height: 0px; left: 26px; top: 27px; position: absolute; color:black;"></i>
    <i @click="minuteDown" class="pi pi-angle-down" style="cursor:pointer; width: 1px; height: 0px; left: 25px; top: 134px; position: absolute; color:black;"></i>
  </div>
</div>

    <RouterLink to="/">
    <div @click="addAlarm" style="width: 81px; height: 116px; left: 162px; top: 533px; position: fixed">
      <div class="Ellipse1" style="width: 81px; height: 81px; left: 0px; top: 25px; position: absolute; background: #396AF1; border-radius: 9999px"></div>
      <div class="Group4" style="width: 40.06px; height: 30.13px; left: 17.75px; top: 56.37px; position: absolute; transform: rotate(-12.34deg); transform-origin: 0 0">
        <i class="pi pi-check" style=" color:white;font-size: 3rem; width: 39.60px; height: 0px; left: -3px; top: -8.56px; position: absolute; "></i>
        
      </div>
    </div>
    </RouterLink>
  </div>

</template>

