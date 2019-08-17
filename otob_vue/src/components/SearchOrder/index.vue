<template>
	<div class="table">
		<div class="input-group row">

			<div class="col-sm-4">
				<input type="search" class="form-control" placeholder="Enter Your Order Id Here"
				   	v-model="searchText" @keyup.enter="doSearch">
			</div>

			<div class="col-sm-4">
				<b-form-select
						v-model="status"
						v-on:input="doFilter"
						class="select form-control"
						placeholder="Cari berdasarkan status">
					<option value="Waiting">Waiting</option>
					<option value="Accepted">Approved</option>
					<option value="Rejected">Rejected</option>
				</b-form-select>
			</div>


			<div class="col-sm-4">
				<b-form-input type="date" v-on:input="doFilter" v-model="date"></b-form-input>
			</div>

		</div>
	</div>
</template>

<script src="./SearchOrder.js"></script>

<style scoped>
	.input-group {
		margin-top: 10px;
	}
	.input-group-append button{
		margin-left:0;padding:0.25em
	}
	.select {
		max-height: 35px;
	}
	.table {
		margin: auto;
		margin-top: 10px;
		max-width: 100%;
	}
	.button-filter {
		border: 1px solid;
		background: #3093db;
		color: #fff;
		float: right;
		height: 35px;
		border-radius: 5px;
		width: 100%;
		font-size: 1rem;
	}
</style>