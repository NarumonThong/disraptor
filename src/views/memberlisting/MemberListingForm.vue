<template>
    <Layout>
        <div slot="buttons" class="form-group">
            <router-link class="btn btn-menu" :to="{ name:'memberlisting-list' }">รายการข้อมูล</router-link>
            <router-link class="btn btn-menu" :to="{ name:'memberlisting-form' }">เพิ่มข้อมูลใหม่</router-link>
        </div>
        <div class="card">
            <div class="card-body">
                <header>
                    <h6><i class="fa fa-edit"></i> เพิ่ม/แก้ไข ข้อมูลสมาชิก</h6>
                </header>
                <hr>
                
                <form @submit.prevent="onSubmit()">
                    <div class="form-group">
                        <label for="">Code</label>
                        <input type="text" name="Code"
                            v-model.trim="form.Code" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Code') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Code') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">คำนำหน้า</label>
                        <input type="text" name="Title"
                            v-model.trim="form.Title" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Title') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Title') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">เลขบัตรประชาชน</label>
                        <input type="text" name="TAXId"
                            v-model.trim="form.TAXId" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('TAXId') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('TAXId') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">สถานะ</label>
                        <input type="text" name="PersonStatus"
                            v-model.trim="form.PersonStatus" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('PersonStatus') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('PersonStatus') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">อาชีพ</label>
                        <input type="text" name="Career"
                            v-model.trim="form.Career" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Career') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Career') }}</p>
                    </div>

                  
                    <div class="form-group">
                        <label for="">ชื่อสมาชิก</label>
                        <input type="text" name="Name"
                            v-model.trim="form.Name" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Name') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Name') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">ที่อยู่</label>
                        <input type="text" name="Address"
                            v-model.trim="form.Address" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Address') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Address') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">เขต</label>
                        <input type="text" name="District"
                            v-model.trim="form.District" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('District') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('District') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">จังหวัด</label>
                        <input type="text" name="Province"
                            v-model.trim="form.Province" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Province') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Province') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">รหัสไปรษณีย์</label>
                        <input type="text" name="ZipCode"
                            v-model.trim="form.ZipCode" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('ZipCode') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('ZipCode') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">เบอร์โทรศัพท์</label>
                        <input type="text" name="Phone"
                            v-model.trim="form.Phone" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Phone') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Phone') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" name="Email"
                            v-model.trim="form.Email" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Email') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Email') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">วันเกิด</label>
                        <input type="text" name="Birthday"
                            v-model.trim="form.Birthday" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Birthday') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Birthday') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">ReferServiceCode</label>
                        <input type="text" name="ReferServiceCode"
                            v-model.trim="form.ReferServiceCode" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('ReferServiceCode') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('ReferServiceCode') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">AppToken</label>
                        <input type="text" name="AppToken"
                            v-model.trim="form.AppToken" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('AppToken') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('AppToken') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="text" name="Password"
                            v-model.trim="form.Password" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('Password') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('Password') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">MobileToken</label>
                        <input type="text" name="MobileToken"
                            v-model.trim="form.MobileToken" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('MobileToken') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('MobileToken') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">CreateDate</label>
                        <input type="text" name="CreateDate"
                            v-model.trim="form.CreateDate" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('CreateDate') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('CreateDate') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">LineId</label>
                        <input type="text" name="LineId"
                            v-model.trim="form.LineId" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('LineId') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('LineId') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">HubSpotId</label>
                        <input type="text" name="HubSpotId"
                            v-model.trim="form.HubSpotId" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('HubSpotId') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('HubSpotId') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="">AppTokenExpired</label>
                        <input type="text" name="AppTokenExpired"
                            v-model.trim="form.AppTokenExpired" 
                            v-validate="{ required: false }"
                            :class="{ 'is-invalid': errors.has('AppTokenExpired') }"
                            class="form-control">
                        <p class="invalid-feedback">{{ errors.first('AppTokenExpired') }}</p>
                    </div>

                    <div class="form-group mt-4 mb-5">
                        <div class="row">
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-info btn-block">
                                    บันทึกข้อมูล
                                </button>
                            </div>
                            <div class="col-sm-6">
                                <router-link :to="{ name: 'memberlisting-list' }" class="btn btn-danger btn-block">
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
        Code: "",
        Title: "",
        TAXId: "",
        PersonStatus: "",
        Career: "",
        Channel: "",
        Name: "",
        Address: "",
        District: "",
        ZipCode: "",
        Phone: "",
        FAX: "",
        Email: "",
        Website: "",
        IsVerified: "",
        Description: "",
        RowStatus: "",
        RegisterOwner: "",
        RegType: "",
        Segment: "",
        Age: "",
        Birthday: "",
        ReferServiceCode: "",
        AppToken: "",
        MobilePIN: "",
        Password: "",
        Platform: "",
        MobileToken: "",
        CreateDate: "",
        Source: "",
        LineId: "",
        FacebookId: "",
        AppleId: "",
        MicrosoftId: "",
        GoogleId: "",
        OpenId: "",
        AppTokenExpired: "",
        HubSpotId: "",
        AgreeEmail: "",
        AgreeImage: "",
        AgreePrivacy: "",
        AgreeTerm: ""
      }
    };
  },
  mounted() {
    this.initialUpdateItem();
  },
  watch: {
    "$route.query.id"() {
      this.form = {
        Code: "",
        Title: "",
        TAXId: "",
        PersonStatus: "",
        Career: "",
        Channel: "",
        Name: "",
        Address: "",
        District: "",
        ZipCode: "",
        Phone: "",
        FAX: "",
        Email: "",
        Website: "",
        IsVerified: "",
        Description: "",
        RowStatus: "",
        RegisterOwner: "",
        RegType: "",
        Segment: "",
        Age: "",
        Birthday: "",
        ReferServiceCode: "",
        AppToken: "",
        MobilePIN: "",
        Password: "",
        Platform: "",
        MobileToken: "",
        CreateDate: "",
        Source: "",
        LineId: "",
        FacebookId: "",
        AppleId: "",
        MicrosoftId: "",
        GoogleId: "",
        OpenId: "",
        AppTokenExpired: "",
        HubSpotId: "",
        AgreeEmail: "",
        AgreeImage: "",
        AgreePrivacy: "",
        AgreeTerm: ""
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
        const updateId = this.$router.currentRoute.query.id;
        const request = isNaN(updateId)
          ? Axios.post("/api/memberlisting", this.form) // สร้างใหม่
          : Axios.put(`/api/memberlisting/${updateId}`, this.form); // แก้ไข
        // ส่งข้อมูลไปหา Server
        request
          .then(res => this.$router.push({ name: "memberlisting-list" }))
          .catch(error => this.alertify.error(error.response.data.message));
      });
    },
    // นำข้อมูลจาก Server ไปใส่ใน Form เพื่อทำการ update ใหม่
    initialUpdateItem() {
      const id = this.$router.currentRoute.query.RowKey;
      // console.log('ID', id);
      if (!id) return;
      Axios.get(`/api/memberlisting/${id}`)
        .then(res => {
          // console.log('ข้อมูล',res.data);
          const form = res.data;
          this.form.Code = form.Code;
          this.form.Title = form.Title;
          this.form.TAXId = form.TAXId;
          this.form.PersonStatus = form.PersonStatus;
          this.form.Career = form.Career;
          this.form.Channel = form.Channel;
          this.form.Name = form.Name;
          this.form.Address = form.Address;
          this.form.District = form.District;
          this.form.Province = form.Province;
          this.form.ZipCode = form.ZipCode;
          this.form.Phone = form.Phone;
          this.form.FAX = form.FAX;
          this.form.Email = form.Email;
          this.form.Website = form.Website;
          this.form.IsVerified = form.IsVerified;
          this.form.Description = form.Description;
          this.form.RowStatus = form.RowStatus;
          this.form.RegisterOwner = form.RegisterOwner;
          this.form.RegType = form.RegType;
          this.form.Segment = form.Segment;
          this.form.Age = form.Age;
          this.form.Birthday = form.Birthday;
          this.form.ReferServiceCode = form.ReferServiceCode;
          this.form.AppToken = form.AppToken;
          this.form.MobilePIN = form.MobilePIN;
          this.form.Password = form.Password;
          this.form.Platform = form.Platform;
          this.form.MobileToken = form.MobileToken;
          this.form.CreateDate = form.CreateDate;
          this.form.Source = form.Source;
          this.form.LineId = form.LineId;
          this.form.FacebookId = form.FacebookId;
          this.form.AppleId = form.AppleId;
          this.form.MicrosoftId = form.MicrosoftId;
          this.form.GoogleId = form.GoogleId;
          this.form.OpenId = form.OpenId;
          this.form.AppTokenExpired = form.AppTokenExpired;
          this.form.HubSpotId = form.HubSpotId;
          this.form.AgreeEmail = form.AgreeEmail;
          this.form.AgreeImage = form.AgreeImage;
          this.form.AgreePrivacy = form.AgreePrivacy;
          this.form.AgreeTerm = form.AgreeTerm;

        })
        .catch(() => this.$router.push({ name: "memberlisting-list" }));
    }
  }
};
</script>

<style scoped>
.btn-menu {
  color: #000000;
  background-color: #ced4da;
  margin-right: 7px;
  min-width: 130px;
  font-size: 14px;
}
.btn.router-link-exact-active {
  background-color: #D6DF23;
}
form {
  max-width: 350px;
  margin: auto;
  font-size: 12px;
}
form img {
  max-width: 350px;
  border: solid 1px #6c757d;
}
.form-control{
  font-size: 14px;
}
button {
  font-size: 14px;
}
.btn{
  font-size: 14px;
}

</style>

