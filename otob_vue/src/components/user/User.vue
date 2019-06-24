<template> 
  <div id="Cart">  
    <div class="container">  
      <b-row> 
        <div class="col-sm-6">
          <h3>List User</h3>
        </div>
        <div class="col-sm-6" style="text-align:right">
           <b-button variant="success" @click="showModal()"><b>&#xff0b;</b> User</b-button>
        </div>
      </b-row>
      <table class="table table-hover table-striped " >
        <thead>
        <tr style="color:white; background-color:#0096D9">
            <th width="50">#</th>
            <th>Email</th>
            <th>Role</th>
            <th width="100">Action</th>
        </tr>
        </thead>
        <tbody style="background-color:white">
        <tr v-for="(user, index) in listUser" :key="index" >
            <td align="center"><b>{{ index+1 }}</b></td>
            <td v-text="user.email"></td>
            <td v-text="user.role"></td>
            <td>
              <b-link @click="onDelete(user, index)">Delete</b-link>
            </td>
        </tr>
        </tbody>
      </table> 
    </div> 

    <b-modal ref="modal-add" hide-footer v-if="showModalForm">
      <template slot="modal-title">
        <div style="text-align:center;margin-left:130px">
          <img src="@/assets/blibli.jpeg"><br>
          Tambah Pengguna Baru
        </div>
      </template> 
      <div class="d-block text-center">
        <b-form @submit="onSubmit" id="form_product" style="text-align:left" >  
          <b-row style="padding:0 1em 0 1em"> 
            <b-form-input v-model="form.email" placeholder="Masukkan email" required type="email"></b-form-input>
          </b-row><br> 
          <b-row style="padding:0 1em 0 1em"> 
            <b-form-select v-model="form.role" :options="options" required></b-form-select>
          </b-row><br> 
          <div id="r_button">  
            <b-button type="submit" variant="success" style="width:100%">
              Tambahkan
            </b-button> 
          </div>
        </b-form>
      </div> 
    </b-modal>
 
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