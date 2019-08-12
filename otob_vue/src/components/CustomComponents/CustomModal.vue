<template> 
  <div id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header" style="padding: 1em 0">
                <slot name="top">
                  <img id="imgModal" src="@/assets/blibli.jpeg" class="modal-title">
                  <slot name="header">
                    default header
                  </slot>
                  <li class="fa fa-times" @click="$emit('close')"></li>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                default body
                </slot>
              </div> 

            </div>
        </div>
      </div>
    </transition>
  </div> 
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40%;
  margin: 0px auto;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  padding: 0;
  margin-top: 0;
  font-size: 16px;
  color: #42b983;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-body {
  padding: 0;
}

.modal-body input {
  height: 40px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 0.3em;
}
.modal-body label{
  color: #9c9e9f;
  margin: 0.5em 0 0.5em 0;
  font-size: 12px;
}

.modal-body .btn {
  margin-top: 1em;
}

.modal-body .reset-btn, .btn-secondary{
  background-color: #fff;
  color: #28a745;
  border: none;
  font-size: 12px;
  padding: 0;
}

li {
  cursor: pointer;
}

.span-class{
  font-size:12px;  
  color: #068aca; 
  cursor:pointer;
  font-weight: bold;
}
</style>

