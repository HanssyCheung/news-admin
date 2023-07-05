
<template>
    <el-header>
        <div class="header-left">
            <el-icon @click="handleCollpased">
                <Menu />
            </el-icon>
            <span style="margin-left:10px">企业门户网站管理系统</span>
        </div>
        <div class="header-right">
            <span>欢迎{{ store.state.userInfo.username }}回来</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="30" color="white">
                        <user />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </el-header>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { Menu, User } from '@element-plus/icons-vue'

const store = useStore()
const handleCollpased = () => {
    store.commit("changeCollapsed")
}
const router = useRouter()
const handleCenter = () => {
    router.push("/center")
}

const handleLogout = () => {
    localStorage.removeItem("token")
    store.commit("clearUserInfo")
    router.push("/login")
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #2d3a4d;
    color: white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-left,
.header-right {
    display: flex;
    cursor: pointer;
}

.header-left {
    i {
        margin: auto
    }
}

.header-right {
    .el-dropdown {
        margin: auto;
    }
}
</style>