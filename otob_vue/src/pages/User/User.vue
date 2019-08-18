<template> 
  <div id="Cart">  
    <div class="container">
      <div class="block">
        <b-row>
          <div class="col-sm-6">
            <h3>Daftar Pengguna</h3>
          </div>
          <div class="col-sm-6" style="text-align:right">
             <b-button variant="blue" @click="showModalUser()"><b>&#xff0b;</b> User</b-button>
          </div>
        </b-row>

        <table width="100%" class="table table-hover table-striped table-scroll small-first-col">
          <thead>
            <tr style="display: flex">
              <th class="col-sm-1" style="text-align: center">#</th>
              <th class="col-sm-11">Email</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(user, index) in listUser" :key="index" style="display: flex">
              <td class="col-sm-1" align="center"><b>{{ index+1 }}</b></td>
              <td class="col-sm-11" v-text="user.email"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <CustomModal v-if="showModalForm" @close="showModalForm=false">
      <div slot="header">
        <h4>Register Pengguna Baru</h4>
      </div>

      <div slot="body">
        <b-form ref="form" @submit.prevent="onSubmit" @reset="onReset">
          <div class="row grup-input">
            <label>Email</label>
            <b-form-input v-model="form.email" placeholder="Masukkan email" required type="email"></b-form-input>
          </div>
          <div class="row grup-input">
            <label>Hak Akses Pengguna</label>
            <b-form-select v-model="form.role" :options="options" required  placeholder="Role pengguna"></b-form-select>
          </div>

          <div class="row grup-input">
            <b-button type="submit" variant="success" style="width:100%">
              Register
            </b-button>
          </div>

          <div style="text-align: right">
            <b-button class="reset-btn" type="reset"> Reset </b-button>
          </div>
        </b-form>
      </div>
    </CustomModal>
 
  </div> 
</template>

<style scoped>
h5 {
  text-align: center;
}
img{
  height:75px; 
  border-radius:50%; 
  border:1px solid #999999; 
  padding:0.1em;
}
tr td a{
  font-size: 14px;
  color:#0096D9;
}
.btn{
  font-size: 14px;
  margin-left:0;
}

</style>

<script src="./user.js"></script>