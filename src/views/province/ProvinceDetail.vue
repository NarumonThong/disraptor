<template>
    <div class="modal fade bd-example-modal-lg" id="province-dialog" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content"> 
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fa fa-info"></i> รายละเอียด
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body" v-if="provinceItem">

                   <div class="row black mt-4">
                     <div class="col-sm-4 form-group">ชื่อห้อง</div>
                     <div class="col-sm-8 form-group">: {{ provinceItem.RowKey }}</div>
                   </div>

                   <div class="row">
                     <div class="col-sm-4 form-group">ขนาดความจุ</div>
                     <div class="col-sm-8 form-group">: {{ provinceItem.CityName1 }} คน</div>
                   </div>

                   <div class="row">
                     <div class="col-sm-4 form-group">การจอง</div>
                     <div class="col-sm-8 form-group">: มีการจอง {{ provinceItem.CityName2 }} การจอง</div>
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
    province: {
      required: true
    }
  },
  watch: {
    province(value) {
      if (!value) return;

      // ส่งข้อมูลไปค้นหารายละเอียด
      Axios.get(`/api/province/${value.RowKey}`)
        .then(response => {
          this.jquery("#province-dialog").modal();
          this.provinceItem = response.data;
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
      provinceItem: null
    };
  },
  mounted() {
    // ตรวจจับ Event การปิดหน้า Modal dialog
    this.jquery("#province-dialog").on("hide.bs.modal", event => {
      this.$emit("onClose", event);
    });
  },
  methods: {
    // นำข้อมูลจาก Server ไปใส่ใน Form เพื่อทำการ update ใหม่
    initialLoadItem(value) {
      // this.jquery("#province-dialog").modal();
      // const id = this.$router.currentRoute.query.RowKey;
      console.log(value);
      // if (!id) return;

      // Axios.get(`/api/province/${id}`).then(res => {

      //     console.log(res.data);
      // });

      // Axios.get(`/api/province/${id}`)
      //   .then(response => (this.provinces = response.data))
      //   .catch(err => this.alertify.error(err.response.data.message));
      // Axios.get(`/api/province/${id}`)
      //   .then(res => {
      //     console.log(res.data);
      //     // const form = res.data;
      //     // this.form.CityName1 = form.CityName1;
      //     // this.form.CityName2 = form.CityName2;
      //   })
      //   .catch();
    }
  }

};
</script>

<style scoped>
.modal {
  color: #525b62;
}
.modal-body,
.modal-footer {
    padding-left: 8%;
    padding-right: 8%;
}
</style>

