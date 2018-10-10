<template>
    <div>
        <div class="login_div my_line_box_stroke_re">
            <span class="my_line line-t"></span>
            <span class="my_line line-r"></span>
            <span class="my_line line-b"></span>
            <span class="my_line line-l"></span>

            <Card style="background:rgba(255, 255, 255, 0.5);border-radius: 0">
                <p slot="title">{{type === 'login' ? '登录' : '注册'}}</p>
                <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
                    <FormItem prop="user">
                        <Input type="text" v-model="formLogin.user" placeholder="用户名">
                            <Icon type="md-person" slot="prepend"/>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formLogin.password" placeholder="密码">
                            <Icon type="md-lock" slot="prepend"/>
                        </Input>
                    </FormItem>
                    <FormItem :prop="type === 'login' ? '' : 'password_confirm'" v-if="type === 'reg'">
                        <Input type="password" v-model="formLogin.password_confirm" placeholder="再次输入密码">
                            <Icon type="md-lock" slot="prepend"/>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formLogin')" long>登录</Button>
                    </FormItem>
                </Form>
            </Card>


        </div>
    </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String
      }
    },
    data() {
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formLogin.password) {
          callback(new Error('两次密码不一致'));
        } else {
          callback();
        }
      }

      return {
        formLogin: {
          user: '',
          password: '',
          password_confirm: '',
        },
        ruleLogin: {
          user: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码最少6位', trigger: 'blur'}
          ],
          password_confirm: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            this.$router.push('/')
          }
        })
      }
    },
    components: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .login_div
        transform translateY(-50%)
        width 300px
        position fixed
        right 150px
        top 50%
        padding 1px
        background rgba(255, 255, 255, 0)
        z-index 99
</style>
