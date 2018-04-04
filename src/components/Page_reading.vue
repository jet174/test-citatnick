<template>
    <div>
        <div action="" class="form">
            <label for="fname" ></label>
            <input type="text" id="fname" v-model="forms.author" placeholder="Автор рецепта">

            <label for="fname" ></label>
            <input type="text" id="fname" v-model="forms.name"  placeholder="Названия рецепта">

            <label for="lname" ></label>
            <textarea type="text" id="lname" v-model="forms.description"  placeholder="Описания рецепта"></textarea>

            <label for="date"></label>
            <input type="date" id="date" placeholder="Дата" v-model="forms.date">
            <button @click="add_new()"> Изменить рецепт</button>
        </div>

    </div>


</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                forms:{name:"",description:"",date:"",author:""}
            }
        },
        created(){

          if(Object.keys(this.$route.params).length == 0){
              this.$router.push({ name: 'Page_1'});
              return
          }

          this.forms = this.$route.params;

        },
        methods: {
            add_new(){

                if(this.forms.name == "" || !this.forms.name){
                    alert("Заролните пожалуйста имя");
                    return;
                }

                if(this.forms.description == "" || !this.forms.description){
                    alert("Заролните пожалуйста описания");
                    return;
                }

                if(this.forms.author == "" || !this.forms.author){
                    alert("Заролните пожалуйста автора");
                    return;
                }

                if(this.forms.date == "" || !this.forms.date){
                    alert("Заролните пожалуйста дату");
                    return;
                }

                var save = JSON.parse(localStorage["save"]);


                var i = 0,
                    len = save.length;
                for(;len>i;i++){
                    if(save[i].id == this.forms.id){
                        save[i] = this.forms;
                        break;
                    }
                }

                localStorage["save"] = JSON.stringify(save);

                alert("Рецепт успешно изминен!");

                this.$router.push({ name: 'Page_1'});
            }
        }
    });
</script>

<style>



    .form {
        overflow: hidden;
        position: absolute;
        left:0;
        right:0;
        margin:auto;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: .5em 2em;
        height: 500px;
        width: 900px;
        box-shadow: 0 1em 3em rgba(0,0,0,.2);
        transition: transform .35s ease-in-out;
    }

    .form input {
        height: 44px;
        outline: none;
        border: none;
        border-bottom: 1px solid #f2f2f2;
        padding: 0 1em;
        font-size: 1em;
        transition: all .5s;
    }

    .form input:focus {
        border-bottom: 1px solid #0E4CEB;
    }

    .form label {
        color: #ccc;
    }

    #lname{
        resize:none;
        height:100px;
    }

    button {
        height: 40px;
    }



</style>