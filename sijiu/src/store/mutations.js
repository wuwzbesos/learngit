export default {
	//所有mutations中的方法的第一个参数一定是state变量，用来进行对state中的状态的操作
    //第二个参数是可选参数，用于调用该 mutations 方法的时候传参
    initBooks (state, {login}) {
      state.login = login
    },
    addNewBook (state, {login}) {
      state.login.unshift(login)
    }
}