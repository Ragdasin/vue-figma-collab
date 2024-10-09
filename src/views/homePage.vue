<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';


const wakeOn1 = ref(false);
function toggleOnOff1(){
wakeOn1.value = !wakeOn1.value;
}

const wakeOn2 = ref(false);
function toggleOnOff2(){
wakeOn2.value = !wakeOn2.value;
}

const wakeOn3 = ref(false);
function toggleOnOff3(){
wakeOn3.value = !wakeOn3.value;
}

const wakeOn4 = ref(true);
function toggleOnOff4(){
wakeOn4.value = !wakeOn4.value;
}
</script>

<template>

  <div class="Iphone1415Pro1" style="width: 393px; height: 852px; position: relative; background: white">
    <!--ALARM1-->
    <div @click="toggleOnOff1" class="AlarmOff" style="width: 393px; height: 197px; left: 0px; top: 0px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">00.00</div>
    <div v-if="wakeOn1 == false">
      <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
    </div>
    <div v-if="wakeOn1 == true">
      <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #396AF1; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 322px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
    </div>
      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down" style="color:black; width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; "></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>

        <!--ALARM2-->
    <div @click="toggleOnOff2" class="AlarmOff" style="width: 393px; height: 197px; left: 0px; top: 197px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">07.00</div>
      <div v-if="wakeOn2 == false">
      <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
      </div>
      <div v-if="wakeOn2 == true">
        <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #396AF1; border-radius: 100px"></div>
        <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 322px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
        </div>
      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down"  style="width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; "></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>

        <!--ALARM3-->
    <div @click="toggleOnOff3" class="AlarmOff" style="width: 393px; height: 197px; left: 0px; top: 591px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">07.15</div>
      
      <div v-if="!wakeOn3">
      <div class="Rectangle1" style="cursor:pointer;  width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
      </div>

      <div v-if="wakeOn3">
        <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #396AF1; border-radius: 100px"></div>
        <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 322px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
        </div>

      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down"  style="width: 1px; height: 0px; left: 337px; top: 151px; position: absolute;"></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>

        <!--ALARM4-->
    <div @click="toggleOnOff4" class="AlarmOn" style="width: 393px; height: 197px; left: 0px; top: 394px; position: absolute">
      <div class="Rectangle2" style="width: 393px; height: 166px; left: 0px; top: 0px; position: absolute; background: rgba(217, 217, 217, 0)"></div>
      <div class="00" style="left: 37px; top: 41px; position: absolute; color: rgba(0, 0, 0, 0.61); font-size: 64px; font-family: Futura; font-weight: 500; word-wrap: break-word">07.10</div>

    <div v-if="wakeOn4">
      <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #396AF1; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 322px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
    </div>

    <div v-if="!wakeOn4">
      <div class="Rectangle1" style="cursor:pointer; width: 67px; height: 19px; left: 277px; top: 70px; position: absolute; background: #D9D9D9; border-radius: 100px"></div>
      <div class="Ellipse2" style="cursor:pointer; width: 29px; height: 29px; left: 277px; top: 65px; position: absolute; background: #777777; border-radius: 9999px"></div>
    </div>

      <div class="IMorgen" style="left: 42px; top: 125px; position: absolute; color: rgba(0, 0, 0, 0.74); font-size: 16px; font-family: Futura; font-weight: 500; word-wrap: break-word">I morgen</div>
      <i class="pi pi-angle-down"  style="width: 1px; height: 0px; left: 337px; top: 151px; position: absolute; "></i>
      <div class="Line1" style="width: 333px; height: 0px; left: 30px; top: 197px; position: absolute; border: 1px rgba(56.97, 106.13, 241.32, 0.30) solid"></div>
    </div>
  <RouterLink to="/edit">
    <div style="width: 81px; height: 116px; left: 156px; top: 699px; position: absolute; cursor: pointer;">
      <div class="Ellipse1" style="width: 81px; height: 81px; left: 0px; top: 25px; position: absolute; background: #396AF1; border-radius: 9999px"></div>
      <div style="left: 11px; top: 0px; position: absolute; color: white; font-size: 96px; font-family: Futura; font-weight: 400; word-wrap: break-word">+</div>
    </div>
  </RouterLink>
</div>
</template>


