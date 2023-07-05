<template>
  <el-container>
    <side-menu />
    <el-container direction="vertical">
      <top-header />
      <el-main> <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SideMenu from "@/components/mainbox/SideMenu";
import TopHeader from "@/components/mainbox/TopHeader";



</script>