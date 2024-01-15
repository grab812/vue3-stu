<template>
  <div class="sticky-top">
    <header>
      <button>토글 아이콘</button>
      <h1 class="brand">
        <a><img src="" alt="" /></a>
      </h1>
      <div class="oc-domain"></div>
      <ul class="login-wrap">
        <li class="oc-user">
          <div class="user-img">
            <img src="" alt="" />
          </div>
          <SubManu :menuItems="userItems" />
        </li>
        <li>
          <router-link to="/member/login">로그인</router-link>
        </li>
        <li>
          <router-link to="/member/join">회원가입</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import SubManu from '../common/SubMenu.vue'
</script>
<script>
export default {
  data() {
    return {
      userItems: [
        {
          label: '회원정보 수정',
          link: '/member/confirmpw'
        },
        {
          label: '1:1 문의 내역',
          link: '/member/Inquiry'
        },
        {
          label: 'ADMIN',
          link: '' // 내부망,vpn 접속시에만 새창이동 // 아니면 얼럿창 (권한으로 접근제한)
        }
      ]
    }
  }
}
</script>
