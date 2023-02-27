<template>
    <div class="sidebar">
        <SidebarNav :item="admin" class="sidebar-nav" />
        <SidebarNav :item="user" class="sidebar-nav" />
        <SidebarNav :item="setting" class="sidebar-nav" />
    </div>
</template>

<script>
import SidebarNav from "./SidebarNav";
export default {
  data() {
    return {
      admin: { 
        header: "<i class='fa fa-user'></i> จัดการข้อมูลสมาชิก",
        navs: [
          { name: "MemberListing", link: { name: "memberlisting-list" } },
          { name: "MemberCar",},
          { name: "MemberRedeem",},
          { name: "ServiceHistory",},

          // { name: "MemberCar", link: { name: "membercar-list" } },
          // { name: "MemberRedeem", link: { name: "memberredeem-list" } },
          // { name: "ServiceHistory", link: { name: "servicehistory-list" } },
        ]
      },
      user: {
        header: "<i class='fa fa-user'></i> จัดการทั่วไป",
        navs: [
          
          { name: "Province",  },
          { name: "CarBrand", },
          { name: "CarModel",},
          { name: "ServiceBranch" }

          // { name: "Province", link: { name: "province-list" } },
          // { name: "CarBrand", link: { name: "carbrand-list" } },
          // { name: "CarModel", link: { name: "carmodel-list" } },
          // { name: "ServiceBranch", link: { name: "servicebranch-list" } }
          
        ]
      },
      setting: {
        header: "<i class='fa fa-cog'></i> ตั้งค่าอื่่นๆ",
        navs: [
          { name: "ตั้งค่าสิทธิการเข้าถึง" },
        ]
      }
    };
  },
  components: {
    SidebarNav
  }
};
</script>

<style scoped>
.sidebar-nav {
  margin-bottom: 30px;
}
</style>


