<template>
	<div class="table">
		<div class="input-group row" v-if="userType === 'customer'">
			<div class="col-sm-12">
				<input type="search" class="form-control" placeholder="Enter Your Order Id Here"
							 v-model="searchText" @keyup.enter="doSearch">
			</div>
		</div>

		<div class="input-group row" v-if="userType === 'admin'">
			<div class="input-group col-sm-5" style="margin-top: 0px">
				<select
					v-model="status"
					ref="select"
					class="select form-control">
					<option value="" disabled>Pilih Status</option>
					<option value="Waiting">Waiting</option>
					<option value="Accepted">Approved</option>
					<option value="Rejected">Rejected</option>
				</select>
				<div class="input-group-append" v-if="status !== ''">
					<button class="button-reset" v-on:click="doReset">x</button>
				</div>
			</div>
			<div class="col-sm-5">
				<b-form-input type="date" v-model="date"></b-form-input>
			</div>

			<div class="col-sm-2">
				<button class="button-filter" v-on:click="doFilter">Filter</button>
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
		margin-left:0;
		padding:0.25em;
		max-height: 35px;
	}
	.select {
		max-height: 35px;
	}
	.table {
		margin-top: 10px;
	}
	.button-filter {
		border: 1px solid;
		background: #9bb09b;
		color: #fff;
		float: right;
		height: 35px;
		border-radius: 5px;
		width: 100%;
		font-size: 1rem;
	}
	.button-reset {
		border: 1px solid;
		background: gray;
		color: #fff;
		height: 35px;
		width: 100%;
		font-size: 1rem;
	}
	.button-filter:hover {
		background: #a4bfa4;
	}
</style>
