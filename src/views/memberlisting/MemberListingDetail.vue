<template>
    <div class="modal fade bd-example-modal-lg" id="memberlisting-dialog" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content"> 
                <div class="modal-header">
                    <h6 class="modal-title">
                        <i class="fa fa-info"></i> รายละเอียด
                    </h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body" v-if="memberlistingItem">

                   <div class="row black mt-4">
                     <div class="col-sm-3 form-group">RowKey :</div>
                     <div class="col-sm-9 form-group"> {{ memberlistingItem.RowKey }}</div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">ชื่อสมาชิก :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.Title }} {{ memberlistingItem.Name }}</div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">เบอร์โทรศัพท์ :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.Phone }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">Email :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.Email }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">เลขบัตรประชาชน :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.TAXId }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">สถานะ :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.PersonStatus }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">อาชีพ :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.Career }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">ที่อยู่ :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.Address }} {{ memberlistingItem.District }} {{ memberlistingItem.Province }} {{ memberlistingItem.ZipCode }}</div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">วันเกิด :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.Birthday }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">วันที่สมัคร :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.CreateDate }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">LineId :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.LineId }} </div>
                   </div>

                   <div class="row">
                     <div class="col-sm-3 form-group">HubSpotId :</div>
                     <div class="col-sm-9 form-group">{{ memberlistingItem.HubSpotId }} </div>
                   </div>



                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  props: {
    memberlisting: {
      required: true
    }
  },
  watch: {
    memberlisting(value) {
      if (!value) return;

      // ส่งข้อมูลไปค้นหารายละเอียด
      Axios.get(`/api/memberlisting/${value.RowKey}`)
        .then(response => {
          this.jquery("#memberlisting-dialog").modal();
          this.memberlistingItem = response.data;
        })
        .catch(err => {
          this.alertify.error(err.response.data.message);
        });
      // Axios.get(`/api/province/${value.RowKey}`)
      // .then(res => {this.provinces = res.data})
      // .catch(err => this.alertify.error(err.response.data.message));
    }
  },
  data() {
    return {
      memberlistingItem: null
    };
  },
  mounted() {
    // ตรวจจับ Event การปิดหน้า Modal dialog
    this.jquery("#memberlisting-dialog").on("hide.bs.modal", event => {
      this.$emit("onClose", event);
    });
  },
  methods: {
    // นำข้อมูลจาก Server ไปใส่ใน Form เพื่อทำการ update ใหม่
    initialLoadItem(value) {
      // this.jquery("#province-dialog").modal();
      // const id = this.$router.currentRoute.query.RowKey;
      console.log(value);
    }
  }

};
</script>

<style scoped>
.modal {
  color: #525b62;
  font-size: 14px;
}
.modal-body,
.modal-footer {
    padding-left: 8%;
    padding-right: 8%;
}
</style>

