<template>
    <Layout>
        <div slot="buttons" class="form-group">
            <router-link class="btn" :to="{ name:'membercar-list' }">รายการข้อมูล</router-link>
            <router-link class="btn" :to="{ name:'membercar-form' }">เพิ่มข้อมูลใหม่</router-link>
        </div>
        <div class="card">
            <div class="card-body">
                <header class="mb-4">
                    <Search :types="search_types" @onSearch="onSearch($event)" />
                    <h5><i class="fa fa-list-alt"></i> รายการข้อมูลทะเบียน</h5>
                </header>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <!-- <th>MemberKey</th> -->
                            <th>ทะเบียนรถ</th>
                            <th>จังหวัด</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in membercars" :key="item.RowKey">
                            <!-- <td>
                                <div class="img-container">
                                    <img :alt="item.eq_name" :src="`/api/uploads/${item.eq_image}`">
                                </div>
                            </td> -->
                            <!-- <td>{{ item.MemberKey }}</td> -->
                            <td>{{ item.CarPlateID }}</td>
                            <td>{{ item.ProvinceKey }}</td>
                            <td class="text-right">
                                <i @click="onUpdate(item)" class="pointer fa fa-edit text-info mr-4"></i>
                                <i @click="onDelete(item)" class="pointer fa fa-trash text-danger"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- <Pagination :data="memberlistings" :page="page" @onPage="onPage($event)" /> -->
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { mapState } from "vuex";
import Axios from "axios";
export default {
  data() {
    return {
      search: {},
      page: 1,
      search_types: [
        { name: "ทะเบียน", value: "CarPlateID" }
      ]
    };
  },
  computed: {
    ...mapState(["membercars"])
  },
  components: {
    Layout,
    Pagination,
    Search
  },
  created() {
    this.$store.dispatch("set_membercars");
  },
  methods: {
    onUpdate(item) {
      this.$router.push({ name: "membercar-form", query: { RowKey: item.RowKey } });
    },
    // ลบข้อมูล
    onDelete(item) {
      this.alertify.confirm("คุณต้องการจะลบข้อมูลนี้จริงหรือ?", () => {
        Axios.delete(`/api/membercar/${item.RowKey}`)
          .then(() => this.$store.dispatch("set_membercars"))
          .catch(error => this.alertify.error(error.response.data.message));
      });
    },
    // การแบ่งหน้า Pagination
    onPage(page) {
      this.page = page;
      this.$store.dispatch("set_membercars", {
        page: this.page,
        ...this.search
      });
    },
    // การค้นหาข้อมูล Filter
    onSearch(search) {
      this.search = search;
      // this.page = 1;
      this.$store.dispatch("set_membercars");
    }
  }
};
</script>

<style  scoped>
.btn {
  color: #000000;
  background-color: #ced4da;
  margin-right: 7px;
  min-width: 130px;
}
.btn.router-link-active {
  background-color: #D6DF23;
}
</style>


