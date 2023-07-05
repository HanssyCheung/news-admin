<template>
  <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="options" />

  <div class="formContainer">
    <h3>企业门户网站管理系统</h3>
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="80px" class="loginform">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
// @ is an alias to /src
import { loadFull } from 'tsparticles'
import { reactive, ref } from 'vue'
import axios from 'axios'
import router from '@/router';
import { ElMessage } from 'element-plus'
import {useStore} from 'vuex';

const store = useStore()

const loginForm = reactive({
  username: "",
  password: ""
})//表单绑定的响应式对象

const loginFormRef = ref() //表单的引用对象


//校验规则
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
  password: [{ required: true, message: "请输入用密码", trigger: 'blur' }],
})

//提交
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      axios.post('/adminapi/user/login', loginForm).then(res => {
        console.log('res', res)
        if (res.data.ActionType === "OK") {
          store.commit("changeUserInfo",res.data.data)
          console.log('store',store)
          router.push("/index")
        } else {
          ElMessage({
            showClose: true,
            message: '用户名和用户密码不匹配',
            type: 'error',
          })
        }
      })
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}



//配置particles
const options = {
  background: {
    color: {
      value: '#999'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
}


const particlesInit = async engine => {
  await loadFull(engine)
}

const particlesLoaded = async container => {
  console.log('Particles container loaded', container)
}

</script>

<style lang="scss" scoped>
.formContainer {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 20px;
  color: white;
  text-align: center;

  h3 {
    //因为是标题 所以带有居中属性
    font-size: 30px;
  }

  .loginform {
    margin-top: 20px;
  }
}

:deep(.el-form-item__label) {
  color: white;
}
</style>
