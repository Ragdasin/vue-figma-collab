<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const hours = ref(19);
const minutes = ref(0);
const time = ref('00.00');


function hourDown(){
if (hours.value == 0){
  hours.value = 23;
} else {
  hours.value--;
}
}

function hourUp(){
if (hours.value == 23){
  hours.value = 0;
} else {
  hours.value++;
}
}

function minuteDown(){
if (minutes.value == 0){
  minutes.value = 59;
} else {
  minutes.value--;
}
}

function minuteUp(){
if (minutes.value == 59){
  minutes.value = 0;
} else {
  minutes.value++;
}
}



</script>


<template>
  
  <div class="Iphone1415Pro2" style="width: 393px; height: 852px; position: relative; background: white">
    <div class="AlarmOff" style="width: 393px; height: 197px; left: 0px; top: 0px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">00.00</div>
      <div class="Rectangle1" style="width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down"  style="width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; color:black;"></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>
    <div class="AlarmOff" style="width: 393px; height: 197px; left: 0px; top: 197px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">07.00</div>
      <div class="Rectangle1" style="width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down" style="width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; color:black;"></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>
    <div class="AlarmOff" style="width: 393px; height: 197px; left: 0px; top: 591px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">07.15</div>
      <div class="Rectangle1" style="width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down"  style="width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; color:black;"></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>
    <div class="AlarmOn" style="width: 393px; height: 197px; left: 0px; top: 394px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">07.10</div>
      <div class="Rectangle1" style="width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #396AF1; border-radius: 100px"></div>
      <div class="Ellipse2" style="width: 29px; height: 29px; left: 322px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down"  style="width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; color:black;"></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>
    <div class="Rectangle3" style="width: 394px; height: 853px; left: -1px; top: -1px; position: absolute; background: rgba(0, 0, 0, 0.37)"></div>
    <div class="Rectangle9" style="width: 285px; height: 418px; left: 54px; top: 262px; position: absolute; background: white; border-radius: 20px"></div>
    <div class="Group3" style="width: 285px; height: 298px; left: 54px; top: 238px; position: absolute">
      <div class="Rectangle5" style="width: 285px; height: 98px; left: 0px; top: 0px; position: absolute; background: #396AF1; border-top-left-radius: 30px; border-top-right-radius: 30px"></div>
      <div v-if="minutes<=9 && hours<=9" class="00" style="left: 59px; top: 10px; position: absolute; color: white; font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">0{{hours}}.0{{minutes}}</div>
      <div v-else-if="minutes<=9 && hours>9" class="00" style="left: 59px; top: 10px; position: absolute; color: white; font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">{{hours}}.0{{minutes}}</div>
      <div v-else-if="minutes>9 && hours<=9" class="00" style="left: 59px; top: 10px; position: absolute; color: white; font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">0{{hours}}.{{minutes}}</div>
      <div v-else class="00" style="left: 59px; top: 10px; position: absolute; color: white; font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">{{hours}}.{{minutes}}</div>
      <div class="Group2" style="width: 66px; height: 171px; left: 59px; top: 127px; position: absolute">
        <div class="Rectangle6" style="width: 66px; height: 171px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
        <div @click="hourUp" class="Rectangle7" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
        <div @click="hourDown" class="Rectangle8" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 105px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
        <i @click="hourUp" class="pi pi-angle-up"  style="cursor:pointer; width: 1px; height: 0px; left: 26px; top: 27px; position: absolute; color:black; "></i>
        <i @click="hourDown" class="pi pi-angle-down"  style="cursor:pointer; width: 1px; height: 0px; left: 25px; top: 134px; position: absolute ; color:black;"></i>
      </div>
      <div class="Group1" style="width: 66px; height: 171px; left: 157px; top: 127px; position: absolute">
        <div class="Rectangle6" style="width: 66px; height: 171px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
        <div @click="minuteUp" class="Rectangle7" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
        <div @click="minuteDown" class="Rectangle8" style="cursor:pointer; width: 66px; height: 66px; left: 0px; top: 105px; position: absolute; background: rgba(0, 0, 0, 0.37); border-radius: 100px"></div>
        <i @click="minuteUp" class="pi pi-angle-up"  style="cursor:pointer; width: 1px; height: 0px; left: 26px; top: 27px; position: absolute; color:black;"></i>
          <i @click="minuteDown" class="pi pi-angle-down"  style="cursor:pointer; width: 1px; height: 0px; left: 25px; top: 134px; position: absolute; color:black;"></i>
      </div>
    </div>
    <RouterLink to="/">
    <div style="width: 81px; height: 116px; left: 162px; top: 533px; position: absolute">
      <div class="Ellipse1" style="width: 81px; height: 81px; left: 0px; top: 25px; position: absolute; background: #396AF1; border-radius: 9999px"></div>
      <div class="Group4" style="width: 40.06px; height: 30.13px; left: 17.75px; top: 56.37px; position: absolute; transform: rotate(-12.34deg); transform-origin: 0 0">
        <i class="pi pi-check" style=" color:white;font-size: 3rem; width: 39.60px; height: 0px; left: -3px; top: -8.56px; position: absolute; "></i>
        
      </div>
    </div>
    </RouterLink>
  </div>

</template>

