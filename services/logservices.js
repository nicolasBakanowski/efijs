angular.module('appmain')
.service('loginService', function(){
    let admin={user:"admin", pass:"pass123"};

    return {
        auth: function (user) {
            if (user.user == admin.user && user.pass == admin.pass){
                console.log('entro')
                return true
            }
            else{
                console.log("nmo");
                return false
            }
        }
    }
});