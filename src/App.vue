<!-- =========================================================================================
  File Name: App.vue
  Description: Main vue file - APP
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="app" :class="vueAppClasses">
        <router-view @setAppClasses="setAppClasses"/>

    </div>
</template>

<script>
    import themeConfig from '@/../themeConfig.js'
    import jwt from '@/http/requests/auth/jwt/index.js'
    // import ApiService from './auth/apiService'

    import {APIClient} from '@/proto/api_grpc_web_pb';
    import {SendSMSRequest} from '@/proto/api_pb';


    export default {
        data() {
            return {
                vueAppClasses: [],
            }
        },
        watch: {
            '$store.state.theme'(val) {
                this.toggleClassInBody(val)
            },
            '$vs.rtl'(val) {
                document.documentElement.setAttribute('dir', val ? 'rtl' : 'ltr')
            }
        },
        methods: {
            toggleClassInBody(className) {
                if (className === 'dark') {
                    if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
                    document.body.classList.add('theme-dark')
                } else if (className === 'semi-dark') {
                    if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
                    document.body.classList.add('theme-semi-dark')
                } else {
                    if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
                    if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
                }
            },
            setAppClasses(classesStr) {
                this.vueAppClasses.push(classesStr)
            },
            handleWindowResize() {
                this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

                // Set --vh property
                document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
            },
            handleScroll() {
                this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
            },


        },
        mounted() {


            const client = new APIClient("http://c.apiapi.info", null, null);
            // const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {
            // });
            //
            // enableDevTools([
            //     client,
            // ]);'
            const phone = new SendSMSRequest()
            phone.setPhonenumber('989120388075')
            client.sendSMS(phone, {}, (err, response) => {
                if(err)
                    console.error(err)
                console.log((response))
            });

            // const req = new SendSMSRequest();
            // req.phoneNumber('09128332015');
            // console.log(SendSMSRequest);

            // client.sayHello(req, function(error, result) {
            //   if (error) console.log('Error: ', error);
            //   else console.log(result.toObject());
            // });


            this.toggleClassInBody(themeConfig.theme)
            this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

            const vh = window.innerHeight * 0.01
            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        },
        async created() {

            // jwt
            jwt.init()

            const dir = this.$vs.rtl ? 'rtl' : 'ltr'
            document.documentElement.setAttribute('dir', dir)

            window.addEventListener('resize', this.handleWindowResize)
            window.addEventListener('scroll', this.handleScroll)

            // Auth0
            try {
                await this.$auth.renewTokens()
            } catch (e) {
                console.error(e)
            }

        },
        destroyed() {
            window.removeEventListener('resize', this.handleWindowResize)
            window.removeEventListener('scroll', this.handleScroll)
        },

    }

</script>
