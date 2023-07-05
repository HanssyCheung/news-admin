<template>
  <router-view/>
</template>

<style lang="scss">
*{
  // 设置全局样式(没有设置scpoed)
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar{
  width: 5px;
  height: 5px;
  position:absolute
}
::-webkit-scrollbar-thumb{
  background-color: beige;
}
::-webkit-scrollbar-track{
  background-color: azure;
}
</style>
