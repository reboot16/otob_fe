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
      isCustomer: false,
      isGuest: true
    }
  },
  components: {
    TableAdmin,
    TableCustomer,
    TableGuest
  }
}