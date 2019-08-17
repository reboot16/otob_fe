<template>
	<div>
		<table width="100%" class="table">
			<thead>
			<tr  style="display: flex">
				<td class="col-sm-2">Name</td>
				<td class="col-sm-4">Description</td>
				<td class="col-sm-2">List Price</td>
				<td class="col-sm-2">Offer Price</td>
				<td class="col-sm-1">Stock</td>
				<td class="col-sm-1">Action</td>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(product, index) in listProduct" :key="index" style="display: flex">
				<td class="col-sm-2">{{ product.name }}</td>
				<td class="col-sm-4">{{ product.description }}</td>
				<td class="col-sm-2"> {{ formatCurrency (product.listPrice) }}</td>
				<td class="col-sm-2"> {{ formatCurrency (product.offerPrice) }}</td>
				<td class="col-sm-1">{{ product.stock }}</td>
				<td class="col-sm-1">
					<b-dropdown variant="outline-primary" size="sm" right name="dropdown">
						<template slot="button-content"><li class="fa fa-edit"></li> </template>
						<b-dropdown-item @click="onShowModal(product, index)" name="edit"><li class="fa fa-edit"></li> Edit</b-dropdown-item>
						<b-dropdown-item v-on:click="onConfirmDelete(product, index)" name="delete"><li class="fa fa-trash"></li> Delete</b-dropdown-item>
					</b-dropdown>
				</td>
			</tr>
			</tbody>
		</table>

		<CustomAlert v-if="showModalAlert"
			 @close="showModalAlert=false"
			 @continue="continueDelete" />

		<CustomModal v-if="showModalUpd" @close="showModalUpd=false">
			<div slot="header">
				Ubah Product
			</div>

			<div slot="body">
				<b-form ref="form" @submit.prevent="onHandleSubmit" @reset="onReset">
					<div class="row grup-input">
						<label>Nama</label>
						<b-form-input type="text" v-model="form.name" placeholder="Masukkan nama produk" required/>
					</div>
					<div class="row grup-input">
						<label>Deskripsi</label>
						<b-form-textarea  v-model="form.description" placeholder="Masukkan deskripsi produk" required rows="3"/>
					</div>
					<div class="row grup-input">
						<label>Harga Awal</label>
						<b-form-input v-model="form.listPrice" placeholder="Harga awal" required type="number" min="0"/>
					</div>
					<div class="row grup-input">
						<label>Harga Akhir</label>
						<b-form-input v-model="form.offerPrice" placeholder="Harga akhir" required type="number" min="0"/>
					</div>
					<div class="row grup-input">
						<label>Stock</label>
						<b-form-input v-model="form.stock" placeholder="Stock" required type="number" min="0"/>
					</div>

					<div class="row grup-input">
						<b-button type="submit" variant="success" style="width:100%">
							Ubah Data Product
						</b-button>
					</div>

					<div style="text-align: right">
						<b-button class="reset-btn" type="reset"> Reset </b-button>
					</div>
				</b-form>
			</div>
		</CustomModal>

		<!-- =============== Form Modal to Add Product ================= -->
		<b-modal ref="modalProductForm" id="modalProductForm" hide-footer>
			<div slot="modal-title" >
				<img id="imgModal" src="@/assets/blibli.jpeg" class="modal-title">
				Tambah Data Baru
			</div>

			<div slot="default">
				<b-form ref="form" @submit.prevent="onHandleSubmit" style="text-align:left" >
					<b-row>
						<b-col sm="3"><label>Nama</label></b-col>
						<b-col sm="9">
							<b-form-input v-model="form.name" placeholder="Masukkan nama produk" required></b-form-input>
						</b-col>
					</b-row><br>
					<b-row>
						<b-col sm="3"><label >Deskripsi</label></b-col>
						<b-col sm="9">
							<b-form-textarea v-model="form.description" rows="3" placeholder="Deskripsi produk" required></b-form-textarea>
						</b-col>
					</b-row><br>
					<b-row>
						<b-col sm="3"><label >Harga Awal</label></b-col>
						<b-col sm="9">
							<b-form-input v-model="form.listPrice" placeholder="0" type="number" required></b-form-input>
						</b-col>
					</b-row><br>
					<b-row>
						<b-col sm="3"><label >Harga Akhir</label></b-col>
						<b-col sm="9">
							<b-form-input v-model="form.offerPrice" placeholder="0" type="number" required></b-form-input>
						</b-col>
					</b-row><br>
					<b-row>
						<b-col sm="3"><label >Stok</label></b-col>
						<b-col sm="9">
							<b-form-input v-model="form.stock" placeholder="0" type="number" required></b-form-input>
						</b-col>
					</b-row><br>
					<div id="r_button">
						<b-button type="submit" variant="success" style="width:100%">
							Ubah Data Product
						</b-button>
					</div>
				</b-form>
				<div style="text-align: right">
            <span @click="resetForm"
									style="font-size:14px; padding: 0.2em; color: #068aca; font-weight:bold; cursor:pointer;"> Reset
            </span>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script src="./ListTableProductAdmin.js"></script>
