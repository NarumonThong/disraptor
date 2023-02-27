<template>
    <Layout>
        <div slot="buttons" class="form-group">
            <router-link class="btn btn-menu" :to="{ name:'province-list' }">รายการข้อมูล</router-link>
            <router-link class="btn btn-menu" :to="{ name:'province-form' }">เพิ่มข้อมูลใหม่</router-link>
        </div>
        <div class="card">
            <div class="card-body">
                <header>
                    <h5><i class="fa fa-edit"></i> เพิ่ม/แก้ไข จังหวัด</h5>
                </header>
                <hr>
                
                <form @submit.prevent="onSubmit()">
                    <div class="form-group">
                        <label for="">ชื่อภาษาอังกฤษ</label>
                        <input type="text" name="CityName1"
                            v-model.trim="form.CityName1" 
                            v-validate="{ required: true }"
                            :class="{ 'is-invalid': errors.has('CityName1') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('CityName1') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">ชื่อภาษาไทย</label>
                        <input type="text" name="CityName2"
                            v-model.trim="form.CityName2" 
                            v-validate="{ required: true }"
                            :class="{ 'is-invalid': errors.has('CityName2') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('CityName2') }}</p>
                    </div>

                    
                    <div class="form-group mt-4 mb-5">
                        <div class="row">
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-info btn-block">
                                    บันทึกข้อมูล
                                </button>
                            </div>
                            <div class="col-sm-6">
                                <router-link :to="{ name: 'equipment-list' }" class="btn btn-danger btn-block">
                                    ยกเลิก
                                </router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Axios from "axios";
export default {
  components: {
    Layout
  },
  data() {
    return {
      form: {
        CityName1: "",
        CityName2: ""
      }
    };
  },
  mounted() {
    this.initialUpdateItem();
  },
  watch: {
    "$route.query.RowKey"() {
      this.form = {
        CityName1: "",
        CityName2: ""
      };
      this.$validator.reset();
    }
  },
  methods: {
    // ส่งข้อมูลไปยัง Backend
    onSubmit() {
      this.$validator.validateAll().then(valid => {
        if (!valid) return;
        // ตรวจสอบว่าเป็น การแก้ไขหรือการเพิ่มใหม่
        const updateId = this.$router.currentRoute.query.RowKey;
        const request = (!updateId)
          ? Axios.post("/api/province", this.form) // สร้างใหม่
          : Axios.put(`/api/province/${updateId}`, this.form); // แก้ไข
        // ส่งข้อมูลไปหา Server
        request
          .then(res => this.$router.push({ name: "province-list" }))
          .catch(error => this.alertify.error(error.response.data.message));
      });
    },
    // นำข้อมูลจาก Server ไปใส่ใน Form เพื่อทำการ update ใหม่
    initialUpdateItem() {
      const id = this.$router.currentRoute.query.RowKey;
      // console.log('ID', id);
      if (!id) return;

      Axios.get(`/api/province/${id}`)
        .then(res => {
          console.log(res.data);
          const form = res.data;
          this.form.CityName1 = form.CityName1;
          this.form.CityName2 = form.CityName2;
        })
        .catch(() => this.$router.push({ name: "province-list" }));
    }
  }
};
</script>

<style scoped>
.btn-menu {
  color: #ffffff;
  background-color: #ced4da;
  margin-right: 7px;
  min-width: 130px;
}
.btn.router-link-exact-active {
  background-color: #D6DF23;
}
form {
  max-width: 350px;
  margin: auto;
}
form img {
  max-width: 350px;
  border: solid 1px #6c757d;
}
</style>

