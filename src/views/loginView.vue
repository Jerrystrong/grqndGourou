<template>
  <div class="flex items-center justify-center flex-col w-full h-screen relative">
    <div
      class="heroL top-0 left-0 absolute right-0 bottom-0 bg-primary/50 blur-[4px] w-full h-full -z-50"
    ></div>
    <div class="flex justify-center flex-col mb-10 w-full items-center">
      <h1 class="second-text-gradient font-abeeze md:text-[32px] text-[24px] w-[800px] text-center">
        Se connecter / s’inscrire
      </h1>
      <p class="text-center md:w-fit w-[80%] mt-3 md:mt-0">
        Se connecter en premier pour avoir access à
        <span class="relative spanOne">nos contenus.</span>
      </p>
    </div>
    <div id="loginFrom">
      <input
        type="email"
        placeholder="Entrez votre email"
        class="border border-bleu bg-bleu/20 placeholder:text-secondary h-[50px] rounded-[20px] w-[300px] pl-[20px]"
      />
      <div class="primaryDeg px-10 py-3 rounded-full relative text-center my-2">Suivant</div>
      <div class="mt- flex w-[300px] justify-between mt-5">
        <div class="flex gap-2">
          <button class="bg-secondary rounded-full">
            <img src="/google.svg" alt="" class="w-[50px] h-[50px] p-1" />
          </button>
        </div>
        <div class="flex gap-2">
          <button class="bg-secondary rounded-full">
            <img src="/github.svg" alt="" class="w-[50px] h-[50px] p-1" />
          </button>
        </div>
        <div class="flex gap-2">
          <button class="bg-secondary rounded-full">
            <img src="/facebook.svg" alt="" class="w-[50px] h-[50px] p-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.heroL {
  // background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  backdrop-filter: blur(10px);
  // filter: blur(0.5px);
  // position: relative;
  &:before {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    background: #02000a;
    z-index: -50000;
    filter: blur(8px);
    left: -5px;
  }
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    background: #02000a;
    z-index: -50000;
    filter: blur(8px);
    right: -5px;
  }
}
.degProfHeader {
  background: linear-gradient(180deg, rgb(0, 0, 0, 0.2), #02000a);
  position: absolute;
  width: 100%;
  height: 100%;
}
.spanOne {
  &:before {
    content: '';
    display: block;
    background: url('/shapeOne.svg');
    position: absolute;
    width: 130px;
    height: 20px;
    bottom: -18px;
    right: 0;
  }
}
.spanOne {
  &:before {
    content: '';
    display: block;
    background: url('/shapeOne.svg');
    position: absolute;
    width: 130px;
    height: 20px;
    bottom: -18px;
    right: 0;
  }
}
</style>
