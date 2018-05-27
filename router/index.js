import Vue from 'vue'
import Router from 'vue-router'
import start from '../components/start'
import know from '../components/know'
import face from '../components/face'
import shibie from '../components/shibie'
import success from '../components/success'
import successa from '../components/successa'
import facea from '../components/facea'
import err from '../components/err'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'start',
            component: start
        }, {
            path: '/know',
            name: 'know',
            component: know
        }, {
            path: '/face',
            name: 'face',
            component: face
        }, {
            path: '/shibie',
            name: 'shibie',
            component: shibie
        }, {
            path: '/success',
            name: 'success',
            component: success
        }, {
            path: '/facea',
            name: 'facea',
            component: facea
        }, {
            path: '/successa',
            name: 'successa',
            component: successa
        }, {
            path: '/err',

            component: err
        }
    ]
})
