<template>
  <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>List</a-breadcrumb-item>
      <a-breadcrumb-item>App</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '80vh' }">
      <router-view></router-view>
    </div>
  </a-layout-content>
</template>
