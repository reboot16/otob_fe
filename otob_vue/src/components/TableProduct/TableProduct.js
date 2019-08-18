import CustomModal from '@/components/CustomComponents/CustomModal.vue'
import TableAdmin from '@/components/ListTableProductAdmin'
import TableCustomer from '@/components/ListTableProductCustomer'
import TableGuest from '@/components/ListTableProductGuest'

export default {
  name: 'TableProduct',
  props: {
    listProduct: {},
    auth: {
      isLogin: false,
      isAdmin: false,
      isCustomer: false
    }
  },
  components: {
    CustomModal,
    TableAdmin,
    TableCustomer,
    TableGuest
  },
  mounted () {
    console.log(this.auth)
  }
}