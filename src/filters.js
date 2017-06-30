import moment from 'moment'

export default {
  date(value, format) {
    return moment(value).format(format)
  }
}
