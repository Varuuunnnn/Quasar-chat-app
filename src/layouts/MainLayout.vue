<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          v-go-back="'/'"
         
          icon="arrow_back"
          flat
          dense
          label="Back"/>
       

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <q-btn
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          flat
          no-caps
          dense
          label="Login"/>

        
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
export default {
  computed:{
   title(){
     let currentPath=this.$route.fullPath
     if(currentPath=='/') return 'SmackChat'
     else if(currentPath=='/chat') return 'Chat'
     else if(currentPath=='/auth') return 'Login'
   }
  },
  name: 'MainLayout',
  components: { EssentialLink },
  
  
}
</script>
